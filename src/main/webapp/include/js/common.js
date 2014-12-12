/******************************************************************************
 * File Name : common.js
 * 설명 : ERMS 공통 스크립트
 * 내용 : string, form, 유효성체크 관련 스크립트
 *****************************************************************************/


/** string 관련 시작 ==================================================== */

/*------------------------------------------------------------------------------
 * 앞뒤 공백 제거..
 *----------------------------------------------------------------------------*/

String.prototype.trim = function()
{
	return this.replace(/^\s*(\b.*\b|)\s*$/, "$1");
}

/*------------------------------------------------------------------------------
 * 문자열의 뒤에서 부터 str 문자를 len 갯수만큼 삭제한다.
 *----------------------------------------------------------------------------*/
String.prototype.rtrim = function(str, len) {
	var source = this;
	
	for(var i = 0; i < len; i++ ) {
		var eIdx = source.lastIndexOf(str);
		source = source.substring(0, eIdx);
	}
	
	return source;
}

/*------------------------------------------------------------------------------
 * 조회된 필드에 값이 없을 때
 * 테이블깨지는 것 방지하기 위해 공백을 넣어줌
 *----------------------------------------------------------------------------*/
function putSpace(str)
{
	return str == "" ? "&nbsp;" : str;
}

/*------------------------------------------------------------------------------
 * 금액에 3자리마다 콤마 넣어줌
 *----------------------------------------------------------------------------*/
function moneyType(num)
{
	tmp = "";
	j = 0;

	for (i = num.length ; i > 0 ; i--)
	{
		j++;
		tmp = num.substr(i-1, 1) + tmp;

		if ( j%3 == 0 && j < num.length )
		{
			tmp = "," + tmp;
		}
	}
	return tmp;
}

/*------------------------------------------------------------------------------
 * 문자열의 길이를 반환 (한글 --> 2)
 *----------------------------------------------------------------------------*/
function getByteSize(arg_str) {
    var j = 0;
    var tempStr;
    var tempStr2;

    for ( var i = 0; i < arg_str.length; i++ )
    {
        tempStr = arg_str.charCodeAt(i);
        tempStr2 = tempStr.toString();

        if ( tempStr2.length >= 5 )
        {
            j ++;
        }
    }
    return i + j;
}


/*------------------------------------------------------------------------------
 * 문자열을 구분자로 나누어 배열로 만든다.
 *----------------------------------------------------------------------------*/
function toArray(str, key) {
	var arr = new Array();
	
	var arrIdx = 0;
	var idx = -1;
	while( (idx = str.indexOf(key)) >= 0 ) {
		arr[arrIdx] = str.substring(0, idx);
		str = str.substring(idx + 1);
		arrIdx++;
	}
	if( str.length > 0 )
		arr.push(str);
   	
   	return arr;
}


/*------------------------------------------------------------------------------
 * 주어진 len에 맞게 문자열을 자르고 tail 을 붙인다. (문자열이 len 보다 클 경우만)
 *----------------------------------------------------------------------------*/
String.prototype.cut = function(len, tail) {
    var str = this;
    var l = 0;
    for (var i=0; i<str.length; i++) 
    {
        l += (str.charCodeAt(i) > 128) ? 2 : 1;
        if (l > len) return str.substring(0,i) + tail;
    }
    return str;
}

/*------------------------------------------------------------------------------
 * 문자열이 str로 시작되는지 확인한다. (startIdx 부터 체크)
 *----------------------------------------------------------------------------*/
String.prototype.startWith = function(str, startIdx) {
	if( startIdx == undefined || startIdx == null ) 
		startIdx = 0;
		
	if( str.length < startIdx ) return false;
	
	var substr = str.substring(startIdx, str.length);
	
	if( substr == str ) 	
		return true;
	else					
		return false;
}

/*------------------------------------------------------------------------------
 * 문자열이 str로 시작되는지 확인한다. (startIdx 부터 체크)
 *----------------------------------------------------------------------------*/
String.prototype.startWith2 = function(str, startIdx) {
	if( startIdx == undefined || startIdx == null ) 
		startIdx = 0;
		
	var str1 = this;
	if( str1.length < startIdx ) return false;
	if( str1.length < startIdx + str.length ) 	return false;
	
	var substr = str1.substring(startIdx, str.length);
	
	if( substr == str ) 	
		return true;
	else					
		return false;
}

