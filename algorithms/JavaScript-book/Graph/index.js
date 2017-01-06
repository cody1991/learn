function Stack() {
	var items = [];

	// 添加一个(或几个)新元素到栈顶。
	this.push = function(element) {
		items.push(element)
	}

	// 移除栈顶的元素，同时返回被移除的元素。
	this.pop = function() {
		return items.pop()
	}

	// 返回栈顶的元素，不对栈做任何修改(这个方法不会移除栈顶的元素，仅仅返回它)。
	this.peek = function() {
		return items[items.length - 1]
	}

	// 如果栈里没有任何元素就返回true，否则返回false。
	this.isEmpty = function() {
		return items.length == 0
	}

	// 移除栈里的所有元素。
	this.clear = function() {
		items = []
	}

	// 返回栈里的元素个数。这个方法和数组的length属性很类似。
	this.size = function() {
		return items.length;
	}

	// 栈里的元素都输出到控制台
	this.print = function() {
		console.log(items.toString())
	}

}

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

function Graph() {
	let vertices = []
	let adjList = new Dictionary()

	let initializeColor = () => {
		let color = []
		for (let i = 0; i < vertices.length; i++) {
			color[vertices[i]] = 'white'
		}
		return color
	}

	let time = 0
	this.DFS = () => {
		let color = initializeColor(),
			d = [],
			f = [],
			p = []

		time = 0

		for (let i = 0; i < vertices.length; i++) {
			f[vertices[i]] = 0
			d[vertices[i]] = 0
			p[vertices[i]] = null
		}
		for (let i = 0; i < vertices.length; i++) {
			if (color[vertices[i]] === 'white') {
				DFSVisit(vertices[i], color, d, f, p)
			}
		}
		return {
			discovery: d,
			finished: f,
			predecessors: p
		}
	}

	function DFSVisit(u, color, d, f, p) {
		console.log('Discovered ' + u)
		color[u] = 'grey'
		d[u] = ++time

		let neighbors = adjList.get(u)

		for (let i = 0; i < neighbors.length; i++) {
			let w = neighbors[i]

			if (color[w] === 'white') {
				p[w] = u
				DFSVisit(w, color, d, f, p)
			}
		}

		color[u] = 'black'
		f[u] = ++time
		console.log('explored ' + u)
	}

	this.dfs = (callback) => {
		let color = initializeColor()
		for (let i = 0; i < vertices.length; i++) {
			if (color[vertices[i]] === 'white') {
				dfsVisit(vertices[i], color, callback)
			}
		}
	}

	function dfsVisit(u, color, callback) {
		color[u] = 'grey'
		if (callback) {
			callback(u)
		}
		let neighbors = adjList.get(u)

		for (let i = 0; i < neighbors.length; i++) {
			let w = neighbors[i]

			if (color[w] === 'white') {
				dfsVisit(w, color, callback)
			}
		}

		color[u] = 'black'
	}

	// 广度搜索
	this.bfs = (v, callback) => {
		let color = initializeColor(),
			queue = new Queue()

		queue.enqueue(v)

		while (!queue.isEmpty()) {
			let u = queue.dequeue(),
				neighbors = adjList.get(u)

			color[u] = 'gray'

			for (let i = 0; i < neighbors.length; i++) {
				let w = neighbors[i]
				if (color[w] === 'white') {
					color[w] = 'grey'
					queue.enqueue(w)
				}
			}

			color[u] = 'black'
			if (callback) {
				callback(u)
			}
		}
	}

	// 改进版本
	this.BFS = (v) => {
		let color = initializeColor(),
			queue = new Queue(),
			d = [],
			pred = []

		queue.enqueue(v)

		for (let i = 0; i < vertices.length; i++) {
			d[vertices[i]] = 0
			pred[vertices[i]] = null
		}

		while (!queue.isEmpty()) {
			let u = queue.dequeue(),
				neighbors = adjList.get(u)

			color[u] = 'gray'

			for (let i = 0; i < neighbors.length; i++) {
				let w = neighbors[i]
				if (color[w] === 'white') {
					color[w] = 'grey'
					d[w] = d[u] + 1
					pred[w] = u
					queue.enqueue(w)
				}
			}

			color[u] = 'black'
				// if (callback) {
				// 	callback(u)
				// }

		}
		return {
			distances: d,
			predecessors: pred
		}
	}

	this.addVertex = (v) => {
		vertices.push(v)
		adjList.set(v, [])
	}

	this.addEdge = (v, w) => {
		adjList.get(v).push(w)

		// 我们这里可以不要下面的这句，就是单向的不循环的
		// 然后DFS就是拓扑了，可以来算我们怎么完成任务

		// 有下面这句 [ A: 18, B: 9, C: 17, D: 16, E: 6, F: 8, G: 13, H: 15, I: 5 ],

		adjList.get(w).push(v)
	}

	this.getVertices = () => {
		return vertices
	}

	this.getVertex = () => {
		return adjList.getItems()
	}

	this.toString = () => {
		let s = ''
		for (let i = 0; i < vertices.length; i++) {
			s += vertices[i] + ' -> '

			let neighbors = adjList.get(vertices[i])
			for (let j = 0; j < neighbors.length; j++) {
				s += neighbors[j] + ' '
			}
			s += '\n'
		}
		return s
	}
}

let graph = new Graph()
let myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
for (let vertice in myVertices) {
	graph.addVertex(myVertices[vertice])
}

graph.addEdge('A', 'B')
graph.addEdge('A', 'C')
graph.addEdge('A', 'D')
graph.addEdge('C', 'D')
graph.addEdge('C', 'G')
graph.addEdge('D', 'G')
graph.addEdge('D', 'H')
graph.addEdge('B', 'E')
graph.addEdge('B', 'F')
graph.addEdge('E', 'I')

console.log(graph.getVertex())
console.log(graph.getVertices())
console.log(graph.toString())

function printNode(value) {
	console.log("Visited vertex: " + value)
}

graph.bfs(myVertices[0], printNode)

let shortesPathA = graph.BFS(myVertices[0])
console.log(shortesPathA)

let fromVertex = myVertices[0]

for (let i = 0; i < myVertices.length; i++) {
	let toVertex = myVertices[i],
		path = new Stack()

	for (let v = toVertex; v !== fromVertex; v = shortesPathA.predecessors[v]) {
		path.push(v)
	}

	path.push(fromVertex)
	let s = path.pop()
	while (!path.isEmpty()) {
		s += ' - ' + path.pop()
	}
	console.log(s)
}

graph.dfs(printNode)

let times = graph.DFS(myVertices[0])
console.log(times)