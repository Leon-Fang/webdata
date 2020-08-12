package cn.leon.forex;

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
			  .addUrl("http://forex.eastmoney.com")
//			  .setDownloader(httpClientDownloader)
			  .addPipeline(new FilePipeline("./data_debug"))
			  .addPipeline(new MyPipeline())
			  .thread(1)
			  .run();
			  

	}

}
