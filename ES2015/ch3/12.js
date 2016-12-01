const symbol = Symbol();

const symbolForSomething = Symbol('something');
const symbolWithNumber = Symbol(3.14);
const symbolWithObject = Symbol({
	'foo': 'bar'
});

console.log(symbol, symbolForSomething, symbolWithNumber, symbolWithObject);

const symbol2 = Symbol.for('foo');

console.log(Symbol.keyFor(symbol2));

const obj = {};

obj[symbol2] = 'bar';

console.log(obj);

const anotherSymbol = Symbol.for('foo');

console.log(symbol2 === anotherSymbol);
console.log(obj[anotherSymbol]);