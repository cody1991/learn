function verify(regexp, yes, no) {
  if (regexp.source == '...') {
    return
  }

  yes.forEach(function (s) {
    if (!regexp.test(s)) {
      console.log(`Failure to match "${s}"`)
    }
  })

  no.forEach(function (s) {
    if (regexp.test(s)) {
      console.log(`Unexpected match for "${s}"`)
    }
  })
}

// [] 里面不需要 | 
// /[abc]/ Any character from a set of characters
verify(/ca[rt]/, ["my car", "bad cats"], ["camper", "high art"])

verify(/pr?op/, ["pop culture", "mad props"], ["plop"])

// 使用 ( | | ) 来获取
verify(/ferr(et|y|ari)/, ["ferret", "ferry", "ferrari"], ["ferrum", "transfer A"])

verify(/ious\b/, ["how delicious", "spacious room"], ["ruinous", "consciousness"])

verify(/\s[.,:;]/, ["bad punctuation ."], ["escape the dot"])

verify(/\w{7,}/, ["hottentottententen"], ["no", "hotten totten tenten"])

// ^e \w
verify(/\b[a-df-z]+\b/, ["red platypus", "wobbling nest"], ["earth bed", "learning ape"])
