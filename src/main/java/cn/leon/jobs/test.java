package cn.leon.jobs;

import static org.assertj.core.api.Assertions.not;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import org.apache.http.cookie.SM;

public class test {

	public static void main(String[] args) throws SQLException {
		String linkString;
		List<String> rs = getLinkFromDB();
		System.out.println("rs: "+ rs);
		
	}
	private static List<String> getLinkFromDB() throws SQLException{
		System.out.println("Start to get links from Links!");
		String selectString2 = "select link from Links";
		String linkString;
		ResultSet rs = getDataFromDB(selectString2,false);
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

	private static ResultSet getDataFromDB(String selectString, boolean canCLose) {
		Connection connection = null;
		Statement stmt = null;
		ResultSet rs = null;
		System.out.println("sql for query is : " + selectString);
		try { 
			Class.forName("org.sqlite.JDBC");   // ---...JDBC upper case!!!
			connection = DriverManager.getConnection("jdbc:sqlite:FXdata.db");
			stmt = connection.createStatement();
			System.out.println("start exectuing sql");
			rs = stmt.executeQuery(selectString);
			System.out.println("sql end!");
			if(canCLose) {
				stmt.close();
				connection.close();
			}
		} catch (Exception e) {
			System.err.println( e.getClass().getName() + ": " + e.getMessage() );
	    }
		return rs;
	}

}
