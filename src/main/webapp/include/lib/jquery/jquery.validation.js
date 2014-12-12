/**
 * jQuery validation check plugins 
 * 
 * 
 * @author NHN서비스 고객마케팅개발팀  
 * 
 * <code> 
 * var isValid = $('#frm').validation({
 * 	field : [ 
 *     	{ msg : '입력하세요', type : 'empty'},
 *      { msg : '입력하세요', type : 'empty', focus : true, select : true }
 *  ],
 *  field2 : { msg : '입력하세요', type : 'email', fail : function() { return false; }  }
 *  , ....
 *  
 * });
 * 
 * if (isValid) { alert('이상한 점이 없습니다.'); }
 * </code> 
 * 
 * <code>
 * // 체크 함수 사용 
 * {	
 * 	    type : 'check', 
 * 	    check : function (opt) { 
 * 	         return (opt.value == ''); 
 * 	    }, 
 * 		msg : '입력좀',
 * 		focus : true
 * }
 * 
 * // ajax 사용, check 함수 이용 
 * 
 *	    {	
 *		    type : 'ajax', 
 *		    url:'test.do', 
 *		    param : { a : 'b' }, 
 *		    check : function (data) { 
 * 			    return (data.a != 'b'); 
 *			},
 *			msg : 'VOC check.', 
 * 			focus : true
 * 		}	 
 *  
 * // ajax 사용, 기본 ajax 결과 사용, object 형태로 넘겨주고 result 변수를 설정한다. 체크되면 result는 true 로 설정  
 * 
 *	    {	
 *		    type : 'ajax', 
 *		    url:'test.do', 
 *		    param : { a : 'b' }, 
 *			msg : 'VOC check.', 
 * 			focus : true
 * 		}  
 *  
 * </code>
 * 
 */

