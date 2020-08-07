package cn.leon.forex;

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
			page.addTargetRequests(DetailNew_links);
			page.putField("DetailNews_link: ", DetailNew_links);
			page.putField("PageIndex_links", PageIndex_links);	
			if(!PageIndex_links.isEmpty()) {
				page.addTargetRequests(PageIndex_links);
			}
			page.addTargetRequests(DetailNew_links);
	    }else if(page.getUrl().toString().contains("/a/2")) {
			parseDetailNews(page);	
		} 	
	}

	private void parseDetailNews(Page page) {
		page.putField("article title: ", page.getHtml().xpath("/html/body/div[1]/div/div[3]/div[1]/div[2]/div[1]/h1/text()").get());
		page.putField("article time: ", page.getHtml().xpath("/html/body/div[1]/div/div[3]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/text()").get());
		page.putField("article contetn: ", page.getHtml().xpath("//*[@id=\"ContentBody\"]/p/allText()").all());
	}

	@Override
	public Site getSite() {
		
		return site;
	}
}
