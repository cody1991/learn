function BinarySearchTree() {
	function Node(key) {
		this.key = key
		this.left = null
		this.right = null
	}

	let root = null

	function insertNode(node, newNode) {
		if (newNode.key < node.key) {
			if (node.left == null) {
				node.left = newNode
			} else {
				insertNode(node.left, newNode)
			}
		} else {
			if (node.right == null) {
				node.right = newNode
			} else {
				insertNode(node.right, newNode)
			}
		}
	}

	// insert(key):向树中插入一个新的键。
	this.insert = (key) => {
		let newNode = new Node(key)

		if (root == null) {
			root = newNode
		} else {
			insertNode(root, newNode)
		}
	}

	// search(key):在树中查找一个键，如果节点存在，则返回true;如果不存在，则返回false。
	this.search = (key) => {
		return searchNode(root, key)
	}

	function searchNode(node, key) {
		if (node == null) {
			return false
		}
		if (key < node.key) {
			return searchNode(node.left, key)
		} else if (key > node.key) {
			return searchNode(node.right, key)
		} else {
			return true
		}
	}

	// inOrderTraverse:通过中序遍历方式遍历所有节点。
	this.inOrderTraverse = (callback) => {
		inOrderTraverseNode(root, callback)
	}

	function inOrderTraverseNode(node, callback) {
		if (node !== null) {
			inOrderTraverseNode(node.left, callback)

			// 传入值
			callback(node.key)

			inOrderTraverseNode(node.right, callback)
		}
	}

	// preOrderTraverse:通过先序遍历方式遍历所有节点。
	this.preOrderTraverse = (callback) => {
		preOrderTraverseNode(root, callback)
	}

	function preOrderTraverseNode(node, callback) {
		if (node !== null) {
			callback(node.key)
			preOrderTraverseNode(node.left, callback)
			preOrderTraverseNode(node.right, callback)
		}
	}

	// postOrderTraverse:通过后序遍历方式遍历所有节点。  min:返回树中最小的值/键。
	this.postOrderTraverse = (callback) => {
		postOrderTraverseNode(root, callback)
	}

	function postOrderTraverseNode(node, callback) {
		if (node !== null) {
			postOrderTraverseNode(node.left, callback)
			postOrderTraverseNode(node.right, callback)
			callback(node.key)
		}
	}

	// min:返回树中最小的值/键。
	this.min = () => {
		return minNode(root)
	}

	function minNode(node) {
		if (node) {
			while (node && node.left !== null) {
				node = node.left
			}
			return node.key
		}
		return null
	}

	// max:返回树中最大的值/键。
	this.max = () => {
		return maxNode(root)
	}

	function findMinNode(node) {
		if (node) {
			while (node && node.left !== null) {
				node = node.left
			}
			return node
		}
		return null
	}

	function maxNode(node) {
		if (node) {
			while (node && node.right !== null) {
				node = node.right
			}
			return node.key
		}
		return null
	}

	// remove(key):从树中移除某个键。
	this.remove = (key) => {
		root = removeNode(root, key)
	}

	function removeNode(node, key) {
		if (node === null) {
			return null
		}
		if (key < node.key) {
			node.left = removeNode(node.left, key)
			return node
		} else if (key > node.key) {
			node.right = removeNode(node.right, key)
			return node
		} else {
			// 等于 node.key
			if (node.left === null && node.right === null) {
				node = null
				return node
			}
			if (node.left === null) {
				node = node.right
				return node
			} else if (node.right === null) {
				node = node.left
				return node
			}

			// 两个子节点
			let aux = findMinNode(node.right)
			node.key = aux.key
			node.right = removeNode(node.right, aux.key)
			return node
		}
	}
}

function printNode(value) {
	console.log(value)
}

let tree = new BinarySearchTree()

tree.insert(11)
tree.insert(7)
tree.insert(15)
tree.insert(5)
tree.insert(3)
tree.insert(9)
tree.insert(8)
tree.insert(10)
tree.insert(13)
tree.insert(12)
tree.insert(14)
tree.insert(20)
tree.insert(18)
tree.insert(25)
tree.insert(6)

console.log('--- inOrderTraverse ---')
tree.inOrderTraverse(printNode)
console.log('--- preOrderTraverse ---')
tree.preOrderTraverse(printNode)
console.log('--- postOrderTraverse ---')
tree.postOrderTraverse(printNode)

console.log(`min: ${tree.min()}`)
console.log(`max: ${tree.max()}`)

let searchKey = 1
console.log(tree.search(searchKey) ? `Key ${searchKey} found.` : `Key ${searchKey} not found`)
searchKey = 6
console.log(tree.search(searchKey) ? `Key ${searchKey} found.` : `Key ${searchKey} not found`)

tree.remove(11)
console.log('--- inOrderTraverse ---')
tree.inOrderTraverse(printNode)

tree.remove(3)
console.log('--- inOrderTraverse ---')
tree.inOrderTraverse(printNode)

tree.remove(5)
console.log('--- inOrderTraverse ---')
tree.inOrderTraverse(printNode)

tree.remove(10)
console.log('--- inOrderTraverse ---')
tree.inOrderTraverse(printNode)

tree.remove(8)
console.log('--- inOrderTraverse ---')
tree.inOrderTraverse(printNode)