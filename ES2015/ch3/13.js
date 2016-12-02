const obj = {
	_name: '',
	prefix: '',
	get name() {
		return this.prefix + this._name
	},
	set name(str) {
		this._name = str;
	}
}

obj.name = 'es2015';
console.log(obj.name);

obj.prefix = 'hello ';
console.log(obj.name);

const obje = {
	foo: 1
};
const p = new Proxy(obje, {
	has(target, prop) {
		console.log(`Checking "${prop}" is in the target or not`);
		return true;
	},
	get(target, prop) {
		console.log(`Program is trying to fetch the property "${prop}"`);
		return target[prop];
	},
	set(target, prop, value) {
		console.log(`Setting value "${value}" on the key "${prop}" in the target object`);
		return true;
	}
});

console.log('foo' in p);
console.log(p.foo);

p.foo = 2;

const sum = function(...args) {
	return args
		.map(Number)
		.filter(Boolean)
		.reduce((a, b) => a + b);
}

const p2 = new Proxy(sum, {
	apply(target, thisArg, args) {
		console.log(`Function is being called with arguments [${args.join()}] and context ${thisArg}`);
		return target.call(thisArg, ...args);

	}
});

console.log(p2(1, 2, 3));

class Foo {}

const p3 = new Proxy(Foo, {
	construct(target, args, newTarget) {
		console.log(target);
		console.log(args);
		console.log(newTarget);
		return {
			arguments: args
		}
	}
})

const obj2 = new p3(1, 2, 3);


console.log(obj2.arguments);