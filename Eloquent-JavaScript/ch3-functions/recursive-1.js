function findSoulution(target) {
  function find(start, history) {
    // console.log(history)
    if (start === target) {
      return history
    } else if (start > target) {
      return null
    } else {
      return find(start + 5, "(" + history + " + 5)") ||
        find(start * 3, "(" + history + " * 3)")
    }
  }
  return find(1, '1')
}

console.log(findSoulution(24))


function findSoulution2(target) {
  let results = []

  function find(start, history) {
    if (start === target) {
      results.push(history)
      return null
    } else if (start > target) {
      return null
    } else {
      return find(start + 5, "(" + history + " + 5)") ||
        find(start * 3, "(" + history + " * 3)")
    }
  }
  find(1, '1')

  return results
}

console.log(findSoulution2(101))
