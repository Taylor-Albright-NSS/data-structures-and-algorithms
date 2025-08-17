// ⏱️ Alex's First Challenge!
// 🔓 Uncomment the below code section and implement the required logic:
class Stack {
	constructor() {
		this.items = []
	}
	push(item) {
		this.items.push(item)
	}
	pop() {
		if (this.isEmpty()) throw new Error('Stack is empty - cannot pop')
		return this.items.pop()
	}
	peek() {
		if (this.isEmpty()) throw new Error('Stack is empty - cannot peek')
		return this.items[this.items.length - 1]
	}
	isEmpty() {
		return this.items.length === 0
	}
	size() {
		return this.items.length
	}
}
const returnCart = new Stack()
returnCart.items = ['test', 'test2', 'test3', 'test4']

// ✅ Prebuilt Stack class - intentionally compressed to a single line — all methods (push, pop, peek, isEmpty, size) are implemented correctly.
// 🔒 You can trust it works. Focus on how to use it, not how it’s built in this exercise.
class Stack {
	constructor() {
		this.items = []
	}
	push(item) {
		this.items.push(item)
	}
	pop() {
		if (this.isEmpty()) throw new Error('Stack is empty - cannot pop')
		return this.items.pop()
	}
	peek() {
		if (this.isEmpty()) throw new Error('Stack is empty - cannot peek')
		return this.items[this.items.length - 1]
	}
	isEmpty() {
		return this.items.length === 0
	}
	size() {
		return this.items.length
	}
}
/*
Problem: Using Stack Operations to Process Library Returns

Maya has provided you with a Stack class to help process returned books.
Your job is to USE the stack operations to solve real library problems!

Available Stack Operations:
- stack.push(item): Add a book to the top of the return cart
- stack.pop(): Remove and return the top book from the cart
- stack.peek(): Look at the top book without removing it
- stack.isEmpty(): Check if the cart is empty
- stack.size(): Get the number of books in the cart

Complete the functions below to help Alex process library returns!
*/

// The Stack class is (already implemented for you!)

// ⏱️ Alex's First Challenge!
// 🔓 Uncomment the below code section and implement the required logic:

function processAllReturns(returnCart) {
	// Process all books in the return cart (stack)
	// Return an array of processed books in the order they were processed
	const processedBooks = []
	while (!returnCart.isEmpty()) {
		processedBooks.push(returnCart.pop())
	}
	// TODO: Use stack operations to process all books
	// Hint: Keep popping books until the cart is empty

	return processedBooks
}

// ⏱️ Alex's Second Challenge!
// 🔓 Uncomment the below code section and implement the required logic:

function findSpecialBook(returnCart, targetTitle) {
	// Look through the return cart to see if a specific book is there
	// WITHOUT permanently removing books from the cart
	// Return true if found, false if not found

	const tempStack = new Stack()
	let found = false
	while (!returnCart.isEmpty()) {
		const book = returnCart.pop()
		tempStack.push(book)
		if (book === targetTitle) {
			found = true
			break
		}
	}

	while (!tempStack.isEmpty()) {
		returnCart.push(tempStack.pop())
	}
	// TODO: Use stack operations to search through books
	// Hint: You'll need to temporarily move books to search, then put them back

	return found
}

// ⏱️ Alex's Third Challenge!
// 🔓 Uncomment the below code section and implement the required logic:

function processUntilTarget(returnCart, targetTitle) {
	// Process books from the cart until you find the target book
	// Return an array of all processed books (including the target)
	// If target not found, process all books

	const processedBooks = []

	while (!returnCart.isEmpty()) {
		const book = returnCart.pop()
		processedBooks.push(book)
		if (book === targetTitle) break
	}
	// TODO: Use stack operations to process books until target is found
	// Hint: Keep popping and checking each book

	return processedBooks
}

class Queue {
	constructor() {
		this.items = []
	}
	enqueue(item) {
		this.items.push(item)
	}
	dequeue() {
		if (this.isEmpty()) throw new Error('Queue is empty - cannot dequeue')
		return this.items.shift()
	}
	peek() {
		if (this.isEmpty()) throw new Error('Queue is empty - cannot peek')
		return this.items[0]
	}
	isEmpty() {
		return this.items.length === 0
	}
	size() {
		return this.items.length
	}
}
