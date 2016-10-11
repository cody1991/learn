var test = document.getElementById('test');

// nodeType 1 是元素，2是属性，3是文本
console.log(test.nodeType);
console.log(test.nodeName);
console.log(test.nodeValue);

// 但是在IE8及以下，长度为3，他们不包括文本空格的节点
console.log(test.childNodes);
console.log(test.childNodes.length);

for (var i = 0; i < test.childNodes.length; i++) {
    console.log(test.childNodes[i]);
}

var arrayOfNodes = Array.prototype.slice.call(test.childNodes, 0);

console.log(arrayOfNodes);

var test2 = document.getElementById('test2');

if (test2.nodeType == 1) {
    var secondChild = test2.childNodes[1];

    console.log(secondChild);
    console.log(secondChild.previousSibling);
    console.log(secondChild.nextSibling);

    console.log(test2.firstChild);
    console.log(test2.lastChild);
    console.log(test2.childNodes[0]);
    console.log(test2.childNodes[secondChild.childNodes.length - 1]);

    console.log(test2.hasChildNodes());
    console.log(test2.ownerDocument);
}

var test3 = document.getElementById('test3');

var newNode = document.createElement('p');
var newTextNode = document.createTextNode('haha');

newNode.appendChild(newTextNode);
var returnNode = test3.appendChild(newNode);
console.log(returnNode);
console.log(returnNode === newNode);
console.log(test3.lastChild === newNode);
console.log(test3.childNodes);

var test4 = document.getElementById('test4');

var newNode = document.createElement('p');
var newTextNode = document.createTextNode('haha');
newNode.appendChild(newTextNode);

var returnNode = test4.insertBefore(newNode, test4.childNodes[0]);
console.log(returnNode);
console.log(returnNode === newNode);

// 没有参数的时候放在最后面
test4.insertBefore(newNode, null);

var test5 = document.getElementById('test5');

var newNode = document.createElement('div');
var returnNode = test5.replaceChild(newNode, test5.firstChild);
console.log(returnNode);

var returnNode = test5.removeChild(test5.lastChild);
console.log(returnNode);

var test6 = document.getElementById('test6');

var list = test6.cloneNode();
var deepList = test6.cloneNode(true);
console.log(list, deepList);

console.log(document.documentElement);
console.log(document.childNodes[0]);
console.log(document.firstChild);
console.log(document.body);

console.log(document.URL);
console.log(document.domain);
console.log(document.location.hostname)

var inputs = document.getElementsByTagName('input');
console.log(inputs.namedItem('aa'));

console.log(window.location);
