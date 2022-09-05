'use strict';
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Strict_mode

/*
 * Математичні оператори (+, -, *, /, %, **)
 */

// const num = 3;
// const num2 = 2;
// const total = num + num2;

// console.log(num + num2);

/*
 ? Дано два числа 10 и 20.
 ? Проведіть над цими числами математичні операції (+ - / *).
*/

// const num = 10;
// const num2 = 20;

// const total = num * num2;

// console.log(total);

// const a = 2;
// const b = 3;

// const pow = 2 ** 3;

// console.log(pow);

//? Перевірте чи парні числа 15, 20, 45, 30.

// const isEven = 30 % 2 === 0;

// console.log(isEven);

/*
  ? Дано 90 хвилин, дізнайтесь скільки в даному числі міститься годин і хвилин.
  ? Результат виведіть у консоль.
*/

// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart

//70 === 01:10
//90 === 01:30

// const time = 90;

// const hours = Math.floor(time / 60);
// const updateHours = String(hours).padStart(2, '0');

// const minutes = time % 60;
// const updateMinutes = String(minutes).padStart(2, '0');

// const updateTime = updateHours + ':' + updateMinutes;

/*
 * Number.parseInt() Number.parseFloat()
 */

// let number = '102.12fsadf';

// console.log(parseInt(number));

/*
  ? Попросіть користувача ввести число.
  ? Виведіть результат у консоль.
  ? Приведіть рядок до числа.
*/

// const userInput = Number(prompt('Введіть довільне число'));
// console.log(userInput);

//? Даний рядок '24px', дістаньте з цього рядка ціле число.

// const number = '24px';

// console.log(Number.parseInt(number));

//? Даний рядок '25.5%', дістаньте з цього рядка дробове число.

// const number = '25.5%';

// console.log(Number.parseFloat(number));

//? Спробуйте привести до числа рядок 'abc'.

// const number = Number('abc');
// console.log(Number.isNaN(number));

/*
 * Math.floor, Math.ceil, Math.round, Math.max, Math.min, Math.pow(), Math.random().
 */
// console.log(Math.floor(3.1)); //3
// console.log(Math.ceil(3.001)); //4
// console.log(Math.round(3.5));
// console.log((12345.6459).toFixed(1));
// console.log(Math.max(20, 10, 50, 40)); // 50
// console.log(Math.min(20, 10, 40, 94, -4)); // -4
// console.log(Math.pow(2, 64));
// console.log(2 ** 64);
// console.log(Math.random() * 100);
// console.log(Math.round(Math.random() * (100 - 1) + 1));

/*
  ? Дане число 23.5, застосуйте до нього різноманітні методи заокруглення.
  ? Протестуйте на числах, 23.3, 23.9
*/

// console.log(Math.round(23.9));

/*
  ? Попросіть користувача ввести число та ступінь.
  ? Зведіть число до ступеня і виведіть результат у консоль.
*/
// const number = Number(prompt('Введіть число!'));
// const pow = Number(prompt('Введіть степінь!'));

// console.log(Math.pow(number, pow));
// console.log(number ** pow);

/*
  ? Згенеруйте рандомне число:
  ? от 0 до 1;
  ? от 10 до 50.
*/

// const min = 10;
// const max = 50;

// const randomNumber = Math.round(min + Math.random() * (max + 1 - min));

// console.log(randomNumber);

//? Згенеруйте рандомне число. Мінімальне та максимально значення, потрібно отримати від користувача

// const min = Number(prompt('Введіть значення мінімального числа'));
// const max = Number(prompt('Введіть значення максимального числа'));

// const randomNumber = Math.floor(min + Math.random() * (max + 1 - min));

// console.log(randomNumber);
