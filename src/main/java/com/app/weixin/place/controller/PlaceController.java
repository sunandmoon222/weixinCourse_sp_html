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
		
		String locationFromX = request.getParameter("locationX");
		String locationFromY = request.getParameter("locationY");
		String cityNow = new String(request.getParameter("cityNow").getBytes("iso-8859-1"), "UTF-8");
		List<BashBean> bashBeanList= commonService.getBashInfo(locationFromX,
				locationFromY,
															   cityNow);
		if (bashBeanList != null) {
			model.addAttribute("count",bashBeanList.size());
			model.addAttribute("bashBeanList", bashBeanList);
		} else {
			model.addAttribute("count",0);
		}
		
		model.addAttribute("locationFromX", locationFromX);
		model.addAttribute("locationFromY", locationFromY);
		model.addAttribute("cityNow", cityNow);
		return "place/bash";
	}
	
	@RequestMapping(value="/bashMap",method = RequestMethod.GET)
	public String bashMapRequest(ModelMap model,HttpServletRequest request, HttpServletResponse response) throws UnsupportedEncodingException, JSONException {
		
		String locationFromX = request.getParameter("locationFromX");
		String locationFromY = request.getParameter("locationFromY");
		String locationToX = request.getParameter("locationToX");
		String locationToY = request.getParameter("locationToY");
		String destination = new String(request.getParameter("destination").getBytes("iso-8859-1"), "UTF-8");
		String cityNow = new String(request.getParameter("cityNow").getBytes("iso-8859-1"), "UTF-8");
		
		
		model.addAttribute("destination", destination);
		model.addAttribute("locationFromX", locationFromX);
		model.addAttribute("locationFromY", locationFromY);
		model.addAttribute("locationToX", locationToX);
		model.addAttribute("locationToY", locationToY);
		model.addAttribute("cityNow", cityNow);
		
		return "place/bashMap";
	}
}
