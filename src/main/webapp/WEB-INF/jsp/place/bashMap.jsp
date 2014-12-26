<%@ page language="java" contentType="text/html; charset=UTF-8"%>
<%@ include file="/WEB-INF/jsp/util/include.jsp"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta name="viewport" content="initial-scale=1.0, user-scalable=no" />
	<style type="text/css">
		body, html,#allmap {width: 100%;height: 100%;overflow: hidden;margin:0;font-family:"微软雅黑";}
	</style>
	<script type="text/javascript" src="http://api.map.baidu.com/api?v=2.0&ak=jHZG6OVL0MpKALKvDEbXaUb5"></script>
	<title>测距</title>
</head>
<body>
	<div id="allmap"></div>
</body>
</html>
<script type="text/javascript">
//创建和初始化地图函数：
function initMap(){
    createMap();//创建地图
    setMapEvent();//设置地图事件
    addMapControl();//向地图添加控件
}


//创建地图函数：
function createMap(){
	// 百度地图API功能
	var map = new BMap.Map("allmap");
	var point1 = new BMap.Point('${locationFromY}','${locationFromX}');
	var point2 = new BMap.Point('${locationToY}','${locationToX}');
	var label1 = new BMap.Label('您此刻的位置',{"offset":new BMap.Size(9,-15)});
	var label2 = new BMap.Label('${destination}',{"offset":new BMap.Size(9,-15)});
	var marker1 = new BMap.Marker(point1);        // 创建标注
	var marker2 = new BMap.Marker(point2);        // 创建标注   
	marker1.setLabel(label1);
	marker2.setLabel(label2);
	map.addOverlay(marker1);                     // 将标注添加到地图中
	map.addOverlay(marker2);                     // 将标注添加到地图中

//	map.centerAndZoom('${cityNow}',18);  //初始化地图,设置城市和地图级别。
	map.centerAndZoom(point1,14);  //初始化地图,设置坐标和地图级别。
	var pointA = new BMap.Point('${locationFromY}','${locationFromX}');  // 创建点坐标A
	var pointB = new BMap.Point('${locationToY}','${locationToX}');  // 创建点坐标B
	var polyline = new BMap.Polyline([pointA,pointB], {strokeColor:"blue", strokeWeight:6, strokeOpacity:0.5});  //定义折线
	map.addOverlay(polyline);     //添加折线到地图上
    window.map = map;//将map变量存储在全局
}

//地图事件设置函数：
function setMapEvent(){
    map.enableDragging();//启用地图拖拽事件，默认启用(可不写)
    map.enableScrollWheelZoom();//启用地图滚轮放大缩小
    map.enableDoubleClickZoom();//启用鼠标双击放大，默认启用(可不写)
    map.enableKeyboard();//启用键盘上下左右键移动地图
}

//地图控件添加函数：
function addMapControl(){
    //向地图中添加缩放控件
var ctrl_nav = new BMap.NavigationControl({anchor:BMAP_ANCHOR_TOP_LEFT,type:BMAP_NAVIGATION_CONTROL_LARGE});
map.addControl(ctrl_nav);
    //向地图中添加缩略图控件
var ctrl_ove = new BMap.OverviewMapControl({anchor:BMAP_ANCHOR_BOTTOM_RIGHT,isOpen:1});
map.addControl(ctrl_ove);
    //向地图中添加比例尺控件
var ctrl_sca = new BMap.ScaleControl({anchor:BMAP_ANCHOR_BOTTOM_LEFT});
map.addControl(ctrl_sca);
}


initMap();//创建和初始化地图
</script>
