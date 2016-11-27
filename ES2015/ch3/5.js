const obj = {
	hello: 'world',
	foo() {
		const bar = () => this.hello;
		return bar;
	}
}

console.log(obj.foo()());

const a = {
	dam: 'hei',
	init() {
		this.bar = () => this.dam
	},
	foo() {
		return this.dam;
	}
}

a.init();

console.log(a.bar());
console.log(a.foo());

const obj2 = {
	msg: 'po',
	ping() {
		return this.msg
	}
}

console.log(obj2.ping());