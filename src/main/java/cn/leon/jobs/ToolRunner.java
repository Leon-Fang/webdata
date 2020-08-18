package cn.leon.jobs;

import us.codecraft.webmagic.Spider;
import us.codecraft.webmagic.downloader.HttpClientDownloader;
import us.codecraft.webmagic.pipeline.FilePipeline;
import us.codecraft.webmagic.proxy.Proxy;
import us.codecraft.webmagic.proxy.SimpleProxyProvider;

public class ToolRunner {
	public static void main(String[] args) {
		Spider.create(new MyPageProcessor())
			  .addUrl("https://www.liujiangblog.com/course/django")
//			  .addPipeline(new FilePipeline("./Blogs_Contents"))
			  .addPipeline(new MyPipeline())
			  .thread(1)
			  .run();
			  

	}

}
