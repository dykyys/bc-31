'use strict';
/*
 * Розгалуження if
 */

// if (умова) {
// тіло if
// }

// const num = 18;

/*
? Дано рядок, що складається із символів, наприклад, 'abcde'.
? Перевірте, що першим символом цього рядка є буква 'a'.
? Якщо це так - виведіть 'так', інакше виведіть 'ні'.
*/

// const str = 'abcde';

/*
? Запросити у користувача число, якщо число дорівнює 10,
? то виведіть 'Вірно', інакше виведіть 'Неправильно'.
*/

/*
? У змінній min лежить число від 0 до 59.
? Визначте, в яку чверть години потрапляє це число (у першу, другу, третю чи четверту).
? [0 до 15) – перша чверть години
? [15 до 30) – друга чверть години
? [30 до 45) – третя чверть години
? [45 до 60) – четверта чверть години
*/

// const min = 21;

/*
? Напишіть код, який запитуватиме:
? 'Яка «офіційна» назва JavaScript?'
? Якщо користувач вводить ECMAScript,
? то показати: «Вірно!», інакше – відобразити: «Не знаєте? ECMAScript!
*/

// const userInput = prompt('Яка «офіційна» назва JavaScript?');

/*
? Напишіть код, який отримує число через prompt, а потім виводить у console.log:
? 1, якщо значення більше нуля,
? -1, якщо значення менше нуля,
? 0, якщо значення дорівнює нулю.
? Передбачається, що користувач вводить лише цифри.
*/

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

/*
? Перепишіть код за допомогою однієї конструкції switch:
*/

/*
 * Тернарний оператор
 */

//<умова>? <вираз_якщо_умова_істинна> : <вираз_якщо_умова_хибна>

/*
? Перепишіть конструкцію if з використанням умовного оператора '?':
*/
// const a = 2;
// const b = 3;
// let message = "";

// if (a + b < 4) {
//   message = "Мало";
// } else {
//   message = "Багато";
// }

// console.log(message);

/*
?  Перепишіть if..else за допомогою декількох операторів '?'.
*/

// const login = prompt('Введіть логін!');

// let message = 'Ми вас не знаєм!!!';

// if (login === 'Співробітник') {
//   message = 'Привіт';
// } else if (login === 'Директор') {
//   message = 'Здравствуйте';
// } else if (login === null) {
//   message = 'Немає логіна';
// }

// console.log(message);
