var content = require('./content.js');
var style = require('./style.css');
document.write(content.say());


var longVariableName = 'Hello';
longVariableName += ' World';
document.write('<h1>' + longVariableName + '</h1>');

if (__DEV__) {
	// $ env DEBUG=true webpack-dev-server
    document.write('<h2>' + 'DEV : ' + new Date() + '</h2>')
}