/*------------------------------------------------------------------------------
 * 문자열에서 str의 갯수를 리턴한다.
 *----------------------------------------------------------------------------*/
String.prototype.count = function(str) {
	var count = 0;
	var source = this;
	
	for( var i = 0; i < source.length; i++ ) {
		if( source.indexOf(str, i) == -1 )
			break;
		else {
			i = source.indexOf(str, i);
			count++;
		}
	}
	
	return count;
}

/*------------------------------------------------------------------------------
 * 현재 일자 (YYYYMMDD)
 *----------------------------------------------------------------------------*/
function getCurrentDate()
{
	var isnMonth = new Array("01","02","03","04","05","06","07","08","09","10","11","12");
	var today = new Date() ;
	var Year = today.getYear();
	var aDate = today.getDate();
	var month;
	var lastDate = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);

    //윤년을 검사한다.
	if ( (0 == Year % 4 && 0 != Year % 100 ) || 0 == Year % 400 )
	{
		lastDate[1] = 29; /**윤년인 경우 2월의 마지막 날짜를 29로 입력*/
	}
	month = isnMonth[today.getMonth()];
	aDate = today.getDate();

    if (aDate ==1 ) aDate = "01";
	if (aDate ==2 ) aDate = "02";
	if (aDate ==3 ) aDate = "03";
	if (aDate ==4 ) aDate = "04";
	if (aDate ==5 ) aDate = "05";
	if (aDate ==6 ) aDate = "06";
	if (aDate ==7 ) aDate = "07";
	if (aDate ==8 ) aDate = "08";
	if (aDate ==9 ) aDate = "09";

    return Year + month + aDate;
}
/** string 관련 끝  ==================================================== */




/** form 관련 시작 ==================================================== */

/*------------------------------------------------------------------------------
 * 텍스트필드에 입력한 자리수가 다 차면
 * 다음 object로 포커스를 옮겨 준다.
 *----------------------------------------------------------------------------*/
function moveFocus(cnt, from, to)
{
	if (from.value.length == cnt)
		to.focus();
	return;
}

/*------------------------------------------------------------------------------
 * 키 이벤트를 받아서
 * 입력 form에 숫자만 입력되게 한다.
 *----------------------------------------------------------------------------*/
function onlyNum()
{
//    if (event.keyCode < 45 ||
//        event.keyCode > 57 ||
//        ((event.keyCode > 32 && event.keyCode < 48) ||
//         (event.keyCode > 57 && event.keyCode < 65) ||
//         (event.keyCode > 90 && event.keyCode < 97)) )

    if (
            ( event.keyCode >=48 && event.keyCode <= 57 ) ||   // 키보드 숫자키
            ( event.keyCode >=96 && event.keyCode <= 105 ) || // 키패드 숫자키
            ( event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 ) || // delete, backspace, tab key
            ( event.keyCode >=37 && event.keyCode <= 40 ) // 방향키
       )
    {}
    else
        event.returnValue = false;
}

/** form 관련 끝  ==================================================== */





/** validation check 관련 시작 ========================================== */

/*------------------------------------------------------------------------------
 * 입력받은 값이 숫자인지 체크
 *----------------------------------------------------------------------------*/
function isNumber(num)
{
	for ( i = 0; i <= num.length; i++)
	{
		ch = num.charCodeAt(i);
		if (ch < 48 || ch > 57)
		{
			return false;
		}
	}
	return true;
}

/*------------------------------------------------------------------------------
 * 문자열이 'YYYYMMDD'포맷에 맞는 올바른 날짜인지 체크
 * 윤년 체크
 * getByteSize(), isNumber() 사용
 * return : boolean
 *----------------------------------------------------------------------------*/
