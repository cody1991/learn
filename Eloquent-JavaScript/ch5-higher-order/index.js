// 单纯的打印？要加入一些方法
// function logEach(array) {
//   for (let i = 0; i < array.length; i++) {
//     console.log(array[i])
//   }
// }

function forEach(array, action) {
  for (let i = 0; i < array.length; i++) {
    action(array[i])
  }
}

forEach(['Wampter', 'Foma', 'Granfalloon'], console.log)

let numbers = [1, 2, 3, 4, 5]
let sum = 0

forEach(numbers, function (number) {
  sum += number
})

console.log(sum)

function greaterThan(n) {
  return function (m) {
    return m > n
  }
}

let greaterThan10 = greaterThan(10)
console.log(greaterThan10(11))

function transparentWrapping(f) {
  return function () {
    return f.apply(null, arguments)
  }
}

function noisy(f) {
  return function (arg) {
    console.log('calling with', arg)
    let val = f(arg)
    console.log('called with', arg, "- got", val)
    return val
  }
}

noisy(Boolean)(0)

function unless(test, then) {
  if (!test) {
    then()
  }
}

function repeat(times, body) {
  for (let i = 0; i < times; i++) {
    body(i)
  }
}

repeat(3, function (n) {
  unless(n % 2, function () {
    console.log(n + " is even")
  })
})
