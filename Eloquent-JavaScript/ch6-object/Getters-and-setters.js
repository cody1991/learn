let pile = {
  elements: ['eggshell', 'orange peel', 'worm'],
  get height() {
    return this.elements.length
  },
  set height(value) {
    console.log('Ignoring attempt to set height to', value)
  }
}

console.log(pile.height)
pile.height = 100

function TextCell(text) {
  this.text = text.split('\n')
}

TextCell.prototype.minWidth = function () {
  return this.text.reduce(function (width, line) {
    return Math.max(width, line.length)
  }, 0)
}

TextCell.prototype.minHeight = function () {
  return this.text.length
}

TextCell.prototype.draw = function (width, height) {
  let result = []
  for (let i = 0; i < height; i++) {
    let line = this.text[i] || ''
    result.push(line + repeat(" ", width - line.length))
  }
  return result
}

Object.defineProperty(TextCell.prototype, 'heightProp', {
  get: function () {
    return this.text.length
  }
})

let cell = new TextCell("no\nway")
console.log(cell.heightProp)
cell.heightProp = 100
console.log(cell.heightProp)
