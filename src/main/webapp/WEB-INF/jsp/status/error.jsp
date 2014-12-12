<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page isErrorPage="true" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html;charset=utf-8" />
<meta http-equiv="Pragma" content="no-cache"/>
<meta http-equiv="Cache-Control" content="no-cache"/>
<meta http-equiv="Expires" content="0"/>
<%String webPath = request.getContextPath();%>
</head>
<body>
  <div style="width:100%; height:100%; text-align:center; vertical-align:middle; margin-top:50px; padding:30px;">
  
    <img src="<%=webPath %>/include/images/error.jpg" />
  </div>
 <div style="display:none">--------this is common error.jsp ,include error code 400,404,403,500 and so on 
         ,there are all redirect to this page!-------</div>
</body>
</html>