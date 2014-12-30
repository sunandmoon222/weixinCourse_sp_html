package com.app.weixin.tax.model;

public class ConstantTax {
	private static boolean isPC = false;
	
	public static void setIsPC(boolean bool) {
		isPC = bool;
	}

	public static String getXmlFile() {
		String path = "";
		if (isPC)
			path = "D:\\aliyun\\workspace\\weixinCourse_sp_html"
					+ "\\src\\main\\resources\\data\\tax\\taxData.xml";
		else {
			path = "/alidata/www/taxData/taxData.xml";
		}
		return path;
	}
}