class Animal {
	constructor(family, specie, hue) {
		this.family = family;
		this.specie = specie;
		this.hue = hue
	}
	yell() {
		console.log(this.hue)
	}

	static extend(constructor, ..._args) {
		return class extends Animal {
			constructor(...args) {
				console.log('args: ' + args);
				console.log('_args: ' + _args);
				super(..._args);
				constructor.call(this, ...args);
			}
		}
	}
}

const Dog = Animal.extend((name) => {
	console.log(name)
	this.name = name;
}, 'Canidae', 'Canis lupus', 'Woug');

const doge2 = new Dog('Doge~');
doge2.yell();
console.log(doge2);
// 为什么是undefined呢。。
console.log('Dog name ' + doge2.name);

const doge = new Animal('Canidae', 'Canis lupus', 'Woug');
doge.yell()

class Point {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
	moveRight(step) {
		return new Promise(resolve => resolve({
			x: this.x + step,
			y: this.y
		}))
	}
	get d() {
		return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2))
	}
}
const p = new Point(2, 5);
console.log(p.d);
p.moveRight(3)
	.then(({
		x,
		y
	}) => console.log(`${x},${y}`));

class Point2D {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}

	toString() {
		return `(${this.x}, ${this.y})`;
	}
}

class Point3D extends Point2D {
	constructor(x, y, z) {
		super(x, y);
		this.z = z;
	}

	toString() {
		return `(${this.x}, ${this.y}, ${this.z})`
	}
}

const point3d = new Point3D(1, 2, 3);
console.log(point3d.toString())


const Counter = {
	_count: 0,
	get value() {
		return ++this._count
	}
}

console.log(Counter.value);
console.log(Counter.value);
console.log(Counter.value);
console.log(Counter.value);

const List = {
	_array: [],
	set new(value) {
		this._array.push(value);
	},
	get last() {
		return this._array[0];
	},
	get value() {
		return this._array;
	}
}

List.new = 1;
List.new = 2;
List.new = 3;

console.log(List.last);
console.log(List.value);

class Node {
	constructor(parent = null) {
		this.__parent = parent;
		this.__children = new Set();

		if (this.isRoot) {
			Node.addRoot(this);
		}
	}

	get isRoot() {
		return !this.__parent;
	}

	static addRoot(root) {
		Node.roots = !Node.roots ? [root] : Node.roots.concat([root]);
	}

	createChild() {
		const node = new Node(this);

		this.__children.add(node);

		return node;
	}

	removeFromParent() {
		this.__parent = null;
		this.__parent.__children.delete(this);
	}

	get size() {
		let size = 0;
		for (const node of this.__children) {
			// node.size会一直循环
			size += node.size
		}

		size = size ? size + 1 : 1;

		return size;
	}

	static get size() {
		return Node.roots
			.map(root => root.size)
			.reduce((a, b) => a + b);
	}
}


const root1 = new Node();
const c1 = root1.createChild();
const c2 = c1.createChild();

console.log(c1);

console.log(c2.__parent == c1);

const root2 = new Node();
root2.createChild();

console.log('root1.size : ' + root1.size);
console.log('root2.size : ' + root2.size);
console.log('Node.size : ' + Node.size);

// console.log(root1);
// console.log(root1.__children);
// console.log(root1.__children.size);
// console.log(root2.__children);
// console.log(root2.__children.size);

class Foo {
	get[Symbol.toStringTag]() {
		return 'Bar';
	}
}
const obj = new Foo()
console.log(obj);
console.log(obj.toString());