<%@ page language="java" contentType="text/html; charset=UTF-8"%>
<%@ include file="/WEB-INF/jsp/util/include.jsp"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
<meta name="format-detection" content="telephone=no" />
<link rel="stylesheet" type="text/css" href="<%=cssPath %>jquery.mobile-1.0b1.css"/>
<script src="http://code.jquery.com/jquery-1.6.min.js" type="text/javascript"></script>
<script src="http://code.jquery.com/mobile/1.0b1/jquery.mobile-1.0b1.min.js"></script>
<title>彩票</title>
<link rel="stylesheet" href="<%=cssPath %>main.v01.css" media="screen">
<script>
</script>

<body>

<div data-role="page" id="page">
  <div data-role="header" data-theme="c">
    <h1>${caipiaoName}</h1>
  </div>
  <div data-role="content" data-theme="d">
    <p>奖池奖金余额：${remaindBounus}元</p>
	<ul data-role="listview" data-dividertheme="e">
	   <li data-role="list-divider">最近十期开奖结果</li>
	   	   <c:forEach var="caipiaoInfo" items="${caipiaoInfo}">
			   <li>第${caipiaoInfo.id}期 <span style="position: absolute;right: 50px;color:red">${caipiaoInfo.resultNum}</span>
			   						   <c:if test="${!empty caipiaoInfo.resultNumBlue}">
			   						   		<span style="position: absolute;right: 10px;color:blue">${caipiaoInfo.resultNumBlue}</span>
			   						   </c:if>
			   </li>
		   </c:forEach>
	</ul>
  </div>
<!--<div data-role="footer">
    	<h4>Footer</h4>
    </div>
-->
</div>

</body>
</html>