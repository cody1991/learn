let journal = require('./journal.js')

// import journal from './journal.js' => es6

// function addEntry(events, didITurnIntoASquirrel) {
//   journal.push({
//     events: events,
//     squirrel: didITurnIntoASquirrel
//   })
// }

// addEntry(["work", "touched tree", "pizza", "running",
//   "television"
// ], false);
// addEntry(["work", "ice cream", "cauliflower", "lasagna",
//   "touched tree", "brushed teeth"
// ], false);
// addEntry(["weekend", "cycling", "break", "peanuts",
//   "beer"
// ], true);

// ----- 改变

// function addEntry(squirrel) {
//   let entry = {
//     events: [],
//     squirrel: squirrel
//   }
//   for (let i = 1; i < arguments.length; i++) {
//     entry.events.push(arguments[i])
//   }
//   journal.push(entry)
// }
// addEntry(true, 'word', 'touched tree', 'pizza', 'running', 'television')


// console.log(journal)

// journal as :
// {"events":["carrot","exercise","weekend"],"squirrel":false},
// {"events":["bread","pudding","brushed teeth","weekend","touched tree"],"squirrel":false},
// {"events":["carrot","nachos","brushed teeth","cycling","weekend"],"squirrel":false},

function hasEvent(event, entry) {
  return entry.events.indexOf(event) !== -1
}

function tableFor(event, journal) {
  let table = [0, 0, 0, 0]
  for (let i = 0; i < journal.length; i++) {
    let entry = journal[i]
    let index = 0

    if (hasEvent(event, entry)) {
      index += 1
    }

    if (entry.squirrel) {
      index += 2
    }

    table[index] += 1
  }

  return table
}

console.log(tableFor('pizza', journal))
console.log(tableFor('carrot', journal))

function phi(table) {
  return (table[3] * table[0] - table[2] * table[1]) /
    Math.sqrt((table[2] + table[3]) * (table[0] + table[1]) * (table[1] + table[3]) * (table[0] + table[2]))
}

console.log(phi([76, 9, 4, 1]))

function gatherCorrelations(journal) {
  let phis = {}

  // for (let i = 0; i < journal.length; i++) {
  //   let events = journal[i].events
  //   for (let j = 0; j < events.length; j++) {
  //     let event = events[j]
  //     if (!(event in phis)) {
  //       phis[event] = phi(tableFor(event, journal))
  //     }
  //   }
  // }

  // 使用 forEach 来处理

  journal.forEach(function (entry) {
    entry.events.forEach(function (event) {
      if (!(event in phis)) {
        phis[event] = phi(tableFor(event, journal))
      }
    })
  })
  return phis
}

let correlations = gatherCorrelations(journal)
console.log(correlations)

for (let event in correlations) {
  let correlation = correlations[event]

  if (correlation > 0.1 || correlation < -0.1) {
    console.log(event + ": " + correlation)
  }
}

for (let i = 0; i < journal.length; i++) {
  let entry = journal[i]
  if (hasEvent('peanuts', entry) && !hasEvent('brushed teeth', entry)) {
    entry.events.push('peanut teeth')
  }
}

console.log(phi(tableFor("peanut teeth", journal)))

function randomPointOnCircle(radius) {
  let angle = Math.random() * 2 * Math.PI
  return {
    x: radius * Math.cos(angle),
    y: radius * Math.sin(angle)
  }
}

console.log(randomPointOnCircle(2))
