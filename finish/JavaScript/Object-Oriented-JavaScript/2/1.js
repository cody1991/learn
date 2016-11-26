var res = '';
for (var i = 1; i <= 7; i++) {
    for (var j = 1; j <= 15; j++) {
        res += (i * j) % 8 ? ' ' : '*';
    }
    res += '\n';
}
console.log(res);
