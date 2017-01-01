'use strict';

var s = new Set();

s.add('hello').add('goodbye').add('hello');

console.log(s);
console.log(s.size);

console.log(s.has('hello'));

var m = new Map();

m.set('hello', 42);
m.set(s, 34);

console.log(m.get(s));

var wm = new WeakMap();

wm.set(s, {
    extra: 42
});

console.log(wm);

var ws = new WeakSet();

ws.add({
    data: 42
});

console.log(ws);