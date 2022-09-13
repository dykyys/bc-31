/*
 * Стрілки, явне - неявне повернення, arguments, повернення об'єкта
 */

// function sum(a, b) {
//   return a + b;
// }

// const sum = (a, b) => a + b;
// console.log(sum(2, 5));

//? Два і більше параметрів

//? Один параметр

// const sum = a => a + 21;

// console.log(sum(2));
//? Без параметрів
// const sum = () => 20 + 21;
// console.log(sum());
//? arguments

// const sum = (...args) => args;
// console.log(sum(2, 5, 5, 15, 21));

//? Повернення об'єкту

// const crateObj = obj => ({
//   id: Date.now(),
//   ...obj,
// });
// console.log(crateObj({ name: '🍎', price: 30, quantity: 3 }));
//

/*
? Виконайте рефакторинг коду за допомогою стрілочних функцій.
*/

// Було
// const logProduct = function (product) {
//   console.log(product);
// };
// logProduct({ name: '🍎', price: 30, quantity: 3 });

//Стало

// const logProduct = product => console.log(product);

// logProduct({ name: '🍎', price: 30, quantity: 3 });

// Було
// const logTotalPrice = function ({ price, quantity } = {}) {
//   console.log(`Total price: ${price * quantity}`);
// };
// logTotalPrice({ name: '🍎', price: 30, quantity: 3 });

//Стало

// const logTotalPrice = ({ price, quantity } = {}) => `Total price: ${price * quantity}`;
// const message = logTotalPrice({ name: '🍎', price: 30, quantity: 3 });
// console.log(message);
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

//   deposit: () => {
//     console.log(this);//window
//   },
// };

// console.log(account);

//Було
// const handleSuccess = function (message) {
//   console.log(`✅ Success! ${message}`);
// };

//Стало

// const handleSuccess = message => console.log(`✅ Success! ${message}`);

//Було
// const handleError = function (message) {
//   console.log(`❌ Error! ${message}`);
// };
//Стало

// const handleError = message => console.log(`❌ Error! ${message}`);

// account.deposit(950, handleSuccess, handleError);

/*
? Виконайте рефакторинг коду за допомогою стрілочних функцій.
*/

const numbers = [1, 2, 3, 4, 5, 6];

function each(array, callback) {
  const newArr = [];
  for (const el of array) {
    newArr.push(callback(el));
  }

  return newArr;
}

const multiArr = each(numbers, number => number * 21);
console.log(multiArr);
