<%@ page language="java" contentType="text/html; charset=UTF-8"%>
<%@ include file="/WEB-INF/jsp/util/include.jsp"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
<link rel="stylesheet" href="http://code.jquery.com/mobile/1.3.2/jquery.mobile-1.3.2.min.css">
<script src="http://code.jquery.com/jquery-1.8.3.min.js"></script>
<script src="http://code.jquery.com/mobile/1.3.2/jquery.mobile-1.3.2.min.js"></script>
<title>发票查询系统</title>
<script>

function checkNum(num) {
	var patt=new RegExp("\\D");
	return patt.test(num);
}

function doCheck() {
	if ($("#taxCode").val() == "") {
		alert("请输入发票代码！");
		return false;
	}
	if ($("#taxNum").val() == "") {
		alert("请输入发票号码");
		return false;
	}
	
	if (checkNum($("#taxCode").val())) {
		alert("发票代码为12位数字，请重新输入");
		return false;
	}

	if (checkNum($("#taxNum").val())) {
		alert("发票号码为8位数字，请重新输入");
		return false;
	}
	
	if ($("#taxCode").val().length != 12) {
		alert("发票代码为12位数字,您输入了" + $("#taxCode").val().length+"位，请重新输入！");
		return false;
	}
	if ($("#taxNum").val().length != 8) {
		alert("发票号码为8位数字,您输入了" + $("#taxNum").val().length+"位，请重新输入！");
		return false;
	}	
//	if (!checkNum($("#taxNum").val())) {
//		return false;
//	}
	
	return true;
}
function clear() {
	$("#taxCode").val("");
	$("#taxNum").val("");
	$('#name').html('');
	$('#data').html('');
	$('#idNum').html('');
	$('#bound').html('');
	$('#payee').html('');
	$("#result1").css('display','none');
	$("#result2").css('display','none'); 
	return;
}

function search() {
	
	
	if(!doCheck()) {
		return;	
	}
	
    $.ajax({
        type : "POST",
        dataType:'json',
        url  : "/weixinCourse_sp/tax/query.do",
        cache : false,
        data : $("#dataQuery").serialize(),
        success: function (result) {
        	if (result.status == 'true') {
        		$('#idNum').html('恭喜您中' + result.idNum);
            	$('#bound').html('奖金:'+result.bound);
                $('#date').html('摇奖期:' + result.year+result.month);
                $('#name').html('发票名称:<br>' + result.name);
            	$('#payee').html('消费单位<br>' + result.payee);
            	$("#result2").css('display','none');	
            	$("#result1").css('display','block');	
        	} else {
        		$("#result1").css('display','none');
        		$("#result2").css('display','block');	
        	}
        },
        error : function (result) {
            alert("查询失败，请重试！");
        }
    }); 
}

</script>
</head>
<body>

<div data-role="page">
  <div data-role="content" data-theme="e">
    <form  id="dataQuery" name="dataQuery">
      <p style="text-align: center;">欢迎进入发票查询系统!</p><br>
      <p>您能查询到${year}年第${month}期开奖结果</p><br>
      <div>
        <label for="taxCode">发票代码：<span style="float: right;"><a href="#popupCodePng" data-rel="popup" data-transition="pop">帮助</a></span></label>
        <input type="number" name="taxCode" id="taxCode" placeholder="请输入12位数字发票代码...">
        <label for="taxNum">发票号码：<span style="float: right;"><a href="#popupNumPng" data-rel="popup" data-transition="pop">帮助</a></span></label>
        <input type="number" name="taxNum" id="taxNum" placeholder="请输入8位数字发票号码...">
      </div>
      <a href="javascript:search();" data-role="button" data-inline="true" data-icon="search" style="float: right;">查询</a>
      <a href="javascript:clear();" data-role="button" data-inline="true" data-icon="delete" style="float: right;">重置</a>
      
    </form>
	  <div id="result1" style="display: none;">
	  <br><br>
	  <p>
	      <span id="idNum" style="color: red;font-size: 150%;font-weight:bold;"></span><br><br>
	      <span id="bound" style="color: red;font-size: 100%;font-weight:bold;"></span><br><br>
	      <span id="date"  style="font-size: 100%;font-weight:bold;"></span><br><br>
	      <span id="name" style="font-size: 100%;font-weight:bold;"></span><br><br>
	      <span id="payee" style="font-size: 100%;font-weight:bold;"></span>
	  </p>
	  </div>
	  
	   <div id="result2" style="display: none; style="display: none;">
	   <br><br>
	   <p>
	      <span style="color: red;font-size: 150%;font-weight:bold;">发票没有中奖，很遗憾！</span>
	      <a href="#" data-icon="search" style="width: 10px;height: 10px"></a>
	     <p>
	  </div>
  </div>
  <div data-role="popup" id="popupCodePng">
	<img src="<%=imgPath %>TaxCode.png">
  </div>
  <div data-role="popup" id="popupNumPng">
	<img src="<%=imgPath %>TaxNum.png">
  </div>
</div>
</body>
</html>