/*
 * Створення об'єкта (конструктор, літерал).
 * Властивості, ключі (ім'я) та значення
 */

// Сутність фільм (назва, опис, рейтинг, акторський склад, вікове обмеження)
const film = {
  title: 'Matrix',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, nemo iusto! Et doloribus praesentium laboriosam dolorem veritatis, magnam atque amet!',
  rating: 4,
  actors: ['Aiden', 'Mason', 'Jimmy'],
  isAdult: true,
  // location: {
  // country: 'Jamaica',
  // city: 'Ocho Rios',
  // },
};

/*
 * Доступ до властивостей(obj.key, obj[key]).
 * Додавання та зміна властивостей
 */

// const filmTtile = 'title';

// film.title = 'Matrix 2';

// console.log(film.title);
// console.log(film['title']);
// console.log(film[filmTtile]);

// film.img = 'https://.....';

// film.location = {
//   country: 'Jamaica',
//   city: 'Ocho Rios',
// };
// film.location.city = 'Ocho Rios';

// console.log(film);

/*
 *Короткий запис властивостей
 */

// const username = 'Oleksii';
// const email = 'test@gmail.com';

// const userData = {
//   username,
//   email,
// };

// console.log(userData);

// const name = prompt("Введіть ваше ім'я");
// const email = prompt('Ваш email');
// const phone = prompt('Ваш phone');

// const userData = { name, email, phone };

// console.log(userData);

/*
 * Посилальний тип
 */

// const obj = {
//   a: 1,
//   b: 2,
// };

// const obj2 = obj;

// console.log('obj: ', obj);
// console.log('obj2: ', obj2);
// console.log(obj === obj2);

// obj2.c = 5;

// console.log('obj: ', obj);
// console.log('obj2: ', obj2);
// console.log(obj === obj2);

/*
 *Все у цьому світі об'єкти
 */

// const arr = [1, 2, 3, 4];

// console.log(arr);

// const obj = {
//   a: 1,
//   b: 2,
// };
// console.log(obj);
// // const obj = {
// //   0: 1,
// //   1: 2,
// //   2: 3,
// //   3: 4,
// //   length: 4,
// // };

// console.log(typeof arr);
// console.log(typeof obj);

// console.log(Array.isArray(arr));
// console.log(Array.isArray(obj));
