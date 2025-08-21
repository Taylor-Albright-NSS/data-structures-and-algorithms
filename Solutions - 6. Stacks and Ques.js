//INTRODUCTION TO STACKS
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

// Available Stack Operations:
// - stack.push(item): Add a book to the top of the return cart
// - stack.pop(): Remove and return the top book from the cart
// - stack.peek(): Look at the top book without removing it
// - stack.isEmpty(): Check if the cart is empty
// - stack.size(): Get the number of books in the cart

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

// ✅ Prebuilt Queue class - intentionally compressed to a single line — all methods (enqueue, dequeue, peek, isEmpty, size) are implemented correctly.
// 🔒 You can trust it works. Focus on how to use it, not how it's built in this exercise.
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

//QUEUES
// ⏱️ Alex's First Challenge!
// 🔓 Uncomment the below code section and implement the required logic:

function processAllHoldRequests(holdQueue) {
	// Process all hold requests in the queue (FIFO order)
	// Return an array of processed patrons in the order they were served
	const servedPatrons = []

	while (!holdQueue.isEmpty()) {
		servedPatrons.push(holdQueue.dequeue())
	}
	// TODO: Use queue operations to process all hold requests
	// Hint: Keep dequeuing patrons until the queue is empty

	return servedPatrons
}

// ⏱️ Alex's Second Challenge!
// 🔓 Uncomment the below code section and implement the required logic:

function findPatronInQueue(holdQueue, targetPatron) {
	// Look through the hold queue to see if a specific patron is waiting
	// WITHOUT permanently removing patrons from the queue
	// Return true if found, false if not found

	const tempQueue = new Queue()
	let found = false

	while (!holdQueue.isEmpty()) {
		const patron = holdQueue.dequeue()
		tempQueue.enqueue(patron)
		if (patron === targetPatron) {
			found = true
			break
		}
	}

	while (!tempQueue.isEmpty()) {
		holdQueue.enqueue(tempQueue.dequeue())
	}
	// TODO: Use queue operations to search through patrons
	// Hint: You'll need to temporarily move patrons to search, then put them back in order

	return found
}

// ⏱️ Alex's Third Challenge!
// 🔓 Uncomment the below code section and implement the required logic:

function processUntilTargetPatron(holdQueue, targetPatron) {
	// Process hold requests until you find the target patron
	// Return an array of all served patrons (including the target)
	// If target not found, process all patrons

	const servedPatrons = []

	while (!holdQueue.isEmpty()) {
		const patron = holdQueue.dequeue()
		servedPatrons.push(patron)
		if (patron === targetPatron) break
	}
	// TODO: Use queue operations to process patrons until target is found
	// Hint: Keep dequeuing and checking each patron

	return servedPatrons
}

//IMPLEMENT A STACK CLASS
// Complete the Stack implementation below
// You need to implement the missing methods to make the tests pass

class Stack {
	constructor() {
		this.items = []
	}

	// TODO: Implement push method
	// Add an item to the top of the stack
	push(item) {
		// Your code here
		this.items.push(item)
	}

	// TODO: Implement pop method
	// Remove and return the top item from the stack
	// Throw an error if stack is empty
	pop() {
		// Your code here
		if (this.isEmpty()) throw new Error(`Cannot peek at empty stack`)
		return this.items.pop()
	}

	// TODO: Implement peek method
	// Return the top item without removing it
	// Throw an error if stack is empty
	peek() {
		// Your code here
		if (this.isEmpty()) throw new Error(`Cannot peek at empty stack`)
		return this.items[this.size() - 1]
	}

	// TODO: Implement isEmpty method
	// Return true if stack is empty, false otherwise
	isEmpty() {
		// Your code here
		return this.items.length === 0
	}

	// TODO: Implement size method
	// Return the number of items in the stack
	size() {
		// Your code here
		return this.items.length
	}
}

//IMPLEMENT A QUEUE CLASS

// Complete the Queue implementation below
// You need to implement the missing methods to make the tests pass
class Queue {
	constructor() {
		this.items = []
	}

	// TODO: Implement enqueue method
	// Add an item to the back of the queue
	enqueue(item) {
		// Your code here
		this.items.push(item)
	}

	// TODO: Implement dequeue method
	// Remove and return the front item from the queue
	// Return null if queue is empty
	dequeue() {
		// Your code here
		if (this.isEmpty()) return null
		return this.items.shift()
	}

	// TODO: Implement peek method
	// Return the front item without removing it
	// Return null if queue is empty
	peek() {
		// Your code here
		if (this.isEmpty()) return null
		return this.items[0]
	}

	// TODO: Implement isEmpty method
	// Return true if queue is empty, false otherwise
	isEmpty() {
		// Your code here
		return this.items.length === 0
	}

	// TODO: Implement size method
	// Return the number of items in the queue
	size() {
		// Your code here
		return this.items.length
	}
}
