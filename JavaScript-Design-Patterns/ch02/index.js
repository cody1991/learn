// let Book = function (id, bookname, price) {
//   this.id = id
//   this.bookname = bookname
//   this.price = price
// }

// Book.prototype.display = function () {
//   // 展示这本书
// }

// Book.prototype = {
//   display: function () {

//   }
// }

// let book = new Book(10, 'JavaScrpt设计模式', 50)
// console.log(book.bookname)

// 通过 this 添加属性和方法，和在 prototype 中添加的属性和方法有什么区别

// this 添加的属性方法，在当前对象上添加的
// javascript 基于原型的语言，没创建一个对象，（函数也是对象），都有一个原型 prototype 指向其继承的属性和方法。
// 这样通过 prototype 继承的方法不是对象自身的，这些需要 prototype  一级一级来查找得到
// 而 this 的话是自己拥有的
// 所以我们每次通过类创建新对象， this 指向的属性和方法都会相应地创建
// prototype 继承的属性和方法，每个对象通过 prototype 都可以访问到，所以这些不会再次创建

// constructor 是一个属性，创建一个函数或者对象时都会为其创建一个原型对象 prototype ，在 prototype 对象上又会有像函数中创建 this 一样创建的一个 constructor 属性，它指向拥有整个原型对象的函数或者对象。
// 这个例子里面， Book prototype 中的 constructor 属性 指向 Book 类对象

// 逻辑如下：
// Book prototype 原型链，上面有方法 display ，实例都可以访问到，还有一个 constructor 属性，指向 Book 类对象

// Book 类，有一个 prototype 属性，指向 Book prototype 原型链，它上面有 id bookname price 属性

// 实例 book ，有属性 id bookename price ，然后有一个属性 __proto__ 指向 Book prototype 原型对象

// --------------------

// 下面讨论私有属性 私有方法 共有属性 共有方法 保护方法

// js 里面，函数级作用域，函数内部的变量以及方法在外面访问不到，我们可以创建类私有变量和私有方法
// 内部通过 this 创建的属性和方法，在类创建对象的时候，每个对象自身有一份并且外部可以访问到，通过 this 创建的可以看作是公有属性和方法，而且他们可以访问自身的属性和私有方法，我们把他们当作特权方法。我们可以在对象创建时通过使用这些特权方法，初始化实例对象的一些属性，因此这些在创建对象调用的特权方法，可以看作是构造期

// let Book = function (id, name, price) {
//   // 私有属性
//   let num = 1

//   // 私有方法
//   function checkId() {

//   }
//   // 特权方法
//   this.getName = function () {}
//   this.getPrice = function () {}
//   this.setName = function () {}
//   this.setPrice = function () {}

//   // 共有属性
//   this.id = id

//   // 共有方法
//   this.copy = function () {}

//   // 构造期
//   this.setName(name)
//   this.setPrice(price)
// }

// // new 一个新的对象的时候，外部通过.语法添加的属性 和 方法没有执行到，所以新创建的对象无法获取他们
// // 因此类外面通过点语法定义的属性以及方法被称为静态共有属性和类的静态共有方法
// // 类通过 prototype 创建的属性或者方法在类实例的对象中可以通过 this 访问到 （新创建的对象的 __proto__ 指向了类的原型所指向的对象），所以我们将 prototype 对象中的属性和方法称为共有属性和共有方法

// // 类静态共有属性，对象不能访问
// Book.isChinese = true

// // 类静态共有方法，对象不能访问
// Book.resetTime = function () {
//   console.log('new Time')
// }

// Book.prototype = {
//   isJSBook: false,
//   display: function () {

//   }
// }

// // 通过 new 关键字创建的对象，实质是对新对象 this 的不断赋值，把 prototype 指向类的 prototype 所指向的对象。
// // 构造期外面通过点语法定义的属性方法不会添加到新建的实例上。
// // 所以新创建的对象使用 isChinese 就的通过 Book 类使用而不能通过 this，比如 Book.isChinese，而类的原型 prototype 上定义的属性在新对象里面可以直接使用，因为新建的对象的 prototype 和 类的 prototype 指向同一个对象

// let b = new Book(11, 'JavaScript设计模式', 50)
// console.log(b.num) // undefined
// console.log(b.isJSBook) // false
// console.log(b.id) // 11
// console.log(b.isChinese) // undefined

// // 类的私有属性 num 以及静态共有属性 isChinese 在新创建的 b 对象是访问不到的
// // 类的静态共有属性 isChinese 可以通过类自身来访问

// console.log(Book.isChinese)
// Book.resetTime()

