/*
 * for...in, Object.keys, Object.values
 */

//? Отримайте суму зарплат усіх працівників

// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

//TODO: Через for...in
// let total = 0;
// for (const key in salaries) {
//   total += salaries[key];
// }
// console.log(total);

//TODO: Через Object.keys();

// const keys = Object.keys(salaries);

// let total = 0;

// for (const key of keys) {
//   total += salaries[key];
// }
// console.log(total);
//TODO: Через Object.values();
// let total = 0;
// const values = Object.values(salaries);

// for (const salary of values) {
//   total += salary;
// }
// console.log(total);

//TODO: Через Object.entries();
// let total = 0;
// const entries = Object.entries(salaries);
// for (const [key, value] of entries) {
//   //   console.log(item[0]);
//   total += value;
// }
// console.log(total);

//TODO: Object.create(obj);

// const obj = {
//   a: 1,
//   b: 2,
// };

// const obj1 = Object.create(obj);

// obj1.a = 21;

// console.log(obj1.a);

// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };
// const developersSalaries = Object.create(salaries);

// developersSalaries.Obivan = 200;
// developersSalaries.Yoda = 500;
// developersSalaries.Chybaka = 550;
// developersSalaries.DartVaider = 250;

//TODO: Отримайте суму зарплат усіх працівників через forin;

// let total = 0;

// for (const key in developersSalaries) {
//   if (developersSalaries.hasOwnProperty(key)) {
//     total += developersSalaries[key];
//   }
// }
// console.log(total);

//TODO: Отримайте суму зарплат усіх працівників через Object.keys();

// const keys = Object.keys(developersSalaries);
// let total = 0;

// for (const key of keys) {
//   total += developersSalaries[key];
// }
// console.log(total);

//TODO: Отримайте суму зарплат усіх працівників через Object.values();
// const values = Object.values(developersSalaries);
// let total = 0;

// for (const value of values) {
//   total += value;
// }
// console.log(total);
