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
