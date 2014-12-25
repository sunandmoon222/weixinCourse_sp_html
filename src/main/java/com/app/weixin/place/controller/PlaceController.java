package com.app.weixin.place.controller;

import java.io.UnsupportedEncodingException;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.app.weixin.place.model.BashBean;
import com.app.weixin.place.service.CommonService;

@Controller
@RequestMapping(value="/place")
public class PlaceController {
	
	@Autowired
	private CommonService commonService;
	
	@RequestMapping(value="/init",method = RequestMethod.GET)
	public String init(HttpServletRequest request, HttpServletResponse response, ModelMap model) {
		model.addAttribute("location_x", request.getParameter("location_x"));
		model.addAttribute("location_y", request.getParameter("location_y"));
		
		return "place/menu";
	}

	@RequestMapping(value="/bash",method = RequestMethod.GET)
	public String bashRequest(ModelMap model,HttpServletRequest request, HttpServletResponse response) throws UnsupportedEncodingException, JSONException {
		
		String locationX = request.getParameter("locationX");
		String locationY = request.getParameter("locationY");
		String cityNow = new String(request.getParameter("cityNow").getBytes("iso-8859-1"), "UTF-8");
		List<BashBean> bashBeanList= commonService.getBashInfo(locationX,
															   locationY,
															   cityNow);
		
		model.addAttribute("bashBeanList", bashBeanList);
		model.addAttribute("locationX", locationX);
		model.addAttribute("locationY", locationY);
		model.addAttribute("cityNow", cityNow);
		return "place/bash";
	}
}
 