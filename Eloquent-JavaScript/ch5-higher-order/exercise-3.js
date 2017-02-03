let ancestry = require('./ancestry.js')
ancestry = JSON.parse(ancestry)

// console.log(ancestry)

function average(array) {
  function plus(a, b) {
    return a + b
  }
  return array.reduce(plus) / array.length
}

function groupBy(array, groupOf) {
  let groups = {}
  array.forEach(function (element) {
    // 返回组名就好了
    let groupName = groupOf(element)
    if (groupName in groups) {
      groups[groupName].push(element)
    } else {
      groups[groupName] = [element]
    }
  })
  return groups
}

function century(person) {
  return Math.ceil(person.died / 100)
}

let byCentury = groupBy(ancestry, century)

console.log(byCentury)

function age(person) {
  return person.died - person.born
}

for (century in byCentury) {
  let persons = byCentury[century]

  console.log(century, ': ', average(persons.map(age)).toFixed(1))
}
