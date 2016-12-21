let arr = [6, 3, 1, 7, 5, 8, 9, 2, 4]
let head, tail

head = 0
tail = arr.length

while (head < tail) {
	console.log(arr[head])

	head++

	arr[tail] = arr[head]

	head++
	tail++
}

console.log('---')

class Queue {
	constructor() {
		this.head = 0
		this.tail = 0
		this.data = []
	}
	add(value) {
		this.data[this.tail] = value
		this.tail++
	}
	get(index) {
		return this.data[index]
	}
	set(index, value) {
		this.data[index] = value
	}
}

let q = new Queue()
arr = [6, 3, 1, 7, 5, 8, 9, 2, 4]

for (let i of arr) {
	q.add(i)
}

while (q.head < q.tail) {
	console.log(q.get(q.head))
	q.head++

		q.set(q.tail, q.get(q.head))

	q.tail++
		q.head++

}