package com.app.weixin.caipiao.model;

public class ConstantCaipiao {

	public final static String DATE_FORMAT = "yyyy-MM-dd HH:mm:ss";
	public final static int THREAD_SLEEP_TIME = 2;
	private static boolean isPC = false;
	
	//超级大乐透
	public static final String CAIPIAO_NAME_DALETOU = "超级大乐透";
	//排列三
	public static final String CAIPIAO_NAME_PAILIESAN = "排列三";
	//排列五
	public static final String CAIPIAO_NAME_PAILIEFIVE = "排列五";
	//七星彩
	public static final String CAIPIAO_NAME_SEVENSTAR = "七星彩";
	//双色球
	public static final String CAIPIAO_NAME_SHUANGSEQIU = "双色球";
	//七乐彩
	public static final String CAIPIAO_NAME_SEVEN_HAPPY = "七乐彩";
	//3D
	public static final String CAIPIAO_NAME_THREE_D = "3D";
	
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
