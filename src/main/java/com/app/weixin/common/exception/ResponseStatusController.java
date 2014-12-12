/**
 * @ ResponseStatusController.java $version 2014-10-23
 *
 * Copyright 2014 NHN Corp. All rights Reserved. 
 * NHN PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.
 */
package com.app.weixin.common.exception;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * 
 * ResponseStatusController
 * 
 * @author nhnst
 */
@Controller
@RequestMapping("status")
public class ResponseStatusController {

	/**
	 * 400 error
	 * 
	 * @return error page
	 */
	@RequestMapping("400.do")
	public String map400() {
		return "status/error";
	}

	/**
	 * 403 error
	 * 
	 * @return error page
	 */
	@RequestMapping("403.do")
	public String map403() {
		return "status/error";
	}

	/**
	 * 404 error
	 * 
	 * @return error page
	 */
	@RequestMapping("404.do")
	public String map404() {
		return "status/error";
	}

	/**
	 * 500 error
	 * 
	 * @return error page
	 */
	@RequestMapping("500.do")
	public String map500() {
		return "status/error";
	}

	/**
	 * json_error
	 * 
	 * @return error page
	 */
	@RequestMapping("json_error.do")
	public String json_error() {
		return "status/error";
	}
}
