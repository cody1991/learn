function Vector(x, y) {
  this.x = x
  this.y = y
}

Vector.prototype.plus = function (vector) {
  return new Vector(this.x + vector.x, this.y + vector.y)
}
Vector.prototype.minus = function (vector) {
  return new Vector(this.x - vector.x, this.y - vector.y)
}

Object.defineProperty(Vector.prototype, 'length', {
  get: function () {
    return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2))
  }
})

console.log(new Vector(1, 2).plus(new Vector(2, 3)))
console.log(new Vector(1, 2).minus(new Vector(2, 3)))

console.log(new Vector(3, 4).length)
console.log(new Vector(4, 4).length)
