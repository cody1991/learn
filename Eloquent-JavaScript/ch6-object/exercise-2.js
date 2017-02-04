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
    // 有可能存在后面占据两行的情况
    let line = this.text[i] || ''
    result.push(line + repeat(" ", width - line.length))
  }
  return result
}

function StretchCell(inner, width, height) {
  this.inner = inner
  this.width = width
  this.height = height
}

StretchCell.prototype.minWidth = function () {
  return this.inner.minWidth()
}

StretchCell.prototype.minHeight = function () {
  return Math.max(this.inner.minHeight(), this.height)
}

StretchCell.prototype.draw = function (width, height) {
  return this.inner.draw(width, height)
}

function repeat(string, times) {
  let result = ''
  for (let i = 0; i < times; i++) {
    result += string
  }
  return result
}

function TextCell(text) {
  this.text = text.split('\n')
}

let sc = new StretchCell(new TextCell('abc'), 1, 2)

console.log(sc.minWidth())
console.log(sc.minHeight())
console.log(sc.draw(3, 2))
