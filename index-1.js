'use strict';

/*
 * Операція spread як заміна concat та slice
 */

//*  Копія масива
// const numbers = [1, 2, 3, 4, 5];

// console.log('numbers: ', numbers);
// console.log('numbers2: ', numbers2);
// console.log(numbers === numbers2);

// numbers2[0] = 10;

// console.log('numbers: ', numbers);
// console.log('numbers2: ', numbers2);

//* Об'єднання масивів
// const numbers = [1, 2, 3, 4, 5];
// const numbers2 = [10, 9, 8, 7];

//* Розпилення масиву у функцію
//Math.max / Math.min
// const numbers = [1, 2, 3, 4, 5];

/*
 * Операція spread як заміна Object.assign({}, ...sources)
 */

// const o1 = { a: 1 };
// const o2 = { b: 2 };
// const o3 = { c: 3 };

// const obj = Object.assign(o1, o2, o3);

// console.log(obj); // { a: 1, b: 2, c: 3 }
// console.log(o1); // { a: 1, b: 2, c: 3 }, змінився і сам об'єкт

//https://lodash.com/docs/4.17.15#cloneDeep

// const user = {
//   firstName: 'Jonathan',
//   lastName: 'Barnett',
//   age: 30,
// };

//* Розпилення складних типів

//При розпиленні виокнується поверхневе копіювання.
//Якщо є складні типи даних, записується на них посилання
//*********** */
//При _.cloneDeep виконується глибоке копіювання
//Якщо є складні типи даних, вони також копіюються в нові,
//такі самі

/*
 * Операція rest
 */

//? Напишіть функцію sum, яка додає довільну кількість аргументів які більше вказаного числа, вказане число передається першим аргументом
