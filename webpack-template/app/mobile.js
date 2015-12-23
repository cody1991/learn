require('./style/style.less');

$(document).ready(function() {
    var mobile = $('<div></div');
    mobile.text('Mobile!');
    $('body').append(mobile);
})
