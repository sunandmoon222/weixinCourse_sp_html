(function($) {
	$.timepicker.regional['ja'] = {
		monthNames : [ '1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月',
				'10月', '11月', '12月' ],
		monthNamesShort : [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10',
				'11', '12' ],
		dayNamesShort : [ '日', '月', '火', '水', '木', '金', '土' ],
		dayNamesMin : [ '日', '月', '火', '水', '木', '金', '土' ],
		timeOnlyTitle : '時間を選択',
		timeText : '時間',
		hourText : '時',
		minuteText : '分',
		secondText : '秒',
		millisecText : 'ミリ秒',
		timezoneText : 'タイムゾーン',
		currentText : '現時刻',
		closeText : '閉じる',
		timeFormat : 'hh:mm tt',
		dateFormat : 'yy.mm.dd',
		amNames : [ '午前', 'AM', 'A' ],
		pmNames : [ '午後', 'PM', 'P' ],
		ampm : false
	};
	$.timepicker.setDefaults($.timepicker.regional['ja']);
})(jQuery);