let cityStateRegex = /^(.+)[,\\s]+(.+?)\s*(\d{5})?$/
let cityState = 'shenzhen,sunny 32332'
let match = cityState.match(cityStateRegex)
let city = match[1]
let state = match[2]

console.log(city, state)

// --

let menuConfig = {
  title: 'Order',
  buttonText: 'Send',
  cancellable: true
}

function createMenu(config) {
  config = Object.assign({
    title: 'foo',
    body: 'bar',
    buttonText: 'Baz',
    cancellable: true
  }, config)

  console.log(config)
}

createMenu(menuConfig)

// --

class SuperArray extends Array {
  constructor(...args) {
    super(...args)
  }
  diff(comparisonArray) {
    let values = []
    let hash = {}

    for (let i of comparisonArray) {
      hash[i] = true
    }
    for (let i of this) {
      if (!hash[i]) {
        values.push(i)
      }
    }
    return values
  }
}

let superArray = new SuperArray(1, 2, 3, 4, 5, 6, 7)
let comparisonArray = [1, 2, 3, 4]

console.log(superArray.diff(comparisonArray))

// --

const programmerOutput = [{
  name: 'Uncle Bobby',
  linesOfCode: 500
}, {
  name: 'Suzie Q',
  linesOfCode: 1500
}, {
  name: 'Jimmy Gosling',
  linesOfCode: 150
}, {
  name: 'Gracie Hopper',
  linesOfCode: 1000
}];

let totalOutput = programmerOutput
  .map((programmer) => programmer.linesOfCode)
  .reduce((acc, linesOfCode) => acc + linesOfCode, 0)

console.log(totalOutput)

// --

class Shape {
  constructor() {}
}

class Rectangle extends Shape {
  constructor() {
    super()
    this.width = 0
    this.height = 0
  }
  setWidth(width) {
    this.width = width
  }
  setHeight(height) {
    this.height = height
  }
  getArea() {
    return this.width * this.height
  }
}

class Square extends Rectangle {
  constructor() {
    super()
    this.length = 0
  }
  setLength(length) {
    this.length = length
  }
  getArea() {
    return this.length * this.length
  }
}

let shapes = [new Rectangle(), new Rectangle(), new Square()]
renderLargeShapess(shapes)

function renderLargeShapess(shapes) {
  shapes.forEach((shape) => {
    switch (shape.constructor.name) {
    case 'Square':
      shape.setLength(5)
    case 'Rectangle':
      shape.setWidth(4)
      shape.setHeight(5)
    }
    let area = shape.getArea()
    console.log(area)
  })
}

// --
// let Animal = function (age) {
//   if (!(this instanceof Animal)) {
//     throw new Error('Instanctiate with `new`')
//   }
//   this.age = age
// }
// Animal.prototype.move = function () {}

// let Mammal = function (age, furColor) {
//   if (!(this instanceof Mammal)) {
//     throw new Error('Instanctiate with `new`')
//   }
//   Animal.call(this, age)
//   this.furColor = furColor
// }

// Mammal.prototype = Object.create(Animal.prototype)
// Mammal.prototype.constructor = Mammal
// Mammal.prototype.liveBirth = function () {}

// let Human = function (age, furColor, languageSpoken) {
//   if (!(this instanceof Human)) {
//     throw new Error('Instanctiate with `new`')
//   }
//   Mammal.call(this, age, furColor)
//   this.languageSpoken = languageSpoken
// }
// Human.prototype = Object.create(Mammal.prototype)
// Human.prototype.constructor = Human
// Human.prototype.speck = function () {}
// =>
class Animal {
  constructor(age) {
    this.age = age
  }
  move() {}
}

class Mammal extends Animal {
  constructor(age, furColor) {
    super(age)
    this.furColor = furColor
  }
  liveBirth() {}
}

class Human extends Mammal {
  constructor(age, furColor, languageSpoken) {
    super(age, furColor)
    this.languageSpoken = languageSpoken
  }
  speck() {}
}

// --

class Car {
  constructor() {
    this.make = 'Honda';
    this.model = 'Accord';
    this.color = 'white';
  }

  setMake(name) {
    this.name = name;
    // NOTE: Returning this for chaining
    return this;
  }

  setModel(model) {
    this.model = model;
    // NOTE: Returning this for chaining
    return this;
  }

  setColor(color) {
    this.color = color;
    // NOTE: Returning this for chaining
    return this;
  }

  save() {
    console.log(this.make, this.model, this.color);
  }
}

let car = new Car()
  .setColor('pink')
  .setMake('Ford')
  .setModel('F-150')
  .save();