function isValidDate( dateString )
{
    var intMonth = 0, intYear = 0, intDay = 0;
    chkDay = new Array( 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 );

    if ( getByteSize(dateString) != 8 )
    {
        return false;
    }
    if ( isNumber(dateString.substring(0,4)) )
    {
        intYear = parseInt( dateString.substring(0,4),10 );
        if ( intYear >= 1900 && intYear <= 2100 )
        {
            if( intYear % 4 == 0) chkDay[1] = 29;
            if( intYear % 100 == 0 ) chkDay[1] = 28;
            if( intYear % 400 == 0 ) chkDay[1] = 29;
        }
        else return false;
    }
    else return false;
    if ( isNumber(dateString.substring(4,6)) )
    {
        intMonth = parseInt(dateString.substring(4,6),10);
        if ( intMonth < 1 || intMonth > 12 )
            return false;
    }
    else
        return false;
    if ( isNumber(dateString.substring(6,8)) )
    {
        intDay = parseInt(dateString.substring(6,8),10);
        if ( intDay < 1 || intDay > chkDay[intMonth-1] )
            return false;
    }
    else
        return false;
    return true;
}
/** validation check 관련 끝 ========================================== */





/** 리스트 row color 관련 = ========================================== */
var isClicked = 0;
var newRow = "";
var oldRow = "";
var onBackground ="#DFF1D7";
var offBackground="#F3F3F3";
var clickBackground="#D3DEEF";
/*------------------------------------------------------------------------------
 * mouse over
 *----------------------------------------------------------------------------*/
function onColor(aRow)
{
    if (oldRow != aRow )
    {
        aRow.style.background = onBackground;
    }
}
/*------------------------------------------------------------------------------
 * mouse out
 *----------------------------------------------------------------------------*/
function offColor(aRow)
{
    if (oldRow != aRow )
    {
        aRow.style.background = offBackground;
    }
}
/*------------------------------------------------------------------------------
 * mouse click
 *----------------------------------------------------------------------------*/
function setColor(newRow)
{
    if ( isClicked == 0 )
    {
        newRow.style.background = clickBackground;
        isClicked = 1;
    }
    else if ( oldRow.value != newRow.value )
    {
        oldRow.style.background = offBackground;
        newRow.style.background = clickBackground;
    }
    oldRow = newRow;
}




/** 기타  ========================================================= */

/*------------------------------------------------------------------------------
 * 로딩 중 대기메세지 보여주기
 *----------------------------------------------------------------------------*/
function hidePreload() {
	preload.style.visibility = "hidden";
}

function makePreload(msg) {
	document.write("<div id='preload' style='position:absolute;top:0;left:0;width:100%;height:100%; background-color:white; color:black; text-align:center; z-index:1'>",
				   "<table border=0 height=100%><tr><td>", msg, "</td></tr></table></div>");
}

/*------------------------------------------------------------------------------
 * 풍선도움말 띄우기
 *----------------------------------------------------------------------------*/
function showTip(obj, e, text)
{
	if (document.all)
    {
		theTitle = text.split('<br>');
		if (theTitle.length > 1)
        {
			theTitles = ''
			for ( i = 0; i < theTitle.length; i++ )
				theTitles += theTitle[i]
			obj.title = theTitles
		}
		else
			obj.title = text
	}
	else if (document.layers)
    {
		document.tooltip.document.write('<layer bgColor="white" style="border:1px solid black;font-size:12px;"> '+ text +' </layer>')
		document.tooltip.document.close()
		document.tooltip.left = e.pageX + 5
		document.tooltip.top = e.pageY + 5
		document.tooltip.visibility="show"
	}
}

/*------------------------------------------------------------------------------
 * 풍선도움말 숨기기
 *----------------------------------------------------------------------------*/
function hideTip()
{
    if(document.layers)
        document.tooltip.visibility="hidden"
}

/*------------------------------------------------------------------------------
 * Flash 파일 호출 
 *----------------------------------------------------------------------------*/
