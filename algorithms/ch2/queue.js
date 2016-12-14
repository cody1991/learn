let a = 'ahdxha'
let len = a.length

let s = []

let mid = Math.floor(len / 2) - 1
console.log(mid)

let top = 0

for (let i = 0; i <= mid; i++) {
	console.log(a[i])
	s[top++] = a[i]
}

console.log(s)

let next

if (len % 2 == 0) {
	next = mid + 1
} else {
	next = mid + 2
}

console.log(next)

for (i = next; i <= len - 1; i++) {
	console.log(a[i])
	console.log(s[top])
	if (a[i] != s[top - 1]) {
		break
	}
	top--
}

if (top == 0) {
	console.log('Yes')
} else {
	console.log('No')
}