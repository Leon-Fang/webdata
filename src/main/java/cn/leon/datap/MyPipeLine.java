package cn.leon.datap;

import us.codecraft.webmagic.ResultItems;
import us.codecraft.webmagic.Task;
import us.codecraft.webmagic.pipeline.Pipeline;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.Statement;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;


public class MyPipeLine implements Pipeline{

	private String sqlString = "INSERT INTO SevenDaysWeather (Id_P,dateT,weather,MaxTem,MinTem,Wind,WindLevel) VALUES ";
	@Override
	public void process(ResultItems resultItems, Task task) {
		System.out.println("get page: " + resultItems.getRequest().getUrl());
		int Id_P = getIdP(resultItems.getRequest().getUrl()) ;
		System.out.println("Id_P " + Id_P);
		List<String> li6 = resultItems.get("title");
		System.out.println("li6 " + li6);
		List<String> li1 = resultItems.get("weather");
		System.out.println("li1 " + li1);
		List<String> li2 = resultItems.get("Maxtem");
		System.out.println("li2 " + li2);
		List<String> li3 = resultItems.get("Mintem");
		System.out.println("li3 " + li3);
		System.out.println("li4 before" + resultItems.get("wind"));
		List<String> li4 = getwinds(resultItems.get("wind"));		
		System.out.println("li4 " + li4);
		List<String> li5 = resultItems.get("windlevel");
		System.out.println("li5 " + li5);
		//String UpdateTime = (new SimpleDateFormat("dd-MM-yyyy HH:mm:ss")).format(new Date());
		
		for(int i =0; i<li1.size() ;i++) {
			sqlString = sqlString + " ("
								  + Id_P + ", \""
								  + li6.get(i) + "\" ,\""
								  + li1.get(i) + "\" ,\""
								  + li2.get(i) + "\" ,\""
								  + li3.get(i) + "\" ,\""
								  + li4.get(i) + "\" ,\""
								  + li5.get(i) + "\""
								  + ") " + ",";
		}
		sqlString = sqlString.substring(0, sqlString.length()-1)+";";
		System.out.println("sql : " + sqlString);
		
		saveToDb(sqlString);	
		sqlString = "INSERT INTO SevenDaysWeather (Id_P,dateT,weather,MaxTem,MinTem,Wind,WindLevel) VALUES ";
	}	
	
	private List<String> getwinds(List<String> lists) {
		List<String> resultList = new ArrayList<String>();
		for(int i = 0; i < lists.size(); i+=2) {			
			resultList.add(lists.get(i)+" 转 "+lists.get(i+1));
		}
		return resultList;
	}

	private int getIdP(String url) {
		int idp = 0;
		if(url.contains("/101220601.shtml")) {
			idp = 1; //yicheng
		}else if(url.contains("/101010100.shtml")) {
			idp = 2; //beijing
		}else if(url.contains("/101020100.shtml")) {
			idp = 3; // shanghai 
		}else if(url.contains("101210101.shtml")) {
			idp = 4;  //hangzhou
		}else if(url.contains("/101280101.shtml")) {
			idp = 5;  //guanzhou
		}else if(url.contains("/101200101.shtml")) {
			idp = 6;  //wuhan
		}else if(url.contains("/101190101.shtml")) {
			idp = 7;  //nanjing
		}else if(url.contains("/101280601.shtml")) {
			idp = 8;  //shenzhen
		}else if(url.contains("/101190401.shtml")) {
			idp = 9;  //suzhou
		}else if(url.contains("/101230201.shtml")) {
			idp = 10;  //xiamen
		}else if(url.contains("/101220101.shtml")) {
			idp = 11;  //hefei
		}
		return idp;
	}

	private void saveToDb(String sql) {
		Connection connection;
		Statement stmt;
		try { 
			Class.forName("org.sqlite.JDBC");   // ---...JDBC upper case!!!
			System.out.println("loaded class");
			connection = DriverManager.getConnection("jdbc:sqlite:data.db");
			System.out.println("get connection");
			stmt = connection.createStatement();
			System.out.println("start exectuing sql");
			stmt.executeUpdate(sql);
			System.out.println(" sql end!");
			stmt.close();
			connection.close();
			
		} catch (Exception e) {
			System.err.println( e.getClass().getName() + ": " + e.getMessage() );
		    System.exit(0);
	}
	}

}
