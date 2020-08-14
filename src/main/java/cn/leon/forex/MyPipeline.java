package cn.leon.forex;

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
	private String NewsUpdate;
//	private String values1;
//	private static String sqlString;
	@Override
	public void process(ResultItems resultItems, Task task) {
		System.out.println("current page is: " + resultItems.getRequest().getUrl());
		saveAllLinks(resultItems);
		saveFXNews2db(resultItems);
		saveglobalForex2db(resultItems);
		saveglobalEcoCalendar2db(resultItems);
		savemainCountryRate2db(resultItems);
		saveglobalEcoData2db(resultItems);
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

	private boolean saveglobalEcoData2db(ResultItems resultItems) {
	   Boolean result = false;
	   
       return result;
       
	}

	private void savemainCountryRate2db(ResultItems resultItems) {
		// TODO Auto-generated method stub
		
	}

	private void saveglobalEcoCalendar2db(ResultItems resultItems) {		
		System.out.println("get page: " + resultItems.getRequest().getUrl());
		String sqlgetDBdat = "select * from ecocalendar order by num LIMIT 100";
		ResultSet resultSet =  getDataFromDB(sqlgetDBdat);
		if(!(resultItems.get("calendarData")==null)) {
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
					System.out.println("dataList2:"+dataList2);
					for(int j=0; j<dataList2.size();j++) {
					   sqlvalues += "\""+dataList2.get(j)+"\",";
					}
					sqlvalues = sqlvalues.substring(0, sqlvalues.length()-1);
					sql = sqlo+"("+sqlvalues+")";
					System.out.println("sql: "+sql);
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


	private boolean AlreadyInDb(List<String> dataList2, ResultSet dataFromDB) {
		boolean result = false;
		try {
			while (dataFromDB.next()) {
				if(dataList2.contains(dataFromDB.getString("Event")) & dataList2.contains(dataFromDB.getString("publishDate")) & dataList2.contains(dataFromDB.getString("Country"))) {
					result = true;
					break;
				}
				else {
					System.out.println("no Event/publishDate/Country :" +dataFromDB.getString("Event") + dataFromDB.getString("publishDate") + dataFromDB.getString("Country"));
				}
				
			}
			System.out.println(dataFromDB.getFetchSize());
			
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return result;
	}

	private void saveglobalForex2db(ResultItems resultItems) {
		
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
/*
			values1 =  " (\""
						  + li0 + "\" ,\""
						  + li1 + "\" ,\""
						  + li2 + "\" ,"
						  + ") " + ",";
*/
			}
 //           sqlString = sqlString.substring(0, sqlString.length()-1)+";";
			System.out.println("sql : " + NewsSqlString);			
//			saveToDb(NewSqlString);			
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
	
	private List<String> getLinkFromDB(){
		System.out.println("Start to get links from Links!");
		String selectString = "select link from Links";
		String linkString;
		ResultSet rs = getDataFromDB(selectString);
		List<String> resultList = new ArrayList<String>();
		try {
			while (rs.next()) {
				linkString=rs.getString("link");
			    resultList.add(linkString);
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return resultList;
	}

	private ResultSet getDataFromDB(String selectString) {
		Connection connection;
		Statement stmt;
		ResultSet rs;
		System.out.println("sql for query is : " + selectString);
		try { 
			Class.forName("org.sqlite.JDBC");   // ---...JDBC upper case!!!
			connection = DriverManager.getConnection("jdbc:sqlite:FXdata.db");
			stmt = connection.createStatement();
			System.out.println("start exectuing sql");
			rs = stmt.executeQuery(selectString);
			System.out.println("sql end!");
			stmt.close();
			connection.close();
			return rs;
		} catch (Exception e) {
			System.err.println( e.getClass().getName() + ": " + e.getMessage() );
		    return null;
	   }		
	}

}