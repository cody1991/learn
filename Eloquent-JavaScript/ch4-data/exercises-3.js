function prepend(value, list) {
  return {
    value: value,
    rest: list
  }
}

function listToArray(list) {
  let array = []
  for (let node = list; node; node = node.rest) {
    array.push(node.value)
  }
  return array
}

console.log(listToArray(null))

function nth(list, n) {

  // let result = 0
  // let cur = list

  // while (result < number) {
  //   cur = cur.rest
  //   result++
  // }

  // return cur.value
  if (!list) {
    return undefined
  } else if (n === 0) {
    return list.value
  } else {
    return nth(list.rest, n - 1)
  }
}

function arrayToList(array) {
  // let result = {}
  // let cur = null
  // for (let i = 0; i < array.length; i++) {
  //   let item = {
  //     value: array[i],
  //     rest: null
  //   }
  //   if (cur === null) {
  //     result = item
  //     cur = item
  //   } else {
  //     cur.rest = item
  //     cur = item
  //   }
  // }
  // return result
  let list = null
  for (let i = array.length - 1; i >= 0; i--) {
    list = {
      value: array[i],
      rest: list
    }
  }
  return list
}

console.log(arrayToList([10, 20]))
console.log(arrayToList([10, 20, 30]))
console.log(prepend(10, prepend(20, null)))
console.log(nth(arrayToList([40, 50, 60]), 1))

// 空的时候就是 null
