function Set() {
	var items = {}

	// add(value):向集合添加一个新的项。
	this.add = (value) => {
		if (!this.has(value)) {
			items[value] = value
			return true
		}
		return false
	}

	// remove(value):从集合移除一个值。
	this.remove = (value) => {
		if (this.has(value)) {
			delete items[value]
			return true
		}
		return false
	}

	// has(value):如果值在集合中，返回true，否则返回false。
	this.has = (value) => {
		return items.hasOwnProperty(value)
	}

	// clear():移除集合中的所有项。
	this.clear = () => {
		items = {}
	}

	// size():返回集合所包含元素的数量。与数组的length属性类似。 
	// Object.keys(items).length
	this.size = function() {
		let count = 0
		for (let prop in items) {
			if (items.hasOwnProperty(prop)) {
				++count
			}
		}
		return count
	}

	// values():返回一个包含集合中所有值的数组。
	// Object.keys(items)
	this.values = () => {
		let keys = []
		for (let key in items) {
			keys.push(key)
		}
		return keys
	}

	// x(元素)存在于A中，或x存在于B中
	this.union = (otherSet) => {
		let unionSet = new Set()

		let values = this.values()
		for (let i = 0; i < values.length; i++) {
			unionSet.add(values[i])
		}
		values = otherSet.values()
		for (let i = 0; i < values.length; i++) {
			unionSet.add(values[i])
		}

		return unionSet
	}

	// x(元素)存在于A中，且x存在于B中
	this.intersection = (otherSet) => {
		let intersectionSet = new Set()

		let values = this.values()

		for (let i = 0; i < values.length; i++) {
			if (otherSet.has(values[i])) {
				intersectionSet.add(values[i])
			}
		}

		return intersectionSet
	}

	// x(元素)存在于A中，且x不存在于B中
	this.difference = (otherSet) => {
		let differenceSet = new Set()

		let values = this.values()
		for (let i = 0; i < values.length; i++) {
			if (!otherSet.has(values[i])) {
				differenceSet.add(values[i])
			}
		}
		return differenceSet
	}

	// 集合A中的每一个x(元素)，也需要存在于B中
	this.subset = (otherSet) => {
		if (this.size() > otherSet.size()) {
			return false
		} else {
			let values = this.values()
			for (let i = 0; i < values.length; i++) {
				if (!otherSet.has(values[i])) {
					return false
				}
			}
			return true
		}
	}
}

var set = new Set()
set.add(1)
console.log(set.values())
console.log(set.has(1))
console.log(set.size())
set.add(2)
console.log(set.values())
console.log(set.has(2))
console.log(set.size())

set.remove(1)
console.log(set.values())

set.remove(2)
console.log(set.values())

let setA = new Set()
setA.add(1)
setA.add(2)
setA.add(3)

let setB = new Set()
setB.add(3)
setB.add(4)
setB.add(5)
setB.add(6)

let setC = new Set()

setC.add(3)
setC.add(4)

let unionAB = setA.union(setB)
console.log(unionAB.values())

let intersectionAB = setA.intersection(setB)
console.log(intersectionAB.values())

let differenceAB = setA.difference(setB)
console.log(differenceAB.values())

console.log(setA.subset(setB))
console.log(setC.subset(setB))