//  ++INTRODUCTION TO ARRAYS++

// ==============================
// Exercise 1: Help Maya Add Multiple Orders
// ==============================
// Uncomment this block and click "Run Code" to complete the exercise
// Task: Create a function `addOrders` that helps Maya add multiple orders to her array
// The function should add: "Flat White", "Cold Brew", "Double Espresso"

function addOrders(orderList) {
	// Add the three orders to Maya's list
	// Return the updated array

	//   orderList.push('Flat White', 'Cold Brew', 'Double Espresso')
	//   return orderList

	//Quick return
	return orderList.push('Flat White', 'Cold Brew', 'Double Espresso')
}

let mayasOrders = ['Latte', 'Cappuccino']
mayasOrders = addOrders(mayasOrders)
console.log("Maya's updated orders:", mayasOrders)

// ==============================
// Exercise 2: Handle Priority Orders During Rush
// ==============================
// Uncomment this block and click "Run Code" to complete the exercise
// Task: Help Maya insert two VIP orders at the front of her queue
// Insert "VIP: Affogato" and "VIP: Cortado" at positions 0 and 1

let rushQueue = ['Americano', 'Latte', 'Mocha', 'Espresso']
// Insert both VIP orders at the beginning
// Use splice to insert "VIP: Affogato" at index 0
// Then insert "VIP: Cortado" at index 1
rushQueue.splice(0, 0, 'VIP: Affogato')
rushQueue.splice(1, 0, 'VIP: Cortado')

console.log('Rush queue with VIP orders:', rushQueue)

// ==============================
// Exercise 3: Fix Multiple Order Mistakes
// ==============================
// Uncomment this block and click "Run Code" to complete the exercise
// Task: Maya made some mistakes! Help her fix them:
// 1. Remove the two incorrect orders at indices 2 and 3
// 2. Update the first order from "Latter" to "Latte"

let mistakeOrders = ['Large Latter', 'Cappuccino', 'Wrong Order 1', 'Wrong Order 2', 'Espresso']
// Fix the typo in the first order
// Remove the two wrong orders (indices 2 and 3)
mistakeOrders.splice(0, 1, 'Large Latte')
mistakeOrders.splice(3, 1)
mistakeOrders.splice(2, 1)

console.log('Fixed orders:', mistakeOrders)

// ==============================
// Exercise 4: Create an Efficient Order Processing System
// ==============================
// Uncomment this block and click "Run Code" to complete the exercise
// Task: Help Maya create a function that processes orders and shows progress
// The function should loop through all orders and print each one with its position

function processOrders(orders) {
	// Use a for...of loop or traditional for loop
	// Print each order with format: "Making order X of Y: [order name]"

	//For i loop
	for (let i = 0; i < orders.length; i++) {
		console.log(`making order ${i + 1} of ${orders.length}: ${orders[i]}`)
	}

	//For of loop
	for (const [index, order] of Object.entries(orders)) {
		console.log(`Making order ${Number(index) + 1} of ${orders.length}: ${order}`)
	}
}

let afternoonOrders = ['Cappuccino', 'Iced Latte', 'Americano', 'Mocha']
processOrders(afternoonOrders)

//  ++CORE OPERATIONS++

// ==============================
// Exercise 1: Help Alex Access Songs by Position
// ==============================
// Uncomment this block and click "Run Code" to complete the exercise
// Task: Create a function that helps Alex quickly access songs from their setlist

function getSongAtPosition(setlist, position) {
	// Return the song at the given position
	// Handle invalid positions gracefully
	if (position < 0 || position > setlist.length - 1) return `No song found at given position`
	return setlist[position]
}

const alexsSetlist = ['Wonderwall', 'Hotel California', 'Blackbird', 'Free Bird']
console.log('Song at position 2:', getSongAtPosition(alexsSetlist, 2))
console.log('Song at position 10:', getSongAtPosition(alexsSetlist, 10))

// ==============================
// Exercise 2: Help Alex Update Their Setlist
// ==============================
// Uncomment this block and click "Run Code" to complete the exercise
// Task: Create a function that updates multiple songs based on audience feedback

function updateSetlistBasedOnFeedback(setlist, updates) {
	// updates is an object like { 0: "New Song", 2: "Another Song" }
	// Update the setlist at the specified positions

	//For in loop to loop through the keys of updates to obtain the index that needs to be updated for setlist
	for (const index in updates) {
		setlist[index] = updates[index]
	}
	return setlist
}

