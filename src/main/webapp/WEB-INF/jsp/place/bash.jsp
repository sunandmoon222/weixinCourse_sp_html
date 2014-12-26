<%@ page language="java" contentType="text/html; charset=UTF-8"%>
<%@ include file="/WEB-INF/jsp/util/include.jsp"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
<!-- <meta name="format-detection" content="telephone=no" /> -->
<link rel="stylesheet" href="http://code.jquery.com/mobile/1.3.2/jquery.mobile-1.3.2.min.css">
<script src="http://code.jquery.com/jquery-1.8.3.min.js"></script>
<script src="http://code.jquery.com/mobile/1.3.2/jquery.mobile-1.3.2.min.js"></script>

<title>周围搜索</title>
<link rel="stylesheet" href="<%=cssPath %>main.v01.css" media="screen">
<script>

function gotoMap(locationToX,locationToY,destination){
	document.location = "/weixinCourse_sp/place/bashMap.do?locationFromX="+
	$('#locationFromX').val()+("&locationFromY=")+$('#locationFromY').val()+
	("&locationToX=")+locationToX+
	("&locationToY=")+locationToY+
	("&destination=")+destination+
	("&cityNow=")+$('#cityNow').val();  
}

</script>
</head>
<body>

<div data-role="page" id="page">
  <div data-role="header">
    <h1>洗浴按摩</h1>
  </div>
  <div data-role="content" >
  	<c:if test="${!empty bashBeanList}">
	<ul data-role="listview" data-inset="true">
		<li data-role="divider">您附近有${count}个洗浴中心</li>
   	   <c:forEach var="bashBean" items="${bashBeanList}">
		   <li data-icon="arrow-r"><a href="${bashBean.groupon_url_mobile}">
		   		<img src="${bashBean.groupon_image}" style="width:60px;height: 60px;padding: 10px">
		   		<h2><span style="position: absolute;left:85px;margin-top: -11">${bashBean.name}</span><br></h2>
		   		<p><span class="ui-li-count">均价:${bashBean.groupon_price}</span><br>
		   		<span style="position: absolute;left:85px;margin-top: -11">距您:${bashBean.distance}米</span><br>
		   		<span style="position: absolute;left:85px;margin-top: -11">电话:${bashBean.telephone}</span></p>
		   		<a href="#" onclick="javascript:gotoMap('${bashBean.locationX}','${bashBean.locationY}','${bashBean.name}');">详细地图</a>
		   </a></li>
	   </c:forEach>
	</ul>
	</c:if>
  </div>
<!--<div data-role="footer">
    	<h4>Footer</h4>
    </div>
-->
</div>

<input type="hidden" id = "locationFromX" name = "locationFromX" value = '${locationFromX}'>
<input type="hidden" id = "locationFromY" name = "locationFromY" value = '${locationFromY}'>
<input type="hidden" id = "cityNow" name = "cityNow" value = '${cityNow}'>
</body>
</html>