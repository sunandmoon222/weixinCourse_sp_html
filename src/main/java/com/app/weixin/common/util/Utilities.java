/**
 * @ Utilities.java $version 2014-10-23
 *
 * Copyright 2014 NHN Corp. All rights Reserved. 
 * NHN PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.
 */
package com.app.weixin.common.util;

import javax.servlet.http.Cookie;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Common Utilities. 
 * Utilities
 * 
 * @author nhnst
 */
public class Utilities {
	
	/**
	 * Get cookie value
	 * @param request request
	 * @param key key
	 * @return cookie value
	 */
    public static String getCookies(HttpServletRequest request, String key) {
        Cookie[] cookies = request.getCookies();
        if (cookies != null) {
            for (Cookie cookie : cookies) {
                if (key.equals(cookie.getName())) {
                    return cookie.getValue();
                }
            }
        }
        return "";
    }


    /**
     * Set cookie value
     * @param response response
     * @param key key
     * @param value value
     */
    public static void setCookie(HttpServletResponse response, String key, String value) {
        Cookie cookie = new Cookie(key, value);
        cookie.setMaxAge(Integer.MAX_VALUE);
        response.addCookie(cookie);
    }

    /**
     * delete cookie 
     * @param response response
     * @param key cookie key
     */
    public static void delCookie(HttpServletResponse response, String key) {
        Cookie newCookie = new Cookie(key, null);
        newCookie.setMaxAge(0);
        newCookie.setPath("/");
        response.addCookie(newCookie);
    }
    
}
