function LinkedList() {
	function Node(element) {
		this.element = element
		this.next = null
	}

	let length = 0
	let head = null

	// 向列表尾部添加一个新的项。
	this.append = (element) => {
		let node = new Node(element),
			current

		//列表中第一个节点
		if (head === null) {
			head = node
		} else {
			current = head

			while (current.next) {
				current = current.next
			}

			current.next = node
		}

		length++
	}

	// 向列表的特定位置插入一个新的项。
	this.insert = (position, element) => {

		if (position >= 0 && position <= length) {

			let node = new Node(element),
				current = head,
				previous,
				index = 0

			if (position === 0) {
				node.next = current
				head = node
			} else {
				while (index++ < position) {
					previous = current
					current = current.next
				}
				node.next = current
				previous.next = node
			}
			length++

			return true
		} else {
			return false
		}
	}

	// 从列表的特定位置移除一项。
	this.removeAt = (position) => {
		if (position > -1 && position < length) {
			let current = head,
				previous,
				index = 0

			if (position === 0) {
				head = current.next
			} else {
				while (index++ < position) {
					previous = current
					current = current.next
				}
				previous.next = current.next
			}
			length--
			return current.element
		} else {
			return null
		}
	}

	// 从列表中移除一项。
	this.remove = (element) => {
		let idx = this.indexOf(element)

		return this.removeAt(idx)
	}

	// 返回元素在列表中的索引。如果列表中没有该元素则返回-1。
	this.indexOf = (element) => {
		let current = head,
			index = 0

		while (current) {
			if (element === current.element) {
				return index
			}
			index++
			current = current.next
		}
		return -1
	}

	// 如果链表中不包含任何元素，返回true，如果链表长度大于0则返回false。
	this.isEmpty = () => {
		return length === 0
	}

	// 返回链表包含的元素个数。与数组的length属性类似。
	this.size = () => {
		return length
	}

	// 由于列表项使用了Node类， 就需要重写继承自JavaScript对象默认的toString方法，让其只输出元素的值。
	this.toString = () => {
		let current = head,
			listString = ''

		if (current == null) {
			console.log('链表为空')
			return
		}

		while (current !== null) {
			// console.log(current.element)
			listString += current.element + ' '
			current = current.next

		}
		console.log(`链表元素：${listString}`)

	}

	this.getHead = () => {
		return head
	}
}

function Dictionary() {
	let items = {}

	// set(key,value):向字典中添加新元素。
	this.set = (key, value) => {
		items[key] = value
	}

	this.get = (key) => {
		return this.has(key) ? items[key] : undefined
	}

	// remove(key):通过使用键值来从字典中移除键值对应的数据值。
	this.remove = (key) => {
		if (this.has(key)) {
			delete items[key]
			return true
		}
		return false
	}

	// has(key):如果某个键值存在于这个字典中，则返回true，反之则返回false。  get(key):通过键值查找特定的数值并返回。
	this.has = (key) => {
		return items.hasOwnProperty(key)
	}

	// clear():将这个字典中的所有元素全部删除。
	this.clear = () => {
		items = {}
	}

	// size():返回字典所包含元素的数量。与数组的length属性类似。
	this.size = () => {
		let count = 0
		for (let prop in items) {
			if (items.hasOwnProperty(prop)) {
				++count
			}
		}
		return count
	}

	// keys():将字典所包含的所有键名以数组形式返回。
	this.keys = () => {
		let keys = []
		for (let key in items) {
			if (this.has(key)) {
				keys.push(key)
			}
		}
		return keys
	}

	// values():将字典所包含的所有数值以数组形式返回。
	this.values = () => {
		let values = []
		for (let key in items) {
			if (this.has(key)) {
				values.push(items[key])
			}
		}
		return values
	}

	this.getItems = () => {
		return items
	}
}

let dictionary = new Dictionary()

dictionary.set('Gandalf', 'gandalf@email.com')
dictionary.set('John', 'John@email.com')
dictionary.set('Tyrion', 'tyrion@email.com')

console.log(dictionary.values())
console.log(dictionary.keys())
console.log(dictionary.getItems())
console.log(dictionary.has('John'))
console.log(dictionary.size())
console.log(dictionary.get('John'))
dictionary.remove('John')
console.log(dictionary.values())
console.log(dictionary.keys())
console.log(dictionary.getItems())

function HashTable() {
	let table = []

	function ValuePair(key, value) {
		this.key = key
		this.value = value
		this.toString = () => {
			return '[' + this.key + ' - ' + this.value + ']'
		}
	}

	function loseloseHashCode(key) {
		let hash = 0

		for (let i = 0; i < key.length; i++) {
			hash += key.charCodeAt(i)
		}

		return hash % 37
	}

	// put(key,value):向散列表增加一个新的项(也能更新散列表)。
	this.put = (key, value) => {
		let position = loseloseHashCode(key)

		// console.log(position + '-' + key)

		if (table[position] == undefined) {
			table[position] = new LinkedList()
		}

		// table[position] = value
		table[position].append(new ValuePair(key, value))
	}

	// remove(key):根据键值从散列表中移除值。
	this.remove = (key) => {
		// table[loseloseHashCode(key)] = undefined
		let position = loseloseHashCode(key)

		if (table[position] !== undefined) {
			let current = table[position].getHead()
			while (current.next) {
				if (current.element === key) {
					table[position].remove(current.element)
					if (table[position].isEmpty()) {
						table[position] = undefined
					}
					return true
				}
				current = current.next
			}

			if (current.element.key === key) {
				table[position].remove(current.element)
				if (table[position].isEmpty()) {
					table[position] = undefined
				}
				return true
			}
		}
		return false
	}

	// get(key):返回根据键值检索到的特定的值。
	this.get = (key) => {
		// return table[loseloseHashCode(key)]

		let position = loseloseHashCode(key)

		if (table[position] !== undefined) {
			let current = table[position].getHead()

			while (current.next) {
				if (current.element.key === key) {
					return current.element.value
				}
				current = current.next
			}

			if (current.element.key === key) {
				return current.element.value
			}
		}
		return undefined
	}

	this.print = () => {
		for (let i = 0; i < table.length; i++) {
			if (table[i] !== undefined) {
				console.log(i + ' : ')
				table[i].toString()
			}
		}
	}
}

let hash = new HashTable()
hash.put('Gandalf', 'gandalf@email.com')
hash.put('John', 'John@email.com')
hash.put('cody', 'Cody@gmail.com')

console.log(hash.get('John'))
console.log(hash.get('cody'))

hash.remove('Gandalf')

console.log(hash.get('Gandalf'))

hash = new HashTable()

hash.put('Gandalf', 'gandalf@email.com')
hash.put('John', 'johnsnow@email.com')
hash.put('Tyrion', 'tyrion@email.com')
hash.put('Aaron', 'aaron@email.com')
hash.put('Donnie', 'donnie@email.com')
hash.put('Ana', 'ana@email.com')
hash.put('Jonathan', 'jonathan@email.com')
hash.put('Jamie', 'jamie@email.com')
hash.put('Sue', 'sue@email.com')
hash.put('Mindy', 'mindy@email.com')
hash.put('Paul', 'paul@email.com')
hash.put('Nathan', 'nathan@email.com')

hash.print()