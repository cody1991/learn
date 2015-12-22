var module = require('./module');
var rem =  require('./rem');
require('./style/style.less');

var $ = require('jquery');

console.log($);

var app = document.createElement('h1');
app.innerHTML = 'Hello World!';


var container = document.createElement('div');
container.classList.add('container');

container.appendChild(app);
container.appendChild(module());

document.body.appendChild(container);
