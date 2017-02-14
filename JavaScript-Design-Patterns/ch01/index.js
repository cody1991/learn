// let CheckObject = {
//   checkName() {

//   },
//   checkEmail() {

//   }
// }

// ---

// 函数也是对象
// 这个对象不能复制一份，在 new 关键词创建新的对象，对象不能继承这些方法
// let CheckObject = function () {}

// CheckObject.checkName = function () {

// }
// CheckObject.checkEmail = function () {

// }
// let cb1 = new CheckObject()

// // [Function] 这个有，可是只是在构造函数这个对象上，不能继承
// console.log(CheckObject.checkName)

// // 两个都是 undefined
// console.log(cb1.checkName)
// console.log(cb1.checkEmail)

// ---

// let CheckObject = function () {
//   return {
//     checkName() {

//     },
//     checkEmail() {

//     }
//   }
// }

// 每次调用函数，都会返回之前写的对象，看起来是 CheckObject 对象，可是实际上返回的新的对象
// 不是真正意义上的类的创建，创建出来的对象也和 CheckObject 没有关系
// console.log(CheckObject().checkName)

// let CheckObject = function () {
//   this.checkName = function () {
//     console.log('checkName')
//   }
//   this.checkEmail = function () {
//     console.log('checkEmail')
//   }
// }

// // 当作类来看的话，用关键字 new 来创建，实例化

// // 可以使用 CheckObject 类创建出来的对象了
// let a = new CheckObject()
// a.checkEmail()

// 所有方法放在函数内部，通过 this 定义，每次 new 的时候，新创建的对象都会对类的 this 上的属性进行复制。所以这些新的对象都有自己一套方法。

// 但是这样是很奢侈的，我们在原型对象上进行

// let CheckObject = function () {

// }

// CheckObject.prototype.checkName = function () {

// }

// CheckObject.prototype.checkEmail = function () {

// }

// 这样创建出来，对象拥有的方法就是一个了。它们依赖 prototype 原型一次寻找，找的方法是同一个，都绑定在 CheckObject 对象类原型上

// 上面的方法写很多遍 prototype，换成下面这样

// let CheckObject = function () {

// }

// 记住两个不能混着用，否则下面的会覆盖前面的对象赋值

// CheckObject.prototype = {
//   checkName() {
//     console.log('checkName')
//   },
//   checkEmail() {
//     console.log('checkEmail')
//   }
// }

// let a = new CheckObject()
// a.checkName()
// a.checkEmail()

// 但是上面我们重复写了 a ，我们可以运用链式的

// let CheckObject = {
//   checkName() {
//     console.log('checkName')
//     return this
//   },
//   checkEmail() {
//     console.log('checkEmail')
//     return this
//   }
// }

// CheckObject.checkName().checkEmail()

// 也可以放在类的原型对象中
// let CheckObject = function () {}

// CheckObject.prototype = {
//   checkName() {
//     console.log('checkName')
//     return this
//   },
//   checkEmail() {
//     console.log('checkEmail')
//     return this
//   }
// }

// let a = new CheckObject()
// a.checkName().checkEmail()

// ---

// prototype.js 扩展了 Function Array Object 的原型链
// 比如 Function.prototype.checkEmail = function(){}

// 习惯函数形式
// let f = function(){}
// f.checkEmail()

// 熟悉类形式
// let f = new Function()
// f.checkEmail()

// 这样会污染原生的 Fucntion
// 抽象一个统一的添加方法

// Function.prototype.addMethod = function (name, fn) {
//   this[name] = fn
// }

// 这里只有 methods 上面添加了新的 checkName checkEmail 方法，而不是在 Function 上
// let methods = new Function(){}

// methods.addMethod('checkName', function () {
//   console.log('checkName')
// })

// methods.addMethod('checkEmail', function () {
//   console.log('checkEmail')
// })

// methods.checkName()
// methods.checkEmail()

// 接下来我们换成链式的

// Function.prototype.addMethod = function (name, fn) {
//   this[name] = fn
//   return this
// }

// let methods = new Function()

// methods.addMethod('checkName', function () {
//   console.log('checkName')
//   return this
// })

// methods.addMethod('checkEmail', function () {
//   console.log('checkEmail')
//   return this
// })

// methods.checkName().checkEmail()

// 使用类 调用方式

Function.prototype.addMethod = function (name, fn) {
  this.prototype[name] = fn
}

let Methods = function () {}

Methods.addMethod('checkName', function () {
  console.log('name')
  return this
})

Methods.addMethod('checkEmail', function () {
  console.log('email')
  return this
})

let m = new Methods()
m.checkEmail().checkName()
