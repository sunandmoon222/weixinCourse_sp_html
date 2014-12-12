/**
 * @ AccountController.java $version 2014-10-23
 *
 * Copyright 2014 NHN Corp. All rights Reserved. 
 * NHN PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.
 */
package com.app.weixin.common.util;


import org.springframework.orm.ibatis.SqlMapClientTemplate;
import org.springframework.stereotype.Component;

import com.ibatis.sqlmap.client.SqlMapClient;

/**
 * Extended the Helper class that simplifies data access via the iBATIS
 * {@link com.ibatis.sqlmap.client.SqlMapClient} API, converting checked
 * SQLExceptions into unchecked DataAccessExceptions, following the
 * <code>org.springframework.dao</code> exception hierarchy.
 * Uses the same {@link org.springframework.jdbc.support.SQLExceptionTranslator}
 * mechanism as {@link org.springframework.jdbc.core.JdbcTemplate}.
 * SqlExecutor
 * 
 * @author nhnst
 */
@Component
public class SqlExecutor extends SqlMapClientTemplate {

//    private static final Logger logger = Logger.getLogger(SqlExecutor.class);
  
    /**
     * @param sqlMapClient parameter
     */
    @Override
    public void setSqlMapClient(SqlMapClient sqlMapClient) {
        super.setSqlMapClient(sqlMapClient);
    }

}