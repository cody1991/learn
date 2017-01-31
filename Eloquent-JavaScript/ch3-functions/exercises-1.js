function min(a, b) {
  if (isNaN(a) || isNaN(b)) {
    console.log('传入的参数不是数字')
    return null
  }

  return a > b ? b : a
}

console.log(min(0, 10))
console.log(min(0, -10))
