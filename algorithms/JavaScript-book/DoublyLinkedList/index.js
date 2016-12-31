function DoublyLinkedList() {
	function Node(element) {
		this.element = element
		this.next = null
		this.prev = null
	}

	let length = 0,
		head = null,
		tail = null

	this.insert = (position, element) => {
		if (position >= 0 && position <= length) {
			let node = new Node(element),
				current = head,
				previous,
				index = 0

			if (position === 0) {
				if (!head) {
					head = node
					tail = node
				} else {
					node.next = current
					current.prev = node
					head = node
				}
			} else if (position === length) {
				current = tail
				current.next = node
				node.prev = current
				tail = node
			} else {
				while (index++ < position) {
					previous = current
					current = current.next
				}
				node.next = current
				previous.next = node
				current.prev = node
				node.prev = previous
			}
			length++
			return true
		} else {
			return false
		}
	}

	this.removeAt = (position) => {
		if (position > -1 && position < length) {
			let current = head,
				previous,
				index = 0

			if (position === 0) {
				head = current.next
				if (length === 1) {
					tail = null
				} else {
					head.prev = null
				}
			} else if (position === length - 1) {
				current = tail
				tail = current.prev
				tail.next = null
			} else {
				while (index++ < position) {
					previous = current
					current = current.next
				}

				previous.next = current.next
				current.next.prev = previous
			}

			length--

			return current.element
		} else {
			return null
		}
	}

	this.print = () => {
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
}

let list = new DoublyLinkedList()

list.insert(0, 3)
list.print()
list.insert(0, 1)
list.print()
list.insert(0, 2)
list.print()
list.insert(1, 4)
list.print()
list.insert(4, 5)
list.print()
list.removeAt(0)
list.print()
list.removeAt(3)
list.print()
list.removeAt(1)
list.print()