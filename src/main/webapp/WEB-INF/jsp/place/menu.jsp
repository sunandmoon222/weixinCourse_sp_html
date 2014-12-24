<%@ page language="java" contentType="text/html; charset=UTF-8"%>
<%@ include file="/WEB-INF/jsp/util/include.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
<meta name="format-detection" content="telephone=no" />
<link rel="stylesheet" type="text/css" href="<%=cssPath %>jquery.mobile-1.0b1.css"/>
<script src="http://code.jquery.com/jquery-1.6.min.js" type="text/javascript"></script>
<script src="http://code.jquery.com/mobile/1.0b1/jquery.mobile-1.0b1.min.js"></script>
<script src="http://api.map.baidu.com/api?v=1.4" type="text/javascript"></script>
<title>周边查询</title>
<link rel="stylesheet" href="<%=cssPath %>main.v01.css" media="screen">
<script>

$(document).ready(function(){
	getLocation();
});

function getLocation(){
    var point = new BMap.Point('${location_y}', '${location_x}');// 创建点坐标
    var gc = new BMap.Geocoder();    
    gc.getLocation(point, function(rs){
       var addComp = rs.addressComponents;
	   $('#city').html(addComp.city);
      });
   }

//function getLocation() {
//	if (navigator.geolocation) {
//		navigator.geolocation.getCurrentPosition(showPosition);
//	} else {
//		alert("您的浏览器不支持地理定位");
//	}
//}

//function showPosition(position) {
//	lat = position.coords.latitude;
//	lon = position.coords.longitude;
	//var map = new BMap.Map("container");            // 创建Map实例
//	var point = new BMap.Point(lon, lat); // 创建点坐标
	//map.centerAndZoom(point,15);                     // 
	//map.enableScrollWheelZoom(); 
//	var gc = new BMap.Geocoder();
//	alert(lon);
//	alert(lat);
//	gc.getLocation(point, function(rs) {
//		var addComp = rs.addressComponents;
//		alert(addComp.province + ", " + addComp.city + ", "
//				+ addComp.district + ", " + addComp.street);
//	});
//}

	function submitFood() {
		document.location = "/weixinCourse_sp/caipiao/dlt.do";
	}

	</script>
</head>
<body>
<div data-role="page" id="page">
  <div data-role="header" data-theme="c">
    <h1>当前城市：<span id="city" title=""></span></h1>
  </div>
  <div data-role="content" data-theme="d">
		<img id = "food" alt="加载中" src="<%=imgPath %>hotPot.png" style="width:65px;height: 77" onclick="javascript:submitFood()">
		<img alt="加载中" src="<%=imgPath %>hotPot.png" style="width:65px;height: 77">
		<img alt="加载中" src="<%=imgPath %>hotPot.png" style="width:65px;height: 77">
		<img alt="加载中" src="<%=imgPath %>hotPot.png" style="width:65px;height: 77">
  </div>
  <div data-role="content" data-theme="d">
		<img alt="加载中" src="<%=imgPath %>hotPot.png" style="width:65px;height: 77">
		<img alt="加载中" src="<%=imgPath %>hotPot.png" style="width:65px;height: 77">
		<img alt="加载中" src="<%=imgPath %>hotPot.png" style="width:65px;height: 77">
		<img alt="加载中" src="<%=imgPath %>hotPot.png" style="width:65px;height: 77">
  </div>
  <div data-role="content" data-theme="d">
		<img alt="加载中" src="<%=imgPath %>hotPot.png" style="width:65px;height: 77">
		<img alt="加载中" src="<%=imgPath %>hotPot.png" style="width:65px;height: 77">
		<img alt="加载中" src="<%=imgPath %>hotPot.png" style="width:65px;height: 77">
		<img alt="加载中" src="<%=imgPath %>hotPot.png" style="width:65px;height: 77">
  </div>
   <div data-role="content" data-theme="c">
    <h1>${location_x}</h1>
  </div>
    <div data-role="content" data-theme="d">
    <h1>${location_y}</h1>
  </div>
<!--<div data-role="footer">
    	<h4>Footer</h4>
    </div>
-->
</div>

<input type="hidden" id = "location_x" name = "location_x" value = '${location_x}'>
<input type="hidden" id = "location_y" name = "location_x" value = '${location_y}'>
</body>
</html>