package cn.leon.jobs;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import us.codecraft.webmagic.ResultItems;
import us.codecraft.webmagic.Task;
import us.codecraft.webmagic.pipeline.Pipeline;


public class MyPipeline implements Pipeline{
	static int timeString = 0;

	@Override
	public void process(ResultItems resultItems, Task task) {
		String content = resultItems.get("Contents").toString();
		String filename = resultItems.get("Title");
		System.out.println("Title: "+ filename);
//		System.out.println("content: "+content);
		if (content != null) {	
			String pathString = "./Blogs_Contents/formatFiles/"+filename+".html";
//			System.out.println("pathString: "+pathString);
			File file = new File(pathString);		
			if (!file.exists()) {	
				File dir = new File(file.getParent());
				dir.mkdirs();
				try {
					file.createNewFile();
				} catch (IOException e) {
					e.printStackTrace();
				}
			}
			FileWriter fileWriter = null;		
			try {
				fileWriter = new FileWriter(pathString);
				fileWriter.write(content);	
			} catch (IOException e) {			
				e.printStackTrace();
			}finally {
				try {
					fileWriter.flush();
					fileWriter.close();
				} catch (IOException e) {
					e.printStackTrace();
				}
			}
			timeString++;
		}		
	}	
}