/*
 * Стрілки, явне - неявне повернення, arguments, повернення об'єкта
 */

// function sum(a, b) {
//   return a + b;
// }

// const sum = function (a, b) {
//   return a + b;
// };

//? Два і більше параметрів

//? Один параметр

//? Без параметрів

//? arguments

//? Повернення об'єкту

//{ name: '🍎', price: 30, quantity: 3 }

/*
? Виконайте рефакторинг коду за допомогою стрілочних функцій.
*/

// Було
// const logProduct = function (product) {
//   console.log(product);
// };

//Стало

// Було
// const logTotalPrice = function ({ price, quantity } = {}) {
//   console.log(`Total price: ${price * quantity}`);
// };

/*
? Виконайте рефакторинг коду за допомогою стрілочних функцій.
*/

// const TRANSACTION_LIMIT = 1000;

// const account = {
//   username: 'Jacob',
//   balance: 400,

//   withdraw(amount, onSuccess, onError) {
//     if (amount > TRANSACTION_LIMIT) {
//       onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`);
//     } else if (amount > this.balance) {
//       onError(`Amount can't exceed account balance of ${this.balance} credits`);
//     } else {
//       this.balance -= amount;
//       onSuccess(`Account balance: ${this.balance}`);
//     }
//   },

//   deposit(amount, onSuccess, onError) {
//     if (amount > TRANSACTION_LIMIT) {
//       onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`);
//     } else if (amount <= 0) {
//       onError(`Amount must be more than 0 credits`);
//     } else {
//       this.balance += amount;
//       onSuccess(`Account balance: ${this.balance}`);
//     }
//   },

//   deposit: (amount, onSuccess, onError) => {
//     if (amount > TRANSACTION_LIMIT) {
//       onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`);
//     } else if (amount <= 0) {
//       onError(`Amount must be more than 0 credits`);
//     } else {
//       this.balance += amount;
//       onSuccess(`Account balance: ${this.balance}`);
//     }
//   },
// };

// console.log(account);

//Було
// const handleSuccess = function (message) {
//   console.log(`✅ Success! ${message}`);
// };

//Стало

//Було
// const handleError = function (message) {
//   console.log(`❌ Error! ${message}`);
// };
//Стало

/*
? Виконайте рефакторинг коду за допомогою стрілочних функцій.
*/

// function each(array, callback) {
//   const newArr = [];
//   for (const el of array) {
// newArr.push(callback(el));
//   }

//   return newArr;
// }

// console.log(
//   each(numbers, (value) => {
//     // value * 2;
//     console.log('value', value);
//   })
// );
