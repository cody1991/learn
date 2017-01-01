function f1(arg = 'foo') {
	console.log(arg);
}
f1();
f1('haha');

const f2 = noop = () => {};

function api(callback = noop) {
	return new Promise((resolve, reject) => {
		const value = 'foobar';
		resolve(value);

		callback(null, value);
	})
}

// api((err, data) => {
// 	if (err) {
// 		return console.err()
// 	}
// });

api()
	.then(value => {
		console.log(value)
	})
	.catch(err => console.err())