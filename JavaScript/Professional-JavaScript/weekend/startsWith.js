String.prototype.startsWith = function(text) {
    return this.indexOf(text) == 0;
}

var msg = 'hello world';

console.log(msg.startsWith('hello'));
