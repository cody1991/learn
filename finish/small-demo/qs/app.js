var qs = require('qs');

var obj = qs.parse('a=c');
console.log(obj);
var str = qs.stringify(obj);
console.log(str);

obj = qs.parse('foo[bar]=baz');
console.log(obj);

var plainObject = qs.parse('a[hasOwnProperty]=b', {
    plainObject: true
});
console.log(plainObject);

console.log(qs.parse('a%5Bb%5D=c'));
console.log(qs.parse('foo[bar][baz]=foobarbaz'));

console.log(qs.parse('a[b][c][d][e][f][g][h][i]=j'));
console.log(qs.parse('a[b][c][d][e][f][g][h][i]=j', { depth: 1 }));

console.log(qs.parse('a=b&c=d'));
console.log(qs.parse('a=b&c=d', {
    parameterLimit: 1
}));

console.log(qs.parse('a=b;c=d', { delimiter: ';' }));
console.log(qs.parse('a=b;c=d,e=f', { delimiter: /[;,]/ }));
console.log(qs.parse('a.b=c', { allowDots: true }));
console.log(qs.parse('a[]=b&a[]=c'));
console.log(qs.parse('a[1]=c&a[0]=b'));
console.log(qs.parse('a[1]=b&a[15]=c'));
console.log(qs.parse('a[]=&a[]=b'));
console.log(qs.parse('a[0]=b&a[1]=&a[2]=c'));
console.log(qs.parse('a[100]=b'));
console.log(qs.parse('a[1]=b', { arrayLimit: 0 }));
console.log(qs.parse('a[]=b', { parseArrays: false }));
console.log(qs.parse('a[0]=b&a[b]=c'));
console.log(qs.parse('a[][b]=c'));
console.log('-------------');
console.log('-------------');
console.log('stringiifying');
console.log('-------------');
console.log('-------------');
console.log(qs.stringify({ a: "b" }));
console.log(qs.stringify({ a: { b: "c" } }));
console.log(qs.stringify({ a: { b: "c" } }, { encode: false }));
console.log(qs.stringify({ a: { b: 'c' } }, {
    encode: function(str) {}
}));
console.log(qs.stringify({ a: ['b', 'c', 'd'] }));
console.log(qs.stringify({ a: ['b', 'c', 'd'] }, { indices: false }));
console.log(qs.stringify({ a: ['b', 'c'] }, { arrayFormat: 'indices' }));
console.log(qs.stringify({ a: ['b', 'c'] }, { arrayFormat: 'brackets' }));
console.log(qs.stringify({ a: ['b', 'c'] }, { arrayFormat: 'repeat' }));
