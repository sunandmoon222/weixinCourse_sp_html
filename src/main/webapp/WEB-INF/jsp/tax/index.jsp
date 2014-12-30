<%@ page language="java" contentType="text/html; charset=UTF-8"%>
<%@ include file="/WEB-INF/jsp/util/include.jsp"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
<link rel="stylesheet" type="text/css" href="<%=cssPath %>jquery.mobile-1.0b1.css"/>
<script src="http://code.jquery.com/jquery-1.6.min.js" type="text/javascript"></script>
<script src="http://code.jquery.com/mobile/1.0b1/jquery.mobile-1.0b1.min.js"></script>
<title>发票查询系统</title>
<script>

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
	$("#taxCode").select();
	return;
}

function search() {
	
    $.ajax({
        type : "POST",
        dataType:'json',
        url  : "/weixinCourse_sp/tax/query.do",
        cache : false,
        data : $("#dataQuery").serialize(),
        success: function (result) {
        	alert(result.name);
        	if (result.status == 'true') {
        		$('#name').html(result.name);
                $('#date').html(result.year+result.month);
                $('#idNum').html(result.idNum);
            	$('#bound').html(result.bound);
            	$('#payee').html(result.payee);
            	$("#result2").css('display','none');	
            	$("#result1").css('display','block');	
        	} else {
        		$("#result1").css('display','none');
        		$("#result2").css('display','block');	
        	}
        },
        error : function (result) {
            alert("2343");
            alert(result.success);
            alert(result.result);
            alert(result.year);

        }
    }); 
}

</script>
</head>
<body>

<div data-role="page">
  <div data-role="content" data-theme="e">
    <form  id="dataQuery" name="dataQuery">
      <h1>欢迎进入发票查询系统!</h1>
      <h1>您能查询到${year}年第${month}期开奖结果</h1>
      <div data-role="fieldcontain">
        <label for="taxCode">发票代码：</label>
        <input type="text" name="taxCode" id="taxCode" placeholder="请输入12位数字发票代码...">
        <br><br>
        <label for="taxNum">发票号码：</label>
        <input type="text" name="taxNum" id="taxNum" placeholder="请输入8位数字发票号码...">
      </div>
      <a href="javascript:search();" data-role="button" data-inline="true" data-icon="search" style="float: right;">查询</a>
      <a href="javascript:clear();" data-role="button" data-inline="true" data-icon="delete" style="float: right;">重置</a>
    </form>
  </div>
  
  <div id="result1" style="display: none;" data-role="content" data-theme="b">
      <h1>查询结果</h1>
      <p>发票名称          :<span id="name"></span></p>
      <p>摇奖期              :<span id="date"></span></p>
      <p>奖项                  :<span id="idNum"></span></p>
      <p>奖金                  :<span id="bound"></span></p>
      <p>消费单位         :<span id="payee"></span></p>
  </div>
  
   <div id="result2" style="display: none; style="display: none;" data-role="content" data-theme="b">
      <h1>您的发票没有中奖，很遗憾！</h1>
  </div>
</div>
</body>
</html>