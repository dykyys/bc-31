'use strict';
/*
 * Деструктуризація об'єктів
 */

// const user = {
//   firstName: 'John',
//   lastName: 'Reese',
//   age: 30,
// };

/*
? Напишіть деструктуруюче привласнення, яке:
? Властивості firstName привласнить змінну firstName.
? властивості age привласнить змінну userAge.
? властивості isAdmin присвоє змінну isAdmin (false, якщо немає такої властивості)
// */

/*
 * Глибока деструктуризація об'єктів
 */

// const defaultImg =
//   'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png';

// const team = {
//   number: 4,
//   flag: './images/flag.jpg',
//   employees: ['Anton', 'Oleg', 'Ronnie', 'Carr'],
//   langs: {
//     location: { lat: 15, lon: 20 },
//     original: 'uk',
//     secondary: 'pl',
//   },
// };

/*
 * Деструктуризація масивів
 */

// const names = ['Herbert Todd', 'Belle Soto', 'Roger Marsh', 'Ethan Lindsey'];

// const rgb = [250, 45, 24];

/*
 * Приклад практичного використання деструктуризації масивів
 * Object.entries
 */
// const user = {
//   name: 'mango',
//   age: 21,
//   lastName: 'Todd',
// };

/*
? У нас є об'єкт salaries із зарплатами:
? Створіть функцію topSalary(salaries), яка повертає ім'я працівника з найбільшою заробітною плантею.
? Якщо об'єкт salaries порожній, потрібно повернути null.
? Якщо кілька високооплачуваних працівників, можна повернути будь-кого з них.
? P.S. Використовуйте Object.entries та деструктурування, щоб перебрати пари ключ/значення.
*/

// const salaries = {
//   John: 100,
//   Pete: 300,
//   Mary: 2500,
// };

// console.log(Object.entries(salaries));

// [
//   ['John', 100],
//   ['Pete', 300],
//   ['Mary', 2500]
// ]
