package com.app.weixin.caipiao.service;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

import org.jdom.Document;
import org.jdom.Element;
import org.jdom.input.SAXBuilder;
import org.springframework.stereotype.Service;

import com.app.weixin.caipiao.model.CaipiaoBaseBean;
import com.app.weixin.caipiao.model.ConstantCaipiao;

@Service
public class CaipiaoService {

	public List<CaipiaoBaseBean> getDltInfo() {

		List<CaipiaoBaseBean> arr = new ArrayList<CaipiaoBaseBean>();
		File file = null;
		
		SAXBuilder builder=new SAXBuilder(false);    
		try {
			file = new File(ConstantCaipiao.getDaLeTouPath());
			Document document=builder.build(file);   
			Element employees=(Element) document.getRootElement();
			
			List<?> employeeList=employees.getChildren("org.weixin.course.service.caipiao.bean.CaipiaoBaseBean");
			
			for (int i = 0; i < employeeList.size(); i++) {
				Element employee=(Element)employeeList.get(i);
				
				List<?> employeeInfo=employee.getChildren();
				
				CaipiaoBaseBean daletou = new CaipiaoBaseBean();
				for (int j = 0; j < employeeInfo.size(); j++) {
					
					
					if (((Element)employeeInfo.get(j)).getName().equals("id")) {
						daletou.setId(((Element)employeeInfo.get(j)).getValue());
					} else if (((Element)employeeInfo.get(j)).getName().equals("resultNum")) {
						daletou.setResultNum(((Element)employeeInfo.get(j)).getValue());
					} else if (((Element)employeeInfo.get(j)).getName().equals("resultNumBlue")) {
						daletou.setResultNumBlue(((Element)employeeInfo.get(j)).getValue());
					} else if (((Element)employeeInfo.get(j)).getName().equals("openTime")) {
						daletou.setOpenTime(((Element)employeeInfo.get(j)).getValue());
					} else if (((Element)employeeInfo.get(j)).getName().equals("updateDate")) {
						daletou.setUpdateDate(((Element)employeeInfo.get(j)).getValue());
					} else if (((Element)employeeInfo.get(j)).getName().equals("remaindBounus")) {
						daletou.setRemaindBounus(((Element)employeeInfo.get(j)).getValue());
					}
				}
				arr.add(daletou);
			}
		} catch (Exception e) {
			e.getStackTrace();
		}
		return arr;
	}
}
