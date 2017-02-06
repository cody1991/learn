let box = {
  locked: true,
  unlock: function () {
    this.locked = false
  },
  lock: function () {
    this.locked = true
  },
  _content: [],
  get content() {
    if (this.locked) {
      throw new Error('Locked')
    }
    return this._content
  }
}

function withBoxUnlocked(body) {
  let locked = box.locked
  if (!locked) {
    return body()
  }
  box.unlock()
  try {
    return body()
  } finally {
    console.log('do lock')
    box.lock()
  }
}

try {
  withBoxUnlocked(function () {
    throw new Error('Pirates on the horizon')
  })
} catch (e) {
  console.log('Error raised:', e)
}

// withBoxUnlocked(function () {
//   box.content.push('gold piece')
// })

console.log(box)
