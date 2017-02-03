let ancestry = require('./ancestry.js')
ancestry = JSON.parse(ancestry)

// console.log(ancestry)

function average(array) {
  function plus(a, b) {
    return a + b
  }
  return array.reduce(plus) / array.length
}

function hasKnownMother(person) {
  return byName[person.mother] != null
}

function ageDifference(person) {
  return person.born - byName[person.mother].born
}

let byName = {}
ancestry.forEach(function (person) {
  byName[person.name] = person
})

console.log(average(ancestry.filter(hasKnownMother).map(ageDifference)))
