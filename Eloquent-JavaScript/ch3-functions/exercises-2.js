function isEven(number) {
  if (isNaN(number)) {
    return false
  }

  function access(cur) {
    if (cur === 0) {
      return true
    } else if (cur === 1) {
      return false
    } else if (cur < 0) {
      return access(-cur)
    } else {
      return access(cur - 2)
    }
  }

  return access(number)
}

console.log(isEven(50))
console.log(isEven(75))
console.log(isEven(-1))
console.log(isEven(-2))
