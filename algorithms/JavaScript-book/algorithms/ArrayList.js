function ArrayList() {
	let array = []
	this.insert = (item) => {
		array.push(item)
	}
	this.toString = () => {
		return array.join()
	}
	this.clear = () => {
		array = []
	}

	let swap = (index1, index2) => {
		let aux = array[index1]
		array[index1] = array[index2]
		array[index2] = aux
	}

	// n平方
	// 冒泡排序
	this.bubbleSort = () => {
		let length = array.length

		// for (let i = 0; i < length; i++) {
		// 	for (let j = 0; j < length - 1; j++) {
		// 		if (array[j] > array[j + 1]) {
		// 			swap(j, j + 1)
		// 		}
		// 	}
		// }

		// 改进 

		for (let i = 0; i < length; i++) {
			for (let j = 0; j < length - 1 - i; j++) {
				if (array[j] > array[j + 1]) {
					swap(j, j + 1)
				}
			}
		}
	}

	// n平方
	this.selectionSort = () => {
		let length = array.length,
			indexMin

		for (let i = 0; i < length - 1; i++) {
			indexMin = i



			for (let j = i + 1; j < length; j++) {

				if (array[indexMin] > array[j]) {
					indexMin = j
				}
			}
			if (i !== indexMin) {
				swap(i, indexMin)
			}
		}
	}

	// 排序小型数组时，此算法比选择排序和冒泡排序性能要好
	this.insertionSort = () => {
		let length = array.length,
			j,
			temp

		for (let i = 1; i < length; i++) {
			j = i
			temp = array[i]

			while (j > 0 && array[j - 1] > temp) {
				array[j] = array[j - 1]
				j--
			}

			array[j] = temp
		}
	}

	// 归并 nlogn
	this.mergeSort = () => {
		array = mergeSortRec(array)
	}

	function mergeSortRec(array) {
		let length = array.length
		if (length === 1) {
			return array
		}
		let mid = Math.floor(length / 2),
			left = array.slice(0, mid),
			right = array.slice(mid, length)

		return merge(mergeSortRec(left), mergeSortRec(right))
	}

	function merge(left, right) {
		let result = [],
			il = 0,
			ir = 0

		while (il < left.length && ir < right.length) {
			if (left[il] < right[ir]) {
				result.push(left[il++])
			} else {
				result.push(right[ir++])
			}
		}
		while (il < left.length) {
			result.push(left[il++])
		}
		while (ir < right.length) {
			result.push(right[ir++])
		}

		return result
	}

	// nlogn 快排
	this.quickSort = () => {
		quick(array, 0, array.length - 1)
	}

	function quick(array, left, right) {
		let index

		if (array.length > 1) {
			index = partition(array, left, right)
			if (left < index - 1) {
				quick(array, left, index - 1)
			}
			if (index < right) {
				quick(array, index, right)
			}
		}
	}

	function partition(array, left, right) {
		let pivot = array[Math.floor((right + left)) / 2],
			i = left,
			j = right

		while (i <= j) {
			while (array[i] < pivot) {
				i++
			}
			while (array[j] > pivot) {
				j--
			}
			if (i <= j) {
				swapQuickSort(array, i, j)
				i++
				j--
			}
		}
		return i
	}

	function swapQuickSort(array, index1, index2) {
		let aux = array[index1]
		array[index1] = array[index2]
		array[index2] = aux
	}

	this.binarySearch = () => {
		this.quickSort()

		let low = 0,
			high = array.length - 1,
			mid,
			element

		while (low <= high) {
			mid = Math.floor((low + high) / 2)
			element = array[mid]

			if (element < item) {
				low = mid + 1
			} else if (element > item) {
				high = mid - 1
			} else {
				return mid
			}
		}
		return -1
	}

}

let size = 1000000

let array = new ArrayList(),
	tempArray = []

function createNonSortedArray(array, size) {
	array.clear()
	for (let i = 0; i < size; i++) {
		let random = Math.floor(Math.random() * (size * 100)) + 1
		array.insert(random)

		tempArray.push(random)
	}
}

function resetNonSortedArray(array, size, tempArray) {
	array.clear()
	for (let i = 0; i < size; i++) {
		array.insert(tempArray[i])
	}
}

createNonSortedArray(array, size)

console.log(`数据大小${size}`)

console.time('bubbleSort')
array.bubbleSort()
console.timeEnd('bubbleSort')

resetNonSortedArray(array, size, tempArray)
console.time('selectionSort')
array.selectionSort()
console.timeEnd('selectionSort')

resetNonSortedArray(array, size, tempArray)
console.time('insertionSort')
array.insertionSort()
console.timeEnd('insertionSort')

resetNonSortedArray(array, size, tempArray)
console.time('mergeSort')
array.mergeSort()
console.timeEnd('mergeSort')

resetNonSortedArray(array, size, tempArray)
console.time('quickSort')
array.quickSort()
console.timeEnd('quickSort')