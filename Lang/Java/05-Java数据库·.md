```java
import java.sql.*
// 注册SQL驱动
DriverManager.registerDriver(new Driver());
// 建立数据库连接对象
Connection conn=DriverManager.getConnection("jdbc:mysql://", "root", "bt412412");
// 得到执行sql的对象
Statement sta=conn.createStatement();
// sql语句，并以表的形式返回查出来的数据给ResultSet接收
String sql="select * form userinfo";
ResultSet res=sta.executeQuery(sql);
while(res.next()) {
  String stringname=res.getString("nickname");
  System.out.println(stringname);

}
// 关闭连接
conn.close();
sta.close();
res.close();
```
