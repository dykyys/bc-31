'use strict';
/*
 * Методи функції call и apply
 */

// https://learn.javascript.ru/call-apply-decorators#perehodim-k-neskolkim-argumentam-s-func-apply

//*Функції це об'єкти зі своїми властивостями та методами

// const greet = {
//   name: 'Mango',
// };
// greet.test = 5;

// const greet = function () {
//   console.log('Hello');
// };
// greet();
// greet.test = 5;

// console.dir(greet);
// console.log(greet.test);
// console.log(Object.keys(greet));

//* call і apply

//? Викличте функцію showFullName у контексті об'єкта user

//call

// const showFullName = function (message, num) {
//   console.log(this);
//   console.log(
//     `${message} ${this.firstName} ${this.lastName} years old ${this.age}, your room number ${num}`
//   );
// };

// const user = {
//   firstName: 'Ernest',
//   lastName: 'Vasquez',
//   age: 30,
// };

// // user.showName = showFullName;

// // user.showName('Hello', 21);

// showFullName.call(user, 'Hello', 21);

// // showFullName();
// //? Викличте функцію showFullName у контексті об'єкта anotherUser
// const anotherUser = {
//   firstName: 'Ray',
//   lastName: 'Fleming',
//   age: 40,
// };
// showFullName.call(anotherUser, 'Hello', 34);

//apply

// const showFullName = function (message, num) {
//   console.log(this);
//   console.log(
//     `${message} ${this.firstName} ${this.lastName} years old ${this.age}, your room number ${num}`
//   );
// };

// const user = {
//   firstName: 'Ernest',
//   lastName: 'Vasquez',
//   age: 30,
// };

// user.showName = showFullName;

// user.showName('Hello', 21);

// showFullName.apply(user, ['Hello', 21]);

// showFullName();
//? Викличте функцію showFullName у контексті об'єкта anotherUser
// const anotherUser = {
//   firstName: 'Ray',
//   lastName: 'Fleming',
//   age: 40,
// };
// showFullName.apply(anotherUser, ['Hello', 34]);

//* bind

// const showFullName = function () {
//   console.log(`${this.firstName} ${this.lastName}`);
// };

// const user = {
//   firstName: 'Ernest',
//   lastName: 'Vasquez',
//   age: 30,
// };

// const mango = {
//   firstName: 'Mango',
//   lastName: 'F',
//   age: 34,
// };

// const showUserName = showFullName.bind(user);
// const showMangoName = showFullName.bind(mango);

// showMangoName();
// showUserName();

/*
 * Якщо прив'язати контекст через bind
 * при передачі функції як callback контекст зберігається
 */
// Передача функції як callback З прив'язаним контекстом
// const showFullName = function () {
//   console.log(`${this.firstName} ${this.lastName}`);
// };
// const user = {
//   firstName: 'Ernest',
//   lastName: 'Vasquez',
//   age: 30,
// };
// const showUserName = showFullName.bind(user);

// // showUserName();

// function someFoo(callback) {
//   callback();
// }
// someFoo(showUserName);

//* Метод об'єкта у ролі колбека

// const user = {
//   name: 'Luis',
//   age: 30,

//   showThis() {
//     console.log(`this ---->`, this);
//   },

//   showName() {
//     console.log(`this name is: ${this.name}`);
//   },
// };

// user.showThis();
// user.showName();

// const someFunction = function (callback) {
//   callback();
// };
// someFunction(user.showThis.bind(user));
// someFunction(user.showName.bind(user));

/*
? Що виведе цей код?
*/

// const f = function (message) {
//   console.log(`${message}, ${this.name}!`);
// };

// const user = {
//   name: 'Вася',
// };

// const anotherUser = {
//   name: 'Петя',
// };

// const foo = f.bind(user, 'Hello');
// foo();

// const copyFunc = f.bind(anotherUser).bind(user);

// copyFunc('Hi');

/*
? Визов checkPassword() у наведеному нижче коді повинен перевірити пароль і потім викликати user.loginOk/loginFail в залежністі від відповіді.
? Однак його виклик призводить до помилки. Чому?
 */

// const checkPassword = function (userPassword, ok, fail) {
//   const PASSWORD = 'rockstar';

//   if (PASSWORD === userPassword) {
//     console.log('Password Ok!');
//     ok();
//   } else {
//     console.error('Password not Ok!');
//     fail();
//   }
// };

// const user = {
//   name: 'Вася',

//   loginOk() {
//     console.log('this', this);
//     console.log(`${this.name} logged in!`);
//   },

//   loginFail() {
//     console.log(`${this.name} failed to log in!`);
//   },
// };

// const onSucsses = user.loginOk.bind(user);
// const onError = user.loginFail.bind(user);

// checkPassword('rockstar', onSucsses, onError);

// const user = {
//   name: 'Вася',
// };

// const arrowFoo = () => {
//   console.log(this);
// };

// const copyFoo = arrowFoo.bind(user);

// copyFoo();
