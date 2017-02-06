function numberToString(n, base) {
  let result = ''
  let sign = ''
  if (n < 0) {
    sign = '-'
    n = -n
  }
  do {
    result = String(n % base) + result
    n = Math.floor(n / base)
  } while (n > 0)
  return sign + result
}

console.log(numberToString(13, 10))

// function canYouSpotTheProblem() {
//   'use strict'
// ReferenceError: counter is not defined
//   for (counter = 0; counter < 10; counter++) {
//     console.log('Happy')
//   }
// }
// canYouSpotTheProblem()

// function Person(name) {
//   'use strict'
//   // TypeError: Cannot set property 'name' of undefined
//   this.name = name
// }
// let cody = Person('cody')

// function promptNumber(question) {
//   let result = Number(prompt(question, ""))
//   if (isNaN(result)) {
//     return null
//   } else {
//     return result
//   }
// }
// console.log(promptNumber('How many trees do you see'))

function promptDirection(question) {
  let result = prompt(question, '')
  if (result.toLowerCase() == 'left') {
    return "L"
  }
  if (result.toLowerCase() == 'right') {
    return "R"
  }
  throw new Error("Invalid direction: " + result)
}

function look() {
  if (promptDirection('which way?') == 'L') {
    return 'a house'
  } else {
    return 'two angry bears'
  }
}

try {
  console.log('You see', look())
} catch (error) {
  console.log('Something went wrong: ' + error)
}

let context = null

// function withContext(newContext, body) {
//   let oldContext = context
//   context = newContext
//   let result = body()
//   context = oldContext
//   return result
// }

// =>

function withContext(newContext, body) {
  let oldContext = context
  context = newContext
  try {
    return body()
  } finally {
    context = oldContext
  }
}

try {
  withContext(5, function () {
    if (context < 10) {
      throw new Error('Not enough context')
    }
  })
} catch (e) {
  console.log('Ignoring: ' + e)
}

console.log(context)

function InputError(message) {
  this.message = message
  this.stack = (new Error()).stack
}

InputError.prototype = Object.create(Error.prototype)
InputError.prototype.name = 'InputError'

function promptDirection2(question) {
  let result = prompt(question, '')
  if (result.toLowerCase() == 'left') {
    return "L"
  }
  if (result.toLowerCase() == 'right') {
    return "R"
  }
  throw new InputError("Invalid direction: " + result)
}

// for (;;) {
//   try {
//     dir = promptDirection2('Where?')
//     console.log('You chose ', dir)
//     break
//   } catch (e) {
//     if (e instanceof InputError) {
//       console.log('Not a valid direction. Try again')
//       console.log(e.name)
//       console.log(e.stack)
//       console.log(e.message)
//     } else {
//       throw e
//     }
//   }
// }

function AssertionFailed(message) {
  this.message = message
}

AssertionFailed.prototype = Object.create(Error.prototype)

function assert(test, message) {
  if (!test) {
    throw new AssertionFailed(message)
  }
}

function lastElement(array) {
  assert(array.length > 0, 'empty array in lastElement')
  return array[array.length - 1]
}

// lastElement([])
