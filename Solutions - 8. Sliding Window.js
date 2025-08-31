/*
Problem: Calculate Simple Moving Average (SMA)

Given an array of stock prices and a period, calculate the Simple Moving Average
for each possible window using the sliding window technique.

Example:
prices = [100, 102, 98, 105, 103]
period = 3

Expected output: [100.0, 101.7, 102.0] 
(averages of [100,102,98], [102,98,105], [98,105,103])
*/

function calculateSMA(list, period) {
	if (list.length < period) return []
	let windowSum = 0
	let values = []

	for (let i = 0; i < period; i++) {
		windowSum += list[i]
	}
	values.push(Number((windowSum / period).toFixed(1)))

	for (let i = period; i < list.length; i++) {
		windowSum = windowSum - list[i - period] + list[i]
		values.push(Number((windowSum / period).toFixed(1)))
	}
	return values
}

// Test your implementation
const testPrices = [100, 102, 98, 105, 103]
console.log('SMA values:', calculateSMA(testPrices, 3))
