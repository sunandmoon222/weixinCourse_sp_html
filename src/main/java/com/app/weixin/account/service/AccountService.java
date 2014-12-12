/**
 * @ NoticeService.java $version 2014-11-5
 * 
 * Copyright 2014 NHN Corp. All rights Reserved. 
 * NHN PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.
 */
package com.app.weixin.account.service;

import java.util.HashMap;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.weixin.account.repository.AccountRepository;

/**
 * NoticeService
 * 
 * @author NHN
 */
@Service
public class AccountService {
	private static Logger logger = LoggerFactory.getLogger(AccountService.class);
	
	@Autowired
	private AccountRepository accountRepository;
	
	/**
     * Get notice list
     * 
     * @param startRownum start row number
     * @param endRownum  end row number
     * @return notice list
     */
	public Integer checkUser(String userId,String passwd) {
		 Map<String,String> param = new HashMap<String, String>();
		 param.put("userId", userId);
		 param.put("passwd", passwd );

		return accountRepository.selectUserCount(param);
	}   
}
