package com.app.weixin.tax.model;

public class TaxResultModelList {

	private String name="";
	private String code="";
	private String num="";
	private String payee="";
	private String id="";
	private boolean status=false;
	private String bound="";
	
	public String getBound() {
		return bound;
	}
	public void setBound(String bound) {
		this.bound = bound;
	}
	public boolean getStatus() {
		return status;
	}
	public void setStatus(boolean status) {
		this.status = status;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getCode() {
		return code;
	}
	public void setCode(String code) {
		this.code = code;
	}
	public String getNum() {
		return num;
	}
	public void setNum(String num) {
		this.num = num;
	}
	public String getPayee() {
		return payee;
	}
	public void setPayee(String payee) {
		this.payee = payee;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	
}