// --------------------

// 下面说闭包，有时候我们创建类的静态变量用闭包实现

// let Book = (function () {
//   // 静态私有变量
//   let bookNum = 0

//   // 静态私有方法
//   function checkBook(name) {

//   }
//   // 返回构造函数

//   return function (newId, newName, newPrice) {
//     // 私有变量
//     let name, price

//     // 私有方法
//     function checkID(id) {

//     }

//     // 特权方法
//     this.getName = function () {}
//     this.getPrice = function () {}
//     this.setName = function () {}
//     this.setPrice = function () {}

//     // 共有属性
//     this.id = newId

//     // 共有方法
//     this.copy = function () {}

//     bookNum++

//     if (bookNum > 100) {
//       throw new Error('我们仅售出100本书')
//     }

//     this.setName(name)
//     this.setPrice(price)
//   }
// })()

// Book.prototype = {
//   // 静态共有属性
//   isJSBook: false,
//   // 静态共有方法
//   display: function () {}
// }

// 闭包有权访问另外一个函数作用域中变量的函数，即在一个函数内部创建另外一个函数。
// 我们把这个闭包作为作为创建对象的构造函数，这样既是闭包又是可实例对象的函数，即可以访问到类函数作用域中的变量，比如 bookNum 这个变量，此时这个变量叫做静态私有变量，checkBook() 称之为静态私有方法
// 闭包内部也有其自身的私有变量以及私有方法，比如 price checkID。

// 但是闭包外部添加原型属性和方法看上去就像脱离了闭包这个类，我们有时候实现一个完整的类然后返回，比如下面这样，看起来更像一个整体了

// let Book = (function () {
//   // 静态私有变量
//   let bookNum = 0

//   // 静态私有方法
//   function checkBook(name) {

//   }
//   // 返回构造函数

//   function _book(newId, newName, newPrice) {
//     // 私有变量
//     let name, price

//     // 私有方法
//     function checkID(id) {

//     }

//     // 特权方法
//     this.getName = function () {}
//     this.getPrice = function () {}
//     this.setName = function () {}
//     this.setPrice = function () {}

//     // 共有属性
//     this.id = newId

//     // 共有方法
//     this.copy = function () {}

//     bookNum++

//     if (bookNum > 100) {
//       throw new Error('我们仅售出100本书')
//     }

//     this.setName(name)
//     this.setPrice(price)
//   }

//   _book.prototype = {
//     // 静态共有属性
//     isJSBook: false,
//     // 静态共有方法
//     display: function () {}
//   }

//   return _book
// })()

// console.log(new Book(11, 'JavaScript设计模式', 55))

// -----------------------

// 我们可能忘记 new,可以写检察

// let Book = function (title, time, type) {
//   this.title = title
//   this.time = time
//   this.type = type
// }

// let book = Book('JavaScript', '2014', 'js')

// // undefined
// console.log(book)
// console.log(title)
// console.log(time)
// console.log(type)

// 上面直接执行这个函数了，而这个函数在全局变量下执行，所以属性添加到了 window 上面，我们这个 book 变量最终的作用是得到 Book 这个类的执行结果，而函数没有 return 这个 Book 自然只返回 undefined。我们加入安全模式

// let Book = function (title, time, type) {
//   if (this instanceof Book) {
//     this.title = title
//     this.time = time
//     this.type = type
//   } else {
//     return new Book(title, time, type)
//   }
// }

// let book = Book('JavaScript', '2014', 'js')

// Book { title: 'JavaScript', time: '2014', type: 'js' }
// console.log(book)

// ------------------------------

// 接下来说说继承

// 类有三个部分，第一个部分是构造函数内的，供实例化对象复制用；第二部分是构造函数外的，直接通过 . 语法添加，供类使用的，实例化对象访问不到；第三个是类原型中的，实例化对象可以通过其原型链间接访问到，也是为供所有实例化对象所共用的。所以在继承中所涉及的不仅仅是一个对象

// 类式继承

// function SuperClass() {
//   this.superValue = true
// }

// SuperClass.prototype.getSuperValue = function () {
//   return this.superValue
// }

// function SubClass() {
//   this.subValue = false
// }

// SubClass.prototype = new SuperClass()
// SuperClass.prototype.getSubValue = function () {
//   return this.subValue
// }