let performanceSet = ['Song A', 'Song B', 'Song C', 'Song D']
const feedback = { 0: 'Thunderstruck', 2: "Don't Stop Believin'" }
updateSetlistBasedOnFeedback(performanceSet, feedback)
console.log('Updated setlist:', performanceSet)

// ==============================
// Exercise 3: Help Alex Add Songs Strategically
// ==============================
// Uncomment this block and click "Run Code" to complete the exercise
// Task: Create a function that adds songs using the most efficient method based on position

function addSongStrategically(setlist, song, position) {
	// If position is "end", use push (O(1))
	// If position is "beginning", use unshift (O(n))
	// If position is a number, use splice (O(n))
	// Return the updated setlist
	if (position === 'end') setlist.push(song)
	else if (position === 'beginning') setlist.unshift(song)
	else if (!isNaN(position)) setlist.splice(position, 0, song)
	return setlist
}

let strategicSet = ['Hotel California', "Sweet Child O' Mine"]
addSongStrategically(strategicSet, 'Thunderstruck', 'beginning')
addSongStrategically(strategicSet, 'Free Bird', 'end')
addSongStrategically(strategicSet, 'Wonderwall', 2)
console.log('Strategic setlist:', strategicSet)

// ==============================
// Exercise 4: Help Alex Remove Songs Strategically
// ==============================
// Uncomment this block and click "Run Code" to complete the exercise
// Task: Create a function that removes songs using the most efficient method

function removeSongStrategically(setlist, position) {
	// If position is "end", use pop (O(1))
	// If position is "beginning", use shift (O(n))
	// If position is a number, use splice (O(n))
	// Return the removed song
	if (position === 'end') return setlist.pop()
	if (position === 'beginning') return setlist.shift()
	if (!isNaN(position)) return setlist.splice(position, 1)[0]
}

let removalSet = ['Thunderstruck', 'Hotel California', 'Wonderwall', 'Free Bird']
console.log('Removed from end:', removeSongStrategically(removalSet, 'end'))
console.log('Removed from beginning:', removeSongStrategically(removalSet, 'beginning'))
console.log('Removed from position 1:', removeSongStrategically(removalSet, 1))
console.log('Final setlist:', removalSet)

// ==============================
// Exercise 5: Help Alex Find Songs for Requests
// ==============================
// Uncomment this block and click "Run Code" to complete the exercise
// Task: Create a function that finds songs matching specific criteria

function findSongsForRequest(repertoire, criteria) {
	// repertoire is an array of song objects with properties like title, genre, mood
	// criteria is an object like { genre: "rock", mood: "energetic" }
	// Return all songs that match ALL the criteria

	//Quick return
	return repertoire.filter(song => {
		for (const key in criteria) {
			//Compares the value of criteria.genre and song.genre. Returns false if any do not match.
			if (criteria[key] !== song[key]) return false
		}
		return true
	})
}

const alexsRepertoire = [
	{ title: 'Thunderstruck', genre: 'rock', mood: 'energetic' },
	{ title: 'Hotel California', genre: 'rock', mood: 'mysterious' },
	{ title: 'Wonderwall', genre: 'alternative', mood: 'nostalgic' },
	{ title: 'Tears in Heaven', genre: 'ballad', mood: 'emotional' },
]

console.log('Rock songs:', findSongsForRequest(alexsRepertoire, { genre: 'rock' }))
console.log('Energetic rock:', findSongsForRequest(alexsRepertoire, { genre: 'rock', mood: 'energetic' }))

//  ++ARRAY METHODS+++

// ==============================
// Exercise 1: Help Alex Manage Multiple Venue Setlists
// ==============================
// Uncomment this block and click "Run Code" to complete the exercise
// Task: Create functions to manage setlists for different venues efficiently

function buildSetlistWithPush(songs) {
	// Start with empty setlist and use push() to add songs one by one
	// Return the final setlist
	const setlist = []
	setlist.push(...songs)
	return setlist
}

function managePerformanceQueue(initialLineup, newOpeners, finishedActs) {
	// Use unshift() to add new opening acts
	// Use shift() to remove finished acts
	// Return the updated lineup
	const updatedLineup = [...initialLineup]
	updatedLineup.unshift(...newOpeners)
	updatedLineup.shift()
	return updatedLineup
}

const songs = ['Thunderstruck', 'Hotel California', 'Free Bird']
console.log('Built setlist:', buildSetlistWithPush(songs))

let lineup = ["Alex's Main Set"]
lineup = managePerformanceQueue(lineup, ['Jazz Trio', 'Folk Singer'], 1)
console.log('Updated lineup:', lineup)

