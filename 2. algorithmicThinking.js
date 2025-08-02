//MOVING ZEROES TO THE END OF AN ARRAY
function moveZeroes(input) {
	//Marks the position of the last non-zero element
	let swapperIndex = 0

	//Iterate over the array
	for (let i = 0; i < input.length; i++) {
		//Check each iteration to see if the element !== 0
		//If the element === 0, continue iterating
		//Else, swa
		if (input[i] !== 0) {
			;[input[i], input[swapperIndex]] = [input[swapperIndex], input[i]]
			swapperIndex++
		}
	}
	return input
}
const numsArray = [2, 1, 0, 3, 0, 2, 0, 4, 0, 0, 5, 7]
const zeroesMoved = moveZeroes(numsArray)
// console.log(zeroesMoved)

//BINARY SEARCH
//NOTE: Make sure the array is sorted first. It only works on sorted arrays.
function binarySearch(arr, target) {
	let low = 0
	let high = arr.length - 1

	while (low <= high) {
		let mid = Math.floor((low + high) / 2)
		console.log(mid, ' mid')
		if (arr[mid] === target) return `Target number ${target} found!`
		else if (arr[mid] < target) low = mid + 1
		else high = mid - 1
	}
	return 'Nothing found'
}
const binarySearchNums = Array.from({ length: 100 }, (_, i) => i + 1)
const target = 55
// const searchResult = binarySearch(binarySearchNums, target)
// console.log(searchResult)

//REVERSE AN ARRAY IN PLACE
function reverseArray(arr) {
	let left = 0
	let right = arr.length - 1

	while (left < right) {
		;[arr[left], arr[right]] = [arr[right], arr[left]]
		left++
		right--
	}
	return arr
}
const testArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const reversedArray = reverseArray(testArr)
console.log(reversedArray)
