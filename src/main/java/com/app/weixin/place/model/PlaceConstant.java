package com.app.weixin.place.model;

public class PlaceConstant {

	public static String AK = "jHZG6OVL0MpKALKvDEbXaUb5";
	public static String[] OUT_TYPE = {"json","xml"};
	public static String REQEST_URL = "http://api.map.baidu.com/place/v2/eventsearch?";
	
	//�Ź����ͣ�ȡֵ���£� 1: ���� 2������ 3������ 4������ס��
	public static String[] GROUPON_TYPE = {"1","2","3","4"};
	//Ϊ�����ֶΣ�ȡֵ���£�
	//data_type���������ͣ�Ĭ������
	//groupon_num���Ź�����
	//groupon_price���Ź��۸�
	//groupon_start���Ź���ʼʱ��
	//distance:����������ֻ�����ĵ������Ч
	public static String[] SORT_NAME = {"data_type","groupon_num","groupon_price","groupon_start","distance"};
	//�������ȡֵ���£�0���Ӹߵ��ͣ�1���ӵ͵��ߣ�
	//�ù����data_type��groupon_num�ֶ���Ч
	public static String[] SORT_RULE = {"0","1"};		

	//�����뾶��Ĭ��1000�ף���������2000�ס�
	public static String[] RADIUS = {"1000","2000"};
	
	//ϴԡ
	public static String PLACE_BASH_REGION = "����";
	public static String PLACE_BASH_NAME = "ϴ��";
	
	
	
	
	
	
	
}
