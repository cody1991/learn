require('./style.css');

var $ = require('jquery');
var inc = require('./increment.js').increment;

$(function() {
    $('button').click(function() {
        console.log(1);
        var val = parseInt($('#val').val());
        var res = inc(isNaN(val) ? 0 : val);
        $('#val').val(res);
    });
});
