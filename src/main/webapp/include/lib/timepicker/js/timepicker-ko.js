(function($) {
	$.timepicker.regional['ko'] = {
		monthNames: ['1월', '2월', '3월', '4월', '5월', '6월',
		             '7월', '8월', '9월', '10월', '11월', '12월'],
		monthNamesShort: ['1', '2', '3', '4', '5', '6',
			              '7', '8', '9', '10', '11', '12'],
        dayNamesShort : [ '일', '월', '화', '수', '목', '금', '토'],
        dayNamesMin : [ '일', '월', '화', '수', '목', '금', '토'],
		timeOnlyTitle : '시간 선택',
		timeText : '시간',
		hourText : '시',
		minuteText : '분',
		secondText : '초',
		millisecText : '밀리초',
		timezoneText : '표준 시간대',
		currentText : '현재 시각',
		closeText : '닫기',
		timeFormat : 'tt h:mm',
		dateFormat: 'yy.mm.dd',
		amNames : [ '오전', 'AM', 'A' ],
		pmNames : [ '오후', 'PM', 'P' ],
		ampm : true
	};
	$.timepicker.setDefaults($.timepicker.regional['ko']);
})(jQuery);