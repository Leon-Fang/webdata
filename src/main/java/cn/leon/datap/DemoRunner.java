package cn.leon.datap;

import us.codecraft.webmagic.Spider;
import us.codecraft.webmagic.pipeline.FilePipeline;

public class DemoRunner {
	public static void main(String[] args) {
		Spider.create(new MyPageProcessor())			  
			  .addUrl("http://www.weather.com.cn/weather/101220601.shtml")  // anqing weather.
		      .addPipeline(new FilePipeline("./data/shanghai"))
		      .thread(1)
		      .run();

	}


}
