package com.app.weixin.caipiao.service;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.app.weixin.caipiao.model.CaipiaoBaseBean;
import com.app.weixin.caipiao.model.CaipiaoDltBean;
import com.app.weixin.caipiao.model.ConstantCaipiao;
import com.thoughtworks.xstream.XStream;
import com.thoughtworks.xstream.io.xml.DomDriver;

@Service
public class CaipiaoService {

	public List<CaipiaoDltBean> getDltInfo() {

		List<CaipiaoDltBean> arr = new ArrayList<CaipiaoDltBean>();
		XStream xsBase = new XStream(new DomDriver());
		List<?> list = null;
		File file = null;
		FileInputStream input = null;
		try {

			file = new File(ConstantCaipiao.getDaLeTouPath());

			input = new FileInputStream(file);
			list = (ArrayList<?>) xsBase.fromXML(input);

			for (int i = 0; i < list.size(); i++) {
				CaipiaoBaseBean base = (CaipiaoBaseBean) list.get(i);
				CaipiaoDltBean daletou = new CaipiaoDltBean();
				
				daletou.setId(base.getId());
				daletou.setRemaindBounus(base.getRemaindBounus());
				daletou.setOpenTime(base.getOpenTime());;
				daletou.setUpdateDate(base.getUpdateDate());
				daletou.setResultNum_red(base.getResultNum().split("@")[0]);
				daletou.setResultNum_blue(base.getResultNum().split("@")[1]);
				
				arr.add(daletou);
			}

		} catch (FileNotFoundException e1) {
			e1.printStackTrace();
		}

		try {
			input.close();
		} catch (IOException e) {
			e.printStackTrace();
		}
		input = null;
		return arr;
	}
}
