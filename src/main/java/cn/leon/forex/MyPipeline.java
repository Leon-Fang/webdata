package cn.leon.forex;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

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
		// TODO Auto-generated method stub
		
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
			System.out.println("loaded class");
			connection = DriverManager.getConnection("jdbc:sqlite:FXdata.db");
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
		try { 
			Class.forName("org.sqlite.JDBC");   // ---...JDBC upper case!!!
			System.out.println("loaded class");
			connection = DriverManager.getConnection("jdbc:sqlite:FXdata.db");
			System.out.println("get connection");
			stmt = connection.createStatement();
			System.out.println("start exectuing sql");
			rs = stmt.executeQuery(selectString);
			System.out.println(" sql end!");
			stmt.close();
			connection.close();
			return rs;
		} catch (Exception e) {
			System.err.println( e.getClass().getName() + ": " + e.getMessage() );
		    System.exit(0);
		    return null;
	   }		
	}

}