// # => walls or rocks
// o => critters 动物🐒们
let plan = [
  "############################",
  "#      #    #      o      ##",
  "#              ~           #",
  "#          #####           #",
  "##         ###o#    ##     #",
  "###         ####     #     #",
  "#           ###      #     #",
  "#   ####                   #",
  "#   ##       o            ~#",
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
  // console.log(grid.get(new Vector(1, 1)))
grid.set(new Vector(1, 1), 'X')
  // console.log(grid.get(new Vector(1, 1)))

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

// 一个新的生物，跟着墙壁走的
// 先定义一个新的操作 dirPlus() 方法
// north east south west
// nw n ne
// w     e
// sw s se  
// directionNames = "n ne e se s sw w nw".split(" ")
// dirPlus("n", 1) => "ne"
// dirPlus("s", -2) => "e"

function dirPlus(dir, n) {
  let index = directionNames.indexOf(dir)
  return directionNames[(index + n + 8) % 8]
}

function WallFollower() {
  this.dir = "s"
}

WallFollower.prototype.act = function (view) {
  let start = this.dir

  // 先检测它刚刚是不是已经经过了一个障碍物
  // 是的话调整方向
  // 不是的话继续往下进行移动
  if (view.look(dirPlus(this.dir, -3)) != " ") {
    start = this.dir = dirPlus(this.dir, -2)
  }
  while (view.look(this.dir) != " ") {
    this.dir = dirPlus(this.dir, 1)
    if (this.dir == start) {
      // 可能被围住了，那么这个循环会一直转，判断这个时候的方向和开始一样，就终止
      break
    }
  }
  return {
    type: 'move',
    direction: this.dir
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
  this.plantEaterCount = 0

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

function Plant() {
  this.energy = 3 + Math.random() * 4
}
Plant.prototype.act = function (view) {
  if (this.energy > 15) {
    let space = view.find(" ")
    if (space) {
      return {
        type: 'reproduce',
        direction: space
      }
    }
  }
  if (this.energy < 20) {
    return {
      type: 'grow'
    }
  }
}

function PlantEater() {
  this.energy = 20
}

PlantEater.prototype.act = function (view) {
  let space = view.find(" ")
  if (this.energy > 60 && space) {
    return {
      type: 'reproduce',
      direction: space
    }
  }
  let plant = view.find("*")
  if (plant) {
    return {
      type: 'eat',
      direction: plant
    }
  }
  if (space) {
    return {
      type: 'move',
      direction: space
    }
  }
}

function Tiger() {
  this.energy = 100
  this.direction = "w"

  this.preySeen = []
}

Tiger.prototype.act = function (view) {
  // console.log(this.energy)
  let seenPerTurn = this.preySeen.reduce(function (a, b) {
    return a + b
  }, 0) / this.preySeen.length

  let prey = view.findAll('O')
  this.preySeen.push(prey.length)

  if (this.preySeen.length > 6) {
    this.preySeen.shift()
  }

  if (prey.length && seenPerTurn > 0.25) {
    return {
      type: 'eat',
      direction: randomElement(prey)
    }
  }

  let space = view.find(" ")
  if (this.energy > 400 && space) {
    // console.log('生孩子')
    return {
      type: 'reproduce',
      direction: space
    }
  }
  if (view.look(this.direction) != " " && space) {
    this.direction = space
  }
  return {
    type: 'move',
    direction: this.direction
  }
}

// 我这样写 肯定很快老虎就灭绝了。。
// function Tiger() {
//   this.energy = 60
//   this.direction = "e"
// }

// Tiger.prototype.act = function (view) {
//   let space = view.find(" ")
//   if (this.energy > 180 && space) {
//     return {
//       type: "reproduce",
//       direction: space
//     }
//   }
//   let plantEaters = view.findAll("O")
//   if (plantEaters.length > 1) {
//     return {
//       type: 'eat',
//       direction: randomElement(plantEaters)
//     }
//   }

//   if (view.look(this.direction) != " " && space) {
//     this.direction = space
//   }

//   return {
//     type: 'move',
//     direction: this.direction
//   }
// }

function SmartPlantEater() {
  this.energy = 30
  this.direction = "e"
}

SmartPlantEater.prototype.act = function (view) {
  let space = view.find(" ")
  if (this.energy > 90 && space) {
    return {
      type: "reproduce",
      direction: space
    }
  }
  let plants = view.findAll('*')
  if (plants.length > 1) {
    return {
      type: 'eat',
      direction: randomElement(plants)
    }
  }
  if (view.look(this.direction) != " " && space) {
    this.direction = space
  }

  return {
    type: 'move',
    direction: this.direction
  }
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
  "o": BouncingCritter,
  "~": WallFollower
})

// console.log(world.toString())

// console.log(world)

// for (let i = 0; i < 5; i++) {
//   world.turn()
//   console.log(world.toString())
// }

// 新建一个构造函数，继承 World
function LifelikeWorld(map, legend) {
  World.call(this, map, legend)
}
LifelikeWorld.prototype = Object.create(World.prototype)

let actionTypes = Object.create(null)

// grow
actionTypes.grow = function (critter) {
  critter.energy += 0.5
  return true
}
actionTypes.move = function (critter, vector, action) {
  let dest = this.checkDestination(action, vector)

  // 如果没有返回 或者动物没有足够的能量 或者要去的位置不是空的
  // 就是移动不了的意思了
  if (dest == null || critter.energy <= 1 || this.grid.get(dest) != null) {
    return false
  }
  // 否则进行移动
  critter.energy -= 1
  this.grid.set(vector, null)
  this.grid.set(dest, critter)
  return true
}
actionTypes.eat = function (critter, vector, action) {
  let dest = this.checkDestination(action, vector)

  // 如果位置不是空的，返回这个位置的生物
  let atDest = dest != null && this.grid.get(dest)

  // 如果那个位置没有生物，或者能量不存在
  if (!atDest || atDest.energy == null) {
    return false
  }

  // 存在的话，直接吃了
  critter.energy += atDest.energy
  this.grid.set(dest, null)
  return true
}
actionTypes.reproduce = function (critter, vector, action) {
  let baby = elementFromChar(this.legend, critter.originChar)
  let dest = this.checkDestination(action, vector)
  if (dest == null || critter <= 2 * baby.energy || this.grid.get(dest) != null) {
    return false
  }

  critter.energy -= 2 * baby.energy
  this.grid.set(dest, baby)
  return true
}

LifelikeWorld.prototype.letAct = function (critter, vector) {
  let action = critter.act(new View(this, vector))

  // 先检测 action 是否有返回值
  // 然后检测这个 action 的 type 是不是存在的
  // 最后检测执行了这个动作以后是不是返回 true
  let handled = action &&
    action.type in actionTypes &&
    actionTypes[action.type].call(this, critter, vector, action)

  if (action && (action.type == 'eat' || action.type == 'move')) {
    // 动物
    this.plantEaterCount++
  }

  // 如果上面的情况返回 false 单纯让它等待，能量减少 0.2，小于 0 的话，移除
  if (!handled) {
    critter.energy -= 0.2
    if (critter.energy <= 0) {
      this.grid.set(vector, null)
    }
  }
}

let valley = new LifelikeWorld(
  [
    "############################",
    "#####                 ######",
    "##   ***                **##",
    "#   *##**         **  O  *##",
    "#    ***     O    ##**    *#",
    "#       O         ##***    #",
    "#                 ##**     #",
    "#   O       #*             #",
    "#*          #**       O    #",
    "#***        ##**    O    **#",
    "##****     ###***       *###",
    "############################"
  ], {
    '#': Wall,
    'O': PlantEater,
    '*': Plant
  })

for (let i = 0; i < 10000; i++) {
  valley.turn()
    // console.log(valley.plantEaterCount)

  if (valley.plantEaterCount == 0) {
    console.log('不聪明的食草动物灭绝在第 ' + i + '代')
    break;
  }

  // console.log(valley.toString())
}


// exercises 更加聪明的食草动物
// 因为上面的情况，总会导致灭绝

valley = new LifelikeWorld(
  [
    "############################",
    "#####                 ######",
    "##   ***                **##",
    "#   *##**         **  O  *##",
    "#    ***     O    ##**    *#",
    "#       O         ##***    #",
    "#                 ##**     #",
    "#   O       #*             #",
    "#*          #**       O    #",
    "#***        ##**    O    **#",
    "##****     ###***       *###",
    "############################"
  ], {
    '#': Wall,
    'O': SmartPlantEater,
    '*': Plant
  })

for (let i = 0; i < 10000; i++) {
  valley.turn()
    // console.log(valley.plantEaterCount)

  if (valley.plantEaterCount == 0) {
    console.log('聪明的食草动物灭绝在第 ' + i + '代')
    break;
  }

  // console.log(valley.toString())
}

// 我们可以参考下：

// 不聪明的食草动物灭绝在第 213代
// 聪明的食草动物灭绝在第 1168代

// 不聪明的食草动物灭绝在第 144代
// 聪明的食草动物灭绝在第 1456代

// 不聪明的食草动物灭绝在第 202代
// 聪明的食草动物灭绝在第 642代

// 不聪明的食草动物灭绝在第 113代
// 聪明的食草动物灭绝在第 2957代

// 不聪明的食草动物灭绝在第 280代
// 聪明的食草动物灭绝在第 2269代

// 不聪明的食草动物灭绝在第 96代
// 聪明的食草动物灭绝在第 1097代

// 不聪明的食草动物灭绝在第 257代
// 聪明的食草动物灭绝在第 977代

// 不聪明的食草动物灭绝在第 174代
// 聪明的食草动物灭绝在第 1999代

// 不聪明的食草动物灭绝在第 131代
// 聪明的食草动物灭绝在第 470代

// 不聪明的食草动物灭绝在第 214代
// 聪明的食草动物灭绝在第 1657代

// 不聪明的食草动物灭绝在第 172代
// 聪明的食草动物灭绝在第 1959代

// exercise 2
// 加入老虎🐯等食肉动物


valley = new LifelikeWorld(
  [
    "####################################################",
    "#                 ####         ****              ###",
    "#   *  @  ##                 ########       OO    ##",
    "#   *    ##        O O                 ****       *#",
    "#       ##*                        ##########     *#",
    "#      ##***  *         ****                     **#",
    "#* **  #  *  ***      #########                  **#",
    "#* **  #      *               #   *              **#",
    "#     ##              #   O   #  ***          ######",
    "#*            @       #       #   *        O  #    #",
    "#*                    #  ######                 ** #",
    "###          ****          ***                  ** #",
    "#       O                        @         O       #",
    "#   *     ##  ##  ##  ##               ###      *  #",
    "#   **         #              *       #####  O     #",
    "##  **  O   O  #  #    ***  ***        ###      ** #",
    "###               #   *****                    ****#",
    "####################################################"
  ], {
    '#': Wall,
    'O': SmartPlantEater,
    '*': Plant,
    '@': Tiger
  })

let stillAlive = true

for (let i = 0; i < 10000; i++) {
  valley.turn()
    // console.log(valley.plantEaterCount)

  if (valley.plantEaterCount == 0) {
    console.log('加上老虎，动物灭绝在第 ' + i + '代')
    stillAlive = false
    break;
  }


  // console.log(valley.toString())
}
