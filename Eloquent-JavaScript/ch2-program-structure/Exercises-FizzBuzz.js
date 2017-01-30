for (let i = 0; i < 100; i++) {
  let num = i + 1
  let str = ''
  if (num % 3 === 0) {
    str += 'Fizz'
  }

  if (num % 5 === 0) {
    str += 'Buzz'
  }

  console.log(str || num)
}
