/*
Problem: First Unique Character

Given a string, find the first non-repeating character in it and return its index.
If it doesn't exist, return -1.

You may assume the string contains only lowercase English letters.

Examples:
Input: "leetcode" → Output: 0 (character 'l' at index 0)
Input: "loveleetcode" → Output: 2 (character 'v' at index 2)
Input: "aabb" → Output: -1 (no unique characters)

Follow-up Questions:
- What is the time complexity of your solution?
- What is the space complexity?
- How would you solve this with only one pass through the string?
*/

function firstUniqChar(s) {
	// Approach: Use a Map to count character frequencies
	// First pass: count all characters
	// Second pass: find first character with count = 1

	// Your code here

	//Create map to store 'letter': count
	const map = new Map()
	//Iterate over the string. If a letter does not exist as a key in the map,
	//set it as a key with a value of 1. If a letter does exist as a key, set it with
	//its updated count value.

	for (let i = 0; i < s.length; i++) {
		const letter = s[i]
		if (!map.has(letter)) {
			map.set(letter, 1)
		} else {
			map.set(letter, map.get(letter) + 1)
		}
	}

	//Iterate over the map and use .get() for each of the keys. Return the index
	//of the first 1 value. If not found, return -1
	for (const [key, value] of map) {
		if (value === 1) {
			return s.indexOf(key)
		}
	}
	return -1
}
