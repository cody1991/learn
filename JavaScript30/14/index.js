;
(function() {
  'use strict'
 
  let age = 10
  let age2 = age
  

  console.log(age, age2)

  age = 200

  console.log(age, age2)

  let name = 'Wes'
  
  let name2 = name

  console.log(name, name2)

  name = 'wesley'

  console.log(name, name2)
  
  const players = ['wes', 'sarah', 'ryan', 'poppy']

  const team = players

  console.log(players, team)

  players[0] = 'cody'

  console.log(players, team)

  const team2 = players.slice(0)

  const team3 = [].concat(players)

  // es6
  // const team4 = [...players]

  const team5 = Array.from(players)

  players[1] = 'cody'

  console.log(team, team2, team3 ,team5) 

  const person = {
    name: 'Wes Bos',
    age: 80
  }

  const cap = person

  person.name = 'cody'

  console.log(person, cap)
  
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign

  // The Object.assign() method is used to copy the values of all enumerable own properties from one or more source objects to a target object. It will return the target object.

  // Object.assign(target, ...sources)
  const cap2 = Object.assign({}, person, {
    number: 99,
    age: 12
  })

  console.log(person, cap, cap2)

  const wes = {
    name: 'Wes',
    age: 100,
    social: {
      twitter: '@wesbos',
      facebook: 'wesbos.developer'
    }
  }

  console.log(wes)

  const dev = Object.assign({}, wes)

  const dev2 = JSON.parse(JSON.stringify(wes))

  console.log(wes, dev, dev2)
})();
