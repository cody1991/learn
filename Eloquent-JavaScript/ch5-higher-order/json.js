let ancestry = require('./ancestry.js')

ancestry = JSON.parse(ancestry)

// console.log(ancestry)
// console.log(ancestry.length)

function filter(array, test) {
  let passed = []
  for (let i = 0; i < array.length; i++) {
    if (test(array[i])) {
      passed.push(array[i])
    }
  }
  return passed
}

console.log(filter(ancestry, function (person) {
  return person.born > 1900 && person.born < 1925
}))

console.log(ancestry.filter(function (person) {
  return person.father === 'Carel Haverbeke'
}))

function map(array, transform) {
  let mapped = []
  for (let i = 0; i < array.length; i++) {
    mapped.push(transform(array[i]))
  }
  return mapped
}

let overNinety = ancestry.filter(function (person) {
  return person.died - person.born > 90
})

console.log(overNinety)

console.log(map(overNinety, function (person) {
  return person.name
}))

function reduce(array, combine, start) {
  let current = start
  for (let i = 0; i < array.length; i++) {
    current = combine(current, array[i])
  }
  return current
}

console.log(reduce([1, 2, 3, 4], function (a, b) {
  return a + b
}, 0))

console.log(ancestry.reduce(function (min, cur) {
  if (cur.born < min.born) {
    return cur
  } else {
    return min
  }
}))

let min = ancestry[0]
for (let i = 1; i < ancestry.length; i++) {
  let cur = ancestry[i]
  if (cur.born < min.born) {
    min = cur
  }
}
console.log(min)

function average(array) {
  function plus(a, b) {
    return a + b
  }

  return array.reduce(plus) / array.length
}

function age(p) {
  return p.died - p.born
}

function male(p) {
  return p.sex === 'm'
}

function female(p) {
  return p.sex === 'f'
}

console.log(average(ancestry.filter(male).map(age)))
console.log(average(ancestry.filter(female).map(age)))

let byName = {

}

ancestry.forEach(function (person) {
  byName[person.name] = person
})

// console.log(byName)

function reduceAncestors(person, f, defaultValue) {
  function valueFor(person) {
    // console.log('查看：')
    // console.log(person)
    if (person == null) {
      return defaultValue
    } else {
      return f(person, valueFor(byName[person.mother]), valueFor(byName[person.father]))
    }
  }
  return valueFor(person)
}

function sharedDNA(person, fromMother, fromFather) {
  if (person.name == 'Pauwels van Haverbeke') {
    return 1
  } else {
    return (fromMother + fromFather) / 2
  }
}

let ph = byName["Philibert Haverbeke"]
console.log(reduceAncestors(ph, sharedDNA, 0) / 4)

function countAncestors(person, test) {
  function combine(current, fromMother, fromFather) {
    let thisOneCounts = current != person && test(current)
    return fromMother + fromFather + (thisOneCounts ? 1 : 0)
  }
  return reduceAncestors(person, combine, 0)
}

function loagLivingPercentage(person) {
  let all = countAncestors(person, function (person) {
    return true
  })

  let longLiving = countAncestors(person, function (person) {
    return (person.died - person.born) >= 70
  })

  return longLiving / all
}

console.log(loagLivingPercentage(byName["Emile Haverbeke"]))

// 可以说后面的一脸萌比吗。。
