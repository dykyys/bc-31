'use strict';
/*
 *  Масиви: літерал масива, елементи, індексація, довжина
 */

// const clients = ['Mango', 'Poly', 'Ajax'];

// for (let i = 0; i < clients.length; i++) {
//   console.log(clients[i]);
// }

// for (const cliet of clients) {
//   console.log(cliet);
// }

// const fruits = ['🍎', '🍑', '🍇', '🍑', '🍌', '🍋', '🍑'];

// for (let i = 0; i < fruits.length; i++) {
//   if (fruits[i] === '🍇') {
//     continue;
//   }
//   console.log(fruits[i]);
// }

/*
 * Передача за посиланням та за значенням
 */

/*
? Створіть змінну a = 10.
? Створіть та привласніть змінній b -> змінну a
? Виведіть в консоль обидві ці змінні
? Змініть значення змінної a і ще раз виведіть у консоль
*/

// let a = 10;
// const b = a;

// console.log('a: ', a); // 10
// console.log('b: ', b); // 10

// a = 20;

// console.log(a === b);
// console.log('a: ', a); // 20
// console.log('b: ', b); // 10

/*
? Створіть масив arr1 = [1, 2, 3].
? Створіть та привласніть масиву arr2 -> масив arr1
? Виведіть в консоль обидва ці масиви
? Додайте елемент в масив arr1 і ще раз виведете обидва масиви в консоль
*/

// const arr1 = [1, 2, 3];
// const arr2 = arr1;

// console.log('arr1: ', arr1); // [1, 2, 3]
// console.log('arr2: ', arr2); // [1, 2, 3]

// arr1.push(10);

// console.log(arr1 === arr2);

// console.log('arr1: ', arr1); // [1, 2, 3, 10]
// console.log('arr2: ', arr2); // [1, 2, 3, 10]

/*
? Створіть масив genres з елементами Jazz і Blues.
? Додайте "rock'n'roll" до кінця.
? Виведіть у консоль перший елемент масиву.
? Виведіть у консоль останній елемент масиву. Код має працювати для масиву довільної довжини.
? Видаліть перший елемент та виведіть його в консоль.
? Вставте "Country" та "Reggy" на початок масиву.
 */

// const genres = ['Jazz', 'Blues'];
// genres.push("rock'n'roll");
// console.log(genres[0]);
// console.log(genres[genres.length - 1]);

// console.log(genres.shift());
// genres.unshift('Country', 'Reggy');
// console.log(genres);

/*
 * Перебір масиву циклами for и for...of
 */

/*
? Напиши скрипт для перебору масиву fruits циклом for.
? Для кожного елемента масиву виведіть у консоль рядок у форматі номер_елемента: значення_елемента.
? Нумерація елементів має починатися з одиниці.
*/

// const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];

// for (let i = 0; i < fruits.length; i += 1) {
//   console.log(`${i + 1}:${fruits[i]}`);
// }

/*
? Напиши скрипт пошуку найменшого числа у масиві.
? Код має працювати для будь-якого масиву чисел.
? Використовуйте цикл для вирішення задачі.
*/

// const numbers = [-100, 17, 94, 1, -20, -50, 23, 37];

// let minNumber = numbers[0];

// for (const number of numbers) {
//   if (minNumber > number) {
//     minNumber = number;
//   }
// }
// console.log(minNumber);

/*
? Напиши скрипт пошуку найдовшого слова в масиві.
? Код має працювати для будь-якого масиву рядків.
? Використовуйте цикл для вирішення задачі.
*/
// const genres = ['Jazz', 'Blues', "rock'n'roll", 'Country', 'Reggy'];

// let longestWord = genres[0];

// for (let i = 0; i < genres.length; i++) {
//   if (genres[i].length > longestWord.length) {
//     longestWord = genres[i];
//   }
// }

// console.log(longestWord);

/*
? У нас є масив із зарплатами працівників,
? потрібно порахувати загальну суму зарплат
*/

// const salaries = [200, 450, 600, 150, 300];
// let total = 0;

// for (const salary of salaries) {
//   total += salary;
// }

// console.log(total);

/*
? У нас є кілька масивів із зарплатами співробітників з
? різних відділів, потрібно порахувати загальну суму зарплат
*/

// const managerSalaries = [1000, 1500, 2500, 4000, 5000];
// const developersSalaries = [8000, 40000, 15000];

//1 варіант
// let total = 0;
// for (const salary of managerSalaries) {
//   total += salary;
// }

// for (const salary of developersSalaries) {
//   total += salary;
// }

// console.log(total);

//2 варіант

// const allSalaries = [].concat(managerSalaries, developersSalaries);

// let total = 0;
// for (const salary of allSalaries) {
//   total += salary;
// }

// console.log(total);

//3 варіант

// const allSalaries = [];
// let total = 0;

// for (const salary of managerSalaries) {
//   allSalaries.push(salary);
// }

// for (const salary of developersSalaries) {
//   allSalaries.push(salary);
// }

// for (const salary of allSalaries) {
//   total += salary;
// }

// console.log(total);

/*
 * Базові методи: split и join, indexOf и includes, push, slice и splice, concat
 */

/*
? Напиши скрипт для обчислення площі прямокутника зі сторонами,
? значення яких зберігаються в змінних значеннях у вигляді рядка.
? Значення гарантовано розділені пробілом.
*/

// const values = '8 11';
// const arrValues = values.split(' ');

// const sqr = Number(arrValues[0]) * Number(arrValues[1]);

// console.log(sqr);

