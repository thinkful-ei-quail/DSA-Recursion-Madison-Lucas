'use strict';

// NUMBER 1

function sheepJump (numSheep) {
  // base case
  if (numSheep === 0) {
    console.log('All sheep jumped over the fence!');
    return;
  }

  // general case
  console.log(`${numSheep}: Another sheep jumps over the fence...`);
  sheepJump(numSheep - 1);
}

// NUMBER 2



/* * * TESTING ZONE * * */

// exercise 1

sheepJump(3);

// exercise 2