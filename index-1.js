'use strict';
/*
 * Ланцюжки прототипів.
 * Object.create().
 * obj.hasOwnProperty()
 */

// https://learn.javascript.ru/article/native-prototypes/native-prototypes-classes.svg

//* Власні властивості об'єкта та не власні властивості

// new Object

const user = {
  firstName: 'Isaac',
  age: 40,
};

const newUser = Object.create(user);

// console.log(Object.getPrototypeOf(user));

// console.log(user.isPrototypeOf(newUser));
// console.log(Object.prototype.isPrototypeOf(user));

// const user2 = Object.create(user);

newUser.lastName = 'Nyton';
newUser.sex = 'man';
// newUser.firstName = 'ser Isaac';
// console.log(newUser);

// console.log(newUser.hasOwnProperty('firstName'));
// console.log(newUser.firstName);

// isPrototypeOf;

// console.log(user.isPrototypeOf(newUser));

//* Перевірка приватних властивостей obj.hasOwnProperty()

//* Цикл for...in, перебирає всі властивості, і власні та не власні.

for (const key in newUser) {
  if (newUser.hasOwnProperty(key)) {
    console.log(key);
  }
}
