'use strict';
/*
 * Колбеки, функції вищого порядку
 */

// const numbers = [1, 2, 3];

// const logger = function () {
//   console.log('input');
// };

// function foo(array, callBack) {
//   console.log(array);
//   callBack();
// }

// foo(numbers, logger);

//? Запит на сервер

// const fetchUser = async function (user, callback) {
//   const response = await fetch(`https://api.github.com/users/${user}`);
//   const result = await response.json();
//   console.log(result);
//   callback(result);
// };

// const logerUserInfo = function (obj) {
//   console.log(obj);
// };

// fetchUser('dykyys', logerUserInfo);

//? Реєстрація подій на сторінці
// const logger = function (event) {
//   console.log(event);
// };

// const userEmail = document.querySelector('.user-email');

// userEmail.addEventListener('input', () => {
//   console.log(event);
// });

/*
? Напишіть функцію each(array, callback), яка першим параметром очікує масив, а другим - функцію, яка застосовується до кожного елемента масиву.
? Функція each повинна повернути новий масив, елементами якого будуть результати виклику колбека.
*/
// const numbers = [1, 3, 4, 5];

// function each(array, callback) {
//   const newArray = [];
//   for (const number of array) {
//     newArray.push(callback(number));
//   }

//   return newArray;
// }

// const multi = function (number) {
//   return number * 21;
// };

// const multiArray = each(numbers, multi);

// console.log(multiArray);
/*
? Напишіть такі функції:
? createProduct(product, callback) - приймає об'єкт товару без ID, а також колбек. Функція створює об'єкт товару, додаючи унікальний ідентифікатор у властивість id і викликає колбек передаючи йому створений об'єкт.
? logProduct(product) - коллбек, що приймає об'єкт продукту і логіює його в консоль
? logTotalPrice(product) - коллбек, що приймає об'єкт продукту і виводить в консоль загальну вартість товару.
*/

// const createProduct = function (product, callback, callback2) {
//   const newObj = {
//     id: Date.now(),
//     ...product,
//   };

//   callback(newObj);
//   callback2(newObj);
// };

// const logProduct = function (obj) {
//   console.log(obj);
// };

// const logTotalPrice = function ({ price, quantity }) {
//   console.log(price * quantity);
// };

// createProduct({ name: '🍎', price: 30, quantity: 3 }, logProduct, logTotalPrice);
// createProduct({ name: '🍋', price: 20, quantity: 5 }, logProduct, logTotalPrice);
// createProduct({ name: '🍎', price: 30, quantity: 3 }, logProduct, logTotalPrice);

// Передаємо інлайн функцію greet у якості колбека

// const createProduct = function (product, callback) {
//   const newObj = {
//     id: Date.now(),
//     ...product,
//   };

//   callback(newObj);
// };

// createProduct({ name: '🍎', price: 30, quantity: 3 }, function (obj) {
//   console.log(obj);
// });

/*
? Додайте об'єкту  account  методи для
? withdraw(amount, onSuccess, onError)
? і deposit(amount, onSuccess, onError),
? де перший параметр це сума операції,
? а другий і третій - колбеки.
?
? Метод withdraw викликає:
? onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`)
? якщо amount більше TRANSACTION_LIMIT
? onError(`Amount can't exceed account balance of ${this.balance} credits`)
? якщо amount більше this.balance
? onError(`Amount can't exceed account balance of ${this.balance} credits`)
? інакше знімаємо гроші з балансу і викликаємо
? onSuccess(`Account balance: ${this.balance}`)
?
? Метод deposit викликає:
? onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`)
? якщо amount більше TRANSACTION_LIMIT
? onError(`Amount must be more than 0 credits`) якщо
? amount менше або дорівнює нулю
? інакше додаємо до балансу amount і викликаємо
? onSuccess(`Account balance: ${this.balance}`)
*/

const TRANSACTION_LIMIT = 1000;

const account = {
  userName: 'Mango',
  balance: 1500,

  withdraw(amount, onSuccess, onError) {
    if (amount > TRANSACTION_LIMIT) {
      onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`);
      return;
    }
    if (amount > this.balance) {
      onError(`Amount can't exceed account balance of ${this.balance} credits`);
      return;
    }
    this.balance -= amount;
    onSuccess(`Account balance: ${this.balance}`);
  },
  deposit(amount, onSuccess, onError) {
    if (amount > TRANSACTION_LIMIT) {
      onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`);
      return;
    }
    if (amount <= 0) {
      onError(`Amount must be more than 0 credits`);
      return;
    }
    this.balance += amount;
    onSuccess(`Account balance: ${this.balance}`);
  },
};

const handleSuccess = function (message) {
  console.log(`✅ Success! ${message}`);
};

const handleError = function (message) {
  console.log(`❌ Error! ${message}`);
};

// account.withdraw(999, handleSuccess, handleError);
account.deposit(950, handleSuccess, handleError);
