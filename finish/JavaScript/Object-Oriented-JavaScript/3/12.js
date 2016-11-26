function getRGB(source) {
    var r = source.slice(1, 3);
    var g = source.slice(3, 5);
    var b = source.slice(5, 8);

    r = parseInt(r, 16);
    g = parseInt(g, 16);
    b = parseInt(b, 16);

    return 'rgb(' + r + ', ' + g + ', ' + b + ')';

}

var a = getRGB('#00ff00');

console.log(a);

console.log(parseInt(1e1));
console.log(parseInt('1e1'));
// parseFloat能识别？。。
console.log(parseFloat('1e1'));

console.log(isFinite(0 / 10));
console.log(isFinite(20 / 0));
console.log(isNaN(parseInt(NaN)));

var a = 1;

function f() {
    var a = 2;

    function n() {
        console.log(a);
    }
    n();
}
f();
