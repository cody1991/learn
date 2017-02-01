function range(start, end, step) {
  step = step || 1
  let arr = []
  if (step >= 0) {
    for (let i = start; i <= end; i += step) {
      arr.push(i)
    }
  } else {
    for (let i = start; i >= end; i += step) {
      arr.push(i)
    }
  }

  return arr
}

console.log(range(1, 10))
console.log(range(1, 10, 2))
console.log(range(5, 2, -1))

function sum(arr) {
  let result = 0
  for (value in arr) {
    result += arr[value]
  }
  return result
}

console.log(sum(range(1, 10)))
