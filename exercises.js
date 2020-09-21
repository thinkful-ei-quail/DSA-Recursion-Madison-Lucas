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

function exponentCalculator (base, exponent) {
  // error case
  if (exponent < 0) {
    return 'exponent should be >= 0';
  }

  // base case
  if (exponent === 0) {
    return 1;
  }

  // general case
  return base * exponentCalculator(base, exponent - 1);
}


// NUMBER 3

function reversedString(string) {
  if(string.length === 0) {
    return string;
  }
  return string[string.length -1] + reversedString(string.slice(0, string.length -1));
}

// NUMBER 4

function nthTriangular (n) {
  if (n === 1) {
    return n;
  }

  return n + nthTriangular(n - 1);
}

// NUMBER 5

function splitString (string, splitter) {
  const index = string.indexOf(splitter)
  if(index === -1){
    return [string]
  }
  return [string.slice(0, index), ...splitString(string.slice(index +1), splitter)]
}

// NUMBER 6

function fibbedNum(number) {
  if(number == 0 || number == 1) {
    return number;
  }
  return fibbedNum(number -1) + fibbedNum(number -2);
}



/* * * TESTING ZONE * * */

// exercise 1
sheepJump(3);

// exercise 2
console.log(exponentCalculator(5, 4));

// exercise 3
console.log(reversedString('food'));

// exercise 4
console.log(nthTriangular(9));

// exercise 5
console.log(splitString('02/20/2020', '/'));

//exercise 6
console.log(fibbedNum(6));
