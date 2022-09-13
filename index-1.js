'use strict';
/*
 * Колбеки, функції вищого порядку
 */

// const foo = function (message, callback) { };

//? Запит на сервер

// const fetchUser = async function (user, callback) {
//   const response = await fetch(`https://api.github.com/users/${user}`);
//   const result = await response.json();
//   callback(result);
// };

// const logerUserInfo = function (obj) {
//   console.log(obj);
// };

// fetchUser('dykyys', logerUserInfo);

//? Реєстрація подій на сторінці
// const userEmail = document.querySelector('.user-email');

/*
? Напишіть функцію each(array, callback), яка першим параметром очікує масив, а другим - функцію, яка застосовується до кожного елемента масиву.
? Функція each повинна повернути новий масив, елементами якого будуть результати виклику колбека.
*/

/*
? Напишіть такі функції:
? createProduct(product, callback) - приймає об'єкт товару без ID, а також колбек. Функція створює об'єкт товару, додаючи унікальний ідентифікатор у властивість id і викликає колбек передаючи йому створений об'єкт.
? logProduct(product) - коллбек, що приймає об'єкт продукту і логіює його в консоль
? logTotalPrice(product) - коллбек, що приймає об'єкт продукту і виводить в консоль загальну вартість товару.
*/

// createProduct(
//   { name: '🍎', price: 30, quantity: 3 },
//   logProduct,
//   logTotalPrice
// );
// createProduct(
//   { name: '🍋', price: 20, quantity: 5 },
//   logProduct,
//   logTotalPrice
// );
// createProduct(
//   { name: '🍎', price: 30, quantity: 3 },
//   logProduct,
//   logTotalPrice
// );

// Передаємо інлайн функцію greet у якості колбека

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

// const TRANSACTION_LIMIT = 1000;

// const account = {
//   userName: 'Mango',
//   balance: 0,

//   withdraw() {},
//   deposit() {},
// };

// const handleSuccess = function (message) {
//   console.log(`✅ Success! ${message}`);
// };

// const handleError = function (message) {
//   console.log(`❌ Error! ${message}`);
// };

// // account.withdraw(700, handleSuccess, handleError);
// account.deposit(900, handleSuccess, handleError);
