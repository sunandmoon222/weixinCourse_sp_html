package com.app.weixin.caipiao.model;

public class CaipiaoBaseBean {

	//期数
	private String id = "";
	//开奖号码
	private String resultNum = "";
	//开奖日期
	private String openTime = "";
	//更新日期
	private String updateDate = "";
	//奖池累计金额
	private String remaindBounus="";

	
	
//-----------------------------------------------------------------	
	//中奖数目
	private String winningNum = "";
	//中奖金额
	private String bonusAmount = "";
//-----------------------------------------------------------------
	
	
	
	
	public String getResultNum() {
		return resultNum;
	}

	public void setResultNum(String resultNum) {
		this.resultNum = resultNum;
	}

	public String getRemaindBounus() {
		return remaindBounus;
	}

	public void setRemaindBounus(String remaindBounus) {
		this.remaindBounus = remaindBounus;
	}

	public String getUpdateDate() {
		return updateDate;
	}

	public void setUpdateDate(String updateDate) {
		this.updateDate = updateDate;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getWinningNum() {
		return winningNum;
	}

	public void setWinningNum(String winningNum) {
		this.winningNum = winningNum;
	}

	public String getBonusAmount() {
		return bonusAmount;
	}

	public void setBonusAmount(String bonusAmount) {
		this.bonusAmount = bonusAmount;
	}

	public String getOpenTime() {
		return openTime;
	}

	public void setOpenTime(String openTime) {
		this.openTime = openTime;
	}
}