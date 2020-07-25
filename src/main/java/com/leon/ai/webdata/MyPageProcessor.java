package com.leon.ai.webdata;

import us.codecraft.webmagic.Page;
import us.codecraft.webmagic.Site;
import us.codecraft.webmagic.processor.PageProcessor;

public class MyPageProcessor implements PageProcessor{

	private Site site = new Site()
			.setCharset("uft-8")
			.setSleepTime(1)
			.setTimeOut(10)         
            .setRetrySleepTime(3)      
            .setRetryTimes(3);  
	
	@Override
	public void process(Page page) {
		// TODO Auto-generated method stub
		page.putField("title", page.getHtml().links().all());
	
	}

	@Override
	public Site getSite() {
		// TODO Auto-generated method stub
		return this.site;
	}

}