// // 继承很简单，声明两个类而已，不过类式继承需要第一个类的实例赋值给第二个类
// // 类的原型对象的作用就是为类的原型添加共有方法，但类不能直接访问这些属性和方法。必须通过原型 prototype 来访问。
// // 而我们实例化一个父类的时候，新创建的对象复制了父类构造函数内的属性和方法，并且将原型 __proto__ 指向了父类的原型对象，这样就拥有了父类的原型对象上的属性和方法了，还可以访问从父类构造期函数中复制的属性和方法。并且这个新创建的对象可直接访问到父类构造函数上的属性和方法，

// let instance = new SubClass()

// // true
// console.log(instance.getSuperValue())

// // false
// console.log(instance.getSubValue())

// // instanceof 通过判断对象的 prototype 链来确定这个对象是否是某个类的实例，而不关心对象与类的自身结构

// // true
// console.log(instance instanceof SuperClass)

// // true
// console.log(instance instanceof SubClass)

// // false
// console.log(SubClass instanceof SuperClass)

// // 我们说 subClass 继承了 superClass ，为什么得到的 SubClass instanceof SuperClass 是 false。因为 instanceof 判断的对象是否是后面类的实例，不代表两者的继承。我们实现 subClass 继承 superClass 是通过将 superClass 的实例赋值给了 subClass 的原型 prototype ，所以说是 subClass.prototype 继承了 superClass

// // true
// console.log(SubClass.prototype instanceof SuperClass)

// // true
// // 所创建的所有对象都是 Object 的实例
// console.log(instance instanceof Object)

// ----------------------------

// 由于字类通过原型 prototype 对父类实例化，继承了父类。所以父类中的共有属性要是是引用类型，就会在字类中被所有实例共用，因此一个字类的实例更改字类原型从父类构造函数中继承来的共有属性，就会影响到其他的字类

// function SuperClass() {
//   this.books = ['JavaScript', 'html', 'css']
// }

// function SubClass() {

// }

// SubClass.prototype = new SuperClass()

// let instance1 = new SubClass()
// let instance2 = new SubClass()

// console.log(instance1.books)
// instance1.books.push('设计模式')

// // [ 'JavaScript', 'html', 'css', '设计模式' ]
// // [ 'JavaScript', 'html', 'css', '设计模式' ]
// console.log(instance2.books)
// console.log(instance1.books)

// 由于字类实现的继承靠其原型 prototype 对父类的实例化实现，因此在创建父类的时候，无法向父类传递参数，因而在实例化父类的时候也无法对父类构造函数内的属性进行初始化

// ---------------------

// javascript 是灵活的，自然有其他继承方法解决，比如常见的构造函数继承

// function SuperClass(id) {
//   // 引用类型的共有属性
//   this.books = ['JavaScript', 'html', 'css']

//   // 值类型的共有属性
//   this.id = id
// }

// // 父类声明原型对象
// SuperClass.prototype.showBooks = function () {
//   console.log(this.books)
// }

// function SubClass(id) {
//   SuperClass.call(this, id)

//   // call 方法可以更改函数的作用环境，因此在字类中，对 superClass 调用这个方法就是将字类中的变量在父类中执行一遍，由于父类中是给 this 绑定属性的，因此子类自然也就继承了父类的共有属性。 由于这种类型的继承没有涉及原型 prototype ，所以父类的原型方法自然不会被字类继承，如果想要子类继承久必须放在构造函数中，这样创建出来的每个实例单独有一份不能共用，这样就违背了代码复用的原则。综合两个的话，就是组合式继承了
// }

// let instance1 = new SubClass(10)
// let instance2 = new SubClass(11)

// instance1.books.push('设计模式')

// console.log(instance1.books)
// console.log(instance1.id)
// console.log(instance2.books)
// console.log(instance2.id)

// instance1.showBooks()

// -----------------

// 组合继承

// function SuperClass(name) {
//   // 值属性共有属性
//   this.name = name

//   // 引用属性共有属性
//   this.books = ['html', 'css', 'JavaScript']
// }

// // 父类原型共有方法
// SuperClass.prototype.getName = function () {
//   console.log(this.name)
// }

// // 声明子类
// function SubClass(name, time) {
//   // 构造函数式继承父类 name 属性
//   SuperClass.call(this, name)

//   // 子类中新增共有属性
//   this.time = time
// }

// SubClass.prototype = new SuperClass()
// SubClass.prototype.getTime = function () {
//   console.log(this.time)
// }

// let instance1 = new SubClass('js book', 2014)
// instance1.books.push('设计模式')
// console.log(instance1.books)
// instance1.getName()
// instance1.getTime()

// let instance2 = new SubClass('css book', 2013)
// console.log(instance2.books)
// instance2.getName()
// instance2.getTime()

// -------------------------

