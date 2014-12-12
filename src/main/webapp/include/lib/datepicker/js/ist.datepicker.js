function getDateByDatepicker(textNm,textType){
    $(textNm).datepicker({
        showOn: "both",
        buttonImage: "/include/lib/datepicker/img/icon_calendar.png",
        buttonImageOnly: true,
        //numberOfMonths: 3,
        minDate: -20, 
        //maxDate: "+1M +10D",
        changeMonth: true,
        changeYear: true,
        showOtherMonths: false,
        selectOtherMonths: true,
        //showWeek: true,
        firstDay: 1,
        showButtonPanel: true,
        gotoCurrent: false,
        //defaultDate:'+1d',
        dateFormat:"yymmdd",
        hideIfNoPrevNext: true
    });
    if(textType=="sta"){
    	$(textNm).datepicker('setDate', 'today');
    }
   if(textType=="end"){
    	$(textNm).datepicker('setDate', '2999-12-31');
    }
}

function formatDate(dateStr){
	 return $.format.date(dateStr,'yyyy-MM-dd');
	}


(function ($) {
	  
	  var daysInWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	  var shortMonthsInYear = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
	  var longMonthsInYear = ["January", "February", "March", "April", "May", "June",
	              "July", "August", "September", "October", "November", "December"];
	  var shortMonthsToNumber = [];
	  shortMonthsToNumber["Jan"] = "01";
	  shortMonthsToNumber["Feb"] = "02";
	  shortMonthsToNumber["Mar"] = "03";
	  shortMonthsToNumber["Apr"] = "04";
	  shortMonthsToNumber["May"] = "05";
	  shortMonthsToNumber["Jun"] = "06";
	  shortMonthsToNumber["Jul"] = "07";
	  shortMonthsToNumber["Aug"] = "08";
	  shortMonthsToNumber["Sep"] = "09";
	  shortMonthsToNumber["Oct"] = "10";
	  shortMonthsToNumber["Nov"] = "11";
	  shortMonthsToNumber["Dec"] = "12";
	 
	    $.format = (function () {
	        function strDay(value) {
	       return daysInWeek[parseInt(value, 10)] || value;
	        }
	        function strMonth(value) {
	      var monthArrayIndex = parseInt(value, 10) - 1;
	       return shortMonthsInYear[monthArrayIndex] || value;
	        }
	        function strLongMonth(value) {
	     var monthArrayIndex = parseInt(value, 10) - 1;
	     return longMonthsInYear[monthArrayIndex] || value;     
	        }
	        var parseMonth = function (value) {
	     return shortMonthsToNumber[value] || value;
	        };
	        var parseTime = function (value) {
	                var retValue = value;
	                var millis = "";
	                if (retValue.indexOf(".") !== -1) {
	                    var delimited = retValue.split('.');
	                    retValue = delimited[0];
	                    millis = delimited[1];
	                }
	                var values3 = retValue.split(":");
	                if (values3.length === 3) {
	                    hour = values3[0];
	                    minute = values3[1];
	                    second = values3[2];
	                    return {
	                        time: retValue,
	                        hour: hour,
	                        minute: minute,
	                        second: second,
	                        millis: millis
	                    };
	                } else {
	                    return {
	                        time: "",
	                        hour: "",
	                        minute: "",
	                        second: "",
	                        millis: ""
	                    };
	                }
	            };
	        return {
	            date: function (value, format) {
	               
	                try {
	                    var date = null;
	                    var year = null;
	                    var month = null;
	                    var dayOfMonth = null;
	                    var dayOfWeek = null;
	                    var time = null;
	                    if (typeof value.getFullYear === "function") {
	                        year = value.getFullYear();
	                        month = value.getMonth() + 1;
	                        dayOfMonth = value.getDate();
	                        dayOfWeek = value.getDay();
	                        time = parseTime(value.toTimeString());
	          } else if (value.search(/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.?\d{0,3}[-+]?\d{2}:?\d{2}/) != -1) {            
	                        var values = value.split(/[T\+-]/);
	                        year = values[0];
	                        month = values[1];
	                        dayOfMonth = values[2];
	                        time = parseTime(values[3].split(".")[0]);
	                        date = new Date(year, month - 1, dayOfMonth);
	                        dayOfWeek = date.getDay();
	                    } else {
	                        var values = value.split(" ");
	                        switch (values.length) {
	                        case 6:
	                           
	                            year = values[5];
	                            month = parseMonth(values[1]);
	                            dayOfMonth = values[2];
	                            time = parseTime(values[3]);
	                            date = new Date(year, month - 1, dayOfMonth);
	                            dayOfWeek = date.getDay();
	                            break;
	                        case 2:
	                           
	                            var values2 = values[0].split("-");
	                            year = values2[0];
	                            month = values2[1];
	                            dayOfMonth = values2[2];
	                            time = parseTime(values[1]);
	                            date = new Date(year, month - 1, dayOfMonth);
	                            dayOfWeek = date.getDay();
	                            break;
	                        case 7:
	                           
	                        case 9:
	                           
	                        case 10:
	                           
	                            year = values[3];
	                            month = parseMonth(values[1]);
	                            dayOfMonth = values[2];
	                            time = parseTime(values[4]);
	                            date = new Date(year, month - 1, dayOfMonth);
	                            dayOfWeek = date.getDay();
	                            break;
	                        default:
	                            return value;
	                        }
	                    }
	                    var pattern = "";
	                    var retValue = "";
	                   
	                    for (var i = 0; i < format.length; i++) {
	                        var currentPattern = format.charAt(i);
	                        pattern += currentPattern;
	                        switch (pattern) {
	                        case "ddd":
	                            retValue += strDay(dayOfWeek);
	                            pattern = "";
	                            break;
	                        case "dd":
	                            if (format.charAt(i + 1) == "d") {
	                                break;
	                            }
	                            if (String(dayOfMonth).length === 1) {
	                                dayOfMonth = '0' + dayOfMonth;
	                            }
	                            retValue += dayOfMonth;
	                            pattern = "";
	                            break;
	                        case "MMMM":
	                            retValue += strLongMonth(month);
	                            pattern = "";
	                            break;
	                        case "MMM":
	                            if (format.charAt(i + 1) === "M") {
	                                break;
	                            }
	                            retValue += strMonth(month);
	                            pattern = "";
	                            break;
	                        case "MM":
	                            if (format.charAt(i + 1) == "M") {
	                                break;
	                            }
	                            if (String(month).length === 1) {
	                                month = '0' + month;
	                            }
	                            retValue += month;
	                            pattern = "";
	                            break;
	                        case "yyyy":
	                            retValue += year;
	                            pattern = "";
	                            break;
	                        case "yy":
	                            if (format.charAt(i + 1) == "y" &&
	                            format.charAt(i + 2) == "y") {
	                             break;
	                           }
	                            retValue += String(year).slice(-2);
	                            pattern = "";
	                            break;
	                        case "HH":
	                            retValue += time.hour;
	                            pattern = "";
	                            break;
	                        case "hh":
	                           
	                            var hour = (time.hour == 0 ? 12 : time.hour < 13 ? time.hour : time.hour - 12);
	                            hour = String(hour).length == 1 ? '0'+hour : hour;
	                            retValue += hour;
	                            pattern = "";
	                            break;
	            case "h":
	                if (format.charAt(i + 1) == "h") {
	                    break;
	                }
	                var hour = (time.hour == 0 ? 12 : time.hour < 13 ? time.hour : time.hour - 12);                          
	                retValue += hour;
	                pattern = "";
	                break;
	                        case "mm":
	                            retValue += time.minute;
	                            pattern = "";
	                            break;
	                        case "ss":
	                           
	                            retValue += time.second.substring(0, 2);
	                            pattern = "";
	                            break;
	                        case "SSS":
	                            retValue += time.millis.substring(0, 3);
	                            pattern = "";
	                            break;
	                        case "a":
	                            retValue += time.hour >= 12 ? "PM" : "AM";
	                            pattern = "";
	                            break;
	                        case " ":
	                            retValue += currentPattern;
	                            pattern = "";
	                            break;
	                        case "/":
	                            retValue += currentPattern;
	                            pattern = "";
	                            break;
	                        case ":":
	                            retValue += currentPattern;
	                            pattern = "";
	                            break;
	                        default:
	                            if (pattern.length === 2 && pattern.indexOf("y") !== 0 && pattern != "SS") {
	                                retValue += pattern.substring(0, 1);
	                                pattern = pattern.substring(1, 2);
	                            } else if ((pattern.length === 3 && pattern.indexOf("yyy") === -1)) {
	                                pattern = "";
	                            }
	                        }
	                    }
	                    return retValue;
	                } catch (e) {
	                    console.log(e);
	                    return value;
	                }
	            }
	        };
	    }());
	}(jQuery));

	$(document).ready(function () {
	    $(".shortDateFormat").each(function (idx, elem) {
	        if ($(elem).is(":input")) {
	            $(elem).val($.format.date($(elem).val(), "dd/MM/yyyy"));
	        } else {
	            $(elem).text($.format.date($(elem).text(), "dd/MM/yyyy"));
	        }
	    });
	    $(".longDateFormat").each(function (idx, elem) {
	        if ($(elem).is(":input")) {
	            $(elem).val($.format.date($(elem).val(), "dd/MM/yyyy hh:mm:ss"));
	        } else {
	            $(elem).text($.format.date($(elem).text(), "dd/MM/yyyy hh:mm:ss"));
	        }
	    });
	});