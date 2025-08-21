// Module 6 - Code Excercise 1

/*
Problem: Valid Parentheses

Given a string containing just the characters '(', ')', '{', '}', '[' and ']', 
determine if the input string is valid.

An input string is valid if:
1. Open brackets must be closed by the same type of brackets
2. Open brackets must be closed in the correct order
3. Every close bracket has a corresponding open bracket of the same type

Examples:
Input: "()" → Output: true
Input: "()[]{}" → Output: true
Input: "(]" → Output: false
Input: "([)]" → Output: false
Input: "{[]}" → Output: true

Follow-up Questions:
- What is the time complexity of your solution?
- What is the space complexity?
- How would you handle different types of brackets?
*/

function isValid(s) {
	// Approach: Use a stack to track opening brackets
	// Push opening brackets onto stack
	// When encountering closing bracket, check if it matches the top of stack
	// String is valid if stack is empty at the end

	// Your code here
	const stack = []
	const splitString = s.split('')
	const validLefts = ['{', '(', '[']
	const validCombo = ['{}', '()', '[]']
	for (let i = 0; i < splitString.length; i++) {
		const char = splitString[i]
		if (validLefts.includes(char)) {
			stack.push(char)
		} else {
			const topStack = stack[stack.length - 1]
			const newCombo = topStack + char
			if (validCombo.includes(newCombo)) {
				stack.pop()
			} else {
				return false
			}
		}
	}
	console.log(stack, ' stack')
	if (stack.length === 0) return true
	else return false
}

// Module 6 - Code Excercise 2

/*
Problem: Implement Queue using Two Stacks

Implement a first-in-first-out (FIFO) queue using only two stacks.

The implemented queue should support:
- enqueue(x) - Pushes element x to the back of the queue
- dequeue() - Removes the element from the front of the queue and returns it
- peek() - Returns the element at the front of the queue
- empty() - Returns true if the queue is empty, false otherwise

Example:
var queue = new MyQueue();
queue.enqueue(1);
queue.enqueue(2);
queue.peek();     // returns 1
queue.dequeue();  // returns 1
queue.empty();    // returns false

Follow-up Questions:
- What are the time complexities of each operation?
- What is the space complexity?
- How does this compare to a queue implemented with a linked list?
*/

var MyQueue = function () {
	// Use two stacks to simulate queue behavior
	this.inputStack = [] // Stack for enqueue operations
	this.outputStack = [] // Stack for dequeue operations
}

MyQueue.prototype.enqueue = function (x) {
	// Add element to the back of the queue
	// Your code here
	this.inputStack.push(x)
}

MyQueue.prototype.dequeue = function () {
	// Remove and return element from the front of the queue
	// Your code here
	while (this.inputStack.length > 0) {
		this.outputStack.push(this.inputStack.pop())
	}
	const front = this.outputStack.pop()
	while (this.outputStack.length > 0) {
		this.inputStack.push(this.outputStack.pop())
	}
	console.log(front, ' this should be removed from the front of the queue')
	return front
}

MyQueue.prototype.peek = function () {
	// Return the element at the front of the queue without removing it
	// Your code here
	while (this.inputStack.length > 0) {
		this.outputStack.push(this.inputStack.pop())
	}
	const front = this.outputStack[this.outputStack.length - 1]
	console.log(front)
	return front
}

MyQueue.prototype.empty = function () {
	// Return true if the queue is empty
	// Your code here
	return this.inputStack.length === 0
}
MyQueue.prototype.showInputStack = function () {
	// Return true if the queue is empty
	// Your code here
	console.log(this.inputStack)
	return this.inputStack
}
MyQueue.prototype.showOutputStack = function () {
	// Return true if the queue is empty
	// Your code here
	console.log(this.outputStack)
	return this.outputStack
}

const queue = new MyQueue()
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)
//4, 3, 2, 1
queue.dequeue()
//1
//4, 3, 2
queue.dequeue()
//1, 2
//4, 3
queue.enqueue(2)
//1, 2
//4, 3, 2
queue.dequeue()
//1, 2, 2
//4, 3
queue.showInputStack()
queue.showOutputStack()
