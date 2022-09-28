/*
 * Проміси
 */

// setTimeout(() => {
//   console.log('setTimeout');
// }, 0);

// console.log('console.log: 1');

// Promise.resolve()
//   .then(() => {
//     console.log('promise: 1');
//   })
//   .then(() => {
//     console.log('promise: 2');
//   });

// console.log('console.log: 2');

/*
1 - console.log('console.log: 1');
2 - console.log('console.log: 2');
3 - console.log('promise: 1');
4 - console.log('promise: 2');
5 - console.log('setTimeout');
*/

//? конструктор new Promise(callback(resolve, reject));

// const isSuccess = true;
// let arr = null;

// const resaltPromise = new Promise((resolve, reject) => {
//   resolve(21);
// });

// resaltPromise
//   .then(data => {
//     // throw new Error('first then');
//     console.log('data 1', data);
//     console.log();
//     return 34;
//   })
//   .then(data => {
//     console.log('data 2', data);
//     return 5;
//   })
//   .then(data => {
//     console.log('data 3', data);
//   })
//   .catch(error => {
//     console.log(error.message);
//   });

// // Will run first
// console.log('Before promise.then()');

// const promise = new Promise((resolve, reject) => {
//   reject(21);
// });

// // Registering promise callbacks
// promise
//   .then(
//     // onResolve will run third or not at all
//     value => {
//       console.log('onResolve call inside promise.then()');
//       console.log(value); // "Success! Value passed to resolve function"
//     },
//     // onReject will run third or not at all
//     error => {
//       console.log('onReject call inside promise.then()');
//       console.error(error); // "Error! Error passed to reject function"
//     }
//   )
//   .then(
//     data => {
//       console.log('data', data);
//       console.log('second then success');
//     },
//     () => {
//       console.log('second then error');
//     }
//   )
//   .catch(error => {
//     console.error(error);
//   })
//   .finally(() => {
//     console.log('The end');
//   });

// // Will run second
// console.log('After promise.then()');
// const onSuccess = data => {
//   console.log(data);
// };

// const promise = new Promise((resolve, reject) => {
//   const isDone = Math.random() > 0.3;
//   setTimeout(() => {
//     if (isDone) {
//       resolve('Done');
//     } else {
//       reject('Error!');
//     }
//   }, 1500);
// });

// promise
//   .then(data => {
//     console.log(data);
//     data += '!';
//     return data;
//   })
//   .then(data => {
//     console.log(data);
//     data += '!';
//     return data;
//   })
//   .then(onSuccess)
//   .catch(error => {
//     console.log(error);
//   });

//? then(onSuccess, onError)

//? finally()

//? TASK 01
// Чи можна "перевиконати" проміс?

// const promise = new Promise((resolve, reject) => {
//   reject(5);
//   // resolve(1);
//   setTimeout(() => {
//     console.log('34');
//     resolve(2);
//   }, 1000);
// });

// promise
//   .then(result => {
//     console.log(result);
//   })
//   .catch(err => {
//     console.log(err);
//   });

//? TASK 02
// Що буде у консолі

// const promise = new Promise((resolve, reject) => {
//   resolve('1');
// });

// promise
//   .then(data => {
//     console.log(data); // 1
//     return data;
//   })
//   .then(data => {
//     console.log(data); // undefined
//     if (!data) {
//       throw new Error('Error in then!');
//     }
//     return '2';
//   })
//   .then(data => {
//     console.log(data); // 2
//   })
//   .catch(error => {
//     console.log(error.message);
//   });

//? TASK 03
// Що буде у консолі

// const promise = new Promise((resolve, reject) => {
//   reject('error');
// });

// promise
//   .then(data => {
//     console.log(data);
//   })
//   .then(data => {
//     console.log(data);
//     return '2';
//   })
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.log(error);
//   });

/*
 * Є функція, яка генерує випадкові числа від 1 до 4.
 * Написати функцію, яка повертає проміс.
 * Зробіть так, щоб згенероване число було із затримкою функції setTimeout в секундах.
 * Оберніть все це в проміс, який у будь-якому разі повертає час затримки (і в resolve, і в reject).
 * Нехай проміс виконається успішно, якщо згенеровано 1 або 2 (`✅ Resolved after ${delay} sec`), і з помилкою - якщо 3 або 4 (`❌ Rejected after ${delay} sec`).
 */

const getRandomNumber = () => Math.floor(Math.random() * 4) + 1;
const number = getRandomNumber();
const delay = number * 1000;

const onResolve = delay => {
  console.log(`✅ Resolved after ${delay} sec`);
};
const onRejected = delay => {
  console.log(`❌ Rejected after ${delay} sec`);
};

const makePromise = (number, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (number >= 2) {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });
};
makePromise(number, delay).then(onResolve).catch(onRejected);
