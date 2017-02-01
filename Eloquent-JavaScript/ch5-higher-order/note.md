```
let ancestry = require('./ancestry.js')

ancestry = JSON.parse(ancestry)

let theSet = ["Carel Haverbeke", "Maria van Brussel", "Donald Duck"];

function isInSet(set, person) {
  return set.indexOf(person.name) > -1
}

console.log(ancestry.filter(function (person) {
  return isInSet(theSet, person)
}))

console.log(ancestry.filter(isInSet.bind(null, theSet)))
```

The call to bind returns a function that will call isInSet with theSet as first argument, followed by any remaining arguments given to the bound function.

The first argument, where the example passes null, is used for method calls, similar to the first argument to apply.
