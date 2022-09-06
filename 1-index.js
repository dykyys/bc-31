'use strict';
/*
 * Розгалуження if
 */

// if (умова) {
// тіло if
// }

// const num = 17;

// if (num >= 18) {
//   console.log('Повнолітній!');
// } else {
//   console.log('Не повнолітній!');
// }

/*
? Дано рядок, що складається із символів, наприклад, 'abcde'.
? Перевірте, що першим символом цього рядка є буква 'a'.
? Якщо це так - виведіть 'так', інакше виведіть 'ні'.
*/

// const str = 'abcde';

// if (str.startsWith('a')) {
//   console.log('Yes!');
// } else {
//   console.log('No!');
// }

/*
? Запросити у користувача число, якщо число дорівнює 10,
? то виведіть 'Вірно', інакше виведіть 'Неправильно'.
*/

// const userNumber = Number(prompt('Введіть число!'));

// if (userNumber === 10) {
//   console.log('Так');
// } else {
//   console.log('Ні');
// }

/*
? У змінній min лежить число від 0 до 59.
? Визначте, в яку чверть години потрапляє це число (у першу, другу, третю чи четверту).
? [0 до 15) – перша чверть години
? [15 до 30) – друга чверть години
? [30 до 45) – третя чверть години
? [45 до 60) – четверта чверть години
*/

// const min = 2;

// if (min >= 0 && min < 15) {
//   console.log('Перша четверть!');
// } else if (min >= 15 && min < 30) {
//   console.log('Друга четверть!');
// } else if (min >= 30 && min < 45) {
//   console.log('Третя четверть!');
// } else if (min >= 45 && min < 60) {
//   console.log('Черверта четверть!');
// } else {
//   console.log('Вийшли за діапазон години!');
// }

// //=================

// if (min < 15) {
//   console.log('Перша четверть!');
// } else if (min < 30) {
//   console.log('Друга четверть!');
// } else if (min < 45) {
//   console.log('Третя четверть!');
// } else if (min < 60) {
//   console.log('Черверта четверть!');
// } else {
//   console.log('Вийшли за діапазон години!');
// }

/*
? Напишіть код, який запитуватиме:
? 'Яка «офіційна» назва JavaScript?'
? Якщо користувач вводить ECMAScript,
? то показати: «Вірно!», інакше – відобразити: Не знаєте? ECMAScript!
*/

// const userInput = prompt('Яка «офіційна» назва JavaScript?');
// const normalizeUserInput = userInput.trim().toLowerCase();

// const offisialName = 'ECMAScript'.toLowerCase();

// if (normalizeUserInput === offisialName) {
//   console.log('Вірно!');
// } else {
//   console.log('Не знаєте? ECMAScript');
// }

/*
? Напишіть код, який отримує число через prompt, а потім виводить у console.log:
? 1, якщо значення більше нуля,
? -1, якщо значення менше нуля,
? 0, якщо значення дорівнює нулю.
? Передбачається, що користувач вводить лише цифри.
*/

// const userInput = Number(prompt('Введіть число!'));

// if (userInput > 0) {
//   console.log(1);
// } else if (userInput < 0) {
//   console.log(-1);
// } else {
//   console.log(0);
// }

/*
 * Switch case
 */

// switch (значення) {
//   case значення:
//     інструкції;
//     break;

//   case значення:
//     інструкції;
//     break;

//   default:
//     інструкції;
// }

// const number = 1;
// let numberInSwitch = 0;

// switch (number) {
//   // number === 1
//   case 1:
//     numberInSwitch = 1;
//     console.log(1);
//     break;

//   case 2:
//     numberInSwitch = 2;
//     console.log(2);
//     break;

//   case 3:
//     numberInSwitch = 3;
//     console.log(3);
//     break;

//   default:
//     console.log('default');
//     break;
// }
// console.log('numberInSwitch', numberInSwitch);

/*
? Перепишіть код за допомогою однієї конструкції switch:
*/

// const userInput = Number(prompt('Введіть число!'));

// switch (userInput) {
//   case userInput > 0 && userInput:
//     console.log(1);
//     break;
//   case userInput < 0 && userInput:
//     console.log(-1);
//     break;
//   case 0:
//     console.log(0);
//     break;

//   default:
//     console.error('error');
//     break;
// }

//================

// const min = 21;

// switch (min) {
//   case min < 15 && min:
//     console.log('Перша четверть!');
//     break;
//   case min < 30 && min:
//     console.log('Друга четверть!');
//     break;
//   case min < 45 && min:
//     console.log('Третя четверть!');
//     break;
//   case min < 60 && min:
//     console.log('Черверта четверть!');
//     break;

//   default:
//     console.log('Вийшли за діапазон години!');
//     break;
// }

//================

// const min = 21;

// switch (true) {
//   // true === false -> false
//   case min < 15:
//     console.log('Перша четверть!');
//     break;
//   // true === true ->true
//   case min < 30:
//     console.log('Друга четверть!');
//     break;
//   case min < 45:
//     console.log('Третя четверть!');
//     break;
//   case min < 60:
//     console.log('Черверта четверть!');
//     break;

//   default:
//     console.log('Вийшли за діапазон години!');
// }

/*
 * Тернарний оператор
 */

//<умова>? <вираз_якщо_умова_істинна> : <вираз_якщо_умова_хибна>

/*
? Перепишіть конструкцію if з використанням умовного оператора '?':
*/
// const a = 2;
// const b = 3;
// let message = '';

// if (a + b < 4) {
//   message = 'Мало';
// } else {
//   message = 'Багато';
// }

// message = a + b < 4 ? 'Maло' : 'Багато';

// a + b < 4 ? (message = 'Maло') : (message = 'Багато'); 💩

// console.log(message);

/*
?  Перепишіть if..else за допомогою декількох операторів '?'.
*/

const login = prompt('Введіть логін!');

// let message = 'Ми вас не знаєм!!!';

// if (login === 'Співробітник') {
//   message = 'Привіт';
// } else if (login === 'Директор') {
//   message = 'Здравствуйте';
// } else if (login === null) {
//   message = 'Немає логіна';
// }

// let message =
//   login === 'Співробітник'
//     ? 'Привіт'
//     : login === 'Директор'
//     ? 'Здравствуйте'
//     : login === null
//     ? 'Немає логіна'
//     : 'Ми вас не знаєм!!!';

// let message = '';
// switch (login) {
//   case 'Співробітник':
//     message = 'Привіт';
//     break;
//   case 'Директор':
//     message = 'Здравствуйте';
//     break;
//   case null:
//     message = 'Немає логіна';
//     break;

//   default:
//     message = 'Ми вас не знаєм!!!';
// }

// console.log(message);
