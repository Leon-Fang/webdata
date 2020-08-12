package cn.leon.forex;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;

import us.codecraft.webmagic.Page;
import us.codecraft.webmagic.Site;
import us.codecraft.webmagic.processor.PageProcessor;

public class MyPageProcessor implements PageProcessor{

	Logger logger = LogManager.getLogger("MyPageProcessor");
	Site site = new Site().setCharset("utf-8")
				          .setSleepTime(2)
				          .setTimeOut(10000)
				          .setRetrySleepTime(3)
				          .setRetryTimes(3);
			    
	
	@Override
	public void process(Page page) {
		String news_link = "http://forex.eastmoney.com/a/cwhdd.html";
		String globalForex_link = "http://quote.eastmoney.com/center/whsc.html";
		String globalEcoCalendar_link = "http://forex.eastmoney.com/FC.html";
		String mainCountryRate_link = "http://data.eastmoney.com/cjsj/globalRate.html";
		String globalEcoData_link = "http://data.eastmoney.com/cjsj/foreign_0_2.html";
/*		
		List<String> currencyList = new ArrayList<String>();
		String GSPUSD = "http://quote.eastmoney.com/forex/GBPUSD.html";
		String EURUSD = "http://quote.eastmoney.com/forex/EURUSD.html";
		String USDJPY = "http://quote.eastmoney.com/forex/USDJPY.html";
		currencyList.add(GSPUSD);
		currencyList.add(EURUSD);
		currencyList.add(USDJPY);
*/
		
		List<String> datalinks;
	    if(page.getUrl().toString().equalsIgnoreCase("http://forex.eastmoney.com")) {
			//add forex news links.
			news_link = page.getHtml().xpath("//*[@id='newsDD1']/div[2]/a").links().get();
			page.putField("news_link", news_link);
			page.addTargetRequest(news_link);
			
			// add forex data links.   -- all image can't parse.
			//page.addTargetRequests(currencyList);
			
			//add eco calendar.
			page.addTargetRequest(globalEcoCalendar_link);
/*		}else if(page.getUrl().toString().contains("/a/")) {
			System.out.println("start to get news~!!!");
			PasrseNewsPage(page);			
		}else if (currencyList.contains(page.getUrl().toString())) {
			logger.info("start to get global forex data");
			parseForexData(page);    */
		}else if (page.getUrl().toString().contains("/FC.html")) {
			logger.info("start to get important data canlendar");
			parseEcoCalendar(page);
		}
		
		
		
	}
	
	private void parseEcoCalendar(Page page) {
//		List<String> title = page.getHtml().xpath("/html/body/div[1]/div[2]/div/div[4]/table/thead/tr/th/text()").all();
		page.putField("calendarData", page.getHtml().xpath("//*[@id='tbody']/tr/td/text()").all());
		
	}

	private void parseForexData(Page page) {
		
		
	}

	private void PasrseNewsPage(Page page) {		
	    if(page.getUrl().toString().contains("/a/cwhdd")){
			List<String> DetailNew_links = page.getHtml().xpath("//*[@id='newsListContent']").links().all();
			List<String> PageIndex_links = page.getHtml().xpath("//*[@id='pagerNoDiv']/a").links().all();  
			
			List<String> ModifiedNewlinks = checkIfDoneThisPage(DetailNew_links);
			System.out.println("DetailNew_links"+DetailNew_links);
			System.out.println("ModifiedNewlinks:"+ModifiedNewlinks);
			if(ModifiedNewlinks.size()>0) {				
			    page.addTargetRequests(ModifiedNewlinks);
				page.putField("DetailNews_link", ModifiedNewlinks);
				page.putField("PageIndex_links", PageIndex_links);
			    if(!PageIndex_links.isEmpty()) {
					page.addTargetRequests(PageIndex_links);
				}
			}
	    }else if(page.getUrl().toString().contains("/a/2")) {
			parseDetailNews(page);	
		} 	
	}

	private List<String> checkIfDoneThisPage(List<String> detailNew_links){
		List<String> result = new ArrayList<String>();
		List<String> rs = getLinkFromDB();
		System.out.println("get from db links:"+rs);
		for(String string : detailNew_links) {
			if(rs.contains(string)) {
				System.out.println("this page already done before: "+string);
			}else {
			 result.add(string);
			}			
		}
		return result;	
	}

	private List<String> getLinkFromDB() {
//		String selectString = "select DISTINCT link from Links order by UpdateTime LIMIT 40";
		String selectString = "select DISTINCT link from Links";
		Connection connection = null;
		Statement stmt = null;
		ResultSet rs;
		String linkString;
		List<String> resultList = new ArrayList<String>();
		System.out.println("sql is: "+selectString);
		try { 
			Class.forName("org.sqlite.JDBC");   // ---...JDBC upper case!!!
			System.out.println("loaded class");
			connection = DriverManager.getConnection("jdbc:sqlite:FXdata.db");
			System.out.println("get connection");
			stmt = connection.createStatement();
			System.out.println("start exectuing sql");
			rs = stmt.executeQuery(selectString);
			System.out.println(" sql end!");			
			while (rs.next()) {
				linkString=rs.getString("link");
				resultList.add(linkString);
			}
		} catch (Exception e) {
			System.err.println( e.getClass().getName() + ": " + e.getMessage() );
		    System.exit(0);
	   }finally {
		   try {
			   stmt.close();
				connection.close();
		   } catch (Exception e2) {
			System.out.println("db failed!!!");
		  }
	   }	
	 return	resultList;
	}

	private void parseDetailNews(Page page) {
		page.putField("article_title", page.getHtml().xpath("/html/body/div[1]/div/div[3]/div[1]/div[2]/div[1]/h1/text()").get());
		page.putField("article_time", page.getHtml().xpath("/html/body/div[1]/div/div[3]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/text()").get());
		page.putField("article_content", page.getHtml().xpath("//*[@id=\"ContentBody\"]/p/allText()").all());
	}

	@Override
	public Site getSite() {
		
		return site;
	}
}