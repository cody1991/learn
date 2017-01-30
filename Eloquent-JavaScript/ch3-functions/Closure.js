function wrapValue(n) {
  let localVariable = n

  return function () {
    return localVariable
  }
}

let wrap1 = wrapValue(1)
let wrap2 = wrapValue(2)

console.log(wrap1())
console.log(wrap2())

function multiplier(factor) {
  return function (number) {
    return number * factor
  }
}

let twice = multiplier(2)

console.log(twice(5))