(function($) {
	
	/**
	 * 유효성 체크의 기본 방식   
	 * 
	 * 1. 부정의 체크 
	 *    empty 같은 경우 가정 자체가 공백을 체크하는 것이다. 
	 *    공백은 있어서는 안되는 부정의 의미이므로 isValid 값은 !(value == '') 같은 형태로 체크를 하고 부정(!)으로 한다.
	 *
	 * 2. 긍정의 체크 
	 *    email 같은 경우는 email 자체를 검증하는 식이기 때문에 test 결과를 그대로 isValid 에 대입한다. 
	 * 
	 * 3. check 타입 활용 
	 *    check 타입은 임의의 식을 함수 형태로 구현하는 것인데 이 라이브러리에서는 기본적으로 부정의 체크로 간주한다. 
	 *    즉, 일어나서는 안되는 형식(가정)이 일어났을 때를 의미한다. 예를 들어 보자. 
	 *    
	 *    a = '123';
	 *    b = '456';
	 * 
	 *    만약 위의 두 변수 중 a 가 b 보다 크면 안된다면 
	 *    a > b  이러한 사항은 그 자체로 부정이 된다. 
	 * 
	 *    즉, return a > b; 형태로 결과값을 리턴해주면 된다. 
	 * 
	 * 4. ajax 타입 체크 
	 *    check 와 마찬가지로 결과값은 [부정의 체크]를 사용한다. 
	 */
	$.validation = function (opt) { 
		
		var value = (opt.trim) ? $.trim(opt.value) : opt.value ;
		var format = opt.format.toUpperCase();
    	var tempNum = parseInt(value,opt.notation);		

		// 무조건 공백 체크 해제 
		if (value == '' && opt.empty) { 
			return { type : format , isValid : true } ; 
		}
		
		switch(format) { 
		case 'DATE' : 
		    var isValid = true; 
		    
            if (value == '') { 
                isValid = false;
            } else if ($.date) { 
		        isValid = $.date.check(value, opt.dateFormat);
		    }
		    
			return { type : format, isValid : isValid };
		case 'BETWEEN' : 
		    var isValid = true; 
		    
            if (value == '')  { isValid = false; } 
            else if ($(opt.target).val() == '') { isValid = false; } 
            else if ($.date) { 
		        isValid = $.date.between(value, $(opt.target).val(), opt.between, opt.max, opt.dateFormat);
		    }
		    
			return { type : format, isValid : isValid };			
		case 'EMPTY' : 
			return { type : format, isValid : !(value == '') };
		case 'INARRAY' : 
			return { type : format, isValid : ($.inArray(value, opt.max) > -1) };			
		case 'EMAIL' :
			//return { type : format, isValid : (/^[_\-\.0-9a-zA-Z]{3,}@[\-0-9a-zA-z]{2,}\.[a-zA-Z]{2,4}$/.test(value)) };
			test = value.indexOf('`') < 0;
			return { type : format, isValid : (/^[_\-\.0-9a-zA-Z]{3,64}@[_\-\.0-9a-zA-Z]{2,254}$/.test(value)) && test };
		case 'NUMBER' :  
			return { type : format, isValid : (/^([0-9.]+)$/.test(value)) };
		case 'INT' :
			return { type : format, isValid : (/^([0-9]+)$/.test(value)) };
		case 'ALPHANUM' :  
			return { type : format, isValid : (/^[0-9a-zA-Z]+$/.test(value)) };
		case 'MAX' : 
			return { type : format, isValid : (opt.checkbox) ? !(opt.count > opt.max) : !(value.length > opt.max) } ;
		case 'MAXB' : 
			return { type : format, isValid : !($.getBytes(value, opt.encode) > opt.max) } ;			
		case 'MIN' : 
			return { type : format, isValid : (opt.checkbox) ? !(opt.count < opt.min) : !(value.length < opt.min) } ;
		case 'MINB' : 
			return { type : format, isValid : !($.getBytes(value, opt.encode) < opt.min) } ;			
		case 'MINMAX' : 
			return { type : format, isValid : (opt.checkbox) ? !(opt.count < opt.min || opt.count > opt.max) : !(value.length < opt.min || value.length > opt.max) } ;
		case 'MINMAXI' :
			return { type : format, isValid : (value <= opt.max && value >= opt.min) };
		case 'MINMAXB' : 
			return { type : format, isValid : !($.getBytes(value, opt.encode) < opt.min || $.getBytes(value, opt.encode) > opt.max) } ;			
		case 'KOR' : 
			return { type : format, isValid : (/^[ㅏ-ㅣㄱ-ㅎ가-힣]+$/.test(value)) } ;
		case 'NOTKOR' :
			return { type : format, isValid : (/^[^ㅏ-ㅣ^ㄱ-ㅎ^가-힣]+$/.test(value)) } ;			
		case 'ENG' : 
			return { type : format, isValid : (/^[a-zA-Z]+$/.test(value)) } ;			
		case 'URL' : 
			return { type : format, isValid : (/^(mms|MMS|http|HTTP|ftp|FTP|telnet|TELNET)\:\/\//.test(value)) } ;
		case 'CHECK' : 
			return { type : format, isValid : ((opt.check) ? !opt.check(opt) : true) } ;
		case 'EMAILID' :
			//emailId만 검사 할 때 필요 알파넘으로 3글짜 이상 검사
            return { type : format, isValid : (/^[_\-\.0-9a-zA-Z]{3,}$/.test(value)) };   
		case 'DOMAIN' :
			//도메인의 형태를 검사할 때 xxxx.xxxx.xxxx이거나 xxxx.xxxx.xxxx.xxxx의 형태를 검사합니다.
            return { type : format, isValid :(/^[0-9a-zA-Z]+.[0-9a-zA-Z]+\.[0-9a-zA-Z]+\.[0-9a-zA-Z]+$/.test(value))};
        case 'ALPHANUMSPCCHAR' :
        	// 알파넘에 특수문자 포함 검사요~ 패스워드 형식 등을 검사할 때 유용해요~ 
            return { type : format, isValid : (/^[\w\W|\S]+$/.test(value))};
        case 'CELLPHONE' :
            return { type : format, isValid :(/^[0][1][016789][0-9]{3,4}[0-9]{4}$/.test(value))};
		case 'MAXNUM' :
			return { type : format, isValid : !(tempNum > opt.max) } ;
		case 'MINNUM' : 
			return { type : format, isValid : !(tempNum < opt.min) } ;			
        case 'MINMAXNUM' : 
            return { type : format, isValid : !(tempNum < opt.min || tempNum > opt.max) } ;
		case 'AJAX' :	
			
			var isValid = true;
			
			$.ajax({
				url 	: opt.url, 
				type 	: opt.method,
				data 	: opt.param, 
				dataType : opt.dataType,
				async 	: false,				// 비동기  
				success : function(data, status) {
					if (opt.check) { 
						isValid = !opt.check(data, opt);	// check() 함수 , true 이면 유효성 체크, false 이면 정상 
					} else if (opt.dataType == 'json') { 
						isValid = !data.result;		// success : true 이면 유효성체크에 걸림  , false 이면 정상  
					} else if (opt.dataType == 'xml') { 
						isValid = !(data.getElementByTagName('result')[0].nodeValue == 'true');		// success : true 이면 유효성체크에 걸림  , false 이면 정상
					}
				}
			});
			
			return { type : format , isValid : isValid } ; 
			
		}
		
		return false;
	};
	
	// 바이트 수 체크 
	$.getBytes = function(val, encode) {
		
		encode = (encode || "");
		encode = encode.toUpperCase();
		
		var tmplen = 0;
		for (var i = 0; i < val.length; i++) {
			if (val.charCodeAt(i) > 127) {
				if(encode == 'UTF-8') { 
					tmplen += 3;
				} else { 
					tmplen += 2;
				}
			}else {
				tmplen++;
			}
		}
		return tmplen;
	}	
	
	$.valid = function (validObj) { 
		var msg 		= validObj.msg;
		var focus 		= validObj.focus;
		var select 		= validObj.select;
		var fail 		= validObj.fail;
		var success 	= validObj.success;
		var css 		= validObj.css;
		var jQueryObj 	= validObj.obj;
		var jQueryIndex = validObj.index;		
		
		if (validObj.checkbox) { 
		    validObj.value = jQueryObj.filter(":checked:enabled").val();
		    validObj.count = jQueryObj.filter(":checked:enabled").size();
	    } else { 
    		validObj.value = jQueryObj.val();
    		validObj.count = 0;
   		}
		
		// validation 체크 
		var result = $.validation({
			value 		: validObj.value,
			format 		: (validObj.type || 'check'),
			max 		: validObj.max,
			min 		: validObj.min,
			check 		: validObj.check, 
			encode 		: validObj.encode, 
			dateFormat 	: (validObj.dateFormat || 'YMD'),			
			target 		: validObj.target,
			between 	: validObj.between,
			url 		: validObj.url, 
			method 		: (validObj.method || 'POST'),			
			dataType 	: (validObj.dataType || 'json'),			
			obj 		: validObj.obj,
			count   	: validObj.count,			
			checkbox   	: validObj.checkbox,			
			param 		: (validObj.param || ''),
			notation 	: (validObj.notation || 10), 		// 기본 10진법 
			empty 		: (validObj.empty || false),
			index		: (validObj.index || -1),			// 기본 index -1, 0 이상은 실제 객체			
			trim 		: (validObj.trim || false)			// 기본 trim 
		});
		
		if (!result.isValid) {
			// 메세지 출력 
			if (msg) { alert(msg); }
			else { 
				msg = "";
				
				switch(result.type) { 
				case 'EMPTY'	: msg = "必須入力事項です。"; 	break;
				case 'NUMBER'	: msg = "数字のみ入力可能です。"; break;
				case 'MAX'		: 
				     if (validObj.checkbox) { 
    				     msg = validObj.max + "件まで選択可能です。"; 
				     } else { 
    				     msg = validObj.max + "字まで入力可能です。"; 
   				     }
				     break;
				}
				
				if (msg != "") alert(msg);
			}
			
			// 포커스 이동 
			if (focus) { 
			    if (validObj.checkbox) { 
			        jQueryObj.get(0).focus();
		        } else { 
    			    jQueryObj.focus(); 
    			} 
			}
			
			// selection 표시 
			if (select) { 
			    if (validObj.checkbox) { 
			        jQueryObj.get(0).select();
		        } else { 			    
    			    jQueryObj.select(); 
   			    }
			}
			
			// 클래스 적용 
			if (css) jQueryObj.addClass(css);			
			
			// 차후 실행될 함수 실행 
			if (fail) { fail(jQueryObj, jQueryIndex); } 
			
			return false;
		} else { 
			
			// 클래스 제거 
			if (css) jQueryObj.removeClass(css);
			
			// 성공시 실행 
			if (success) { success(jQueryObj, jQueryIndex); }			
		}
		
		return true; 
	}
	
	// 플러그인 
	$.fn.validation = function(validator) { 
		
		for(var key in validator) { 
			var keyAttr = key.split(":");
			var keyName = keyAttr[0];
			var keyFilter = keyAttr[1];
			var keyValidator = validator[key];
			var isArray = (keyFilter == "array");
			
			var obj = this.find("[name=" + keyName + "]");
			
			// validator 가 배열이 아니면 배열로 변경 			
			if (!$.isArray(keyValidator)) {		  
				keyValidator = [keyValidator];
			} 
			
			// validator 체크 	
			for(var i = 0; i < keyValidator.length; i++) {
				
				// 객체가 배열일경우 , 각각의 객체별 validation 체크 
				if (obj.size() > 0 && isArray) {
					for (var j = 0; j < obj.size(); j++) {
						keyValidator[i].index = j;
						var temp = obj.eq(j).valid(keyValidator[i]);
						
						if (temp == false) { return false; }
					}
				} else { 						
					
					if (keyValidator[i] != undefined) {					
						keyValidator[i].obj 	= obj;
						if (!$.valid(keyValidator[i])) { return false; }
					}
				}
			}
		}
		
		return true; 
	};
	
	// 개별 객체에 대한 validation 
	$.fn.valid = function(validator) { 
		var obj = $(this);	// 현재 객체 확장집합으로 생성  	
		
		// validator 가 배열이 아니면 배열로 변경 
		if (!$.isArray(validator)) { 
			validator = [validator];
		}	
		
		// 
		for(var i = 0; i < validator.length; i++) {
			if (validator[i] != undefined) {					
				validator[i].obj = obj;

				if (!$.valid(validator[i])) { return false; }
			}
		}	
		
		return true; 
	};
})(jQuery);
