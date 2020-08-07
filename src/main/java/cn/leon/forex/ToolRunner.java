package cn.leon.forex;

import us.codecraft.webmagic.Spider;
import us.codecraft.webmagic.pipeline.FilePipeline;

public class ToolRunner {
	public static void main(String[] args) {
		Spider.create(new MyPageProcessor())
			  .addUrl("http://forex.eastmoney.com")
			  .addPipeline(new FilePipeline("./data_debug"))
			  .addPipeline(new MyPipeline())
			  .thread(1)
			  .run();
			  

	}

}
