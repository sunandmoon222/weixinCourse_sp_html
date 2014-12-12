(function($) {
	$.timepicker.regional['cn'] = {
		monthNames : [ '1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月',
				'10月', '11月', '12月' ],
		monthNamesShort : [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10',
				'11', '12' ],
		dayNamesShort : [ '日', '一', '二', '三', '四', '五', '六' ],
		dayNamesMin : [ '日', '一', '二', '三', '四', '五', '六' ],
		timeOnlyTitle : '选择时间',
		timeText : '时间',
		hourText : '时',
		minuteText : '分',
		secondText : '秒',
		millisecText : '毫秒',
		timezoneText : '时区',
		currentText : '现在',
		closeText : '关闭',
		timeFormat : 'hh:mm tt',
		dateFormat : 'yy.mm.dd',
		amNames : [ '上午', 'AM', 'A' ],
		pmNames : [ '下午', 'PM', 'P' ],
		ampm : false
	};
	$.timepicker.setDefaults($.timepicker.regional['cn']);
})(jQuery);