function getFlash( swf, data, name, width, height ){


	if( name == undefined )		name = "flash1";
	if( width == undefined )	width = "100%";
	if( height == undefined )	height = "100%";
	
    var returnStr = "";
    returnStr += "<object classid='clsid:D27CDB6E-AE6D-11cf-96B8-444553540000' ";
    returnStr += "        id='" + name + "' width='" + width + "' height='" + height + "' ";
    returnStr += "        codebase='http://fpdownload.macromedia.com/get/flashplayer/current/swflash.cab'> ";
    //returnStr += "	  <param name='wmode' value='opaque' />";
    returnStr += "    <param name='movie' value='" + swf + "' />";
    returnStr += "    <param name='quality' value='high' /> ";
    returnStr += "    <param name='allowScriptAccess' value='sameDomain' /> ";
    returnStr += "    <param name='flashvars' value=\"" + data + "\" /> ";
    returnStr += "    <embed src='" + swf + "' quality='high' bgcolor='#869ca7' ";
    returnStr += "           width='" + width + "' height='" + height + "' name='" + name + "' align='middle' ";
    returnStr += "           play='true' ";
    returnStr += "           loop='false' ";
    returnStr += "           quality='high' ";
    returnStr += "           allowScriptAccess='sameDomain' ";
    returnStr += "           type='application/x-shockwave-flash' ";
    returnStr += "           pluginspage='http://www.adobe.com/go/getflashplayer' ";
    returnStr += "           flashvars=\"" + data + "\">";
    returnStr += "    </embed> ";
    returnStr += "</object> ";


  document.write ( returnStr );
  

}


//===============================================================
// --------- 6. AJAX 과 관련된 함수들... 시작  -----------------------

// 요청객체를 생성하는 랩퍼함수
function httpRequest(reqType, url, asynch, respHandle) {
	// 모질라 기반 브라우져
	if( window.XMLHttpRequest) {
		request = new XMLHttpRequest();
	} else if ( window.ActiveXObject) {
		request = new ActiveXObject("Msxml2.XMLHTTP");
		if( !request ) {
			request = new ActiveXObject("Microsoft.XMLHTTP");
		}
	}
	
	// 요청객체가 생성됐는지를 검사
	if( request ) {
		// reqType의 값이 POST 면 5번째 매개변수는 전송될 데이타
		if( reqType.toLowerCase() != "post" ) {
			initReq(reqType, url, asynch, respHandle);
		} else {
			// POST 전송되는 데이타
			var args = arguments[4];
			if( args != null && args.length > 0) {
				initReq(reqType, url, asynch, respHandle, args);
			} else {
				var args5 = arguments[5];
				if( args5 != null && args5.length > 0 )
					initReq(reqType, url, asynch, respHandle, setQueryString(args5));
				else
					initReq(reqType, url, asynch, respHandle, setQueryString());
			}
		}
	} else {
		alert("Your browser does not permit the use of all of this application's features!");
	}
}

// 생성된 요청객체를 초기화
function initReq(reqType, url, bool, respHandle) {
	try {
		// HTTP 응담을 처리할 함수를 지정
		//request.setRequestHeader('ajax' , 'true');
		request.onreadystatechange = respHandle;
		request.open(reqType, url, bool);
		
		// reqType 의 값이 POST 면 5번째 매개변수는 전송될 데이타
		if( reqType.toLowerCase() == "post" ) {
			request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");// 
			
			//request.setRequestHeader('ajax' , 'true')
			request.send(arguments[4]);
		} else {
			request.send(null);
		}
	} catch(e) {
		alert("The application cannot contact the server at the moment.\n" +
			"Please try again in a few seconds.\n" +
			"Error detail: " + e.message);
	}
}


function setQueryString(frm) {
	if( frm == undefined || frm == null )
		frm = document.forms[0];
		
	var queryString = "";
	//var frm = document.forms[0];
	var numberElements = frm.elements.length;
	
	for( var i = 0; i < numberElements; i++ ) {		
		if( frm.elements[i].name == undefined || frm.elements[i].name == "" )
			continue;
			
		var val =  encodeURIComponent(getElementValue(frm.elements[i]));
		if( val != undefined && val != null && val != "" ) {
			queryString += frm.elements[i].name + "=" + val;
		
			if( i < numberElements - 1) {
				queryString += "&";
			} 
		}
	}
	
	return queryString;
}

function getElementValue(obj) {
	if( obj.type == "radio" ) {
		if( obj.checked )
			return obj.value;
	} else
		return obj.value;
		
	return "";
}

// --------- 6. AJAX 과 관련된 함수들... 끝  -------------------------
//===============================================================




//===============================================================
// --------- 7. FGrid 와 관련된 함수들... 시작  -----------------------

