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
import com.app.weixin.caipiao.model.ConstantCaipiao;
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
		
		List<CaipiaoBaseBean> list = caipiaoService.getCaipiaoInfo(ConstantCaipiao.getDaLeTouPath());
		
		model.addAttribute("caipiaoName",ConstantCaipiao.CAIPIAO_NAME_DALETOU);
		model.addAttribute("caipiaoInfo",list);
		model.addAttribute("remaindBounus",list.get(0).getRemaindBounus()!=""?list.get(0).getRemaindBounus():0);

		logger.debug("dltResponse end");
		return "caipiao/caipiao";
	}
	
	@RequestMapping(value = "/pls", method = RequestMethod.GET)
	public String plsResponse(HttpServletRequest request, HttpServletResponse response, ModelMap model) {
		logger.debug("plsResponse start");
		
		List<CaipiaoBaseBean> list = caipiaoService.getCaipiaoInfo(ConstantCaipiao.getPaiLieSanPath());
		
		model.addAttribute("caipiaoName",ConstantCaipiao.CAIPIAO_NAME_PAILIESAN);
		model.addAttribute("caipiaoInfo",list);
		model.addAttribute("remaindBounus",list.get(0).getRemaindBounus().equals("")?0:list.get(0).getRemaindBounus());

		logger.debug("plsResponse end");
		return "caipiao/caipiao";
	}
	
	@RequestMapping(value = "/plw", method = RequestMethod.GET)
	public String plwResponse(HttpServletRequest request, HttpServletResponse response, ModelMap model) {
		logger.debug("plwResponse start");
		
		List<CaipiaoBaseBean> list = caipiaoService.getCaipiaoInfo(ConstantCaipiao.getPaiLieFivePath());
		
		model.addAttribute("caipiaoName",ConstantCaipiao.CAIPIAO_NAME_PAILIEFIVE);
		model.addAttribute("caipiaoInfo",list);
		model.addAttribute("remaindBounus",list.get(0).getRemaindBounus()!=""?list.get(0).getRemaindBounus():0);

		logger.debug("plwResponse end");
		return "caipiao/caipiao";
	}
	
	@RequestMapping(value = "/qx", method = RequestMethod.GET)
	public String qxResponse(HttpServletRequest request, HttpServletResponse response, ModelMap model) {
		logger.debug("qxResponse start");
		
		List<CaipiaoBaseBean> list = caipiaoService.getCaipiaoInfo(ConstantCaipiao.getSevenStarPath());
		
		model.addAttribute("caipiaoName",ConstantCaipiao.CAIPIAO_NAME_SEVENSTAR);
		model.addAttribute("caipiaoInfo",list);
		model.addAttribute("remaindBounus",list.get(0).getRemaindBounus()!=""?list.get(0).getRemaindBounus():0);

		logger.debug("qxResponse end");
		return "caipiao/caipiao";
	}
}