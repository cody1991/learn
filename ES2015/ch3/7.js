function getState() {
	return {
		error: null,
		logined: true,
		user: {
			name: 'cody',
			age: 25
		}
	}
}

const {
	error,
	logined,
	user
} = getState();

console.log(error, logined, user);

const [foo, bar] = [1, 2];

console.log(foo, bar);

const [a, , b] = [1, 2, 3];

console.log(a, b);

const [c, d, e, ...rest] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(c, d, e, rest);

function fetchData() {
	return new Promise((resolve, reject) => {
		resolve(['foo', 'bar']);
	});
}

fetchData()
	.then(([value1, value2]) => {
		console.log(value1, value2);
	});

function fetchData2() {
	return new Promise((resolve, reject) => {
		resolve({
			code: 200,
			message: 'ok',
			data: ['foo', 'bar', 'baz']
		})
	})
}

fetchData2()
	.then(({
		data
	}) => {
		console.log(data);
	});

let f = 1,
	g = 2;

[f, g] = [g, f];

console.log(f, g);

let someObj = {
	response: ['foo', 'bar']
}

const {
	response: data
} = someObj;
console.log(data);

const sourceData = {
	"title": "big",
	"link": "haha",
	"items": [{
		"title": "cody",
		"link": "github",
		"media": {
			"age": "20"
		}
	}]
}

const destData = sourceData.items.map(({
	title,
	media: {
		age: haha
	}
}) => ({
	title,
	haha
}));

console.log(destData);

const {
	a1,
	b1: {
		c1
	}
} = {
	a1: 1,
	b1: {
		c1: 2
	}
};

console.log(a1, c1);

const {
	d1,
	e1: f1
} = {
	d1: 1,
	e1: [3, 3]
};
console.log('d1,f1: ' +
	d1 + ' ' + f1);

const arr = ['cody', 'react', 'vue'];

for (const [index, item] of arr.entries()) {
	console.log(index, item);

	// 可以加入break;

	if (index > 2) {
		break;
	}
}