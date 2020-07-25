package com.leon.ai.webdata;

import us.codecraft.webmagic.Spider;
import us.codecraft.webmagic.pipeline.ConsolePipeline;

public class WebmagicDemo {

	public static void main(String[] args) {
		Spider.create(new MyPageProcessor())
		      .addUrl("https://baidu.com")
		      //.addPipeline(new ConsolePipeline())
		      .thread(5)
		      .run();

	}

}
