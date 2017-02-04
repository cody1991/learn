// # => walls or rocks
// o => critters 动物🐒们
let plan = [
  "############################",
  "#      #    #      o      ##",
  "#                          #",
  "#          #####           #",
  "##         #   #    ##     #",
  "###           ##     #     #",
  "#           ###      #     #",
  "#   ####                   #",
  "#   ##       o             #",
  "# o  #         o       ### #",
  "#    #                     #",
  "############################"
]

// 坐标对象
function Vector(x, y) {
  this.x = x
  this.y = y
}

Vector.prototype.plus = function (other) {
  return new Vector(this.x + other.x, this.y + other.y)
}

// Next, we need an object type that models the grid itself. A grid is part of a world, but we are making it a separate object (which will be a property of a world object) to keep the world object itself simple. The world should concern itself with world-related things, and the grid should concern itself with grid-related things.

// let grid = [
//   ["top left", "top middle", "top right"],
//   ["bottom left", "bottom middle", "bottom right"]
// ]
// console.log(grid[1][2])

// or we can use a single array, with size width × height, and decide that the element at (x,y) is found at position x + (y × width) in the array

// let grid = ["top left", "top middle", "top right", "bottom left", "bottom middle", "bottom right"]
// console.log(grid[2 + (1 * 3)])

// ===> Grid object

function Grid(width, height) {
  this.space = new Array(width * height)
  this.width = width
  this.height = height
}

Grid.prototype.isInside = function (vector) {
  return vector.x >= 0 && vector.x < this.width && vector.y >= 0 && vector.y < this.height
}

Grid.prototype.get = function (vector) {
  return this.space[vector.x + this.width * vector.y]
}

Grid.prototype.set = function (vector, value) {
  this.space[vector.x + this.width * vector.y] = value
}

Grid.prototype.forEach = function (f, context) {
  for (let y = 0; y < this.height; y++) {
    for (let x = 0; x < this.width; x++) {
      let value = this.space[x + y * this.width]
      if (value != null) {
        f.call(context, value, new Vector(x, y))
      }
    }
  }
}

let grid = new Grid(5, 5)
console.log(grid.get(new Vector(1, 1)))
grid.set(new Vector(1, 1), 'X')
console.log(grid.get(new Vector(1, 1)))

// each critter object has an act method, when called returns an action
// action is an object with a type property, and direction

// act method is called, it is given a view object that allows the critter to inspect its surroundings
// eight sorrounding squares: n for north , ne for northeast and so on

// north east south west
// nw n ne
// w     e
// sw s se  
let directions = {
  "n": new Vector(0, -1),
  "ne": new Vector(1, -1),
  "e": new Vector(1, 0),
  "se": new Vector(1, 1),
  "s": new Vector(0, 1),
  "sw": new Vector(-1, 1),
  "w": new Vector(-1, 0),
  "nw": new Vector(-1, -1)
}

// view object has method - look , takes a direction and returns a character
// also provides - find and - findAll, both take a map character as an argument

function randomElement(array) {
  return array[Math.floor(Math.random() * array.length)]
}

let directionNames = "n ne e se s sw w nw".split(" ")

// stupid critter that just follows its nose until it hits an obstacle and then bounces off in a random open direction
function BouncingCritter() {
  this.direction = randomElement(directionNames)
}

BouncingCritter.prototype.act = function (view) {
  if (view.look(this.direction) != ' ') {
    this.direction = view.find(" ") || "s"
  }
  return {
    type: "move",
    direction: this.direction
  }
}

// World object
// take plan and legend as arguments
// legend tells us what each character in the map means

function elementFromChar(legend, ch) {
  if (ch == ' ') {
    return null
  }

  // create an instance of the right type by looking up the character's constructor and applying new to it
  // then add originChar property to it to make it easy to find out what character the element was originall created from

  // we need this originChar property when implementing the world's toString method
  // this method builds up a maplinke string from the world's current state by performing a two-dimensional loop over the squares on the grid
  let element = new legend[ch]()
  element.originChar = ch
  return element
}

function charFromElement(element) {
  if (element == null) {
    return " "
  } else {
    return element.originChar
  }
}

