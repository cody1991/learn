class Queue {
	constructor(data) {
		this.data = data
		this.head = 0
		this.tail = data.length
	}
}

class Stack {
	constructor() {
		this.data = []
		this.top = -1
	}
}

let book = new Array(10).fill(0)

let q1 = new Queue([2, 4, 1, 2, 5, 6])
let q2 = new Queue([3, 1, 3, 5, 6, 4])

let s = new Stack()

let t

// t = q1.current

while (q1.head < q1.tail && q2.head < q2.tail) {
	t = q1.data[q1.head]
	console.log('A出牌:', t)

	if (book[t] == 0) {
		q1.head++;
		s.top++;
		s.data[s.top] = t;
		book[t] = 1;
	} else {
		q1.head++;
		q1.data[q1.tail] = t;
		q1.tail++;

		while (s.data[s.top] != t) {
			book[s.data[s.top]] = 0
			q1.data[q1.tail] = s.data[s.top]
			q1.tail++;
			s.top--
		}

		book[s.data[s.top]] = 0
		q1.data[q1.tail] = s.data[s.top]
		q1.tail++;
		s.top--
	}

	if (q1.head == q1.tail) {
		break
	}

	if (q1.head > 6) {
		break
	}

	console.log(q1)
	console.log(q2)
	console.log(s)
	console.log(book)


}