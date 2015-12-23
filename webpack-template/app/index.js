var module = require('./module');
var rem = require('./rem');
var attachFastClick = require('fastclick');

require('./style/style.less');

attachFastClick.attach(document.body);

var app = document.createElement('h1');
app.innerHTML = 'Hello World!';


var container = document.createElement('div');
container.classList.add('container');

container.appendChild(app);
container.appendChild(module());

document.body.appendChild(container);


console.log($(window));
