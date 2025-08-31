//INTRODUCTION TO MAPS - THE PATIENT RECORDS SYSTEM

/*
Problem: Using Map Operations to Manage Patient Records

Dr. Sarah has provided you with JavaScript's built-in Map class to help manage patient records.
Your job is to USE the Map operations to solve real healthcare problems!

Available Map Operations:
- map.set(key, value): Add or update a patient record
- map.get(key): Retrieve a patient's information by ID
- map.has(key): Check if a patient exists in the system
- map.delete(key): Remove a patient from active records
- map.size: Get the number of patients in the system
- map.clear(): Remove all patients (use carefully!)

Complete the functions below to help Sarah manage patient records!
*/

// ⏱️ Sarah's First Challenge!
// 🔓 Uncomment the below code section and implement the required logic:

function addPatient(patientMap, patientId, patientInfo) {
	// Add a new patient to the records system
	// Use the Map's set operation to store patient information

	// TODO: Use Map operations to add the patient
	// Hint: patientMap.set(key, value)
	patientMap.set(patientId, patientInfo)
	console.log(`Added patient ${patientId}: ${patientInfo.name}`)
}
function getPatientInfo(patientMap, patientId) {
	// Retrieve a patient's information by their ID
	// Return the patient info if found, null if not found

	// TODO: Use Map operations to get patient information
	// Hint: Check if patient exists first, then get their info
	const patientInfo = patientMap.has(patientId) ? patientMap.get(patientId) : null
	return patientInfo
}

// ⏱️ Sarah's Second Challenge!
// 🔓 Uncomment the below code section and implement the required logic:

function updatePatientRoom(patientMap, patientId, newRoom) {
	// Update a patient's room assignment
	// Return true if successful, false if patient not found

	// TODO: Check if patient exists, then update their room
	// Hint: Get current patient info, modify it, then set it back
	if (patientMap.has(patientId)) {
		const patient = patientMap.get(patientId)
		patient.room = newRoom
		patientMap.set(patientId, patient)
		return true
	}
	return false // Replace with actual implementation
}

// ⏱️ Sarah's Third Challenge!
// 🔓 Uncomment the below code section and implement the required logic:

function findPatientsByRoom(patientMap, roomPrefix) {
	// Find all patients whose room starts with the given prefix
	// Return an array of patient IDs
	// Example: roomPrefix "ICU" should find patients in "ICU-1", "ICU-2", etc.
	const matchingPatients = []
	for (const [id, patient] of patientMap) {
		console.log(patient.room.slice(0, 3), roomPrefix, ' CUSTOM LOG')
		if (patient.room.slice(0, 3) === roomPrefix) {
			matchingPatients.push(id)
		}
	}

	// TODO: Iterate through all patients and check their room assignments
	// Hint: Use for...of loop with patientMap entries

	return matchingPatients
}

//INTRODUCTION TO SETS - THE PATIENT ALLERGY TRACKING SYSTEM

// ✅ JavaScript Set class - built-in and ready to use!
// 🔒 You can trust it works. Focus on how to use it for healthcare safety applications.

/*
Problem: Using Set Operations to Manage Patient Allergies

Dr. Elena has provided you with JavaScript's built-in Set class to help manage patient allergies.
Your job is to USE the Set operations to solve real patient safety problems!

Available Set Operations:
- set.add(value): Add an allergy to the patient's record
- set.has(value): Check if patient has a specific allergy
- set.delete(value): Remove an allergy from patient's record
- set.size: Get the number of allergies
- set.clear(): Remove all allergies (use carefully!)

Complete the functions below to help Elena ensure patient safety!
*/

// ⏱️ Sarah's First Challenge!
// 🔓 Uncomment the below code section and implement the required logic:

function addAllergy(allergySet, allergy) {
	// Add a new allergy to the patient's record
	// Use the Set's add operation to store the allergy

	// TODO: Use Set operations to add the allergy
	// Hint: allergySet.add(value)
	allergySet.add(allergy)
	console.log(`Added allergy: ${allergy}`)
}

function checkAllergy(allergySet, allergy) {
	// Check if patient has a specific allergy
	// Return true if allergy exists, false if not

	// TODO: Use Set operations to check for allergy
	// Hint: allergySet.has(value)
	return allergySet.has(allergy) ? true : false
}

// ⏱️ Sarah's Second Challenge!
// 🔓 Uncomment the below code section and implement the required logic:

function findCommonAllergies(patient1Allergies, patient2Allergies) {
	// Find allergies that both patients share
	// Return a new Set containing only shared allergies

	const commonAllergies = new Set()
	for (const allergy of patient1Allergies) {
		if (patient2Allergies.has(allergy)) {
			commonAllergies.add(allergy)
		}
	}
	// TODO: Iterate through one set and check if allergy exists in the other
	// Hint: Use for...of loop and has() method

	return commonAllergies
}

// ⏱️ Sarah's Third Challenge!
// 🔓 Uncomment the below code section and implement the required logic:

function isMedicationSafe(patientAllergies, medicationIngredients) {
	// Check if medication is safe for patient
	// Return true if safe (no ingredient matches allergies), false if unsafe

	// TODO: Check if any medication ingredient matches patient allergies
	// Hint: Iterate through ingredients and check if patient is allergic to any
	let noAllergies = true
	for (const ingredient of medicationIngredients) {
		if (patientAllergies.has(ingredient)) noAllergies = false
	}
	return noAllergies // Replace with actual implementation
}

