import React, {
  Component
} from 'react';
import logo from './logo.svg';
import './App.css';

import Immutable from 'immutable'

const Map = Immutable.Map

const map1 = Map({
  a: 1
})

console.log(map1.size)

const map2 = map1.set('a', 7)

console.log(map1.get('a'), map2.get('a'))

const map3 = map1.delete('a')

console.log(map1.get('a'), map3.get('a'))

const map4 = map1.clear()

console.log(map1.get('a'), map4.get('a'))

const map5 = map1.update('a', () => (7))

console.log(map1.get('a'), map5.get('a'))

const map6 = Map({
  b: 3
})

map1.merge(map6)

console.log(map1.get('b'), map6.get('b'))

const List = Immutable.List

const arr1 = List([1, 2, 3])

const arr2 = arr1.set(-1, 7)

console.log(arr2.toString())

const arr3 = arr1.set(4, 0)

console.log(arr3.toString())

const arr4 = arr1.delete(1)
console.log(arr4.toString())

const arr5 = arr1.insert(1, 2)
console.log(arr5.toString())

const arr6 = arr1.clear()

console.log(arr6.toString())

const Set = Immutable.Set

const set1 = Set([1, 2, 3])

const set2 = set1.add(1).add(5)
const set3 = set1.delete(3)
const set4 = Set([2, 3, 4, 5, 6])
const set5 = set1.union(set4)
const set6 = set1.intersect(set4)
const set7 = set1.subtract(set4)

console.log(set1.toString())
console.log(set2.toString())
console.log(set3.toString())
console.log(set4.toString())
console.log(set5.toString())
console.log(set6.toString())
console.log(set7.toString())


const $obj = Immutable.fromJS({
  a: 1
})

console.log($obj.get('a'))
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;