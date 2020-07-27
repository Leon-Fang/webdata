package cn.leon.datap;

import us.codecraft.webmagic.Spider;

public class DemoRunner {
	public static void main(String[] args) {
		Spider.create(new MyPageProcessor())
		      .addUrl("https://baidu.com")
		      //.addPipeline(new ConsolePipeline())
		      .thread(5)
		      .run();

	}


}
