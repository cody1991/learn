// const array = [8, 100, 50, 22, 15, 6, 1, 1000, 999, 0]


let array = new Array(10000)
const length = array.length

for (let i = 0; i < length; i++) {
	array[i] = Math.floor(Math.random() * 100000)
}

let count = 0;

console.time('bubble')

for (let i = 0; i < length - 1; i++) {
	for (let j = 0; j < length - 1 - i; j++) {
		count++
		// console.log(array)

		// console.log(`此次数据是 ${array[j]}  ${array[j+1]}`);

		if (array[j] < array[j + 1]) {

			// console.log(`此次交换 ${array[j]}  ${array[j+1]}`);

			[
				array[j], array[j + 1]
			] = [
				array[j + 1],
				array[j]
			]
		}

		// console.log('---------------')

	}
}

console.timeEnd('bubble')
	// for (let i of array) {
	// 	console.log(i)
	// }
console.log('一共运行', count)
for (let i = 0; i < length; i++) {
	array[i] = Math.floor(Math.random() * 100000)
}


let count2 = 0

function quicksort(left, right) {
	count2++

	let i, j, t, temp
	if (left > right) {
		return
	}

	temp = array[left]
	i = left
	j = right

	while (i != j) {
		while (array[j] >= temp && i < j) {
			j--
		}
		while (array[i] <= temp && i < j) {
			i++
		}
		if (i < j) {
			[array[i], array[j]] = [array[j], array[i]]
		}
	}

	array[left] = array[i]
	array[i] = temp

	quicksort(left, i - 1)
	quicksort(i + 1, right)
}

console.time('quicksort')
quicksort(0, length - 1)
console.timeEnd('quicksort')
	// for (let i of array) {
	// 	console.log(i)
	// }
console.log('一共运行 ', count2)

// console.log(array)