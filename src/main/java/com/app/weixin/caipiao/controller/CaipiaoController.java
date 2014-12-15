package com.app.weixin.caipiao.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.app.weixin.caipiao.model.CaipiaoBaseBean;
import com.app.weixin.caipiao.service.CaipiaoService;

@Controller 
@RequestMapping(value = "/caipiao")
public class CaipiaoController {

	private static Logger logger = LoggerFactory.getLogger(CaipiaoController.class);

	@Autowired
	private CaipiaoService caipiaoService;
	
	@RequestMapping(value = "/dlt", method = RequestMethod.GET)
	public String dltResponse(HttpServletRequest request, HttpServletResponse response, ModelMap model) {
		logger.debug("dltResponse start");
		
		List<CaipiaoBaseBean> list = caipiaoService.getDltInfo();
		
		model.addAttribute("daletouInfoList",list);
		model.addAttribute("remaindBounus",list.get(0).getRemaindBounus());

		logger.debug("dltResponse end");
		return "caipiao/daletou";
	}
}
