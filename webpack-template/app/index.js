var attachFastClick = require('fastclick');
var rem = require('./rem');
var module = require('./module');
require('./style/style.less');


attachFastClick.attach(document.body);
console.log($(window));
$('.container').append(module());

