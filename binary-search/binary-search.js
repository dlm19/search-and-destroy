'use strict';

// Complete this algo
const binarySearch = (array, target) => {
  let midpoint = Math.floor(array.length / 2);

  if (array.length < 1) {
    return false;
  }

  if (array[midpoint] === target) {
    return true;
  }

  if (array.length === 2) {
    if (array[0] === target || array[1] === target) {
      return true;
    } else {
      return false;
    }
  } else {
    if (array[midpoint] > target) {
      let newArr = array.slice(0, midpoint);
      return binarySearch(newArr, target);
    } else {
      let newMidpoint = midpoint + 1;
      let newArr = array.slice(newMidpoint);
      return binarySearch(newArr, target);
    }
  }
};

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch;
