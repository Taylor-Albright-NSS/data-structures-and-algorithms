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

print2DArray()

// Utility function to print any 2D array. Note the use of the array functions .forEach and .join
const print2DArray = (array, title) => {
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
