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

const p = new Proxy({}, {
	has(target, prop) {
		console.log(`Checking "${prop}" is in the target or not`);
		return true;
	}
});

console.log('foo' in p);