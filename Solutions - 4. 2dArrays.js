//INTRODUCTION TO 2D ARRAYS

//For this exercise, you should write three functions that generate 2D arrays in different ways.
const createPhoneLayout = () => {
	//TODO: Use literal notation to create a 3x3 matrix representing the placement of the numbers 1-9 on a telephone dialpad, then return that matrix
	return [
		[1, 2, 3],
		[4, 5, 6],
		[7, 8, 9],
	]
}

const createLoveArray = (width, height) => {
	//TODO: use Array.from() and Array.fill() to create a 2D array of heart emojis. It should return a 2D array with the appropriate number of columns and rows, with '❤️' as the value for each element.
	return Array.from({ length: width }, () => Array(height).fill('<3'))
}

const createCheckerboard = (width, height) => {
	//TODO: Using loops, create and return a checkerboard pattern of the specified size, with the values '⬛' and '⬜', alternating.
	const matrix = []

	for (let i = 0; i < width; i++) {
		matrix[i] = []
		for (let j = 0; j < height; j++) {
			if (i % 2 === 0 && j % 2 === 0) matrix[i][j] = '⬛'
			else matrix[i][j] = '⬜'

			if (i % 2 === 1 && j % 2 === 0) matrix[i][j] = '⬜'
			else if (i % 2 === 1 && j % 2 === 1) matrix[i][j] = '⬛'
		}
	}
	return matrix
}

// Utility function to print any 2D array. Note the use of the array functions .forEach and .join
var print2DArray = (array, title) => {
	console.log(title)
	array.forEach(row => console.log(row.join(' ')))
}

//Example of print2DArray usage
const print2DArrayExample = (
	array = [
		[1, 2, 3],
		[4, 5, 6],
		[7, 8, 9],
		['*', 0, '#'],
	],
	title = 'phone #s'
) => {
	console.log(title)
	array.forEach(row => console.log(row.join(' ')))
}
print2DArrayExample()

// Create and print a phone layout
const dialpad = createPhoneLayout()
print2DArray(dialpad, 'Phone Layout')

// Create and print a 10x10 checkerboard
const checkerboard = createCheckerboard(10, 10)
print2DArray(checkerboard, 'Checkerboard Pattern')

// Create and print a grid of hearts
const loveArray = createLoveArray(12, 6)
print2DArray(loveArray, 'Love Array')

//INDEXING AND BOUNDS CHECKING IN GRIDS

//For this exercise, complete a function that demonstrates the difference between row and column traversal

// Demonstrating row-wise vs column-wise traversal performance by logging the time for each
const measureTraversalPerformance = matrix => {
	const rows = matrix.length
	const columns = matrix[0].length
	console.log('----- Performance Test: -----')
	let placeholder = 0

	let startTime = Date.now()
	//TODO: Traverse the specified matrix by rows, then by columns within each row. With each element, set placeholder to that element's value
	for (let i = 0; i < rows; i++) {
		for (let j = 0; j < columns; j++) {
			placeholder = matrix[i][j]
			console.log(placeholder)
		}
	}
	let endTime = Date.now()
	console.log(`Row-wise traversal: ${endTime - startTime}ms`)

	// Column-wise traversal
	startTime = Date.now()
	//TODO: Traverse the specified matrix by columns, then by row within each column. With each element, set placeholder to that element's value
	endTime = Date.now()
	console.log(`Column-wise traversal: ${endTime - startTime}ms`)
}

// Utility function to print any 2D array. Note the use of the array functions .forEach and .join
const print2DArray = (array, title) => {
	console.log(title)
	array.forEach(row => console.log(row.join(' ')))
}
print2DArray(
	[
		[1, 2],
		[3, 4],
		[5, 6],
	],
	'Tester'
)

// Demonstrate performance difference with a large matrix
const largeMatrix = Array.from({ length: 10000 }, () => Array(10000).fill(0))
measureTraversalPerformance(largeMatrix)

//FINDING NEIGHBORS
