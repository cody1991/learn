function MinCoinChange(Inputcoins) {
	let coins = Inputcoins
	let cache = {}

	this.makeChange = (amount) => {
		let me = this
		if (!amount) {
			return []
		}
		if (cache[amount]) {
			return cache[amount]
		}

		let min = [],
			newMin,
			newAmount

		for (let i = 0; i < coins.length; i++) {
			var coin = coins[i]
			newAmount = amount - coin
			if (newAmount >= 0) {
				newMin = me.makeChange(newAmount)
			}
			if (newAmount >= 0 && (newMin.length < min.length - 1 || !min.length) && (newMin.length || !newAmount)) {
				min = [coin].concat(newMin);
				console.log('new Min ' + min + ' for ' + amount);

			}
		}
		return (cache[amount] = min);
	}
}

let minCoinChange = new MinCoinChange([1, 5, 10, 25]);
console.log(minCoinChange.makeChange(36));


function Demo(inputSteps) {
	let steps = inputSteps

	this.makeStep = (totalSteps) => {
		let self = this

		if (totalSteps <= 0) {
			return 0
		}
		if (totalSteps == 1) {
			return 1
		}
		if (totalSteps == 2) {
			return 2
		}
		if (totalSteps == 3) {
			return 3
		}

		return self.makeStep(totalSteps - 1) + self.makeStep(totalSteps - 2) + self.makeStep(totalSteps - 3)
	}
}

let demo = new Demo([1, 2, 3])
console.log(demo.makeStep(3))

// 贪心算法
function MinCoinChange2(Inputcoins) {
	let coins = Inputcoins

	this.makeChange = (amount) => {
		let change = [],
			total = 0

		for (let i = coins.length; i >= 0; i--) {
			let coin = coins[i]
			while (total + coin <= amount) {
				change.push(coin)
				total += coin
			}
		}
		return change
	}
}

let minCoinChange2 = new MinCoinChange2([1, 5, 10, 25]);
console.log(minCoinChange2.makeChange(36));