// 上面我们在使用构造函数继承时，执行了一遍父类的构造函数，而在实现子类原型的类式继承时又调用了一遍父类构造函数，因此父类构造函数调用了两次
// 可以进行优化

// 借助原型 prototype 可以根据已有对象创建一个新的对象，同时不必创建新的自定义对象类型。

// // 原型是继承
// function inheritObject(o) {
//   // 生命一个过度函数对象
//   function F() {}

//   // 过度对象的原型继承父对象
//   F.prototype = o

//   // 返回过度对象的一个实例，该对象的原型继承了父对象
//   return new F()
// }

// 和类式继承有点像，对类似继承的一个封装，其中的过度对象相当于类似继承中的子类，不过在原型式中作为一个过滤对象出现了，目的是为了创建要返回的新的实例化对象

// 类式继承中的问题也会出现，就是共用了父类上引用类型的属性
// 不过这种方式由于 F 过度类的构造函数中无内容，开销小，使用起来也比较方便

// let book = {
//   name: 'jsbook',
//   alikeBook: ['css book', 'html book']
// }

// let newBook = inheritObject(book)
// newBook.name = 'ajax book'
// newBook.alikeBook.push('xml book')

// let otherBook = inheritObject(book)
// otherBook.name = 'flash book'
// otherBook.alikeBook.push('as book')

// console.log(newBook.name)
// console.log(newBook.alikeBook)
// console.log(otherBook.name)
// console.log(otherBook.alikeBook)
// console.log(book.name)
// console.log(book.alikeBook)

// ajax book
// [ 'css book', 'html book', 'xml book', 'as book' ]
// flash book
// [ 'css book', 'html book', 'xml book', 'as book' ]
// jsbook
// [ 'css book', 'html book', 'xml book', 'as book' ]

// ------------------
// 寄生式继承

// 声明基类

// let book = {
//   name: 'js book',
//   alikeBook: ['css book', 'html book']
// }

// function createObject(obj) {
//   let o = new inheritObject(obj)
//   o.getName = function () {
//     console.log(this.name)
//   }
//   return o
// }

// let newBook = createObject(book)
// console.log(newBook.name)
// console.log(newBook.alikeBook)
// newBook.alikeBook.push('xml book')
// console.log(newBook.alikeBook)
// console.log(book.alikeBook)
// newBook.getName()

// undefined
// book.getName()

// 对原型继承的第二次封装，并且在第二次封装过程中对对象进行了扩展。这样创建的对象不仅仅有父类中的属性和方法，而且添加了新的属性和方法

// 最终模式 寄生组合式继承
// 组合式继承，我们类式继承同构造函数继承组合使用，有一个问题就是子类不是父类的实例，子类的原型是父类的实例，才有寄生组合式继承

// 寄生式继承 继承原型
// 传递参数 subClass 子类
// 传递参数 superClass 父类
function inheritPrototype(subClass, superClass) {
  // 复制一份父类的原型副本保存在变量中
  let p = inheritObject(superClass.prototype)

  // 修改因为重写子类导致子类的 constructor 属性被修改
  p.constructor = SubClass

  // 设置子类的原型
  subClass.prototype = p
}

// 组合式继承中，通过构造函数继承的属性和方法是没有问题的，我们这里主要探究通过寄生式继承重新继承父类的原型。我们需要继承的仅仅是父类的原型，不再需要调用父类的构造函数。换句话说，构造函数继承中我们已经调用了父类的构造函数，因此我们需要的就是父类的原型对象的一个副本，这个副本我们通过原型继承便可得到，但是这样直接赋值给子类有问题，因为父类原型对象复制得到的复制对象 p 的 constructor 指向的不是 subClass 子类，因此寄生式继承着你要对复制对象 p 做一次增强，修复其 constructor 属性指向不正确的问题，最后将得到的复制对象 p 复制给子类的原型，这样子类的原型就继承了父类的原型并且没有执行父类的构造函数

// 原型是继承
function inheritObject(o) {
  // 声明一个过度函数对象
  function F() {}

  // 过度对象的原型继承父对象
  F.prototype = o

  // 返回过度对象的一个实例，该对象的原型继承了父对象
  return new F()
}

// function SuperClass(name) {
//   this.name = name
//   this.colors = ['red', 'blue', 'green']
// }

// SuperClass.prototype.getName = function () {
//   console.log(this.name)
// }

// function SubClass(name, time) {
//   SuperClass.call(this, name)
//   this.time = time
// }

// // 寄生式继承父类原型
// inheritPrototype(SubClass, SuperClass)

