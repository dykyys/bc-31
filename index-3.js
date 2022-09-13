/*
 * forEach() як заміна циклів for і for...of для масивів
 */

// const numbers = [1, 2, 3, 4, 5];

// for (let i = 0; i < numbers.length; i++) {
//   console.log(`${i + 1} - ${numbers[i]}`);
// }

// for (const number of numbers) {
//   console.log(number);
// }

// numbers.forEach((element, index, array) => {
//   console.log('element', element);
//   //   console.log('index', index);
//   console.log('array', array);
// });

// function ownForEach(array, callback) {
//   for (let i = 0; i < array.length; i++) {
//     callback(array[i], i, array);
//     // console.log(i);
//     // console.log(array);
//   }
// }

// ownForEach(numbers, element => {
//   console.log('element', element);
//   //   console.log('index', index);
//   //   console.log('array', array);
// });

/*
? Виконайте рефакторинг коду, використовуючи метод forEach і стрілочні функції.
*/

// function logItems(items) {
//   //   for (let i = 0; i < items.length; i += 1) {
//   //     console.log(`${i + 1} - ${items[i]}`);
//   //   }

//   items.forEach((element, index) => {
//     console.log(`${index + 1} - ${element}`);
//   });
// }

// logItems(['Mango', 'Poly', 'Ajax']);
// logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);

// Зібрати однакові елементи в двох масивах в один
// за допомогою forEach
// const numbers = [1, 2, 3, 4, 5];
// const numbers2 = [5, 6, 3];

// const newNumbers = [];

// numbers2.forEach(element => {
//   if (numbers.includes(element)) {
//     newNumbers.push(element);
//   }
// });
// console.log(newNumbers);
