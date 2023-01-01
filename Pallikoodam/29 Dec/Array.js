const numbers = [1, 2, 3, 'four'];
numbers[0] = 100; // replace element by using index.
numbers.push(5, 6); // append new element, also add multiple elements.
// console.log(numbers);

// to get individula from an array use '...'.

let firstArray = [1, 2, 3];
let secondArray = [4, 5, 6];

firstArray.push(...secondArray); // join two array

firstArray = firstArray.concat(secondArray); // join two array
console.log(firstArray);

// value types are stored in stack memory & reference types are in heap memory.
// value types : int, float, char..
// reference type : string...

// .fill used to replace all the elements in an array.

// to check wheather an element is avail use .indexOf or .includes

// numbers.join('/'), it will join elements in an array with / in between elements.
