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

let list = new LinkedList()
list.toString()
list.append(15)
list.append(10)
list.toString()
console.log(list.size())

let removeEle = list.removeAt(1)
console.log(removeEle)

list.insert(0, 20)
list.insert(0, 20)
list.insert(3, 20)
list.toString()

console.log(list.indexOf(20))
console.log(list.indexOf(15))

list.remove(20)
list.toString()
console.log(list.getHead())
console.log(list.size())
console.log(list.isEmpty())