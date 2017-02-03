function flatten(array) {
  return array.reduce(function (result, cur) {
    return result.concat(cur)
  })
}

let arrays = [
  [1, 2, 3],
  [4, 5],
  [6]
]

console.log(flatten(arrays))
