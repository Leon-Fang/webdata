package cn.leon.jobs;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import us.codecraft.webmagic.Page;
import us.codecraft.webmagic.ResultItems;
import us.codecraft.webmagic.Task;
import us.codecraft.webmagic.pipeline.Pipeline;


public class MyPipeline implements Pipeline{
	private String NewsSqlString = "INSERT INTO fxNews (articleTitle,articletime,articlecontent) VALUES ";

	@Override
	public void process(ResultItems resultItems, Task task) {
		System.out.println("current page is: " + resultItems.getRequest().getUrl());
		saveAllLinks(resultItems);
		saveFXNews2db(resultItems);
		saveglobalEcoCalendar2db(resultItems);
	}	
	
	private void saveAllLinks(ResultItems resultItems) {
		List<String> linksList = resultItems.get("DetailNews_link");
		if(!(linksList==null)) {
			List<String> linksindb = getLinkFromDB();  /////--
			System.out.println("linksList from page are:"+linksList);
			System.out.println("End to get links from Links and linksindb are: "+linksindb);  //----
			List<String> linksNotindb = LinksNotExistInDb(linksList,linksindb); //--
			System.out.println("linksNotindb"+linksNotindb);
			String LinksSqlString = "INSERT INTO Links (link) VALUES ";
			for(String string : linksNotindb ) {
				LinksSqlString = LinksSqlString + "(\""
									 + string + "\"),";							 	
			}
			LinksSqlString = LinksSqlString.substring(0, LinksSqlString.length()-1)+";";
			saveToDb(LinksSqlString);				
		}
		
	}

	private List<String> LinksNotExistInDb(List<String> linksList, List<String> linksindb) {
		List<String> result = new ArrayList<String>();
		for(String s:linksList) {
			if(!linksindb.contains(s)) {
				result.add(s);
			}
		}
		return result;
	}
	
	private void saveglobalEcoCalendar2db(ResultItems resultItems){		
		System.out.println("get page: " + resultItems.getRequest().getUrl());
		if(!(resultItems.get("calendarData")==null)) {
			String sqlgetDBdat = "select * from ecocalendar order by num LIMIT 200";
			List<String> wantedStrings = new ArrayList<String>();
			wantedStrings.add("publishDate");
			wantedStrings.add("Event");
			wantedStrings.add("Country");
			List<String> resultSet =  getDataFromDB2(sqlgetDBdat,wantedStrings);
			System.out.println("list get from db: " + resultSet);
			List<String> dataList = resultItems.get("calendarData");			
			List<String> dataList2 = new ArrayList<String>();
			int counter = 0;
			String sqlvalues="";
			String sql = "";
			String sqlo = "INSERT INTO ecocalendar (Id,publishDate,publishTime,Country,Event,ReportPeriod,PublishData,PredictedData,PreValue,importance,tendency) VALUES ";			
			for(int i = 0; i<dataList.size(); i++) {
				if(counter<11) {
					dataList2.add(dataList.get(i));
				}else {
					counter = 0;
					for(int j=0; j<dataList2.size();j++) {
					   sqlvalues += "\""+dataList2.get(j)+"\",";
					}
					sqlvalues = sqlvalues.substring(0, sqlvalues.length()-1);
					sql = sqlo+"("+sqlvalues+")";
					if(!AlreadyInDb(dataList2,resultSet)) {
						saveToDb(sql);						
					}
					dataList2.clear();
					sqlvalues="";
					sql="";
					dataList2.add(dataList.get(i));
				}				
				counter++;
			}
		}
	}


	private boolean AlreadyInDb(List<String> dataList2, List<String> dataFromDB) {
		boolean result = false;
		for (String s :dataList2 ) {
			if(dataFromDB.contains(s) & dataFromDB.contains(s) & dataFromDB.contains(s)) {
				result = true;
				break;
			}
		}
		return result;
	}

	private void saveFXNews2db(ResultItems resultItems) {
		System.out.println("get page: " + resultItems.getRequest().getUrl());
		if(!(resultItems.get("article_title")==null)) {
		
			String li0 = resultItems.get("article_title").toString();
			System.out.println("li0 " + li0);
			String li1 = resultItems.get("article_time").toString();
			System.out.println("li1 " + li1);
			String li2 = resultItems.get("article_content").toString();
			System.out.println("li2 " + li2);
			NewsSqlString =String.format("INSERT INTO fxNews (articleTitle,articletime,articlecontent) VALUES (\"%s\",\"%s\",\"%s\")",li0,li1,li2);
			saveToDb(NewsSqlString);	
			}
 //           sqlString = sqlString.substring(0, sqlString.length()-1)+";";
			System.out.println("sql : " + NewsSqlString);		
	}

	private void saveToDb(String sql) {
		System.out.println("sql to save to db is "+sql);
		Connection connection;
		Statement stmt;
		try { 
			Class.forName("org.sqlite.JDBC");   // ---...JDBC upper case!!!
			connection = DriverManager.getConnection("jdbc:sqlite:FXdata.db");
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
	
	private List<String> getLinkFromDB() {
//		String selectString = "select DISTINCT link from Links order by UpdateTime LIMIT 40";
		String selectString = "select DISTINCT link from Links";
		Connection connection = null;
		Statement stmt = null;
		ResultSet rs;
		String linkString;
		List<String> resultList = new ArrayList<String>();
		System.out.println("sql is: "+selectString);
		try { 
			Class.forName("org.sqlite.JDBC");   // ---...JDBC upper case!!!
			System.out.println("loaded class");
			connection = DriverManager.getConnection("jdbc:sqlite:FXdata.db");
			System.out.println("get connection");
			stmt = connection.createStatement();
			System.out.println("start exectuing sql");
			rs = stmt.executeQuery(selectString);
			System.out.println(" sql end!");			
			while (rs.next()) {
				linkString=rs.getString("link");
				resultList.add(linkString);
			}
		} catch (Exception e) {
			System.err.println( e.getClass().getName() + ": " + e.getMessage() );
		    System.exit(0);
	   }finally {
		   try {
			   stmt.close();
				connection.close();
		   } catch (Exception e2) {
			System.out.println("db failed!!!");
		  }
	   }	
	 return	resultList;
	}

	private List<String> getDataFromDB2(String selectString, List<String> wantedStrings) {
		Connection connection;
		Statement stmt;
		ResultSet rs;
		List<String> resultList = new ArrayList<String>();
		System.out.println("sql for query is : " + selectString);
		try { 
			Class.forName("org.sqlite.JDBC");   // ---...JDBC upper case!!!
			connection = DriverManager.getConnection("jdbc:sqlite:FXdata.db");
			stmt = connection.createStatement();
			System.out.println("start exectuing sql");
			rs = stmt.executeQuery(selectString);
			try {
				while (rs.next()) {
					for(String s:wantedStrings) {
						resultList.add(rs.getString(s));
					}
				}
			} catch (SQLException e) {
				e.printStackTrace();
			}
			System.out.println("sql end!");
			stmt.close();
			connection.close();
		} catch (Exception e) {
			System.err.println( e.getClass().getName() + ": " + e.getMessage() );
	   }
		return resultList;		
	}
	

}