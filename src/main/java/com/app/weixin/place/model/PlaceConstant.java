package com.app.weixin.place.model;

public class PlaceConstant {

	public static String AK = "jHZG6OVL0MpKALKvDEbXaUb5";
	public static String[] OUT_TYPE = {"json","xml"};
	public static String REQEST_URL = "http://api.map.baidu.com/place/v2/eventsearch?";
	
	//团购类型，取值如下： 1: 餐饮 2：生活 3：娱乐 4：旅游住宿
	public static String[] GROUPON_TYPE = {"1","2","3","4"};
	//为排序字段，取值如下：
	//data_type：数据类型，默认排序
	//groupon_num：团购销量
	//groupon_price：团购价格
	//groupon_start：团购开始时间
	//distance:按距离排序，只对中心点检索有效
	public static String[] SORT_NAME = {"data_type","groupon_num","groupon_price","groupon_start","distance"};
	//排序规则，取值如下：0：从高到低，1：从低到高；
	//该规则对data_type和groupon_num字段无效
	public static String[] SORT_RULE = {"0","1"};		

	//检索半径。默认1000米，最大可设置2000米。
	public static String[] RADIUS = {"1000","2000"};
	
	//洗浴
	public static String PLACE_BASH_REGION = "大连";
	public static String PLACE_BASH_NAME = "洗澡";
	
	
	
	
	
	
	
}
