function quickestProfitTarget(profits, target) {
	let left = 0
	let sum = 0
	let minLength = Infinity

	for (let right = 0; right < profits.length; right++) {
		sum += profits[right]

		while (sum >= target) {
			const rightMinusLeft = right - left + 1
			minLength = Math.min(minLength, rightMinusLeft)
			const dropLeft = profits[left++]
			sum -= dropLeft
		}
	}

	return minLength === Infinity ? 0 : minLength
}

const result = quickestProfitTarget([1, 2, 3, 1, 2, 4, 3], 7)
console.log(result)
