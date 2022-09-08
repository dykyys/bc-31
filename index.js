'use strict';
/*
 * Функціональні висловлювання та оголошення функції.
 * Параметри, аргументи, повернення.
 */

// function фм'я_функції(праметр_1, параметр_2...) {
// Тіло функції
// }

// function showMessage(message = 'Some name') {
//   console.log(`Hello! ${message}`);
// }

// showMessage();

// const showMessage = function (message = 'Anonimys') {
//   return `Hello! ${message}`;
// };

// console.log(showMessage('Vera Knight'));

// 'Josie Pierce'
// 'Vera Knight'
// 'Alan Lamb'

// const foo = function (array = []) {
//   for (let i = 0; i < array.length; i++) {
//     array[i] *= 3;
//   }
// };

// const numbers = [1, 2, 3, 4, 5, 6];
// const numbers2 = [6, 7, 8, 9];

// console.log(foo(numbers));
// foo(numbers2);
// foo();
// console.log(numbers);
// console.log(numbers2);

// function addNumbers(a, b) {
//   return a + b;
// }

// const sum1 = addNumbers(2, 3);
// const sum2 = addNumbers(2, 5);

// console.log(sum1);
// console.log(sum2);

/*
Написати функцію для додавання чисел з
перевіркю вхідних даних
*/

// const add = function (a, b) {
//   if (typeof a !== 'number' || typeof b !== 'number') {
//     return 'Один із параметрів не число!';
//   }
//   return a + b;
// };

// const sum1 = add('3', 3);
// console.log(sum1);

/*
? Напишіть функцію calcAverage() яка приймає довільну кількість аргументів і повертає їхнє середнє значення.
? За умови, що усі аругменти будуть лише числами.
? Додай перевірку, що аргументами можуть бути не числа
? Потрібно порахувати середнє значення аргументів (чисел)
*/

// function calcAverage() {
//   const array = Array.from(arguments);
//   let total = 0;
//   let count = 0;
//   for (const item of array) {
//     if (typeof item !== 'number') {
//       continue;
//     }
//     total += item;
//     count += 1;
//   }
//   return total / count;
// }

// const total = calcAverage(2, 6, 7, 77, 88, 99, 415);
// console.log(total);

// const total = calcAverage(2, 'e', 3, 'd', 5, 6, 'g', 'd', 69, 65);
// console.log(total);

/*
? Напиши функцію calcBMI(weight, height) яка розраховує та повертає індекс маси тіла людини.
? Для цього необхідно розділити вагу в кілограмах на квадрат висоти людини (зросту).
? Вага та висота будуть спеціально передані як рядки. Нецілі числа можуть бути задані у вигляді 24.7 або 24,7,
? тобто як роздільник дробової частини може бути кома.
? Індекс маси тіла необхідно округлити до однієї цифри після коми;
*/

// function calcBMI(weight = '', height = '') {
//   const normalizeWeight = Number.parseFloat(weight.replace(',', '.'));
//   const normalizeHeight = Number.parseFloat(height.replace(',', '.'));

//   const BMI = normalizeWeight / normalizeHeight ** 2;

//   return Number(BMI.toFixed(1));
// }

// const mangoBIM = calcBMI('88,3kg', '1.75');
// console.log(mangoBIM);

// const pollyBMI = calcBMI('80,3', '1,95');
// console.log(pollyBMI);

/*
? Напиши функцію min(a,b), яка повертає найменше з чисел a та b.
? Добав перевірку, що параметри це числа
*/

// function min(a, b) {
//   if (typeof a !== 'number' || typeof b !== 'number') {
//     return 'Один із параметрів не число!';
//   }
//   //   if (a < b) {
//   //     return a;
//   //   } else {
//   //     return b;
//   //   }

//   return a < b ? a : b;
// }

// console.log(min(9, 5));

/*
? Напиши функцію getRectArea(dimensions) для обчислення площі прямокутника зі сторонами,
? значення яких будуть передані до параметра dimensions у вигляді рядка.
? Значення гарантовано розділені пробілом.
*/

// function getRectArea(dimensions) {
//   const array = dimensions.split(' ');

//   //   let sqr = 1;

//   //   for (const item of array) {
//   //     sqr *= Number(item);
//   //   }
//   //   console.log(sqr);

//   return Number(array[0]) * Number(array[1]);
// }

// console.log(getRectArea('8 11')); // 88
// console.log(getRectArea('18 11')); // 198
// console.log(getRectArea('8 21')); // 168

/*
? Напиши функцію logItems(items), яка отримує масив та використовує цикл for, який для кожного елемента масиву виводитиме в консоль повідомлення
? у форматі <номер елемента> - <значення елемента>. Нумерація елементів має починатися з першого.
? Наприклад, для першого елемента масиву ['Mango', 'Poly', 'Ajax'] з індексом 0 буде виведено 1 - Mango,
? а для індексу 2 виведе 3 – Ajax.
*/