function World(map, legend) {
  let grid = new Grid(map[0].length, map.length)
  this.grid = grid
  this.legend = legend

  map.forEach(function (line, y) {
    // 里面的 this 不再是这个对象的
    // 我们可以在外面使用 self = this 就像这个例子
    // 也可以使用 bind() 函数，比如
    // let test = {
    //   prop: 10,
    //   addPropTo: function (array) {
    //     return array.map(function (elt) {
    //       return this.prop + elt
    //     }.bind(this))
    //   }
    // }
    // console.log(test.addPropTo([5]))
    // // => [15]
    // forEach map 也有第二个可选的参数，我们可以这样做
    // let test = {
    //   prop: 10,
    //   addPropTo: function (array) {
    //     return array.map(function (elt) {
    //       return this.prop + elt
    //     }, this)
    //   }
    // }
    // console.log(test.addPropTo([5]))
    for (let x = 0; x < line.length; x++) {
      grid.set(
        new Vector(x, y),
        elementFromChar(legend, line[x])
      )
    }
  })
}

World.prototype.toString = function () {
  let output = ''
  for (let y = 0; y < this.grid.height; y++) {
    for (let x = 0; x < this.grid.width; x++) {
      let element = this.grid.get(new Vector(x, y))
      output += charFromElement(element)
    }
    output += '\n'
  }
  return output
}

World.prototype.turn = function () {
  let acted = []

  // Grid.prototype.forEach = function (f, context) {
  //   for (let y = 0; y < this.height; y++) {
  //     for (let x = 0; x < this.width; x++) {
  //       let value = this.space[x + y * this.width]
  //       if (value != null) {
  //         f.call(context, value, new Vector(x, y))
  //       }
  //     }
  //   }
  // }
  // forEach 再上面定义了

  // value => critter 对应 grid 里面某个 square 的元素，我们要找的是 critter 所以这里写了 critter
  // new Vectort(x,y) 是当前的坐标
  this.grid.forEach(function (critter, vector) {
    if (critter.act && acted.indexOf(critter) == -1) {
      acted.push(critter)
      this.letAct(critter, vector)
    }
  }, this)
}

// value => critter 对应 grid 里面某个 square 的元素，我们要找的是 critter 所以这里写了 critter
// new Vectort(x,y) 是当前的坐标
World.prototype.letAct = function (critter, vector) {
  // new View 创建当前生物的视图
  // 下面这段是小虫子的定义
  // function BouncingCritter() {
  //   this.direction = randomElement(directionNames)
  // }

  // BouncingCritter.prototype.act = function (view) {
  //   if (view.look(this.direction) != ' ') {
  //     this.direction = view.find(" ") || "s"
  //   }
  //   return {
  //     type: "move",
  //     direction: this.direction
  //   }
  // }
  let action = critter.act(new View(this, vector))

  // 有返回并且类型是 move
  if (action && action.type == 'move') {

    // 将要移动到的位置
    let dest = this.checkDestination(action, vector)
    if (dest && this.grid.get(dest) == null) {
      this.grid.set(vector, null)
      this.grid.set(dest, critter)
    }
  }
}

World.prototype.checkDestination = function (action, vector) {
  if (directions.hasOwnProperty(action.direction)) {
    let dest = vector.plus(directions[action.direction])
    if (this.grid.isInside(dest)) {

      // 返回移动后的位置
      return dest
    }
  }
}

// A wall is simple object -- taking up space and has no act method
function Wall() {

}

function View(world, vector) {
  this.world = world
  this.vector = vector
}

View.prototype.look = function (dir) {
  let target = this.vector.plus(directions[dir])
  if (this.world.grid.isInside(target)) {
    return charFromElement(this.world.grid.get(target))
  } else {
    return '#'
  }
}

View.prototype.findAll = function (ch) {
  let found = []
  for (let dir in directions) {
    if (this.look(dir) == ch) {
      found.push(dir)
    }
  }
  return found
}

View.prototype.find = function (ch) {
  let found = this.findAll(ch)

  if (found.length == 0) {
    return null
  }

  return randomElement(found)
}

let world = new World(plan, {
  "#": Wall,
  "o": BouncingCritter
})

console.log(world.toString())

// console.log(world)

for (let i = 0; i < 5; i++) {
  world.turn()
  console.log(world.toString())
}
