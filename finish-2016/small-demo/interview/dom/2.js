var list = document.getElementById('list');

var arrs = [];
for (var i = 0, ilen = list.childNodes.length; i < ilen; i++) {
    var curElement = list.childNodes[i];
    if (curElement.nodeType === 1) {
        arrs.push(curElement);
    }
}
console.log(arrs);
