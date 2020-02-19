'use strict';

// Complete this algo
const binarySearch = (array, target) => {
	let midpoint = Math.floor(array.length/2)
	console.log(midpoint, array)
	console.log(array[midpoint])
	if (array[midpoint] === target) {
		console.log(array[midpoint] === target)
		//console.log(target)
		return (array[midpoint] === target)
	}

	if (array.length === 2) {
		console.log('inside')
		if (array[0] === target || array[1] === target) {
			return true
		} else {
			console.log('inside of else')
			return false
		}
	} else {
		if (array[midpoint] > target) {
			// array.splice(midpoint)
			let newArr = array.slice(0, midpoint)
			binarySearch(newArr, target)
		} else {
			let newMidpoint = midpoint + 1
			// array.splice(0, newMidpoint)
			let newArr = array.slice(newMidpoint)
			binarySearch(newArr, target)
		}
	}
};

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch
