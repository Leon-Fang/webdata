package cn.leon.jobs;

import us.codecraft.webmagic.Spider;
import us.codecraft.webmagic.downloader.HttpClientDownloader;
import us.codecraft.webmagic.pipeline.FilePipeline;
import us.codecraft.webmagic.proxy.Proxy;
import us.codecraft.webmagic.proxy.SimpleProxyProvider;

public class ToolRunner {
	public static void main(String[] args) {
//		HttpClientDownloader httpClientDownloader = new HttpClientDownloader();
//		httpClientDownloader.setProxyProvider(SimpleProxyProvider.from(new Proxy("139.199.201.249", 1080)));
		Spider.create(new MyPageProcessor())
			  .addUrl("https://search.51job.com/list/000000,000000,0000,00,9,99,%25E8%25BD%25AF%25E4%25BB%25B6%25E6%25B5%258B%25E8%25AF%2595,2,1.html?lang=c")
//			  .setDownloader(httpClientDownloader)
			  .addPipeline(new FilePipeline("./data"))
//			  .addPipeline(new MyPipeline())
			  .thread(1)
			  .run();
			  

	}

}
