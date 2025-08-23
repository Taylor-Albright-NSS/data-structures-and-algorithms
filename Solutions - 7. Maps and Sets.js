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
