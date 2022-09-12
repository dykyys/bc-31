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
? властивості isAdmin привласнить змінну isAdmin (false, якщо немає такої властивості)
 */

// const { firstName, age: userAge, isAdmin = false } = user;
// console.log(firstName);
// console.log(userAge);
// console.log(isAdmin);
/*
 * Глибока деструктуризація об'єктів
 */

const defaultImg =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png';

// const team = {
//   number: 4,
//   //   flag: './images/flag.jpg',
//   employees: ['Anton', 'Oleg', 'Ronnie', 'Carr'],
//   langs: {
//     location: { lat: 15, lon: 20 },
//     original: 'uk',
//     secondary: 'pl',
//   },
// };

// const {
//   number: teamNumber,
//   flag: teamFlag = defaultImg,
//   employees: [emp1, , , emp4],
//   langs: {
//     location: { lat, lon },
//     original,
//   },
// } = team;
// console.log(teamNumber);
// console.log(teamFlag);
// console.log(emp1);
// console.log(lat);
// console.log(lon);
/*
 * Деструктуризація масивів
 */

// const names = ['Herbert Todd', 'Belle Soto', 'Roger Marsh', 'Ethan Lindsey'];

// const [, , emp3] = names;
// console.log(emp3);

// const rgb = [250, 45, 24];

// const [red, green, blue] = rgb;

// const red = rgb[0];
// const green = rgb[1];
// const blue = rgb[2];

// console.log(red);
// console.log(green);
// console.log(blue);

/*
 * Приклад практичного використання деструктуризації масивів
 * Object.entries
 */
// const user = {
//   name: 'mango',
//   age: 21,
//   lastName: 'Todd',
// };

// const entries = Object.entries(user);
// for (const [key, value] of entries) {
//   console.log(key, value);
// }

/*
? У нас є об'єкт salaries із зарплатами:
? Створіть функцію topSalary(salaries), яка повертає ім'я працівника з найбільшою заробітною плантею.
? Якщо об'єкт salaries порожній, потрібно повернути null.
? Якщо кілька високооплачуваних працівників, можна повернути будь-кого з них.
? P.S. Використовуйте Object.entries та деструктурування, щоб перебрати пари ключ/значення.
*/

const salaries = {
  John: 100,
  Pete: 300,
  Mary: 2500,
};

// console.log(Object.entries(salaries));

// [
//   ['John', 100],
//   ['Pete', 300],
//   ['Mary', 2500]
// ]
// function topSalary(salaries = {}) {
//   const entries = Object.entries(salaries);
//   if (entries.length === 0) {
//     return null;
//   }
//   let topEmployer = entries[0][0];
//   let topSalary = entries[0][1];

//   for (const [name, salary] of entries) {
//     if (salary > topSalary) {
//       topSalary = salary;
//       topEmployer = name;
//     }
//   }
//   console.log(topEmployer);
// }
// // topSalary(salaries);
// console.log(topSalary());
