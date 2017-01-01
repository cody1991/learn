var $ = require('jquery');
var mainStyle = require('./main.less');

$(document).ready(function() {
    var app = document.createElement('div');
    app.innerHTML = '<h1>Hello World</h1>';
    document.body.appendChild(app);
    $('h1').greenify();
});
