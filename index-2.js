/*
 *  Метод map()
 */

// масив.map((element, index, array) => {
//  Тіло колббек-функції
// });

//? Помножте всі числа на 2
// const numbers = [1, 2, 3, 4, 5];
// const multiNumbers = numbers.map((element) => element * 2);

// console.log(multiNumbers);

/*
?Перепишіть цикл через map
? Код нижче отримує з масиву рядків новий масив, що містить довжини рядків:
*/

// const wordsArr = ['Існує', 'життя', 'на', 'Марсі', '!'];
// const wordsArr2 = ['отримує', 'з', 'масиву', 'рядків'];

// //[5,5,2,5,1]

// const wordsLength = wordsArr.map((element) => element.length);
// const wordsLength2 = wordsArr2.map((element) => element.length);

// console.log(wordsLength);
// console.log(wordsLength2);

/*
? Створення масиву значень Фаренгейта із масиву значень Цельсія
? Для переведення з Цельсій до Фаренгейтів потрібна формула. F = C * 1.8 + 32
*/
// const celsius = [-15, -5, 0, 10, 16, 20, 24, 32];
// const fareng = celsius.map((element) => element * 1.8 + 32);
// console.log(fareng);

/*
? Нехай функція getModels повертає масив моделей (поле моделі) всіх автомобілів.
*/

const cars = [
  {
    make: 'Honda',
    model: 'CR-V',
    type: 'suv',
    amount: 14,
    price: 24045,
    onSale: true,
  },
  {
    make: 'Honda',
    model: 'Accord',
    type: 'sedan',
    amount: 2,
    price: 22455,
    onSale: true,
  },
  {
    make: 'Mazda',
    model: 'Mazda 6',
    type: 'sedan',
    amount: 8,
    price: 24195,
    onSale: false,
  },
  {
    make: 'Mazda',
    model: 'CX-9',
    type: 'suv',
    amount: 7,
    price: 31520,
    onSale: true,
  },
  {
    make: 'Toyota',
    model: '4Runner',
    type: 'suv',
    amount: 19,
    price: 34210,
    onSale: false,
  },
  {
    make: 'Toyota',
    model: 'Sequoia',
    type: 'suv',
    amount: 16,
    price: 45560,
    onSale: false,
  },
  {
    make: 'Toyota',
    model: 'Tacoma',
    type: 'truck',
    amount: 4,
    price: 24320,
    onSale: true,
  },
  {
    make: 'Ford',
    model: 'F-150',
    type: 'truck',
    amount: 11,
    price: 27110,
    onSale: true,
  },
  {
    make: 'Ford',
    model: 'Fusion',
    type: 'sedan',
    amount: 13,
    price: 22120,
    onSale: true,
  },
  {
    make: 'Ford',
    model: 'Explorer',
    type: 'suv',
    amount: 6,
    price: 31660,
    onSale: false,
  },
];

// const getModels = (cars) => {
//   const models = cars.map(({ model }) => {
//     return model;
//   });
//   return models;
// };
// const models = getModels(cars);
// console.log(models);

// const getModels = (cars) => {
//   return cars.map(({ model }) => model);
// };
// const models = getModels(cars);
// console.log(models);
/*
? Нехай функція makeCarsWithDiscount повертає новий масив об'єктів із зміненим значенням властивості price
? залежно від переданої знижки.
*/

// 1000 * (1 - 70 / 100) = 300

// const makeCarsWithDiscount = (cars, discont) => {
//   return cars.map((car) => ({
//     ...car,
//     price: (car.price * (1 - discont / 100)).toFixed(2),
//   }));
// };

// const carsWithDiscont = makeCarsWithDiscount(cars, 70);

// console.table(carsWithDiscont);
/*flat / flatMap*/

const students = [
  {
    name: 'Манго',
    courses: ['математика', 'фізика'],
  },
  { name: 'Полі', courses: ['інформатика', 'математика'] },
  { name: 'Ківі', courses: ['фізика', 'біологія'] },
];

const allCourses = students.flatMap(({ courses }) => courses);

console.log(allCourses);
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/flat
