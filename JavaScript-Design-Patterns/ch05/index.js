// 抽象类

let Car = function () {}

Car.prototype = {
  getPrice: function () {
    return new Error('抽象方法不能调用')
  },
  getSpeed: function () {
    return new Error('抽象方法不能调用')
  }
}

// 定义了该类需要的方法，如果子类没有重写，那就会调用它们，进行报错。

// 抽象工厂模式

// 抽象工厂方法
let VehicleFactory = function (subType, superType) {
  if (typeof VehicleFactory[superType] === 'function') {
    // 缓存类
    function F() {}

    // 继承父类属性和方法
    F.prototype = new VehicleFactory[superType]()

    subType.constructor = subType

    // 子类原型继承父类
    subType.prototype = new F()

    // 将子类 constructor 指向子类
  } else {
    throw new Error('未创建该抽象类')
  }
}

VehicleFactory.Car = function () {
  this.type = 'car'
}

VehicleFactory.Car.prototype = {
  getPrice() {
    return new Error('抽象方法不能调用')
  },
  getSpeed() {
    return new Error('抽象方法不能调用')
  }
}

VehicleFactory.Bus = function () {
  this.type = 'Bus'
}

VehicleFactory.Bus.prototype = {
  getPrice() {
    return new Error('抽象方法不能调用')
  },
  getPassengerNum() {
    return new Error('抽象方法不能调用')
  }
}

// 抽象工厂其实就是一个实现子类继承父类的方法，这个方法中我们需要通过传递子类以及要继承父类的名称，在抽象工厂方法中增加了一次对抽象类存在性的一次判断，如果存在，子类继承父类的方法，子类通过寄生式继承。继承父类过程中又一个地方要注意，过度类的原型继承时，我们不是继承父类的原型，而是 new 关键字创建父类的一个实例，这么做因为过度类不应继承父类的原型方法，还要继承父类的对象属性，所以要通过 new 关键字将父类的构造函数执行一遍来复制构造函数中的属性和方法。

// 对抽象工厂添加抽象类也很特殊，因为抽象工厂是个方法不是需要实例化对象，所以只要一份，因此直接为抽象工厂添加类的属性即可，我们可以通过点语法在抽象工厂上添加我们需要用的汽车抽象类 Car Bus

let BMW = function (price, speed) {
  this.price = price
  this.speed = speed
}

VehicleFactory(BMW, 'Car')

BMW.prototype.getPrice = function () {
  return this.price
}

BMW.prototype.getSpeed = function () {
  return this.speed
}

let YUTONG = function (price, passenger) {
  this.price = price
  this.passenger = passenger
}

VehicleFactory(YUTONG, 'Bus')
YUTONG.prototype.getPrice = function () {
  return this.price
}

YUTONG.prototype.getPassengerNum = function () {
  return this.passenger
}

// 通过抽象工厂，我们知道每个子类属于哪一种类别，也具备了该类必备的属性和方法

let yutong = new YUTONG(10000, 40)
console.log(yutong.getPrice())
console.log(yutong.getPassengerNum())
