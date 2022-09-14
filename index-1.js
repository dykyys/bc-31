'use strict';
/*
 * Грязні і чисті функції
 */

// const state = {
//     images:[]
// }

// state.images === prev.state.images

//! Dirty function
// const numbers = [1, 2, 3, 4, 5];

// console.log(numbers);
// const dirtyMultiply = (array, value) => {
//   for (let i = 0; i < array.length; i++) {
//     array[i] *= value;
//   }
// };

// dirtyMultiply(numbers, 21);
// console.log(numbers);

// const pushNumbers = (...args) => {
//   numbers.push(...args);
// };

// pushNumbers(9, 6, 8, 9, 10, 15);
// console.log(numbers);
//? Clear function
// const numbers = [1, 2, 3, 4, 5];

// function clearMultiply(array, value) {
//   const newArray = [];

//   for (const number of array) {
//     newArray.push(number * value);
//   }
//   return newArray;
// }
// const multiNumbers = clearMultiply(numbers, 21);
// console.log(multiNumbers);
// console.log(numbers);
// const pushNumbers = (...args) => [...numbers, ...args];

// const changedNumbers = pushNumbers(9, 6, 8);

// console.log('numbers: ', numbers);
// console.log('copy of numbers: ', changedNumbers);
