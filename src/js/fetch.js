'use strict';
// https://jsonplaceholder.typicode.com/

// fetch('https://jsonplaceholder.typicode.com/posts/101')
//   .then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   })
//   .then(data => {
//     console.log('then');
//     console.log(data);
//   })
//   .catch(error => {
//     console.log(error);
//   });

//? TASK 01
// Створіть функцію getUsers(names), яка отримує на вхід масив логінів користувачів GitHub, робить запит на GitHub за інформацією про них та повертає масив об'єктів користувачів.
// Інформація про користувача GitHub з логіном USERNAME доступна за посиланням: https://api.github.com/users/USERNAME.

// Важливі деталі:

// На кожного користувача повинен бути один запит fetch.
// Запити не повині чекати завершеня один одного. Потрібно, щоб дані поверталися як можна швидше.
// Якщо якийсь запит завершуєтся помилкою або вияволось, що даних о користувачеві немає, то функція повина інформувати що сталася помилка.

// const BASE_URL = 'https://api.github.com/users/';
// const userLogins = ['luxplanjay', 'dykyys', 'kiwi', 'mango', 'polly', 'ajax'];
// const users = [];

// const getUsers = names => {
//   const promises = names.map(name => {
//     const URL = `https://api.github.com/users/${name}`;
//     return fetch(URL).then(response => {
//       if (!response.ok) {
//         throw new Error(response.status);
//       }
//       return response.json();
//     });
//   });

//   return Promise.all(promises);
// };
// getUsers(userLogins)
//   .then(users => {
//     console.log(users);
//     users.forEach(console.log);
//   })
//   .catch(error => {
//     console.log(error.message);
//   });
