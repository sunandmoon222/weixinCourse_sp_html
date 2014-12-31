<%@ page language="java" contentType="text/html; charset=UTF-8"%>
<%@ include file="/WEB-INF/jsp/util/include.jsp"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
<link rel="stylesheet" href="http://code.jquery.com/mobile/1.3.2/jquery.mobile-1.3.2.min.css">
<script src="http://code.jquery.com/jquery-1.8.3.min.js"></script>
<script src="http://code.jquery.com/mobile/1.3.2/jquery.mobile-1.3.2.min.js"></script>
<title>发票详细数据查询</title>
</head>
<body>
<div data-role="page" id="pageone">
  <div data-role="header">
  	<c:forEach var="taxResultModel0" items="${list}" begin="0" end="0">
    	<h1>${taxResultModel0.year}年第${taxResultModel0.month}期详细数据查询</h1>
    </c:forEach>
  </div>

  <div data-role="content">
	<c:forEach var="taxResultModel" items="${list}">
	    <div data-role="collapsible">
		    <h4>${taxResultModel.id}(${taxResultModel.count}名)</h4>
		    <ul data-role="listview">
	
			<c:forEach var="taxResultModelList" items="${taxResultModel.taxResultModelList}">	    
		      <li>发票代码:${taxResultModelList.code}<br>发票号码:${taxResultModelList.num}<br>
		      	       发票名称:${taxResultModelList.name}<br>消费单位:${taxResultModelList.payee}<br>
		      </li>
		    </c:forEach>
		    
		    </ul>
	  	</div>
  	</c:forEach>
   </div>  	
</div>
</body>
</html>