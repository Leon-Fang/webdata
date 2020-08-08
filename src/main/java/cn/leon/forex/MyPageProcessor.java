package cn.leon.forex;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;


import us.codecraft.webmagic.Page;
import us.codecraft.webmagic.Site;
import us.codecraft.webmagic.processor.PageProcessor;

public class MyPageProcessor implements PageProcessor{

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
		List<String> datalinks;
	    if(page.getUrl().toString().equalsIgnoreCase("http://forex.eastmoney.com")) {
			//get 新闻链接, 全球汇率 全球经济日历 主要国家利率 全球经济数据
			news_link = page.getHtml().xpath("//*[@id='newsDD1']/div[2]/a").links().get();
			datalinks = page.getHtml().xpath("//*[@id=\"newsDD1\"]/div[1]/div[1]/ul/li[2]").links().all();
			page.putField("news_link", news_link);
			page.putField("datalinks", datalinks);
			page.addTargetRequest(news_link);
		}else if(page.getUrl().toString().contains("/a/")) {
			PasrseNewsPage(page);			
		}
		//parse 各网页内容 新闻链接, 全球汇率 全球经济日历 主要国家利率 全球经济数据
		//PasrseNewsPage(news_link,page);
//		page.addTargetRequests(news_link);
		/*
		 * check if the page is news list page.
		 * 
		 */
		
		
		
	}
	
	private void PasrseNewsPage(Page page) {		
	    if(page.getUrl().toString().contains("/a/cwhdd")){
			List<String> DetailNew_links = page.getHtml().xpath("//*[@id='newsListContent']").links().all();
			List<String> PageIndex_links = page.getHtml().xpath("//*[@id='pagerNoDiv']/a").links().all();  
			
			List<String> DetailNewlinks = checkIfDoneThisPage(DetailNew_links);
			
			if(DetailNewlinks.size()>0) {				
			    page.addTargetRequests(DetailNewlinks);
				page.putField("DetailNews_link", DetailNewlinks);
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
		for(String string : detailNew_links) {
			if(rs.contains(string)) {
				System.out.println("this page already done before: "+string);
			}else {
			 result.add(string);
			}			
		}
		return result;	
	}

	private List<String> getLinkFromDB(){
		String selectString = "select link from Links order by UpdateTime desc LIMIT 40";
		String linkString;
		ResultSet rs = getDataFromDB(selectString);
		List<String> resultList = new ArrayList<String>();
		try {
			while (rs.next()) {
				linkString=rs.getString("link");
			    resultList.add(linkString);
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return resultList;
	}

	private ResultSet getDataFromDB(String selectString) {
		Connection connection;
		Statement stmt;
		ResultSet rs;
		try { 
			Class.forName("org.sqlite.JDBC");   // ---...JDBC upper case!!!
			System.out.println("loaded class");
			connection = DriverManager.getConnection("jdbc:sqlite:FXdata.db");
			System.out.println("get connection");
			stmt = connection.createStatement();
			System.out.println("start exectuing sql");
			rs = stmt.executeQuery(selectString);
			System.out.println(" sql end!");
			stmt.close();
			connection.close();
			return rs;
		} catch (Exception e) {
			System.err.println( e.getClass().getName() + ": " + e.getMessage() );
		    System.exit(0);
		    return null;
	   }		
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
