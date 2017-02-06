function MultiplicatorUnitFailure() {

}

function primitiveMultiply(a, b) {
  // 50% multiplies two number
  // 50% raises MultiplicatorUnitFailure()
  if (Math.random() < 0.5) {
    return a * b
  } else {
    throw new MultiplicatorUnitFailure()
  }
}

function reliableMultiply(a, b) {
  for (;;) {
    try {
      return primitiveMultiply(a, b)
    } catch (e) {
      if (e instanceof MultiplicatorUnitFailure) {
        console.log('MultiplicatorUnitFailure')
      }
    }
  }
}

console.log(reliableMultiply(8, 8))
