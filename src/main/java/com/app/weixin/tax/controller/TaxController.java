package com.app.weixin.tax.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.app.weixin.tax.model.TaxModel;
import com.app.weixin.tax.model.TaxResultModel;
import com.app.weixin.tax.model.TaxResultModelList;
import com.app.weixin.tax.service.TaxService;

@Controller
@RequestMapping(value="/tax")
public class TaxController {
	
	@Autowired
	private TaxService taxService;
	
	@RequestMapping(value="/init",method = RequestMethod.GET)
	public String init(HttpServletRequest request, HttpServletResponse response, ModelMap model) {
		taxService.getXmlData();
		model.addAttribute("year", taxService.getTaxYear());
		model.addAttribute("month", taxService.getTaxMonth());
		return "tax/index";
	}
	
	@RequestMapping(value="/query",method = RequestMethod.POST)
	public Map<String, String> query(@ModelAttribute TaxModel taxModel, HttpServletRequest request, HttpServletResponse response, ModelMap model) {
		
		Map<String, String> result = new HashMap<String, String>();
		
		TaxResultModelList taxResultModelList = taxService.getResult(taxModel);
		result.put("year", taxService.getTaxYear());
		result.put("month", taxService.getTaxMonth());
		result.put("name", taxResultModelList.getName());
		result.put("idNum", taxResultModelList.getId());
		result.put("bound", taxResultModelList.getBound());
		result.put("payee", taxResultModelList.getPayee());
		result.put("status", String.valueOf(taxResultModelList.getStatus()));
		result.put("success", String.valueOf("TRUE"));
		
		return result;
	}
	
	@RequestMapping(value="/search",method = RequestMethod.GET)
	public String search(HttpServletRequest request, HttpServletResponse response, ModelMap model) {

		List<TaxResultModel> list = taxService.getTaxResultModelList();
		
		model.addAttribute("list", list);
		return "tax/taxDataPage";
	}
}