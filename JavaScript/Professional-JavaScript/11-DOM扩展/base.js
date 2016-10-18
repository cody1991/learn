var body = document.querySelector('body');

console.log(body);

console.log(document.querySelector('#myDiv'));
console.log(document.querySelector('.selected'));
console.log(document.querySelectorAll('.selected'));
console.log(document.querySelector('img.button'));

var myList = document.getElementById('myList');
var child = myList.firstChild;
console.log(myList.childNodes);
while (child != null) {
    if (child.nodeType == 1) {
        console.log(child.nodeName);
    }
    child = child.nextSibling;
}

child = myList.firstElementChild;
while (child != null) {
    console.log(child.nodeName);
    child = child.nextElementSibling;
}

console.log(document.getElementsByClassName('username current'));

var className = document.getElementById('className');

// className.className = className.className.replace(/(\s)+(user)(\s)+/, '$2');

// var classNames = className.className.split(/\s+/);
// console.log(classNames);

// var pos = -1,
//     i, len;

// for (i = 0, len = classNames.length; i < len; i++) {
//     if (classNames[i] == 'user') {
//         pos = i;
//         break;
//     }
// }

// classNames.splice(i, 1);

// className.className = classNames.join(' ');

var classList = className.classList;
console.log(classList);

classList.remove('user');
console.log(classList);

classList.add('cody');
console.log(classList);


classList.toggle('cody');
console.log(classList);

console.log(classList.contains('disabled'));

console.log(document.readyState);
console.log(document.compatMode);
console.log(document.charset);

var myDiv2 = document.getElementById('myDiv2');

var appId = myDiv2.dataset.appId;
console.log(appId);

var myDiv3 = document.getElementById('myDiv3');

myDiv3.innerHTML = '<p>Inner</p>';

// myDiv3.outerHTML = '<div>123</p>';

// outerHTML

function outerHTML(div) {
    var p = document.createElement('p');

    p.appendChild(document.createTextNode('outerHTML'));

    console.log(div);

    div.parentNode.replaceChild(p, div);
}

outerHTML(myDiv3);

var myDiv4 = document.getElementById('myDiv4');

// 当前元素之前插入一个紧邻的同辈元素
myDiv4.insertAdjacentHTML('beforebegin', '<p>Hello 1</p>');

// 当前元素下插入一个新的子元素，或在第一个子元素之前插入新的子元素
myDiv4.insertAdjacentHTML('afterbegin', '<p>Hello 2</p>');

// 当前元素下当如一个新的子元素或在最后一个子元素之后掺入新的子元素
myDiv4.insertAdjacentHTML('beforeend', '<p>Hello 3</p>');

myDiv4.insertAdjacentHTML('afterend', '<p>Hello 4</p>');


setTimeout(function() {
    myDiv4.scrollIntoView();

    console.log(myDiv3.scrollIntoView);
}, 2000);

console.log(document.documentElement.contains(document.body));

function getInnerText(element) {
    return (typeof element.textContent == 'string') ?
        element.textContent : element.innerText;
}

function setInnerText(element, text) {
    if (typeof element.textContent == 'string') {
        element.textContent = text;
    } else {
        element.innerText = text;
    }
}

var buttonImg = document.querySelector('img.button');

buttonImg.style.cssText = 'width:425px;height:425px;background-color:green';

console.log(buttonImg.style.cssText);
console.log(buttonImg.style);

for (var i = 0, len = buttonImg.style.length; i < len; i++) {
    var prop = buttonImg.style[i];
    // buttonImg.style.item(i)
    var value = buttonImg.style.getPropertyValue(prop);

    console.log(prop + ' : ' + value);

    // value = buttonImg.style.getPropertyCSSValue(prop);

    // console.log(prop + ' : ' + value.cssText + " (" + value.cssValueType + ")");
}

buttonImg.style.removeProperty('background-color');

var computedStyle = document.defaultView.getComputedStyle(buttonImg, null);

console.log(computedStyle);
console.log(computedStyle.width);
console.log(computedStyle.height);
console.log(computedStyle.border);
console.log(computedStyle.backgroundColor);

// function getComputedStyleIE() {
//     var computedStyle = buttonImg.currentStyle;
//     console.log(computedStyle);
//     console.log(computedStyle.width);
//     console.log(computedStyle.height);
//     console.log(computedStyle.border);
//     console.log(computedStyle.backgroundColor);
// }

// getComputedStyleIE();

var sheet = null;
for (var i = 0, len = document.styleSheets.length; i < len; i++) {
    sheet = document.styleSheets[i];
    console.log(sheet);

    var rules = sheet.cssRules || sheet.rules;
    console.log(rules);
}

function getStyleSheet(element) {
    return element.sheet || element.styleSheet;
}

var link = document.getElementsByTagName('link')[0];
var sheet = getStyleSheet(link);

function getElementLeft(element) {
    var actualLeft = element.offsetLeft;
    var current = element.offsetParent;

    while (current != null) {
        actualLeft += current.offsetLeft;
        current = current.offsetParent;
    };

    return actualLeft;
}

function getElementTop(element) {
    var actualTop = element.offsetTop;
    var current = element.offsetParent;

    while (current != null) {
        actualTop += current.offsetTop;
        current = current.offsetParent;
    }
    return actualTop;
}

console.log(getElementTop(myDiv4));
console.log(getElementLeft(myDiv4));

var docHeight = Math.max(document.documentElement.scrollHeight, document.documentElement.clientHeight);

var docWidth = Math.max(document.documentElement.scrollWidth, document.documentElement.clientWidth);
