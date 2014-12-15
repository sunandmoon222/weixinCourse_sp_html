package com.app.weixin.caipiao.model;

public class ConstantCaipiao {

	public final static String DATE_FORMAT = "yyyy-MM-dd HH:mm:ss";
	public final static int THREAD_SLEEP_TIME = 2;
	private static boolean isPC = true;
	
	public static void setIsPC (boolean bool) {
		isPC = bool;
	}
	
	public static String getDaLeTouPath() {
		
		String path = "";
		
		if (isPC) {
			path = System.getProperty("user.dir") + "\\data\\caipiao\\daletou.xml";
		} else {
			path = "/alidata/www/caipiao_data/daletou.xml";
		}
		return path;
	}

	public static String getPaiLieSanPath() {
		
		String path = "";
		
		if (isPC) {
			path = System.getProperty("user.dir") + "\\data\\caipiao\\pailiesan.xml";
		} else {
			path = "/alidata/www/caipiao_data/pailiesan.xml";
		}
		return path;
	}

	public static String getPaiLieFivePath() {
		
		String path = "";
		
		if (isPC) {
			path = System.getProperty("user.dir") + "\\data\\caipiao\\pailieFive.xml";
		} else {
			path = "/alidata/www/caipiao_data/pailieFive.xml";
		}
		return path;
	}
	
	public static String getSevenStarPath() {
		
		String path = "";
		
		if (isPC) {
			path = System.getProperty("user.dir") + "\\data\\caipiao\\sevenstar.xml";
		} else {
			path = "/alidata/www/caipiao_data/sevenstar.xml";
		}
		return path;
	}

	public static String getShuangSeQiuPath() {
		
		String path = "";
		
		if (isPC) {
			path = System.getProperty("user.dir") + "\\data\\caipiao\\shuangseqiu.xml";
		} else {
			path = "/alidata/www/caipiao_data/shuangseqiu.xml";
		}
		return path;
	}
	
	public static String getSevenHappyPath() {
		
		String path = "";
		
		if (isPC) {
			path = System.getProperty("user.dir") + "\\data\\caipiao\\sevenhappy.xml";
		} else {
			path = "/alidata/www/caipiao_data/sevenhappy.xml";
		}
		return path;
	}
	
	public static String getThreeDPath() {
		
		String path = "";
		
		if (isPC) {
			path = System.getProperty("user.dir") + "\\data\\caipiao\\threeD.xml";
		} else {
			path = "/alidata/www/caipiao_data/threeD.xml";
		}
		return path;
	}
}