// SubClass.prototype.getTime = function () {
//   console.log(this.time)
// }

// let instance1 = new SubClass('js book', 2014)
// let instance2 = new SubClass('css book', 2013)

// instance1.colors.push('black')

// console.log(instance1.colors)
// console.log(instance2.colors)
// instance2.getName()
// instance2.getTime()

// 这个时候子类添加方法要一个个添加，否则直接覆盖了。

// 总结下现在就是
// subClass 构造函数的 prototype 原型对象 指向 subClass prototype
// subClass prototype 的 __proto__ 指向了 superClass 的 superClass prototype，它是 superClass的一个实例，和 superClass prototype形成原型链，还有 constructor 属性，指向了 subClass 构造函数
// instance1 实例的 __proto__ 指向了 subClass prototype

// 接下来就是 superClass 构造函数，它的 prototype 属性指向了 superClass prototype
// 而 superClass prototype 的 contructor 指向回 superClass 构造函数

// function inheritPrototype(subClass, superClass) {
//   let p = inheritObject(superClass.prototype)
//   p.constructor = SubClass
//   subClass.prototype = p
// }

// function inheritObject(o) {
//   function F() {}
//   F.prototype = o
//   return new F()
// }

// 先调用 inheritPrototype 这个函数，传入了 subClass 和 superClass 两个类
// let p = inheritObject(superClass.prototype)
// 我们这里是要获取 superClass.prototype 父类原型对象的一个副本
// inheritObject 进入这个函数
// 我们创建一个空的函数，然后把这个函数的原型对象指向父元素的superClass.prototype
// 之后返回了这个实例，这个实例其实就是 superClass prototype 了
// 这个时候 superCLass.prototype 的 constructor 指向 superClass ,所以我们回到 inheritPrototype 需要把他改为指向 subClass
// 最后就是把这个 p 对象复制给 subClass 的原型对象，就完成了

// ----------------------------

// 多继承

// 先说说 继承单对象属性的 extend 方法

// 浅复制
// let extend = function (target, source) {
//   for (let property in source) {
//     target[property] = source[property]
//   }
//   return target
// }

// let book = {
//   name: 'JavaScript 设计模式',
//   alike: ['css', 'html', 'JavaScript']
// }

// let anotherBook = {
//   color: 'blue'
// }

// extend(anotherBook, book)

// // JavaScript 设计模式
// // [ 'css', 'html', 'JavaScript' ]
// console.log(anotherBook.name)
// console.log(anotherBook.alike)

// anotherBook.alike.push('ajax')
// anotherBook.name = '设计模式'

// // 设计模式
// // [ 'css', 'html', 'JavaScript', 'ajax' ]
// console.log(anotherBook.name)
// console.log(anotherBook.alike)

// // 设计模式
// // [ 'css', 'html', 'JavaScript', 'ajax' ]
// console.log(book.name)
// console.log(book.alike)

// // 多继承，属性复制

// let mix = function () {
//   let i = 1,
//     len = arguments.length,
//     target = arguments[0],
//     arg

//   for (; i < len; i++) {
//     arg = arguments[i]
//     for (let property in arg) {
//       target[property] = arg[property]
//     }
//   }

//   return target
// }

// // mix 就是将传入的多个对象的属性复制到源对象中，这样即可实现多个对象的属性的继承
// // 我们也可以绑定到原生 Object 上，所有对象都有这个方法了

// Object.prototype.mix = function () {
//   let i = 1,
//     len = arguments.length,
//     target = arguments[0],
//     arg

//   for (; i < len; i++) {
//     arg = arguments[i]
//     for (let property in arg) {
//       this[property] = arg[property]
//     }
//   }
// }

// // 我们就可以
// // otherBook.mix(book1, book2)

// --------------------

// 多态

function add() {
  let arg = arguments,
    len = arg.length

  switch (len) {
  case 0:
    return 10
  case 1:
    return 10 + arg[0]
  case 2:
    return arg[0] + arg[1]
  }

}

console.log(add())
console.log(add(5))
console.log(add(6, 7))

// 修改成更加易懂的类形式

function Add() {
  function zero() {
    return 10
  }

  function one(num) {
    return 10 + num
  }

  function two(num1, num2) {
    return num1 + num2
  }

  this.add = function () {
    let arg = arguments,
      len = arg.length

    switch (len) {
    case 0:
      return zero()
    case 1:
      return one(arg[0])
    case 2:
      return two(arg[0], arg[1])
    }
  }
}

let A = new Add()
console.log(A.add())
console.log(A.add(5))
console.log(A.add(6, 7))
