/*
Problem: Maximum Sum Subarray of Size K (Fixed Window)

Given an array of integers and a number k, find the maximum sum of any contiguous subarray of size k.

Brute-force approach (inefficient but correct): try all windows and compute their sums from scratch.
Time: O(n * k), Space: O(1)
*/

//FIXED WINDOW
function maxSumSubarray(arr, k) {
	if (!Array.isArray(arr) || k <= 0 || k > arr.length) return 0
	let max = 0
	let windowSum = 0
	for (let i = 0; i < k; i++) {
		windowSum += arr[i]
	}
	max = windowSum

	for (let i = k; i < arr.length; i++) {
		windowSum = windowSum - arr[i - k] + arr[i]
		if (windowSum > max) {
			max = windowSum
		}
	}
	return max
}

function findLargestSumOfSubArray(list, windowLength) {
	let max = 0

	for (let i = 0; i < windowLength; i++) {
		max += list[i]
	}

	for (let i = windowLength; i < list.length; i++) {
		const potentialMax = max - list[i - windowLength] + list[i]
		if (potentialMax > max) max = potentialMax
	}

	return max
}

function minSubarrayLenAtLeastTarget(target, arr) {
	if (!Array.isArray(arr) || target <= 0) return 0
	//Set left, sum, minLength, and right (right being in the for loop)
	let left = 0
	let sum = 0
	let minLength = Infinity

	for (let right = 0; right < arr.length; right++) {
		//Add each value of the array to the sum
		sum += arr[right]

		//If sum >= target, run the while loop
		while (sum >= target) {
			const windowLength = right - left + 1
			minLength = Math.min(minLength, windowLength)
			sum -= arr[left++]
		}
	}
	return minLength === Infinity ? 0 : minLength
}
