'use strict';
/*
 * Цикли (while, do while, for)
 */

/*
 * While
 */

// while (condition) {
// код, тіло цикла (statement)
// }

// let iterator = 0;

// 0 < 5 = true
// 1 < 5 = true
// 2 < 5 = true
// 3 < 5 = true
// 4 < 5 = true
// 5 < 5 = false

// while (iterator < 5) {
//   console.log('iterator', iterator);
//   iterator = iterator + 1;
// }

/*
? Виведіть числа від 1 до 50
*/

// let num = 1;

// while (num <= 50) {
//   console.log(num);
//   // num = num + 1;
//   num += 1;
// }

/*
? Знайдіть суму чисел от 1 до 100
 */

// let number = 1;
// let result = 0;
// //1 + 2 + 3 + 4
// while (number < 100) {
//   result += number;
//   number += 1;
// }

// console.log(result);

/*
? Дано число n=1000.
?Ділить його на 2 стільки разів, поки результат розподілу не стане менше 50.
? Яке число вийде?
? Порахуйте кількість ітерацій, необхідних для цього, та запишіть його в змінну num.
*/
// 500 -> 1
// 250 -> 2
// 125 -> 3
// 62.5 -> 4

// let n = 1000;
// let counter = 0;

// while (n / 2 > 50) {
//   n /= 2;
//   counter += 1;
// }

// console.log(counter);
// console.log(n);

/*
 * Do While
 */
// do {
// statement
// } while (condition);

/*
? Напишіть цикл, який пропонує prompt ввести число більше 100.
? Якщо відвідувач ввів інше число – попросити ввести ще раз, і таке далі.
? Цикл повинен запитувати число, поки відвідувач не введе число, більше 100.
? Передбачається, що відвідувач вводить лише числа;
*/

// let number = null;

// do {
//   number = Number(prompt('Введіть число більше 100!'));
// } while (number <= 100);
// console.log(number);

// let number = Number(prompt('Введіть число більше 100!'));

// while (number <= 100 && number !== null) {
//   number = Number(prompt('Введіть число більше 100!'));
//   if (number === 55) {
//     break;
//   }
// }
// console.log(number);

// let number = Number(prompt('Введіть число більше 100!'));

// while (number >= 1 && number <= 100) {
//   number = Number(prompt('Введіть число більше 100!'));
// }
// console.log(number);

/*
 * For
 */
// for (ініціалізація; умова; пост-вираз) {
// тело цикла
// }

// for (let i = 0; i <= 10; i += 1) {
//   console.log(i);
// }

/*
?За допомогою циклу for виведіть парні числа від 2 до 10.
*/

// for (let i = 1; i < 10; i += 1) {
//   if (i % 2 !== 0) {
//     continue;
//   }

//   console.log(i);
// }

/*
? Напишіть програму, яка виводить через console.log усі числа від 1 до 100, з двома винятками.
? Для чисел, що націло діляться на 3, вона повинна виводити 'Fizz',
? а для чисел, що діляться на 5 – 'Buzz'.
? Для чисел які кратні 3 та 5 = 'FizzBuzz'
*/

// for (let i = 1; i <= 100; i += 1) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log('FizzBuzz');
//   } else if (i % 3 === 0) {
//     console.log('Fizz');
//   } else if (i % 5 === 0) {
//     console.log('Buzz');
//   } else {
//     console.log(i);
//   }
// }

/*
 ? Виведіть методом console.log() зірочки від 1 до 7 штук у вигляді трикутника таким чином:
 ? *
 ? **
 ? ***
 ? ****
 ? *****
 ? ******
 ? *******
 */

let star = '*';
for (let i = 0; i < 7; i += 1) {
  console.log(star);
  star += '*';
}
