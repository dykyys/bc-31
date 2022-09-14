'use strict';
/*
 *  Метод filter()
 */

// масив.filter((element, index, array) => {
// Тіло колббек-функції
// });

/*
? Відфільтруйте масив, щоб залишилися тільки парні
*/

// 0 --> false
// !false --> true
// !true -- > false

// const numbers = [1, 2, 3, 4, 5, 6];

// const evenNumbers = numbers.filter((number) => number % 2 === 0);

// console.log(evenNumbers);

// const numbers = [1, 2, 3, 4, 5, 6];

// const evenNumbers = numbers.filter((number) => !(number % 2));🐱‍👤

// console.log(evenNumbers);

/*
? Відфільтруємо масив, залишивши в ньому лише додатні числа:
*/

// const numbers = [-2, 5, 1, -5, -1, 1, 3, 4, -1];

// const positivNumbers = numbers.filter((number) => number > 0);
// console.log(positivNumbers);

/*
? Відфільтруйте масив heroes за ключем об'єкта franchise.
*/

// const heroes = [
//   { name: 'Batman', franchise: 'DC' },
//   { name: 'Ironman', franchise: 'Marvel' },
//   { name: 'Thor', franchise: 'Marvel' },
//   { name: 'Superman', franchise: 'DC' },
// ];

// const filteredByFranchise = (arr, findFranchise) => {
//   return arr.filter(({ franchise }) => franchise === findFranchise);
// };

// const filteredFrans = filteredByFranchise(heroes, 'DC');
// console.table(filteredFrans);
/*
? Нехай функція filterByPrice повертає масив автомобілів ціна яких
? менше ніж значення параметра threshold.
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

// const filterByPrice = (cars, threshold) => {
//   return cars.filter(({ price }) => price < threshold);
// };

// const filteredCars = filterByPrice(cars, 30000);
// console.table(filteredCars);

/*
? Нехай функція getCarsWithDiscount повертає масив автомобілів властивість onSale яких true.
*/

// const getCarsWithDiscount = (cars) => {
//   return cars.filter(({ onSale }) => !onSale);
// };

// const carsOnSale = getCarsWithDiscount(cars);
// console.table(carsOnSale);
/*
?Нехай функція getCarsWithType повертає масив автомобілів, тип яких
? збігається із значенням параметра type.
*/

// const getCarsWithType = (cars, findType) => {
//   return cars.filter(({ type }) => type === findType);
// };

// const allSedans = getCarsWithType(cars, 'sedan');
// console.log(allSedans);

// ?Залишити тільки унікальні числа
const numbers = [1, 2, 3, 3, 2, 1, 4, 5, 6, 4];

// 1 ітерація
// el = 1; idx = 0;
// 0 === 0

// 2 ітерація
// el = 2; idx = 1;
// 1 === 1

// 3 ітерація
// el = 3; idx = 2;
// 2 === 2

// 4 ітерація
// el = 3; idx = 3;
// 2 === 3

// 5 ітерація
// el = 2; idx = 4;
// 1 === 4

const uniqueNubers = numbers.filter((el, i, arr) => arr.indexOf(el) === i);
console.log(uniqueNubers);
