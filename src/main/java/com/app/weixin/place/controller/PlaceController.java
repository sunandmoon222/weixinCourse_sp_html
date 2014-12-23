package com.app.weixin.place.controller;

import java.io.UnsupportedEncodingException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.app.weixin.place.service.FoodService;

@Controller
@RequestMapping(value="/place")
public class PlaceController {
	
	@Autowired
	private FoodService foodService;
	
	@RequestMapping(value="/init",method = RequestMethod.GET)
	public String init(HttpServletRequest request, HttpServletResponse response, ModelMap model) {
		model.addAttribute("location_x", request.getParameter("location_x"));
		model.addAttribute("location_y", request.getParameter("location_y"));
		
		return "place/menu";
	}
	
	@RequestMapping(value="/food",method = RequestMethod.GET)
	public String foodReqest(HttpServletRequest request, HttpServletResponse response, ModelMap model) throws UnsupportedEncodingException, JSONException {
		String str = foodService.getFoodInfo();
		return "place/food";
	}
}
