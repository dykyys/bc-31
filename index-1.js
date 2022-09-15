'use strict';
/*
 *  Контекст виклику this
 */

/*
 * this існує тільки всередині функцій.
 * На контекст не впливає те, де функція була //! ОГОЛОШЕНА.
 * На контекст впливає те де функція //! ВИКЛИКАЄТЬСЯ.
 * Якщо функція визивається в контексті об'єкта, this посилається на цей об'єкт
 * Якщо функція визивається без контекста this --> undefined (в суворому режимі)
 * Якщо функція визивається без контекста this --> window (в НЕ суворому режимі)
 * При передачі функції як callback контекст не зберігається
 * this  в сктрілочних функціях посилається на батьківський this:
 *  - якщо стрілочна функція визивається без контексту або в контексті об'єкта, this --> window
 *  - якщо стрілочна функція оголошена в серередині функції (не стрілочної) this стрілочної функції буде посилатися на батьківський this
 */

//TODO: Розглянемо як this поводиться в методах об'єкта

// const user = {
//   name: 'Mango',
//   showName() {
//     console.log(this.name);
//   },
// };

// user.showName();

//TODO: Розглянемо як this поводиться у звичайних функціях (суворий, не суворий режим)

//? Function declaration

// function foo() {
//   console.log(this);
// }

// foo();

//? Function expression

// const foo = function () {
//   console.log(this);
// };

// foo();

//? Arrow function

// const user = {
//   name: 'Mango',
//   showName: () => {
//     console.log(this);
//   },
// };

// user.showName();

// const foo = () => {
//   console.log(this);
// };

// foo();

// const parentFoo = function () {
//   console.log(this);
//   const arrow = () => {
//     console.log('this in arrow', this);
//   };

//   arrow();
// };

// parentFoo();

//TODO: Присвоєння функції як методу об'єкту

// const user = {
//   name: 'Mango',
// };

// function foo() {
//   console.log(this);
//   //   const arrow = () => {
//   //     console.log('this name in arrow', this.name);
//   //   };
//   //   arrow();

//   const functionInFoo = function () {
//     console.log(this);
//   };

//   functionInFoo();
// }

// user.showThis = foo;

// user.showThis();

// const anotherFoo = user.showThis;

// anotherFoo();

//TODO: Виклик методу об'єкта без контекстa

// const user = {
//   name: 'Kiwi',
//   showName() {
//     console.log(this.name);
//   },
// };

// const show = user.showName;

// const user2 = {
//   name: 'Mango',
// };

// user2.showName = show;
// user2.showName();

// console.log(show === user.showName);
// console.log(show === user2.showName);
// console.log(user.showName === user2.showName);

// user.showName();

// show();

//TODO: This в callback функціях

// const user = {
//   name: 'Kiwi',
//   showName() {
//     console.log(this.name);
//   },

//   someFunction(callback) {
//     callback();
//     console.log(this);
//   },
// };

// user.someFunction(user.showName);
// user.showName();

// function someFunction(callback) {
//   callback();
// }

// someFunction(user.showName);

//TODO: this у стрілочних функціях. Стрілочні функції не мають свого this, this у стрілочних функціях завжди посилається на батьківський this.

// const user = {
//   name: 'Kiwi',
//   showName() {
//     console.log(this);
//     const arrow = () => {
//       console.log('this in arrow', this);
//     };
//     arrow();
//   },

//   someFunction(callback) {
//     callback();
//     console.log(this);
//   },
// };

// user.someFunction(user.showName);
// user.showName();

// someFunction(user.showName);

/*
? Яким буде результат виконання цього коду?
*/

// let user = {
//   name: 'Джон',

//   go() {
//     console.log(this);
//     const arrow = () => console.log('this in arrow function', this);
//     arrow();
//   },
// };
// // user.go();

// const goFn = user.go;

// goFn();

/*
? Тут функція makeUser повертає об'єкт.
? Яким буде результат при зверненні до об'єкта ref? Чому?
*/

// const user = {
//   name: 'Luis',
//   age: 30,
//   makeUser() {
//     return {
//       name: 'Mango',

//       ref: this,
//       age: this.age,
//     };
//   },
// };

// user.makeUser();
// const newUser = user.makeUser();

// {name: 'Mango',
// ref: { name: 'Luis', age: 30, makeUser: ƒ },
// age: 30}

// console.log(newUser.ref === user);

// const seconNewUser = newUser.ref.makeUser();

// console.log(seconNewUser.ref === user);
// console.log(seconNewUser.ref === newUser.ref);
// console.log(seconNewUser.ref);

/*
? Яким буде результат console.log
*/

// function makeUser() {
//   return {
//     name: 'Джон',
//     ref() {
//       return this;
//     },
//   };
// }

// let user = makeUser();
// console.log(user);
// console.log(user.name);
// console.log(user.ref());
// console.log(user.ref().name);

/*
? Це ladder (сходи) – об'єкт, який дозволяє підніматися вгору та спускатися:
*/

const ladder = {
  step: 0,

  up() {
    this.step += 1;
    return this;
  },

  down() {
    this.step -= 1;
    return this;
  },

  showStep() {
    console.log(this.step);
    return this;
  },
};

// Тепер, якщо нам потрібно зробити кілька послідовних викликів, ми можемо зробити це так:

// ladder.up();
// ladder.up();
// ladder.up();
// ladder.up();
// ladder.up();
// ladder.up();
// ladder.up();
// ladder.down();
// ladder.down();
// ladder.down();
// ladder.down();
// ladder.showStep();

//Змініть код методів up, down і showStep таким чином, щоб їх виклик можна було зробити ланцюжком, наприклад так:
ladder.up().up().up().down().down().showStep().up().up().showStep();
// console.log(ladder.up().up().up().up().up().showStep().down());
