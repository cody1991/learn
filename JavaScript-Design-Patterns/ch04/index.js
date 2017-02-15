// // 工厂方法模式 通过对产品类的抽象使其创建业务主要负责用于创建多类产品的实例

// let Java = function (content) {
//   this.content = (function (content) {
//     let div = document.createElement('div')
//     div.innerHTML = content
//     div.style.color = 'green'
//     document.getElementById('container').appendChild(div)
//   })(content)
// }

// let PHP = function (content) {
//   this.content = (function (content) {
//     let div = document.createElement('div')
//     div.innerHTML = content
//     div.style.color = 'yellow'
//     document.getElementById('container').appendChild(div)
//   })(content)
// }

// let JavaScript = function (content) {
//   this.content = (function (content) {
//     let div = document.createElement('div')
//     div.innerHTML = content
//     div.style.color = 'pink'
//     document.getElementById('container').appendChild(div)
//   })(content)
// }

// function JobFactory(type, content) {
//   switch (type) {
//   case 'java':
//     return new Java(content)
//   case 'php':
//     return new PHP(content)
//   case 'JavaScript':
//     return new JavaScript(content)
//   }
// }

// console.log(JobFactory('JavaScript', 'JavaScript 哪家强'))

// -------------
// 添加一个类，修改两个地方。我们可以用工厂方法
// 工厂方法，本意说将实际创建对象工作推迟到子类中，这样核心类成了抽象类。工厂方法看作是一个实例化对象的工厂类，安全起见，我们用安全模式类，我们将创建对象的基类放在工厂方法类的原型就可以
// 安全模式类可以屏蔽使用这类的错误使用造成的错误。比如一个类，称为 Demo 类的创建。我们知道类前面需要 new 关键字，不过有人不知道它是一个类，使用的时候忽略了，得不到我们预期的结果

let Demo = function () {
  if (!(this instanceof Demo)) {
    return new Demo()
  }
}

// 安全模式创建的工厂类
let Factory = function (type, content) {
  if (this instanceof Factory) {
    let s = new this[type](content)
  } else {
    return new Factory(type, content)
  }
}

// 工厂原型中创建所有类型数据的基类

Factory.prototype = {
  Java: function (content) {
    console.log(content)
  },
  JavaScript: function (content) {
    console.log(content)
  },
  UI: function (content) {
    console.log(content)
  },
  php: function (content) {
    console.log(content)

  }
}

// 蚁后只要在 Factory 类原型中注册一张名片，就可以用了

let data = [{
  type: 'JavaScript',
  content: 'JavaScript 哪家强'
}, {
  type: 'php',
  content: 'php 哪家强'
}, {
  type: 'UI',
  content: 'UI 哪家强'
}]

for (let i = 0; i < data.length; i++) {
  Factory(data[i].type, data[i].content)
}
