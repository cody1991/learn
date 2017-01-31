function countBs(str) {
  // let count = 0
  // for (let i = 0; i < str.length; i++) {
  //   if (str.charAt(i) === 'B') {
  //     count++
  //   }
  // }
  // return count

  return countChar(str, 'B')
}

console.log(countBs('BBC'))

function countChar(str, ch) {
  let count = 0
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === ch) {
      count++
    }
  }
  return count
}

console.log(countChar('kakkerlak', 'k'))
