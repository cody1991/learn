var res = '';
for (var i = 1; i < 10; i++) {
    for (var j = 1; j <= i; j++) {
        res += i * j + ' ';
    }
    res += '\n';
}
console.log(res);
