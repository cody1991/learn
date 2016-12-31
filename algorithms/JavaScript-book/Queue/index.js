function Queue() {
	var items = []

	// 向队列尾部添加一个(或多个)新的项。
	this.enqueue = (elements) => {
		items.push(elements)
	}

	// 移除队列的第一(即排在队列最前面的)项，并返回被移除的元素。
	this.dequeue = () => {
		return items.shift()
	}

	// 返回队列中第一个元素——最先被添加，也将是最先被移除的元素。队列不做任何变动
	this.front = () => {
		return items[0]
	}

	// 如果队列中不包含任何元素，返回true，否则返回false。
	this.isEmpty = () => {
		return items.length == 0
	}

	// 返回队列包含的元素个数，与数组的length属性类似。
	this.size = () => {
		return items.length
	}

	this.print = () => {
		console.log(items.toString())
	}
}

let queue = new Queue()
console.log(queue.isEmpty())

queue.enqueue('John')
queue.enqueue('Jack')
queue.enqueue('Camila')

queue.print()
console.log(queue.size())
console.log(queue.isEmpty())
queue.dequeue()
queue.dequeue()
queue.print()

function PriorityQueue() {
	var items = []

	function QueueElement(element, priority) {
		this.element = element
		this.priority = priority
	}

	this.enqueue = (element, priority) => {
		var queueElement = new QueueElement(element, priority)
		if (this.isEmpty()) {
			items.push(queueElement)
		} else {
			let added = false
			for (var i = 0; i < this.size(); i++) {
				if (queueElement.priority < items[i].priority) {
					items.splice(i, 0, queueElement)
					added = true
					break
				}
			}
			if (!added) {
				items.push(queueElement)
			}
		}
	}

	// 移除队列的第一(即排在队列最前面的)项，并返回被移除的元素。
	this.dequeue = () => {
		return items.shift()
	}

	// 返回队列中第一个元素——最先被添加，也将是最先被移除的元素。队列不做任何变动
	this.front = () => {
		return items[0]
	}

	// 如果队列中不包含任何元素，返回true，否则返回false。
	this.isEmpty = () => {
		return items.length == 0
	}

	// 返回队列包含的元素个数，与数组的length属性类似。
	this.size = () => {
		return items.length
	}

	this.print = () => {
		console.log(JSON.stringify(items))
	}
}

let priorityQueue = new PriorityQueue()

priorityQueue.enqueue('John', 2)
priorityQueue.enqueue('Jack', 1)
priorityQueue.enqueue('Camila', 1)
priorityQueue.enqueue('Cody', 4)
priorityQueue.print()

function hotPotato(nameList, num) {
	let queue = new Queue()

	for (let i = 0; i < nameList.length; i++) {
		queue.enqueue(nameList[i])
	}

	let eliminated = ''
	while (queue.size() > 1) {
		for (let i = 0; i < num; i++) {
			queue.enqueue(queue.dequeue())
		}
		eliminated = queue.dequeue()
		console.log(eliminated + '在击鼓传花游戏中被淘汰');
	}
	return queue.dequeue()
}

let names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl', 'Cody'];
let winner = hotPotato(names, 7)
console.log('胜利者：' + winner)