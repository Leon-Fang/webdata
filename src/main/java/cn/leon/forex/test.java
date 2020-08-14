package cn.leon.forex;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

public class test {

	public static void main(String[] args) throws SQLException {
		String linkString;
		List<String> rs = getLinkFromDB();
		System.out.println("rs: "+ rs);
		
	}
	private static List<String> getLinkFromDB() throws SQLException{
		System.out.println("Start to get links from Links!");
		String selectString = "select link from Links";
		String linkString;
		ResultSet rs = getDataFromDB(selectString);
		System.out.println("size : "+ rs.getFetchSize());
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

	private static ResultSet getDataFromDB(String selectString) {
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
