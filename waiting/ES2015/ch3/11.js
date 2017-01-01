// const fib = [0, 1];

// const n = 10;

// for (let i = 2; i < n - 1; i++) {
// 	fib.push(fib[i - 1] + fib[i - 2]);
// }

// console.log(fib)

function* fib() {
	let a = 0;
	let b = 1;

	yield a;
	yield b;

	while (true) {
		let next = a + b;
		a = b;
		b = next;
		yield next;
	}
}

let fibGen = fib();
for (var i = 0; i < 10; i++) {
	console.log(fibGen.next().value);
}

function* genFn() {
	let a = 2;
	yield a;

	while (true) {
		yield a = a / (2 * a + 1);
	}
}

let genfn = genFn();
// for (var i = 0; i < 10; i++) {
// 	console.log(genfn.next().value);
// }

for (const a of genfn) {
	if (a < 1 / 100) break;
	console.log(a);
}

function isGeneratorFunction(fn) {
	if (Symbol && Symbol.toStringTag) {
		return fn[Symbol.toStringTag] === 'GeneratorFunction';
	}

	const genFn = (function*() {}).constructor;
	return fn instanceof genFn;
}

function isGenerator(obj) {
	// return obj.toString ? obj.toString() === '[object Generator]' : false;
	if (Symbol && Symbol.toStringTag) {
		return obj[Symbol.toStringTag] === 'Generator'
	} else if (obj.toString) {
		return obj.toString() === '[object Generator]';
	}
	return false;
}