/*------------------------------------------------------------------------------
 * FGrid로 부터 XML형태로 넘어온 object를 javascript의 array 로 변경...
 *----------------------------------------------------------------------------*/
 function convertXml2Array(xml, keys) {
 	
 	var arr = new Array();
 	
 	if( !xml.startWith("<DATA>") ) {
 		alert("데이타 포멧이 잘못되었습니다.");
 		return;
 	}
 	
 	var trArr = xml.substring("<DATA>".length).split("<TR>");
 	for( var i = 1; i < trArr.length; i++ ) {
 		var eIdx = trArr[i].lastIndexOf("</TR>");
 		trArr[i] = trArr[i].substring(0, eIdx);
 		
 		var obj = convertXml2Object(trArr[i], keys);
 		
 		arr.push(obj);
 	}
 	
 	return arr;
 }
 
/*------------------------------------------------------------------------------
 * FGrid로 부터 XML형태로 넘어온 object를 JSON 형태( [{"col1":"val1", "col2":"val2"}, {...}] )로 변경...
 *----------------------------------------------------------------------------*/
function convertXml2JSON(xml, keys) {
 	var jsonStr;
 	
 	if( !xml.startWith("<DATA>") ) {
 		alert("데이타 포멧이 잘못되었습니다.");
 		return;
 	}
 	
 	var trArr = xml.substring("<DATA>".length).split("<TR>");
 	jsonStr = "[ " ;
 	for( var i = 1; i < trArr.length; i++ ) {
 		var eIdx = trArr[i].lastIndexOf("</TR>");
 		trArr[i] = trArr[i].substring(0, eIdx);
 		
 		var obj = convertXml2Object(trArr[i], keys);
 		
 		if( i < trArr.length-1 ) {
 			obj += ", ";
 		}
 			
 		jsonStr += obj;
 	}
 	
 	return jsonStr + "]";
 }

