package com.app.weixin.tax.model;

import java.util.ArrayList;
import java.util.List;

public class TaxResultModel {

	private String year="";
	private String month="";
	private String count="";
	private String id="";
	private String bound="";
	
	private List<TaxResultModelList> taxResultModelList = new ArrayList<TaxResultModelList>();
	
	public String getBound() {
		return bound;
	}
	public void setBound(String bound) {
		this.bound = bound;
	}
	public String getYear() {
		return year;
	}
	public void setYear(String year) {
		this.year = year;
	}
	public String getMonth() {
		return month;
	}
	public void setMonth(String month) {
		this.month = month;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getCount() {
		return count;
	}
	public void setCount(String count) {
		this.count = count;
	}
	public List<TaxResultModelList> getTaxResultModelList() {
		return taxResultModelList;
	}
	public void setTaxResultModelList(List<TaxResultModelList> taxResultModelList) {
		this.taxResultModelList = taxResultModelList;
	}
}
