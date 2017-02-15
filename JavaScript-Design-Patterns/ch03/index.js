let LoginAlert = function (text) {
  this.content = text
}

LoginAlert.prototype.show = function () {
  console.log(this.content)
}

let userNameAlert = new LoginAlert('用户名不能多于16个字母或数字')
userNameAlert.show()

let passwordAlert = new LoginAlert('输入的密码不正确')
passwordAlert.show()

let loginConfirm = function (text) {
  this.content = text
}

loginConfirm.prototype.show = function () {
  console.log(this.content)
}

let loginFailConfirm = new loginConfirm('您的用户名不存在， 请重新输入')
loginFailConfirm.show()

let loginPrompt = function (text) {
  this.content = text
}

loginPrompt.prototype.show = function () {
  console.log(content)
}

// 最好使用工厂模式
// 到了注册模块，像上面，每次创建还要找到相对应的类，太麻烦。而且 regist 模块用 login 前缀也不好，最好封装在一个函数中。我只要记住这个函数就好了，通过这个函数可以创建我需要的对象。这个函数称为工厂函数

let Basketball = function () {
  this.intro = '篮球盛行于美国'
}

Basketball.prototype = {
  getMember: function () {
    console.log('每个队伍要五个队员')
  },
  getBallSize: function () {
    console.log('篮球很大')
  }
}

let Football = function () {
  this.intro = '足球在世界范围内恨流行'
}

Football.prototype = {
  getMember: function () {
    console.log('每个队伍需要11名队友')
  },
  getBallSize: function () {
    console.log('足球很大')
  },
  constructor: Football
}

console.log(Football instanceof Object)
let football = new Football()
console.log(football instanceof Football)
console.log(Football.prototype.constructor)

let SportsFactory = function (name) {
  switch (name) {
  case 'NBA':
    return new Basketball()
  case 'worldCup':
    return new Football()
  }
}


let footnall = SportsFactory('worldCup')
console.log(footnall)
console.log(footnall.intro)
footnall.getMember()

let PopFactory = function (name, text) {
  switch (name) {
  case 'alert':
    return new LoginAlert(text)
  case 'confirm':
    return new loginConfirm(text)
  case 'prompt':
    return new loginPrompt(text)
  }
}

console.log(PopFactory('alert', '用户名不能多于16个字母或数字'))
console.log(PopFactory('prompt', '用户名不能多于16个字母或数字'))
console.log(PopFactory('confirm', '用户名不能多于16个字母或数字'))

// 简单工厂模式的理念就是创建对象，像上面是对不同的类实例化，不过除此之外简单工厂模式还可以创建相似对象。
// 上面的3歌对象很多地方类似，比如有关闭按钮，提示文案。可以把这些提出出来，不相同的针对性处理
// 我们只要简单创建一个对象，然后通过这个对象大量扩展方法和属性，并且在最终对象中返回出来

// 比如一些书，目录 页码相似，书名 出版时间 书的类型不像是，对于创建的对象相似的属性好处理，不同的属性就有针对性的处理，比如我们将不同的属性作为参数传递来处理

function createBook(name, time, type) {
  let o = new Object()
  o.name = name
  o.time = time
  o.type = type

  o.getName = function () {
    return this.name
  }

  return o
}

let book1 = createBook('js book', 2014, 'js')
let book2 = createBook('css book', 2013, 'css')

console.log(book1.getName())
console.log(book2.getName())

// 很想寄生式继承，但是o没有继承任何类和对象

function createPop(type, text) {
  let o = new Object()
  o.content = text
  o.show = function () {
    console.log(this.content)
  }
  if (type == 'alert') {
    return new LoginAlert(text)
  }

  if (type == 'prompt') {
    return new loginConfirm(text)
  }
}

let userNameAlert2 = createPop('alert', '用户名只能是26个字母和数字')

userNameAlert2.show()

// 第一种通过类实例化对象创建，第二个通过创建一个新对象，然后包装增强其属性和功能来实现。
// 他们之间的差异性也造成前面通过类创建的对象，如果这些类继承同一个父类，他们的父类原型上的方法可以共用
// 后面寄生方式创建的对象都是一个新的个体，他们的方法不能共用