//REAL-WORLD APPLICATIONS - THE EMERGENCY RESPONSE SYSTEM
/*
Problem: Emergency Dispatch System - Real-World Map and Set Applications

Elena has shown you how Maps and Sets power emergency dispatch systems.
Your job is to implement the core functionality that keeps communities safe!

Available Operations:
Maps: set(), get(), has(), delete(), size, clear()
Sets: add(), has(), delete(), size, clear()

Complete the functions below to help Jake manage emergency operations!
*/

// ⏱️ Jake's First Challenge!
// 🔓 Uncomment the below code section and implement the required logic:

function recordEmergencyCall(emergencyTracker, emergencyType) {
	// Track frequency of different emergency types
	// Use Map operations to count how many times each type occurs

	// TODO: Implement frequency counting using Map operations
	// Hint: Check if emergencyType exists, then increment or set to 1
	if (emergencyTracker.has(emergencyType)) {
		emergencyTracker.set(emergencyType, emergencyTracker.get(emergencyType) + 1)
	} else {
		emergencyTracker.set(emergencyType, 1)
	}
	console.log(`Recorded ${emergencyType} emergency call`)
}

function getEmergencyStats(emergencyTracker) {
	// Return statistics about emergency call frequencies
	// Return an object with type and count for each emergency type

	const stats = []

	// TODO: Convert Map entries to array of {type, count} objects
	// Hint: Use for...of loop with emergencyTracker entries
	for (const [type, count] of emergencyTracker) {
		stats.push({ type, count })
	}
	return stats.sort((a, b) => b.count - a.count) // Sort by frequency
}

// ⏱️ Jake's Second Challenge!
// 🔓 Uncomment the below code section and implement the required logic:

function contactHospital(hospitalContacts, hospitalName, currentTime) {
	const timeWindow = 600000 // 10 minutes in milliseconds
	if (hospitalContacts.has(hospitalName)) {
		const lastContact = hospitalContacts.get(hospitalName)
		if (currentTime - lastContact < timeWindow) {
			return false
		}
	}
	hospitalContacts.set(hospitalName, currentTime)
	return true
}

function getRecentContacts(hospitalContacts, currentTime) {
	// Get list of hospitals contacted in the last 10 minutes
	// Return array of hospital names

	const timeWindow = 600000 // 10 minutes
	const recentContacts = []

	// TODO: Filter contacts by time window
	// Hint: Check timestamp difference for each contact
	for (const [hospital, time] of hospitalContacts) {
		if (currentTime - time < timeWindow) {
			recentContacts.push(hospital)
		}
	}
	return recentContacts
}

// ⏱️ Jake's Third Challenge!
// 🔓 Uncomment the below code section and implement the required logic:

function assignEquipment(equipmentAssignments, equipmentUsage, unitId, equipmentType) {
	// Assign equipment to a unit and track usage
	// Prevent duplicate assignments of the same equipment

	// TODO: Check if equipment is already assigned
	// If not assigned, assign to unit and increment usage count
	// Return true if successful, false if already assigned
	if (equipmentAssignments.has(equipmentType)) {
		return false
	}
	equipmentAssignments.add(equipmentType)
	if (equipmentUsage.has(equipmentType)) {
		equipmentUsage.set(equipmentType, equipmentUsage.get(equipmentType) + 1)
	} else {
		equipmentUsage.set(equipmentType, 1)
	}
	return true
}

function getAvailableEquipment(equipmentAssignments, allEquipment) {
	// Find equipment that is not currently assigned
	// allEquipment is an array of all equipment types
	// Return array of available equipment

	const available = []
	for (const equipment of allEquipment) {
		if (!equipmentAssignments.has(equipment)) {
			available.push(equipment)
		}
	}
	// TODO: Find equipment not in assignments
	// Hint: Check if each equipment type is in the assignments Set

	return available
}

function getEquipmentUsageStats(equipmentUsage) {
	// Get usage statistics for all equipment types
	// Return array of {equipment, usageCount} objects sorted by usage

	const stats = []

	// TODO: Convert usage Map to stats array
	// Hint: Similar to getEmergencyStats but for equipment
	for (const [equipment, usageCount] of equipmentUsage) {
		stats.push({ equipment, usageCount })
	}
	return stats.sort((a, b) => b.usageCount - a.usageCount)
}

//MODULE 7 - CODE EXERCISE 2 SOLUTION
function firstUniqChar(s) {
	// Approach: Use a Map to count character frequencies
	// First pass: count all characters
	// Second pass: find first character with count = 1

	// Your code here
	const charFrequency = new Map()
	const splitS = s.split('')
	for (let i = 0; i < splitS.length; i++) {
		const letter = splitS[i]
		if (charFrequency.has(letter)) {
			charFrequency.set(letter, charFrequency.get(letter) + 1)
		} else {
			charFrequency.set(letter, 1)
		}
	}

	for (const [letter, value] of charFrequency) {
		console.log(letter, value)
		if (value === 1) {
			console.log(splitS, ' splitS')
			const index = splitS.indexOf(letter)
			console.log(index)
			return index
		}
	}
}

firstUniqChar('loveleetcode')
