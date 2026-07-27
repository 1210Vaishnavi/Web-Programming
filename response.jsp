<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
<title>Server Response</title>
</head>
<body>
<%
String name=request.getParameter("username");
String age=request.getParameter("age");
%>
<h2>Welcome,<%=name%>!</h2>
<p>Your age is:<%=age %></p>
</body>
</html>