// function logItems(items = []) {
//   for (let i = 0; i < items.length; i++) {
//     // console.log(i + 1 + ' - ' + items[i]);
//     console.log(`${i + 1} - ${items[i]}`);
//   }
// }

// logItems(['Mango', 'Poly', 'Ajax']);
// logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);
// logItems();

/*
? Напиши функцію logItems(items), яка отримує довільну кількість аргументів ,
? для кожного елемента виводитиме в консоль повідомлення
? у форматі <номер елемента> - <значення елемента>. Нумерація елементів має починатися з першого.

*/

// function logItems(...args) {
//   console.log(args);
//   for (let i = 0; i < args.length; i++) {
//     console.log(`${i + 1} - ${args[i]}`);
//   }
// }
// logItems('🍎', '🍇', '🍑', '🍌', '🍋', '🍑', '🍌', '🍋');

/*Стек */

// function task1() {
//   console.log('2 - before task 2');
//   task2();
//   console.log('7 - after task 2');
//   console.log('8 - Completed task 1');
// }
// function task2() {
//   console.log('3 - before task 3');
//   task3();
//   console.log('5 - after task 3');
//   console.log('6 - Completed task 2');
// }

// function task3() {
//   console.log('4 - Completed task 3');
// }

// console.log('1 - before task 1');
// task1();
// console.log('9 - after task 1');

// function foo() {
//   console.log('start foo');

//   baz();
//   console.log('end foo');
// }

// function baz() {
//   console.log('start baz');

//   for (let i = 0; i < 5; i++) {
//     console.log('in baz', i);
//     foo();
//     }

//   console.log('end baz');
// }

// console.log('start');
// foo();
// console.log('finish');

/*
? Напиши функцію printContactsInfo(names, phones) яка виводить у консоль ім'я та телефонний номер користувача.
? У параметри names і phones будуть передані рядки імен та телефонних номерів, розділені комами.
? Порядковий номер імен та телефонів у рядках вказують на відповідність.
? Кількість імен та телефонів гарантовано однакова.
*/

// function printContactsInfo(names, phones) {
//   const arrName = names.split(',');
//   const arrPhones = phones.split(',');

//   for (let i = 0; i < arrPhones.length; i++) {
//     console.log(`${i + 1} - ${arrName[i]} - ${arrPhones[i]}`);
//   }
// }

// printContactsInfo(
//   'Jacob,William,Solomon,Artemis',
//   '89001234567,89001112233,890055566377,890055566300'
// );

// printContactsInfo(
//   'Vera,Carr,Violet,Sherman',
//   '89001234567,89001112233,890055566377,890055566300'
// );

/*
? Напиши функцію findLargestNumber(numbers), яка шукає найбільше число в масиві.
*/

// function findLargestNumber(numbers1 = [], numbers2 = []) {
//   const allNumers = [].concat(numbers1, numbers2);
//   console.log(allNumers);
//   let largestNumber = allNumers[0];
//   for (const number of allNumers) {
//     if (number > largestNumber) {
//       largestNumber = number;
//     }
//   }
//   return largestNumber;
// }

// console.log(findLargestNumber([5, 17, 94, 1, 23, 37], [49, 4, 7, 83, 12])); // 94
// console.log(findLargestNumber([49, 4, 7, 83, 12])); // 83

/*
? Напишіть функції для роботи з колекцією навчальних курсів courses:
? addCourse(name) - додає курс до кінця колекції
? removeCourse(name) - видаляє курс із колекції
? updateCourse(oldName, newName) – змінює ім'я на нове
*/

// const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];

// const addCourse = function (course) {
//   const isInCourses = courses.includes(course);
//   if (isInCourses) {
//     console.log(`${course} is in courses list`);
//     return;
//   }
//   courses.push(course);
// };

// const removeCourse = function (course) {
//   //   const index = courses.indexOf(course);
//   //   if (index === -1) {
//   //     console.log(`${course} not find!`);
//   //     return;
//   //   }
//   //   courses.splice(index, 1);

//   for (let i = 0; i < courses.length; i++) {
//     if (courses[i] === course) {
//       courses.splice(i, 1);
//       return;
//     }
//   }

//   console.log(`${course} not find!`);
// };

// const updateCourse = function (oldCourse, newCourse) {
//   //   const index = courses.indexOf(oldCourse);
//   //   if (index === -1) {
//   //     console.log(`${oldCourse} not find!`);
//   //     return;
//   //   }
//   //   courses.splice(index, 1, newCourse);

//   for (let i = 0; i < courses.length; i++) {
//     if (courses[i] === oldCourse) {
//       //   courses[i] = newCourse;
//       courses.splice(i, 1, newCourse);
//       return;
//     }
//   }

//   console.log(`${oldCourse} not find!`);
// };

// addCourse('Express');
// addCourse('React');
// removeCourse('CSS');
// removeCourse('Linux');
// updateCourse('HTML', 'Vue');
// updateCourse('Linux', 'Windows');
// console.table(courses);
