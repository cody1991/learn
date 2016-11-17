const fn = foo => `${foo} world`;

console.log(fn('hello'));

let arr = ['a', 'bc', 'def'];

arr = arr.filter(item => item.length >= 2);
console.log(arr);

const fn2 = (foo, bar) => foo + bar;

console.log(fn2(1, 2));

let arr2 = ['a', 'bc', 'def'];
arr2 = arr2.sort((a, b) => a.length < b.length);
console.log(arr2);

const greet = () => 'Hello world';

console.log(greet());

const arr3 = [1, 2, 3];
const squares = arr3.map(x => x * x);
console.log(squares);

const names = ['cody', 'bob', 'may'];

const newSet = names
    .map((name, index) => ({
        id: index,
        name: name
    }))
    .filter(man => man.id % 2 == 0)
    .map(man => [man.name])
    .reduce((a, b) => a.concat(b));

console.log(newSet);
