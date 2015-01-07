package com.app.weixin.tax.service;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

import org.jdom.Document;
import org.jdom.Element;
import org.jdom.JDOMException;
import org.jdom.input.SAXBuilder;
import org.springframework.stereotype.Service;

import com.app.weixin.tax.model.ConstantTax;
import com.app.weixin.tax.model.TaxModel;
import com.app.weixin.tax.model.TaxResultModel;
import com.app.weixin.tax.model.TaxResultModelList;

@Service
public class TaxService {

	private List<TaxResultModel> list = new ArrayList<TaxResultModel>();
	
	public TaxResultModelList getResult(TaxModel taxModel) {
		
		TaxResultModelList taxResultModelList  = new TaxResultModelList();
		
		for (int i = 0; i < list.size(); i++) {
			for (int j = 0; j < list.get(i).getTaxResultModelList().size(); j++) {
				if (list.get(i).getTaxResultModelList().get(j).getCode().equals(taxModel.getTaxCode()) && 
						list.get(i).getTaxResultModelList().get(j).getNum().equals(taxModel.getTaxNum())) {
					list.get(i).getTaxResultModelList().get(j).setId(list.get(i).getId());
					list.get(i).getTaxResultModelList().get(j).setStatus(true);
					list.get(i).getTaxResultModelList().get(j).setBound(list.get(i).getBound());
					taxResultModelList = list.get(i).getTaxResultModelList().get(j);
					break;
				}
			}
		}
		
		return taxResultModelList;
	}
	
	public void getXmlData() {

		Calendar cal = Calendar.getInstance();
		cal.setTime(new Date());
		
		if (list.size() > 0 && list.get(0).getYear().equals(String.valueOf(cal.get(Calendar.YEAR)))
							&& list.get(0).getMonth().equals(String.valueOf(cal.get(Calendar.MONTH)+1))) {
			return;
		}
		
		list.clear();
		
		File file = null;
		SAXBuilder builder=new SAXBuilder(false);
		
		try {
			file = new File(ConstantTax.getXmlFile());
			Document document=builder.build(file);
			Element element=(Element) document.getRootElement();
			List<?> elementList=element.getChildren("TaxBean");
			
			for (int i = 0; i < elementList.size(); i++) {
				
				Element element1=(Element)elementList.get(i);
				List<?> elementList1=element1.getChildren();
				
				TaxResultModel taxResultModel = new TaxResultModel();
				for (int k = 0; k < elementList1.size(); k++) {
					
					if (((Element)elementList1.get(k)).getName().equals("id")) {
						taxResultModel.setId(((Element)elementList1.get(k)).getValue());
					} else if (((Element)elementList1.get(k)).getName().equals("count")) {
						taxResultModel.setCount(((Element)elementList1.get(k)).getValue());
					} else if (((Element)elementList1.get(k)).getName().equals("year")) {
						taxResultModel.setYear(((Element)elementList1.get(k)).getValue());
					} else if (((Element)elementList1.get(k)).getName().equals("month")) {
						taxResultModel.setMonth(((Element)elementList1.get(k)).getValue());
					} else if (((Element)elementList1.get(k)).getName().equals("bound")) {
						taxResultModel.setBound(((Element)elementList1.get(k)).getValue());
					} else if (((Element)elementList1.get(k)).getName().equals("list")) {
						List<?> elementList2=((Element)elementList1.get(k)).getChildren("TaxBeanList");
						
						for (int j = 0; j < elementList2.size(); j++) {
							
							Element element3=(Element)elementList2.get(j);
							List<?> elementList3=element3.getChildren();
							TaxResultModelList taxResultModelList = new TaxResultModelList();
							for (int m = 0; m < elementList3.size(); m++) {
								if (((Element)elementList3.get(m)).getName().equals("name")) {
									taxResultModelList.setName(((Element)elementList3.get(m)).getValue());
								} else if (((Element)elementList3.get(m)).getName().equals("code")) {
									taxResultModelList.setCode(((Element)elementList3.get(m)).getValue());
								} else if (((Element)elementList3.get(m)).getName().equals("num")) {
									taxResultModelList.setNum(((Element)elementList3.get(m)).getValue());
								} else if (((Element)elementList3.get(m)).getName().equals("payee")) {
									taxResultModelList.setPayee(((Element)elementList3.get(m)).getValue());
								}
							}
							taxResultModel.getTaxResultModelList().add(taxResultModelList);
						}
					}
				}
				list.add(taxResultModel);
			}
			
		} catch (JDOMException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
	
	public String getTaxYear() {
		if (list.size() > 0) 
			return list.get(0).getYear();
		else 
			return "";
	}
	
	public String getTaxMonth() {
		if (list.size() > 0) 
			return list.get(0).getMonth();
		else 
			return "";
	}
	
	public List<TaxResultModel> getTaxResultModelList() {
		return list;
	}
}
