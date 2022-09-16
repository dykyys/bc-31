'use strict';
/*
 * Класи: оголошення, конструктор, методи
 * Приватні властивості та методи
 * Статичні властивості та методи
 * Геттери та сеттери
 */
// https://www.youtube.com/watch?v=b55hiUlhAzI&t=3s

/*
 * Публічні властивості класу доступні на екземплярах
 * Публічні методи класу доступні на екземплярах
 * Приватні властивості доступні всередині класу, отримати доступ до них можна за допомогою методів класу
 * Приватні методи доступні лише в медодах класа
 * Статичні властивості доступлі лише на самому класі
 * Статичні методи доступні лише на самому класі
 * Статичні приватні властивості доступні на самому класі, всередині класу
 * Статичні приватні методи доступні на самому класі, всередині методів класу
 */

class User {
  static ROLE = {
    DEVELOPER: 'developer',
    MANAGER: 'manager',
  };
  static #checkRole(newRole) {
    const rolesArray = Object.values(User.ROLE);
    return rolesArray.includes(newRole);
  }
  static #emailList = [];

  static #checkEmailInList(newEmail) {
    return User.#emailList.includes(newEmail);
  }

  static addEmailToList(newEmail) {
    const inEmailList = User.#checkEmailInList(newEmail);
    if (inEmailList) {
      console.log('Aleady in contacts');
      return;
    }
    User.#emailList.push(newEmail);
  }

  #email;
  #age;
  #role;
  constructor({ name = '', age = '', email = '', role = '' } = {}) {
    this.name = name;
    this.#age = age;
    this.#email = email;
    this.#role = role;
    User.addEmailToList(email);
  }
  getName() {
    return this.name;
  }

  getEmail() {
    return this.#email;
  }

  get age() {
    return this.#age;
  }

  set age(newAge) {
    this.#age = newAge;
  }

  getRole() {
    return this.#role;
  }

  updateRole(newRole) {
    const isValid = User.#checkRole(newRole);
    if (!isValid) {
      console.log('New role is not valid');
      return;
    }
    this.#role = newRole;
  }

  changeEmail(newEmail) {
    const isValid = this.#checkEmail(newEmail);
    if (!isValid) {
      console.log('Not valid email!');
      return;
    }

    this.#email = newEmail;
    console.log('Ok email changed!');
  }

  #checkEmail(newEmail) {
    return newEmail.includes('@gmail');
  }
}

const userMango = new User({
  name: 'Mango',
  email: 'mango@gmail.com',
  age: 21,
  role: User.ROLE.DEVELOPER,
});

// userMango.changeEmail('coolMango@gmail.com');
// userMango.age = 34;
// userMango.updateRole(User.ROLE.MANAGER);
// User.addEmailToList('borys@gmail.com');

// User.addEmailToList('polyy@gmail.com');
// User.addEmailToList('borys@gmail.com');

class Developer extends User {
  constructor({ name, age, email, role, proces }) {
    super({ name, age, email, role });
    this.proces = proces;
  }

  getProces() {
    return this.proces;
  }
}

const kiwiDeveloper = new Developer({
  name: 'Kiwi',
  email: 'kiwi@gmail.com',
  age: 21,
  role: User.ROLE.DEVELOPER,
  proces: 'write code',
});

kiwiDeveloper.age = 18;

// console.log(kiwiDeveloper.age);

// console.log(kiwiDeveloper.getProces());

// console.log(Developer.prototype.__proto__ === User.prototype);
// console.log(User.prototype.__proto__ === Object.prototype);
// console.log(Object.prototype.__proto__);

// console.log(Developer.prototype.__proto__.__proto__.__proto__);

// console.log(Function.prototype.__proto__ === Object.prototype);

// // console.log(Developer.prototype === User.prototype);

// function f1() {}
// function f2() {}

// // f1.prototype.getName = function () {};
// // f2.getName();

// console.log(f1.prototype === f2.prototype);
