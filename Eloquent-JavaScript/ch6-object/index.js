// let rabbit = {}
// rabbit.speak = function (line) {
//   console.log('The rabbit says "' + line + '"')
// }
// rabbit.speak('I\'m alive.')

let whiteRabbit = {
  type: 'white',
  speak: speak
}

let fatRabbit = {
  type: 'fat',
  speak: speak
}

function speak(line) {
  console.log('The ' + this.type + ' rabbit says "' + line + '"')
}

whiteRabbit.speak('Oh my ears and whiskers, how late it\'s getting.')
fatRabbit.speak('I could sure use a carrot right now.')

speak.apply(fatRabbit, ["Burp!"])
speak.call({
  type: 'old'
}, "Oh my god.")

let empty = {}
console.log(empty.toString)
console.log(empty.toString())


// 最顶层的原型链就是 Object.prototype 了
// 提供了比如 toString 这样的方法
console.log(Object.getPrototypeOf(empty))
console.log(Object.prototype)

// nodejs 返回的都是 {}
// 浏览器 Object

console.log(Object.getPrototypeOf(Object.prototype))

// null

// 很多对象的直接原型不是 Object.prototype ，有其他的对象提供了它特定的属性
// 比如 Functions 继承自 Function.prototype
// arrays 继承自 Array.prototype

console.log(Object.getPrototypeOf(isNaN))
console.log(Function.prototype)

// nodejs 返回都是 [Function]
// 浏览器 function () {}

console.log(Object.getPrototypeOf([]))
console.log(Array.prototype)

// Array

// 它们都继承了 Object.prototype 所有都有提供 .toString()

let protoRabbit = {
  speak: function (line) {
    console.log("The " + this.type + " rabbit says '" + line + "'")
  }
}

// The “proto” rabbit acts as a container for the properties that are shared by all rabbits. An individual rabbit object, like the killer rabbit, contains properties that apply only to itself—in this case its type—and derives shared properties from its prototype.

let killerRabbit = Object.create(protoRabbit)
killerRabbit.type = 'Killer'
killerRabbit.speak('SKREEEE!')

// A more convenient way to create objects that derive from some shared prototype is to use a constructor. In JavaScript, calling a function with the new keyword in front of it causes it to be treated as a constructor. The constructor will have its this variable bound to a fresh object, and unless it explicitly returns another object value, this new object will be returned from the call.

// An object created with new is said to be an instance of its constructor.

function Rabbit(type) {
  this.type = type
}

let killerRabbit2 = new Rabbit('killer')
let blackRabbit = new Rabbit('black')
console.log(blackRabbit.type)

// 这个指向构造函数 Rabbit
console.log(blackRabbit.constructor)

// 这个指向构造函数的原型对象
console.log(blackRabbit.constructor.prototype)

// Constructors (in fact, all functions) automatically get a property named prototype, which by default holds a plain, empty object that derives from Object.prototype. 

// 每个通过构造函数创建的实例都会有这个对象作为原型对象
// 所以，给通过 Rabbit 构造函数创建的 rabbits ，我们可以简单的做下面的处理
// Every instance created with this constructor will have this object as its prototype. So to add a speak method to rabbits created with the Rabbit constructor, we can simply do this

Rabbit.prototype.speak = function (line) {
  console.log("The " + this.type + " rabbit says '" + line + "'")
}

blackRabbit.speak('Doom....')

// 构造函数真正的原型对象是 Function.prototype ，因为它是一个函数
// 它的 prototype 属性，会成为实例们的原型对象，但是这个不是它自己的原型对象
// It is important to note the distinction between the way a prototype is associated with a constructor (through its prototype property) and the way objects have a prototype (which can be retrieved with Object.getPrototypeOf). The actual prototype of a constructor is Function.prototype since constructors are functions. Its prototype property will be the prototype of instances created through it but is not its own prototype.

Rabbit.prototype.teeth = 'small'

console.log(killerRabbit2.teeth)

killerRabbit2.teeth = "long, sharp, and bloody"

console.log(killerRabbit2.teeth)
console.log(blackRabbit.teeth)
console.log(Rabbit.prototype.teeth)
console.log(Object.getPrototypeOf(Rabbit))

console.log(Array.prototype.toString == Object.prototype.toString)
console.log([1, 2].toString())

// Array 上的 toString 进行了修改，如果想用原来的 toString 方法，可以使用下面的方法，结果是 [object Array]
console.log(Object.prototype.toString.call([]))

Rabbit.prototype.dance = function () {
  console.log("The " + this.type + " rabbit dances a jig.")
}

killerRabbit2.dance()

let map = {}

function storePhi(event, phi) {
  map[event] = phi
}

storePhi('pizza', 0.069)
storePhi('touched tree', -0.081)
  // 这个在下面也会显示出来
Object.prototype.nonsense = 'hi'
for (let name in map) {
  console.log(name)
}

// toString 并没有在上面，但是 toString 是 true 。因为分了 可枚举和不可枚举的属性
// 简单的赋值 是可枚举的
// 在 Object.prototype 上面的标准属性都是不可枚举的
console.log('toString' in map)

// 我们可以用 Object.defineProperty 方法定义自己的不可枚举属性

Object.defineProperty(Object.prototype, 'hiddenNonsense', {
  enumerable: false,
  value: 'hi'
})

for (let name in map) {
  console.log(name)
}

console.log(map.hiddenNonsense)

console.log(map.hasOwnProperty('toString'))

for (let name in map) {
  if (map.hasOwnProperty(name)) {
    console.log(name)
  }
}

// 这样子传入 null 的话，这个对象就没有原型对象了
let map2 = Object.create(null)
map2['pizza'] = 0.069
console.log("toString" in map2)
console.log(map2.prototype)
console.log(Object.getPrototypeOf(map2))
