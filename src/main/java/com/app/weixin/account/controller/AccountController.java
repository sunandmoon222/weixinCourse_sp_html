/**
 * @ AccountController.java $version 2014-10-23
 *
 * Copyright 2014 NHN Corp. All rights Reserved. 
 * NHN PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.
 */
package com.app.weixin.account.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.app.weixin.account.service.AccountService;


/**
 * 
 * AccountController
 * 
 * @author nhnst
 */
@Controller
public class AccountController {

	private static Logger logger = LoggerFactory.getLogger(AccountController.class);

	@Autowired
	private AccountService accountService;

	/**
	 * 
	 * @description login initiation
	 * @param request parameter
	 * @param response parameter
	 * @param model result objects
	 * @return string
	 * @version 1.0
	 * @author nhnst
	 * @update 2014-10-23 pm 2:29:13
	 */
	@RequestMapping(value = "/login", method = RequestMethod.GET)
	public String localLogin(HttpServletRequest request, HttpServletResponse response, ModelMap model) {
		model.addAttribute("lang", "zh");
		return "login/login";
	}

	/**
	 * 
	 * @description logic for login
	 * @param model result objects
	 * @param response parameter
	 * @param request parameter
	 * @return string
	 * @version 1.0
	 * @author nhnst
	 * @update 2014-10-23 pm 2:29:13
	 */
	@RequestMapping(value = "/local_login", method = RequestMethod.POST)
	public String doLocalLogin(ModelMap model, HttpServletResponse response, HttpServletRequest request) {

		String userId = request.getParameter("userId");
		String passwd = request.getParameter("passwd");
		int count = accountService.checkUser(userId,passwd);
		if (count < 1) {
			model.addAttribute("userId", userId);
			model.addAttribute("passwd", passwd);
			model.addAttribute("errMsg", "User Not Exists");
			return "login/login";
		}

		return "index/index";
	}

	@RequestMapping(value = "/index")
	public String index(ModelMap model, HttpServletRequest request) {
		return "index/index";
	}

	/**
	 * 
	 * @description logic for logout
	 * @param request parameter
	 * @param response parameter
	 * @return login page
	 * @version 1.0
	 * @author nhnst
	 * @update 2014-10-23 pm 2:29:13
	 */
	@RequestMapping(value = "/logout", method = RequestMethod.GET)
	public String logout(HttpServletRequest request, HttpServletResponse response) {
//		request.getSession().invalidate();
//		Utilities.delCookie(response, loginUser);
//
		return "redirect:login.nhn";
	}
}