// ==============================
// Exercise 2: Help Alex Transform and Filter Song Collections
// ==============================
// Uncomment this block and click "Run Code" to complete the exercise
// Task: Create venue-specific versions and filter songs by criteria

function createVenueVersions(songs, venueType) {
	// Use map() to transform songs for specific venue
	// venueType can be "rock", "jazz", or "electronic"
	// Transform duration and add venue-specific properties
	return songs.map(song => {
		return {
			...song,
			venueType,
		}
	})
}

function filterSongsForEvent(repertoire, eventType) {
	// Use filter() to select appropriate songs
	// eventType can be "wedding", "corporate", "festival"
	// Return songs matching the event criteria
	return repertoire.filter(song => song.eventType === eventType)
}

const coreSongs = [
	{ title: 'Wonderwall', genre: 'alternative', mood: 'nostalgic', duration: 4.2 },
	{ title: 'At Last', genre: 'jazz', mood: 'romantic', duration: 3.2 },
]

console.log('Rock versions:', createVenueVersions(coreSongs, 'rock'))
console.log('Wedding songs:', filterSongsForEvent(coreSongs, 'wedding'))

// ==============================
// Exercise 3: Help Alex Analyze Performance Data
// ==============================
// Uncomment this block and click "Run Code" to complete the exercise
// Task: Process performance data and calculate business metrics

function generatePerformanceReport(performances) {
	// Use forEach() to process each performance and generate detailed report
	// Include venue, date, audience, revenue, and calculated metrics
	performances.forEach(p => {
		console.log(`Venue: ${p.venue} | Date: ${p.date} | Crowd Size: ${p.audience} | Revenue: ${p.revenue}`)
	})
	const revenueMetric = performances.reduce((acc, performance) => acc + performance.revenue, 0)
	const audienceMetric = performances.reduce((acc, performance) => acc + performance.audience, 0)
	console.log(`Revenue across performances: ${revenueMetric}`)
	console.log(`Total attendence across performances: ${audienceMetric}`)
}

function calculateBusinessMetrics(performances) {
	// Use reduce() to calculate total revenue, average audience, and venue statistics
	// Return an object with all the calculated metrics
	return {
		revenue: performances.reduce((acc, performance) => acc + performance.revenue, 0),
		audience: Math.floor(performances.reduce((acc, performance) => acc + performance.audience, 0) / performances.length),
	}
}

function extractRecentPerformances(performances, count) {
	// Use slice() to extract the most recent performances
	// Return the specified number of recent performances
	return performances.slice(0, count)
}

const performances = [
	{ venue: 'Blue Note', date: '2024-01-05', audience: 85, revenue: 450 },
	{ venue: 'Jazz Corner', date: '2024-01-12', audience: 45, revenue: 320 },
	{ venue: 'Electric Underground', date: '2024-01-19', audience: 120, revenue: 680 },
]

generatePerformanceReport(performances)
console.log('Metrics:', calculateBusinessMetrics(performances))
console.log('Recent:', extractRecentPerformances(performances, 2))

// ==============================
// Exercise 4: Help Alex Master Method Chaining and Advanced Array Operations
// ==============================
// Uncomment this block and click "Run Code" to complete the exercise
// Task: Use method chaining and splice() for complex data operations

function createOptimalSetlist(songDatabase, criteria) {
	// Use method chaining: filter by criteria, sort by popularity,
	// map to add performance notes, and limit to top songs
	// criteria: { maxDuration: number, preferredMood: string, maxSongs: number }
}

function restructureFestivalLineup(lineup, changes) {
	// Use splice() to make complex changes to the lineup
	// changes: { removeAt: number, removeCount: number, addActs: array }
	// Return the removed acts
	const removedActs = lineup.splice(changes.removeAt, changes.removeCount, ...changes.addActs)
	return removedActs
}

const songDatabase = [
	{ title: 'Thunderstruck', mood: 'energetic', duration: 4.8, popularity: 95 },
	{ title: 'Hotel California', mood: 'mysterious', duration: 6.5, popularity: 98 },
	{ title: 'Wonderwall', mood: 'nostalgic', duration: 4.2, popularity: 92 },
]

const criteria = { maxDuration: 5.0, preferredMood: 'energetic', maxSongs: 2 }
console.log('Optimal setlist:', createOptimalSetlist(songDatabase, criteria))

let festivalLineup = ['Opening', 'Band A', 'Band B', 'Headliner', 'Closing']
const changes = { removeAt: 1, removeCount: 2, addActs: ['Jazz Ensemble', 'Rock Band'] }
console.log('Removed:', restructureFestivalLineup(festivalLineup, changes))
console.log('New lineup:', festivalLineup)
