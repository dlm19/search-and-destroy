'use strict';

//Complete this algo
const isLoop = (linkedlist, currentNode = linkedlist.head, array = []) => {
  if (!currentNode.next) {
    return false;
  }

  if (array.includes(currentNode.value)) {
    return true;
  } else {
    array.push(currentNode.value)
    return isLoop(linkedlist, currentNode.next, array)
  }
};


/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = isLoop