function convertXml2Object(str, keys) {
	if( str.length < 1 ) return;
	
	var obj = "{";
	var keyArr = toArray(keys, "|");
	
	for( var i = 0; i < keyArr.length; i++ ) {
		if( str.indexOf("<" + keyArr[i] + "/>") > -1 )
			obj = obj + "\"" + keyArr[i] + "\": \"\"" ;
		else {
			var sIdx = str.indexOf("<" + keyArr[i] + ">");
			sIdx += ("<" + keyArr[i] + ">").length
			var eIdx = str.lastIndexOf("</" + keyArr[i] + ">");
			
			var val = str.substring(sIdx, eIdx);
			val = val.replace(/\"/g, "'");
			obj = obj + "\"" + keyArr[i] + "\": \"" + val + "\"";
		}
		
		if( i < keyArr.length - 1 ) 
			obj += ", ";
	}
	
	return obj + "}";
}
// --------- 7. FGrid 와  관련된 함수들... 끝  -------------------------
//===============================================================



/** 경영계획 시스템에서 사용하는 함수들 =============================================== */

/*------------------------------------------------------------------------------
 * 선택된 코스트센타 코드 가져오기 (Top Menu 레벨에 있는)
 *----------------------------------------------------------------------------*/
function getUserCostCtrCd() {
	var obj = top.topframe.document.getElementById("condUserCostCtrCd");
	
	return obj[obj.selectedIndex].value;
}

/*------------------------------------------------------------------------------
 * 선택된 코스트센타 명 가져오기 (Top Menu 레벨에 있는)
 *----------------------------------------------------------------------------*/
function getUserCostCtrNm() {
	var obj = top.topframe.document.getElementById("condUserCostCtrCd");
	
	return obj[obj.selectedIndex].text;
}
 

/** ERM 시스템에서 사용하는 함수들 =============================================== */

/*------------------------------------------------------------------------------
 * 확인처리시 상태값 체크하기
 *----------------------------------------------------------------------------*/
function chkApprStatObject(str, useYN, apprStat, noStr, alertMsg) {
	
	var json = JSON.parse(str);
	
	if( useYN != null && useYN == 'N' ) {
		alert("삭제된 데이타는 작업할 수 없습니다. 사용여부 필드를 확인하세요.");
		return false;
	}
	
	if( noStr.search(apprStat) >= 0 ) {
		alert(alertMsg);
		return false;
	}
	
	return true;
}

/*------------------------------------------------------------------------------
 * 삭제/복구시 상태값 체크하기
 *----------------------------------------------------------------------------*/
function chkUseYnObject(str, useYN, noStr, alertMsg) {
	
	var json = JSON.parse(str);
	
	if( useYN.search(noStr) >= 0 ) {
		alert(alertMsg);
		return false;
	}
	
	return true;
}

/*------------------------------------------------------------------------------
 * 팝업에서 넘어온 코드를 해당 필드에 적용한다.(귀속부서, 서비스)
 *----------------------------------------------------------------------------*/
function setPopupCode(row, textFieldNm, codeFieldNm, code, codeV){
	
	if(textFieldNm != ""){
    	grid.setGridValue(parseInt(row,10),textFieldNm,codeV);
    }
    if(codeFieldNm != ""){	      
    	grid.setGridValue(parseInt(row,10),codeFieldNm,code);
    }	    
       
}	


/*------------------------------------------------------------------------------
 * Fgrid의 내용을 저장할때 중복되는 필드들이 있는지 체크한다.
 *----------------------------------------------------------------------------*/
function isUnique(unique,uniqueText){

	if(unique != null && unique != "" && unique != undefined){
		
		var chr = "";
			
		var tempStr = "";
			
		for(i=0; i<unique.length; i++){
			
			chr = unique.charAt(i).toLowerCase();
				
			tempStr += chr;
		}
			
		unique = tempStr;
			
		//alert("unique = " + unique);
		
		var resultArray = grid.getAllDuplication(unique);
	
		var msg = "";
	
		if( resultArray != "" && resultArray != null && resultArray != undefined){
			
			msg = resultArray + "행의 " + uniqueText + "이(가) 중복 입력 되었습니다.";
				
			alert(msg);
				
			return false;
		}
		  
	}  
	       
	return true;
}	

/*------------------------------------------------------------------------------
 * common ajax submit (
 *----------------------------------------------------------------------------*/
function fnAjaxsubmit(async,  url, jsonData,successFunc, errorFunc,dateType){
	   jQuery.ajax( {
	       type : 'POST',
	       url : url,    			// request url
	       async: async,			// is synchronization : true ,otherwise false; 
	       data :jsonData,			// request parmameter (json)
	       dataType : dateType,		// data type: html,json etc.
	       success : successFunc ? successFunc : function(json, status){},   // to do after request success 
	       error : errorFunc ? errorFunc : function(xhr, status, thrown){}   // to do after request failure
	     });
	};

new function(settings) {  var $separator = settings.separator || '&';  var $spaces = settings.spaces === false ? false : true;  var $suffix = settings.suffix === false ? '' : '[]';  var $prefix = settings.prefix === false ? false : true;  var $hash = $prefix ? settings.hash === true ? "#" : "?" : "";  var $numbers = settings.numbers === false ? false : true;    jQuery.query = new function() {    var is = function(o, t) {      return o != undefined && o !== null && (!!t ? o.constructor == t : true);    };    var parse = function(path) {      var m, rx = /\[([^[]*)\]/g, match = /^([^[]+)(\[.*\])?$/.exec(path), base = match[1], tokens = [];      while (m = rx.exec(match[2])) tokens.push(m[1]);      return [base, tokens];    };    var set = function(target, tokens, value) {      var o, token = tokens.shift();      if (typeof target != 'object') target = null;      if (token === "") {        if (!target) target = [];        if (is(target, Array)) {          target.push(tokens.length == 0 ? value : set(null, tokens.slice(0), value));        } else if (is(target, Object)) {          var i = 0;          while (target[i++] != null);          target[--i] = tokens.length == 0 ? value : set(target[i], tokens.slice(0), value);        } else {          target = [];          target.push(tokens.length == 0 ? value : set(null, tokens.slice(0), value));        }      } else if (token && token.match(/^\s*[0-9]+\s*$/)) {        var index = parseInt(token, 10);        if (!target) target = [];        target[index] = tokens.length == 0 ? value : set(target[index], tokens.slice(0), value);      } else if (token) {        var index = token.replace(/^\s*|\s*$/g, "");        if (!target) target = {};        if (is(target, Array)) {          var temp = {};          for (var i = 0; i < target.length; ++i) {            temp[i] = target[i];          }          target = temp;        }        target[index] = tokens.length == 0 ? value : set(target[index], tokens.slice(0), value);      } else {        return value;      }      return target;    };        var queryObject = function(a) {      var self = this;      self.keys = {};            if (a.queryObject) {        jQuery.each(a.get(), function(key, val) {          self.SET(key, val);        });      } else {        jQuery.each(arguments, function() {          var q = "" + this;          q = q.replace(/^[?#]/,'');          q = q.replace(/[;&]$/,'');          if ($spaces) q = q.replace(/[+]/g,' ');                    jQuery.each(q.split(/[&;]/), function(){            var key = decodeURIComponent(this.split('=')[0] || "");            var val = decodeURIComponent(this.split('=')[1] || "");                        if (!key) return;                        if ($numbers) {              if (/^[+-]?[0-9]+\.[0-9]*$/.test(val))                val = parseFloat(val);              else if (/^[+-]?[0-9]+$/.test(val))                val = parseInt(val, 10);            }                        val = (!val && val !== 0) ? true : val;                        if (val !== false && val !== true && typeof val != 'number')              val = val;                        self.SET(key, val);          });        });      }      return self;    };        queryObject.prototype = {      queryObject: true,      has: function(key, type) {        var value = this.get(key);        return is(value, type);      },      GET: function(key) {        if (!is(key)) return this.keys;        var parsed = parse(key), base = parsed[0], tokens = parsed[1];        var target = this.keys[base];        while (target != null && tokens.length != 0) {          target = target[tokens.shift()];        }        return typeof target == 'number' ? target : target || "";      },      get: function(key) {        var target = this.GET(key);        if (is(target, Object))          return jQuery.extend(true, {}, target);        else if (is(target, Array))          return target.slice(0);        return target;      },      SET: function(key, val) {        var value = !is(val) ? null : val;        var parsed = parse(key), base = parsed[0], tokens = parsed[1];        var target = this.keys[base];        this.keys[base] = set(target, tokens.slice(0), value);        return this;      },      set: function(key, val) {        return this.copy().SET(key, val);      },      REMOVE: function(key) {        return this.SET(key, null).COMPACT();      },      remove: function(key) {        return this.copy().REMOVE(key);      },      EMPTY: function() {        var self = this;        jQuery.each(self.keys, function(key, value) {          delete self.keys[key];        });        return self;      },      load: function(url) {        var hash = url.replace(/^.*?[#](.+?)(?:\?.+)?$/, "$1");        var search = url.replace(/^.*?[?](.+?)(?:#.+)?$/, "$1");        return new queryObject(url.length == search.length ? '' : search, url.length == hash.length ? '' : hash);      },      empty: function() {        return this.copy().EMPTY();      },      copy: function() {        return new queryObject(this);      },      COMPACT: function() {        function build(orig) {          var obj = typeof orig == "object" ? is(orig, Array) ? [] : {} : orig;          if (typeof orig == 'object') {            function add(o, key, value) {              if (is(o, Array))                o.push(value);              else                o[key] = value;            }            jQuery.each(orig, function(key, value) {              if (!is(value)) return true;              add(obj, key, build(value));            });          }          return obj;        }        this.keys = build(this.keys);        return this;      },      compact: function() {        return this.copy().COMPACT();      },      toString: function() {        var i = 0, queryString = [], chunks = [], self = this;        var encode = function(str) {          str = str + "";          if ($spaces) str = str.replace(/ /g, "+");          return encodeURIComponent(str);        };        var addFields = function(arr, key, value) {          if (!is(value) || value === false) return;          var o = [encode(key)];          if (value !== true) {            o.push("=");            o.push(encode(value));          }          arr.push(o.join(""));        };        var build = function(obj, base) {          var newKey = function(key) {            return !base || base == "" ? [key].join("") : [base, "[", key, "]"].join("");          };          jQuery.each(obj, function(key, value) {            if (typeof value == 'object')               build(value, newKey(key));            else              addFields(chunks, newKey(key), value);          });        };                build(this.keys);                if (chunks.length > 0) queryString.push($hash);        queryString.push(chunks.join($separator));                return queryString.join("");      }    };        return new queryObject(location.search, location.hash);  };}(jQuery.query || {});