var global_var = 1;
global_novar = 2;
(function() {
    global_fromfunc = 3;
})();

console.log(delete global_var);
console.log(delete global_novar);
console.log(delete global_fromfunc);

console.log(typeof global_var);
console.log(typeof global_novar);
console.log(typeof global_fromfunc);

console.log(document.images)
console.log(document.links)


console.log(document.forms)
console.log(document.forms[0].elements)

var myarray = [1, 2, 3],
    i = myarray.length;
console.log(i);

while (i--) {
    console.log(i)
    console.log(myarray[i])
        // 使用myarray[i]做点什么
}

var man = {
    hands: 2,
    legs: 2,
    heads: 1
}

if (typeof Object.prototype.clone === 'undefined') {
    console.log(1);
    Object.prototype.clone = function() {

    }
}


for (var i in man) {
    if (man.hasOwnProperty(i)) {
        console.log(i, ":", man[i]);
    }
}

for (var i in man) {
    if (Object.prototype.hasOwnProperty.call(man, i)) {
        console.log(i, ":", man[i]);
    }
}

if (typeof Object.prototype.myMethod !== 'function') {
    Object.prototype.myMethod = function() {

    };
}

// 你可以通过类似下面形式的switch语句增强可读性和健壮性：

var inspect_me = 0,
    result = '';
switch (inspect_me) {
    case 0:
        result = "zero";
        break;
    case 1:
        result = "one";
        break;
    default:
        result = "unknown";
}

console.log(typeof un);
console.log(typeof deux);
console.log(typeof trois);

var jsstring = 'var un = 1;console.log(un);'
eval(jsstring);

jsstring = "var deux = 2; console.log(deux);";
new Function(jsstring)();

jsstring = "var trois = 3; console.log(trois);";
(function() {
    eval(jsstring);
})()

console.log(typeof un);
console.log(typeof deux);
console.log(typeof trois);

(function(){
    var local = 1;
    eval('local = 3; console.log(local)');
    console.log(local);
})();

(function(){
    var local = 1;
    Function('console.log(typeof local);')();
})();