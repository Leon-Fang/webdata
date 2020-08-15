package cn.leon.datap;

import java.util.ArrayList;
import java.util.List;

import us.codecraft.webmagic.Page;
import us.codecraft.webmagic.Site;
import us.codecraft.webmagic.processor.PageProcessor;

public class MyPageProcessor implements PageProcessor{

	private Site site = new Site()
			.setCharset("utf-8")
			.setSleepTime(1)
			.setTimeOut(10000)         
            .setRetrySleepTime(3)      
            .setRetryTimes(3);  
	
	@Override
	public void process(Page page) {
		/*
		 * below are 7 days data.
		 */	
		page.putField("cities", page.getHtml().xpath("/html/body/div[3]/div/div[2]/div[4]/div[2]/dl[1]/dd/a/text()").all());
		
		List<String> linksList  = page.getHtml().xpath("/html/body/div[3]/div/div[2]/div[4]/div[2]/dl[1]/dd/a").links().all();
		
		page.addTargetRequests(getlinks(linksList));		
		
		page.putField("title", page.getHtml().xpath("//*[@id='7d']/ul/li/h1/text()").all());
		
		page.putField("weather", page.getHtml().xpath("//*[@id='7d']/ul/li/p[@class='wea']/text()").all());
		
		page.putField("Maxtem", page.getHtml().xpath("//*[@id='7d']/ul/li/p[@class='tem']/span/text()").all());
		
		page.putField("Mintem", page.getHtml().xpath("//*[@id='7d']/ul/li/p[@class='tem']/i/text()").all());
		
		page.putField("wind", page.getHtml().xpath("//*[@id=\"7d\"]/ul/li/p[3]/em").$("span", "title").all());
		
		page.putField("windlevel", page.getHtml().xpath("//*[@id=\"7d\"]/ul/li/p[3]/i/text()").all());
		
		
	}

	
	private List<String> getlinks(List<String> linksList) {
		List<String> linkStrings = new ArrayList<String>();
		for(String link : linksList) {
			linkStrings.add(link.replace("weather1d", "weather"));
		}
		return linkStrings;
	}

	@Override
	public Site getSite() {
		return this.site;
	}

}
