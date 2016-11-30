const set1 = new Set();

const set2 = new Set([1, 2, 3]);

console.log(set1, set2);

set1
	.add(1)
	.add(2)
	.add(1);

console.log(set1);

set1.delete(2);

console.log(set1);

set1.clear();

console.log(set1);

console.log(set2.has(2));

set2.forEach((item) => {
	console.log(item);
});

// 可以指定一个上下文

// set2.forEach((item) => {
// 	console.log(this.foo)
// 	console.log(item * this.foo);
// }, {
// 	foo: 2
// });

for (const val of set2) {
	console.log(val);
}

const weakset = new WeakSet();
// 不能包含一个值类型元素，不然会typeerror
// 不能包括无引用的对象，自动清除
// 无法探知大小，不知道包含的元素
weakset.add({
	foo1: 1
});

let foo = {
	bar: 1
}

weakset.add(foo);

console.log(weakset.has(foo));

// const map = new Map([
// 	['foo', 1],
// 	['foo', 2]
// ]);

// console.log(map.get('foo'));

const map = new Map();

map.set('foo', 'hello');
map.set('bar', 'world');
map.set('bar', 'es2015');

console.log(map);

// map.delete('foo')
// map.clear()

console.log(map.get('bar'));

console.log(map.has('bar'));
console.log(map.has('bar1'));

console.log(Array.from(map.entries()));

for (const [key, value] of map) {
	console.log(`${key} : ${value}`)
}
console.log(map);

const map2 = new Map();
map2.set('foo', 1);
map2.set('bar', 2);

console.log(map2);
const str = JSON.stringify(map2);
console.log('str' + str);