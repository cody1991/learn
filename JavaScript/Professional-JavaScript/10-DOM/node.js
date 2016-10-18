var haha = document.getElementById('haha');

console.log(haha.nodeType);
console.log(haha.nodeName);
console.log(haha.nodeValue);
console.log(haha.childNodes);

var child = haha.childNodes;

console.log(child[0]);
console.log(child.item(0));
console.log(child.length);

var arrayOfHaha = Array.prototype.slice.call(child, 0);
console.log(arrayOfHaha);

function IEConvertToArray(nodes) {
    var array = null;
    try {
        array = Array.prototype.slice.call(nodes, 0);
    } catch (ex) {
        array = new Array();
        for (var i = 0, len = nodes.length; i < len; i++) {
            array.push(nodes[i]);
        }
    }
    return array;
}

console.log(IEConvertToArray(child));

if (child[0].nextSibling === null) {
    console.log("last node in the parent's childNodes list");
}
if (child[0].previousSibling === null) {
    console.log("first node in the parent's childNodes list");
}

console.log(haha.firstChild);
console.log(haha.lastChild);
console.log(haha.hasChildNodes());

var newNode = document.createElement('b');
var textNode = document.createTextNode('haha3');
newNode.appendChild(textNode);

var returnNode = haha.appendChild(newNode);

console.log(returnNode == newNode);
console.log(returnNode == haha.lastChild);

returnNode = haha.appendChild(haha.firstChild);

console.log(returnNode == haha.lastChild);

var newNode2 = document.createElement('i');
var textNode2 = document.createTextNode('haha4');
newNode2.appendChild(textNode2);

returnNode = haha.insertBefore(newNode2, null);

console.log(newNode2 == haha.lastChild);

returnNode = haha.insertBefore(newNode2, haha.firstChild);

console.log(returnNode == newNode2);
console.log(newNode2 == haha.firstChild);

returnNode = haha.insertBefore(newNode2, haha.lastChild);

console.log(newNode2 == haha.childNodes[haha.childNodes.length - 2]);

var newNode3 = document.createElement('i');
var textNode3 = document.createTextNode('haha5');
newNode3.appendChild(textNode3);

returnNode = haha.replaceChild(newNode3, haha.firstChild);

console.log(returnNode);

returnNode = haha.removeChild(haha.lastChild);

console.log(haha.parentNode);
console.log(haha.childNodes[0].parentNode);

var deepList = haha.cloneNode(true);

console.log(deepList.childNodes.length);

console.log(deepList.childNodes);

// deepList.normalzie();

var html = document.documentElement;
console.log(html);

console.log(document.childNodes);
// 有两个，一个是 doctype 一个是 html
// console.log(html === document.childNodes[0]);
// console.log(html === document.firstChild);

var body = document.body;

console.log(body);

var doctype = document.doctype;

console.log(doctype);

console.log(document.title);
document.title = 'change title';

console.log(document.URL);
console.log(document.domain);
console.log(document.referrer);

// HTMLCollection
var p = document.getElementsByTagName('i');
console.log(p);

var img = document.getElementsByTagName('img');

console.log(img.length);
console.log(img[0].src);
console.log(img.item(0).src);

console.log(img.namedItem('img-1'));
console.log(img.namedItem('img-2'));

console.log(img['img-1']);

var color = document.getElementsByName('color');

console.log(color);

console.log(document.implementation.hasFeature('XML', '1.0'));

var myDiv = document.getElementById('myDiv');
console.log(myDiv.id);
console.log(myDiv.className);
console.log(myDiv.title);
console.log(myDiv.lang);
console.log(myDiv.dir);

// NamedNodeMap
console.log(myDiv.attributes);

var myDivAttributes = myDiv.attributes;

console.log(myDivAttributes.getNamedItem('id').nodeValue);
console.log(myDivAttributes['id'].nodeValue);

for (var i = 0, len = myDivAttributes.length; i < len; i++) {
    attrName = myDivAttributes[i].nodeName;
    attrValue = myDivAttributes[i].nodeValue;

    if (myDivAttributes[i].specified) {
        console.log(attrName + "=\"" + attrValue + "\"");
    }
}

console.log(myDiv.dataset);

var myList = document.getElementById('myList');

console.log(myList.childNodes);

for (var i = 0, len = myList.childNodes.length; i < len; i++) {
    if (myList.childNodes[i].nodeType == 1) {
        console.log(1);
    }
}

var items = document.getElementsByTagName('li');
console.log(items);

var item0Text = items[0].childNodes[0];


item0Text.appendData(' appendData');
item0Text.deleteData(0, 1);
item0Text.insertData(4, ' insertData');
item0Text.replaceData(0, 2, ' replace');
item0Text.splitText(4);

var fragment = document.createDocumentFragment();
var ul = document.getElementById('myList2');
var li = null;

for (var i = 0; i < 100; i++) {
    li = document.createElement('li');
    li.appendChild(document.createTextNode('Item ' + (i + 1)));
    fragment.appendChild(li);
}

ul.appendChild(fragment);

var attr = document.createAttribute('align');
attr.value = 'left';

ul.setAttributeNode(attr);

console.log(ul.attributes['align'].value);
console.log(ul.getAttributeNode('align').value);
console.log(ul.getAttribute('align'));

function loadScript(url) {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    document.body.appendChild(script);
}

function loadScriptString(code) {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    try {
        script.appendChild(document.createTextNode(code));
    } catch (ex) {
        script.text = code;
    }
    document.body.appendChild(script);
}

function loadStyles(url) {
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = url;
    var head = document.getElementsByTagName('head')[0];
    head.appendChild(link);
}


function loadStylesString(css) {
    var style = document.createElement('style');
    style.type = 'text/css';
    try {
        style.appendChild(document.createTextNode(css));
    } catch (ex) {
        style.styleSheet.cssText = css;
    }
    var head = document.getElementsByTagName('head')[0];
    head.appendChild(style);
}

loadStylesString("body{background-color:red}");

var table = document.createElement('table');

table.border = 1;
table.width = '100%';

document.body.appendChild(table);

var tbody = document.createElement('tbody');
table.appendChild(tbody);

tbody.insertRow(0);

tbody.rows[0].insertCell(0);
tbody.rows[0].cells[0].appendChild(document.createTextNode('cell 1,1'));

tbody.rows[0].insertCell(1);
tbody.rows[0].cells[1].appendChild(document.createTextNode('cell 2,1'));

tbody.insertRow(1);

tbody.rows[1].insertCell(0);
tbody.rows[1].cells[0].appendChild(document.createTextNode('cell 1,2'));

tbody.rows[1].insertCell(1);
tbody.rows[1].cells[1].appendChild(document.createTextNode('cell 2,2'));

console.log(table.rows);
console.log(table.rows[0].cells);