/*
? Напиши скрипт, який виводить у консоль ім'я та телефонний номер користувача.
? У змінних names і phones зберігаються рядки імен та телефонних номерів, розділені комами.
? Порядковий номер імен та телефонів у рядках вказують на відповідність.
? Кількість імен та телефонів гарантовано однакова.
*/

// const names = 'Jacob,William,Solomon,Artemis';
// const phones = '89001234567,89001112233,890055566377,890055566300';

// const namesArr = names.split(',');
// const phonesArr = phones.split(',');

// //Jacob - 89001234567

// for (let i = 0; i < phonesArr.length; i += 1) {
//   console.log(`${namesArr[i]} - ${phonesArr[i]}`);
// }

/*
? Напиши скрипт, який «розвертає» рядок (зворотний порядок букв)
? та виводить її в консоль.
*/

// const str = 'JavaScript це цікаво!';

// 1 Варіант розв'язання за допомогою методів

// const strArr = str.split('');
// const reversedArr = strArr.reverse();
// const reversedStr = reversedArr.join('');

//=============
// const reversedStr = str.split('').reverse().join('');
// console.log(reversedStr);

// 2 Варіант розв'язання  за допомогою цикла

// const strArr = str.split('');
// const reversedArr = [];

// for (let i = strArr.length - 1; i >= 0; i -= 1) {
//   reversedArr.push(strArr[i]);
// }

// for (let i = 0; i < strArr.length; i += 1) {
//   reversedArr.push(strArr[strArr.length - 1 - i]);
// }
// const reversedStr = reversedArr.join('');
// console.log(reversedStr);

//3 варіант
// let reversedSrt = '';
// for (let i = 0; i < str.length; i += 1) {
//   reversedSrt += str[str.length - 1 - i];
// }
// for (let i = str.length - 1; i >= 0; i -= 1) {
//   reversedSrt += str[i];
// }
// console.log(reversedSrt);

/* Потрібно розвернути масив у зворотньому напрямку
 не використовуючи методів масива і не створюючи нові масиви
 */

// const array = [7, 7, 7, 3, 5, 5, 5];
// console.log(array.reverse());

// for (let i = 0; i < array.length / 2; i++) {
//   //   let lastEl = array[array.length - 1 - i];
//   //   console.log('lastEl', lastEl);
//   //   let firstEl = array[i];
//   // console.log('firstEl', firstEl);
//   let temp = array[i];
//   array[i] = array[array.length - 1 - i];
//   array[array.length - 1 - i] = temp;
// }

// console.log(array);

/*
? У нас є масив співробітників, відсортуйте його, щоб співробітники не повторювалися
*/

const employees = ['Dennis', 'Dennis', 'Shaw', 'Watkins', 'Watkins', 'Ray'];
const filteredEmployees = [];
// console.log(emploeyees.indexOf('Watkins'));
// // //'Dennis' index -> 0 === indexOf -> 0   true
// // //'Dennis' index -> 1 === indexOf -> 0   false
// // //'Shaw'   index -> 2 === indexOf -> 2   true
// // //'Watkins'index -> 3 === indexOf -> 3   true
// // //'Watkins'index -> 4 === indexOf -> 3   false
// // // 'Ray'   index -> 5 === indexOf -> 5   true

// for (let i = 0; i < employees.length; i += 1) {
//   const index = employees.indexOf(employees[i]);
//   if (i === index) {
//     filteredEmployees.push(employees[i]);
//   }
// }

// ? Співробітник Shaw звільнився, видаліть його з масиву

// const index = filteredEmployees.indexOf('Shaw');
// console.log(index);
// filteredEmployees.splice(index, 1);

// console.log(filteredEmployees.splice(index, 1));
// console.log(filteredEmployees);
// for (let i = 0; i < filteredEmployees.length; i++) {
//   if (filteredEmployees[i] === 'Shaw') {
//     console.log('splice');
//     filteredEmployees.splice(i, 1);
//     break;
//   }
//   console.log(filteredEmployees[i]);
// }

// console.log(filteredEmployees);

// ? Додати нового співробітника Thornton, перед Watkins;
// const indexOfEmpl = filteredEmployees.indexOf('Watkins');
// filteredEmployees.splice(indexOfEmpl, 1, 'Thornton');
// console.log(indexOfEmpl);
// console.log(filteredEmployees);

// const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];

// if (fruits.includes('🍑') && fruits.includes('🍋')) {
//   console.log(' all includes');
// }

// fruits.splice(1, 2, '🍋');
// console.log(fruits);

/*Потрібно перевітири чи є речення палінром*/

// const str = 'Я несу гусеня';
//янесугусеня
// const str = 'Де помити мопед';
// const str = 'І була пані на палубІ';
// const str = 'Поліна неси Ром!';

// const strInLowerCase = str.toLowerCase();
// const strWithOurSpase = strInLowerCase.replaceAll(' ', '');
// const strToArr = strWithOurSpase.split('');
// const reversedArr = strToArr.reverse();
// const reversedStr = reversedArr.join('');

// console.log(reversedStr);
// console.log(reversedStr === strWithOurSpase);

//===========

// const normalizeStr = str.toLowerCase().replaceAll(' ', '');

// const reversedStr = normalizeStr.split('').reverse().join('');

// console.log(normalizeStr === reversedStr);

// let message = 'JavaScript is in my blood';
// const mesaageArr = message.split(' ');
// let pricePerWord = 10;
// const total = mesaageArr.length * pricePerWord;
// console.log(total);
