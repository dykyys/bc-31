/*
 * Клас - шаблон за яким будуть створені однотипні об'єкти
 * Примірник/екземпляр - це об'єкт створений за класом
 * Інтерфейс - набір доступних методів та властивостей
 */

// prototype є лише у класів і у функцій конструкторів
//__proto__ є у всіх об'єктів

//? Функція конструктор

//TODO:  Створюємо людину за образом

function CreateUser({ name = 'Isaac', age = 21, email = '@gmail' } = {}) {
  this.name = name;
  this.age = age;
  this.email = email;
}

CreateUser.prototype.getName = function () {
  return this.name;
};
CreateUser.prototype.alco = true;

const userDef = new CreateUser();
const userMango = new CreateUser({
  name: 'mango',
  email: 'mango@gmail.com',
  age: 21,
});
const userPolly = new CreateUser({
  name: 'Polly',
  email: 'polly@gmail.com',
  age: 34,
});

// console.log(userPolly.getName());
// console.log(userMango);
// console.log(userDef);

// console.log(userMango.__proto__ === CreateUser.prototype);

// console.log(CreateUser.prototype.isPrototypeOf(userMango));
// console.log(CreateUser.prototype.isPrototypeOf(userDef));
// console.log(CreateUser.prototype.isPrototypeOf(userPolly));

// console.log(CreateUser.prototype.__proto__);

// console.log(Object.getPrototypeOf(CreateUser.prototype));
// console.log(CreateUser.prototype.__proto__ === Object.prototype);

// console.log(Object.prototype.__proto__);

//new Number
// new String
// new Boolean
console.log(Boolean.prototype.__proto__ === Object.prototype);

const user = { name: 'mango' };
const arr = [0];
console.log(Object.prototype.__proto__);
console.log(user.__proto__ === Object.prototype);
console.log(arr.__proto__ === Array.prototype);
console.log(Array.prototype.__proto__ === Object.prototype);
