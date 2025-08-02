//TWO POINTER: BOOKMARK TECHNIQUE

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
var target = 19

function twoPointer(arr, target) {
	let left = 0
	let right = arr.length - 1
	let limiter = 0

	while (left < right && limiter < 100) {
		console.log(1)
		let mid = arr[left] + arr[right]
		if (mid === target) return { message: `Target found! Target is ${mid}. Left is ${arr[left]} | Right is ${arr[right]}` }
		else if (mid > target) right--
		else left++

		limiter++
	}
	return { message: `Nothing found` }
}

var result = twoPointer(arr, target)
console.log(result)

//TWO POINTER: REVERSING AN ARRAY

var arr = [1, 2, 2, 3, 3, 4, 5, 6, 7, 8, 9, 10]
var target = 6

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

var result = reverseArray(myArr)
console.log(result)

//TWO-POINTER: DETECTING PALINDROME

const arr = 'ppaaabaaapp'

function detectPalindrome(arr) {
	let left = 0
	let right = arr.length - 1
	while (left < right) {
		if (arr[left] !== arr[right]) return { message: `NOT A PALINDROME` }
		left++
		right--
	}
	return { message: `PALINDROME FOUND!` }
}

const result = detectPalindrome(myArr)
console.log(result.message)

//SLOW POINTER FAST POINTER

//FOR I LOOP
function findMiddleBookInList(bookList) {
	if (bookList.length === 0) return 0
	let slow = 0
	for (let fast = 0; fast + 1 < bookList.length; fast += 2) {
		console.log(` Position of slow pointer: ${slow}`)
		console.log(` Position of fast pointer: ${fast}`)
		slow++
	}
	if (bookList.length % 2 === 0) return [bookList[slow - 1], bookList[slow]]
	else return bookList[slow]
}

const readingList = []
const result = findMiddleBookInList(readingList)
console.log(result)

//REMOVE DUPLICATES IN PLACE
function removeDuplicates(arr) {
	let dupeIndex = 0

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] !== arr[dupeIndex]) {
			dupeIndex++
			arr[dupeIndex] = arr[i]
		}
	}
	arr.length = dupeIndex + 1
	console.log(arr)
}

const arr = [1, 1, 2, 3, 4, 5, 5, 6]
removeDuplicates(arr)
