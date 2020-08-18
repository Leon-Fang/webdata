package cn.leon.jobs;

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
		page.addTargetRequests(page.getHtml().xpath("//*[@id='sidebar']").links().all());
		parseWebPage(page);
	}
	
    public void parseWebPage(Page page){
    	page.putField("Title", page.getHtml().xpath("/html/body/div[3]/div/div[2]/h1/text()").get());
		page.putField("Contents", page.getHtml().xpath("/html/body/div[3]/div/div[2]").all());
	} 
    
	@Override
	public Site getSite() {		
		return site;
	}
}