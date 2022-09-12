'use strict';

/*
 * Операція spread як заміна concat та slice
 */

//*  Копія масива
// const numbers = [1, 2, 3, 4, 5];

// const numbers2 = numbers.slice();
// const numbers2 = [...numbers];

// console.log('numbers: ', numbers);
// console.log('numbers2: ', numbers2);

// console.log(numbers === numbers2);

// numbers2[0] = 10;

// console.log('numbers: ', numbers);
// console.log('numbers2: ', numbers2);

//* Об'єднання масивів
// const numbers = [1, 2, 3, 4, 5];
// const numbers2 = [10, 9, 8, 7];

// const allNumbers = [].concat(numbers, numbers2);
// const allNumbers = [...numbers, ...numbers2];

// console.log(numbers2);
// console.log(numbers);

// console.log(allNumbers);

//* Розпилення масиву у функцію
//Math.max / Math.min

// const numbers = [1, 2, 3, 4, 5];
// console.log(Math.max(...numbers));
// console.log(Math.min(...numbers));

// const a = {
//   a: 5,
//   b: { a: 10, b: 15 },
// };

/*
 * Операція spread як заміна Object.assign({}, ...sources)
 */

const o1 = { a: 1 };
const o2 = { b: 2 };
const o3 = { c: 3 };
const a = {
  e: 21,
  d: { a: 10, b: 15 },
};

// const newObj = Object.assign({}, o1, o2, o3, a);
/**
 * {
 * a: 1,
 * b:2,
 * c:3
 * }
 *
 * newObj = {}
 */

// console.log(obj); // { a: 1, b: 2, c: 3 }
// console.log(o1); // { a: 1, b: 2, c: 3 }, змінився і сам об'єкт

// const newObj = { ...o1, ...o2, ...o3, ...a };
// newObj.d.name = 'Mango';
// console.log(newObj);
// console.log(a);

//https://lodash.com/docs/4.17.15#cloneDeep

// const objClone = _.cloneDeep({ ...o1, ...o2, ...o3, ...a });
// objClone.d.c = 21;
// console.log(objClone);
// console.log(a.d);

// const user = {
//   firstName: 'Jonathan',
//   lastName: 'Barnett',
//   age: 30,
// };

//* Розпилення складних типів

//При розпиленні виконується поверхневе копіювання.
//Якщо є складні типи даних, записується на них посилання
//************/
//При _.cloneDeep виконується глибоке копіювання
//Якщо є складні типи даних, вони також копіюються в нові,
//такі самі

/*
 * Операція rest
 */

// const obj = { a: 1 }; const newObj = {...obj} spread
// function name(...args) { console.log(args);} rest

//? Напишіть функцію sum, яка додає довільну кількість аргументів які більше вказаного числа, вказане число передається першим аргументом

// function sum(number, ...args) {
//   let total = 0;
//   for (const arg of args) {
//     if (arg > number) {
//       total += arg;
//     }
//   }
//   console.log(total);
// }
// sum(3, 1, 4, 5, 2, 10, 6);
