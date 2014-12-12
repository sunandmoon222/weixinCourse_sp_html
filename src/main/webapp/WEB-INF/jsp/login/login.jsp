<%@ page language="java" contentType="text/html; charset=UTF-8"%>
<%@ include file="/WEB-INF/jsp/util/include.jsp"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">

<html>
<head>
<meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
<meta http-equiv="Cache-Control" content="No-Cache" />
<meta http-equiv="Pragma" content="No-Cache" />
<title>旭天科技 </title>
<%String webPath = request.getContextPath();%>
<script type="text/javascript" src="<%=libPath %>jquery/jquery-1.4.2.js"></script>

<script>

	$(document).ready(function(){
		if ("${errMsg}" != null && "${errMsg}" != "") {
			alert("${errMsg}");
		}
	});

	//=========================================================================================
	// ID			 ：check()
	// 概要			 ：登録処理
	// 入力            		 ：なし
	// 返却値        		 ：なし
	// 作成日／者    	 ：2014/10/27 NHNST Co.
	//=========================================================================================   
	function doLogin(){
		document.login.submit();		
	}

	//=========================================================================================
	// ID         ：cancel()
	// 概要                   ：キャンセルボタン時の処理
	// 入力                   ：なし
	// 返却値        	     ：なし
	// 作成日／者    ：2014/10/27 NHNST Co.
	//=========================================================================================
	function cancel(){
		window.close();
	}

</script>
</head>
<body bgcolor="#ffffff">
<form name="login" id="login" action="local_login.do"  method="POST" >

<table width="100%" height="100%" cellpadding="0" cellspacing="0" align="center">
	<tr>
		<td align="center">
		<table width="454" cellspacing="0" cellpadding="0">
			<tr>
				<td height="246" align="center" background="/include/images/login/login_bg.gif">
				<table width="350" cellspacing="0" cellpadding="0">
					<tr>
						<td height="65">&nbsp;</td>
					</tr>
					<tr>
						<td bgcolor="E7E7E7">
						<table width="350" cellspacing="1" cellpadding="0">
							<tr>
								<td height="110" align="center" bgcolor="#FFFFFF">
									<table cellspacing="0" cellpadding="4" style="width: 336px">
										<tr>
											<td style="width: 100px" align="left">&nbsp;
												<img  src="<%=loginImgPath%>login_dot.gif" height="6" align="absmiddle">
												<span id="idLbl" style="font-weight:bold;"><spring:message code="login.userid" /></span>
											</td>
											<td style="width: 187px">
												<input type="text" id="userId"  name="userId" value="${userCd}" style="width: 120px;"/>
											</td>
										</tr>
										<tr>
											<td style="width: 100px" align="left">&nbsp;
												<img src="<%=loginImgPath%>login_dot.gif" height="6" align="absmiddle">
												<span id="pwdLbl" style="font-weight:bold;"><spring:message code="login.password" /></span>
											</td>
											<td style="width: 187px">
												<input type="password" id="passwd"  name="passwd" value="${passwd}" style="width: 120px;" />
											</td>
										</tr>
										<tr height="10px"></tr>
										<tr>
											<td align="center" colspan="2">
												 <input type="image" name="ib_login" id="ib_login" src="<%=loginImgPath%>btn_login.gif" onclick="javascript:doLogin();" style="border-width:0px;" />
												 <input type="image" name="ib_cancel" id="ib_cancel" src="<%=loginImgPath%>btn_cancel.gif" onclick="javascript:cancel();" style="border-width:0px;" />
											</td>
										</tr>
									</table>
								</td>
							</tr>
						</table>
						</td>
					</tr>
					<tr>
						<td height="20" align="right" valign="bottom">&nbsp;
						</td>
					</tr>
				</table>
				</td>
			</tr>
			<tr>
				<td height="50" align="center">旭天科技</td>
			</tr>
		</table>
		</td>
	</tr>
</table>
</form>
</body>
</html>