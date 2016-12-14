const array = [5, 3, 5, 2, 8]

const base = new Array(10)

base.fill(0)

for (let i of array) {
	base[i]++
}

for (let j = 0; j < base.length; j++) {
	for (let k = 1; k <= base[j]; k++) {
		console.log(j)
	}
}


console.log(base)