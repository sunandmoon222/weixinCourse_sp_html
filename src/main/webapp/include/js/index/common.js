/**
 * Common JS for Enquete
 *
 **/

/*
 * Init Define
 * 
 */
var COOKIE_DOMAIN = 'nhn-playart.com';
document.write('<script src="/include/js/json2.min.js" type="text/javascript"></script>');

/*
 * Init Function
 * 
 */
$(function() {

    // Icon Button in Table (no text)
    // Normal Icon Button
    $( ".btn-table-icon" ).button({
        text: false
    });
    $( ".btn-table-icon" ).css("width", "2em").css("height", "2em");
    
    // Mini Icon Button
    $( ".btn-table-icon-mini" ).button({
        text: false
    });
    $( ".btn-table-icon-mini" ).css("width", "1.6em").css("height", "1.6em");
    
});


