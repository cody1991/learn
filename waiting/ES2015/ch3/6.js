const obj = {
	foo() {
		return 'bar2'
	}
};

console.log(obj.foo());

const EventEmitter = require('events').EventEmitter;
const emitter = new EventEmitter();

emitter.on('event1', msg => {
	console.log(`Received message:${msg}`);
});

emitter.emit('event1', 'Hello world');

const machine = {
	__proto__: new EventEmitter(),
	method() {

	}
}

console.log(machine);
console.log(machine instanceof EventEmitter);


machine.on('event1', msg => {
	console.log(`Machine received message:${msg}`);
});

machine.emit('event1', 'hello world');

const fibo = {
	a: 0,
	b: 1,
	[Symbol.iterator]() {
		return {
			next() {
				[fibo.a, fibo.b] = [fibo.b, fibo.a + fibo.b];
				return {
					done: false,
					value: fibo.b
				}
			}
		}
	}
}

for (const n of fibo) {
	if (n > 100) {
		break;
	}

	process.stdout.write(n.toString() + ' ');
}