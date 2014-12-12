package com.app.weixin.account.repository;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.app.weixin.common.util.SqlExecutor;

@Repository
public class AccountRepository {
	@Autowired
    private SqlExecutor sqlExecutor;
	
	public Integer selectUserCount(Map<String,String> param) {
        return (Integer) sqlExecutor.queryForObject("com.app.weixin.account.selectUserInfo", param);
    }
}
