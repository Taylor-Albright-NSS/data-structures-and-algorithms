function playNextSong(playlist, targetSong) {
	// Find the target song and play the song that comes after it
	// targetsong parameter is a string with "Tile - Band" ex. "Hotel California - Eagles"
	// Return the next song's string representation, or "End of playlist" if no next song

	//store current song in new variable because it will likely be mutated
	let currentSong = playlist
	//while currentSong exists
	while (currentSong) {
		//check to see if the current song is the target song
		if (currentSong.toString() === targetSong) {
			//if the current song has a song after it
			if (currentSong.next) {
				//return the next song's information
				console.log(currentSong.next.toString())
				return currentSong.next.toString()
			} else {
				//return a message indicating that there is no next song in the playlist
				console.log(`End of playlist`)
				return 'End of playlist'
			}
		}
		//if the current song does not match the target song, assign the next song in the list to currentSong
		currentSong = currentSong.next
	}
	console.log(`Song not found in playlist`)
	return 'Song not found in playlist'
}

playNextSong(song1, `Stairway to Heaven - Led Zeppelin`)

//REMOVE SONG FROM ANYWHERE IN THE LINKED LIST
function removeSong(playlist, targetTitle) {
	if (playlist && playlist.title === targetTitle) {
		return playlist.next
	}
	let currentSong = playlist

	while (currentSong?.next) {
		if (currentSong.next.title === targetTitle) {
			currentSong.next = currentSong.next.next
			return currentSong
		}
		currentSong = currentSong.next
	}
	return currentSong
}
removeSong(song1, 'Bohemian Rhapsody')

//COUNT ITEMS IN A LINKED LIST
function countSongs(playlist) {
	// Count the total number of songs in the playlist
	// Return the count as a number

	let count = 0
	let currentSong = playlist

	while (currentSong) {
		count++
		currentSong = currentSong.next
	}
	// TODO: Traverse the entire playlist and count songs
	// Hint: Use a while loop and increment count for each song

	return count
}

//PLAYLIST TYPES: SINGLY, DOUBLY, AND CIRCULAR LINKED LISTS

//--------BELOW IS DATA FOR THE BELOW--------//
class DoublySongNode {
	constructor(title, artist) {
		this.title = title
		this.artist = artist
		this.next = null
		this.prev = null
	}

	toString() {
		return `${this.title} - ${this.artist}`
	}
}

// Create a sample doubly linked playlist
const song1 = new DoublySongNode('Bohemian Rhapsody', 'Queen')
const song2 = new DoublySongNode('Hotel California', 'Eagles')
const song3 = new DoublySongNode('Stairway to Heaven', 'Led Zeppelin')
const song4 = new DoublySongNode("Sweet Child O' Mine", "Guns N' Roses")

// Connect them bidirectionally
song1.next = song2
song2.prev = song1
song2.next = song3
song3.prev = song2
song3.next = song4
song4.prev = song3
//--------ABOVE IS DATA FOR THE BELOW--------//

//Navigate playlist forward or backward
function navigatePlaylist(currentSong, direction, steps = 1) {
	// Navigate forward or backward in a doubly linked playlist
	// direction: "forward" or "backward"
	// steps: number of songs to move
	// Return the destination song or null if can't move that far

	let current = currentSong

	for (let i = 0; i < steps; i++) {
		if (direction === 'forward') {
			if (current.next) {
				current = current.next
			} else {
				console.log(`There is no next`)
				return current
			}
		}

		if (direction === 'backward') {
			if (current.prev) {
				current = current.prev
			} else {
				console.log(`There is no prev`)
				return current
			}
		}
	}
	console.log(current)
	return current
}

//Detect loop
function detectLoop(playlist) {
	if (!playlist) return false

	let slow = playlist
	let fast = playlist

	// Phase 1: Detect if a loop exists
	while (fast && fast.next) {
		slow = slow.next
		fast = fast.next.next

		if (slow === fast) {
			// Phase 2: Find start of loop
			slow = playlist
			while (slow !== fast) {
				slow = slow.next
				fast = fast.next
			}
			return true // Node where loop starts
		}
	}

	return false // No loop
}
// Helper function to create a test circular playlist for the above detectLoop function
function createCircularPlaylist() {
	const songA = new DoublySongNode('Song A', 'Artist A')
	const songB = new DoublySongNode('Song B', 'Artist B')
	const songC = new DoublySongNode('Song C', 'Artist C')

	songA.next = songB
	songB.next = songC
	songC.next = songA // Creates the loop

	return songA
}
detectLoop(createCircularPlaylist())
