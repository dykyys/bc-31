/*
 *  Метод sort()
 */

const numbers = [
  1, 2, 3, 4, 61, 19, 10, 11, 20, 25, 74, 35, 92, 5, 27, 2, 41, 100, 1000, 4,
  105, 010, 7, 3, 75, 1,
];

// const sortedNumbers = [...numbers].sort((prev, next) => {
//   console.log(prev);
//   if (prev < next) {
//     return -1;
//   }
//   if (prev > next) {
//     return 1;
//   }
//   return;
// });
// console.log('sortedNumbers', sortedNumbers);

// const sortArr = [...numbers].sort((a, b) => {
//   if (a < b) {
//     //якщо a < b, a має стояти перед b
// Повертаємо -1 місцями значення не змінюємо
//     return -1;
//   }
//   if (a > b) {
//     return 1;
//     //змінює місцями значення
//   }
//   return 0;
//   // означає, що рівні, залишаються на своїх місцях
// });

// const sortArr = [...numbers].sort((a, b) => b - a);
// console.log(sortArr);

//Сортування рядків.
//Виконайте сортування масиву назв моніторів у
// Алфавітному та зворотному порядку.

// const monitors = ['SAMSUNG', 'LG', 'ASUS', 'DELL', 'BENQ', 'ASER'];
// const alfabet = ['a', 'A', 'b', 'B', 'F', 'f'];
// console.log(alfabet.sort((a, b) => (a > b ? 1 : -1)));

//? Сортування чисел та рядків за замовчуванням
// const numbers = [30, 94, 60, 97, 5];

// console.log(`source arr: `, numbers);
// console.log('sortedNumbers: ', sortedNumbers);

// const words = ['Gavin', 'Edgar', 'Edith', 'Maurice', 'Rosa', 'Roger'];

// console.log(`source arr: `, words);
// console.log('sortedWords: ', sortedWords);

/*
? Нехай функція sortByAscendingAmount повертає новий масив автомобілів відсортований
? по збільшенню значення властивості amount.
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

const sortedByModel = [...cars].sort((a, b) =>
  a.model.toLowerCase().localeCompare(b.model.toLowerCase())
);
console.table(sortedByModel);

/*
?Нехай функція sortByDescendingPrice повертає новий масив автомобілів відсортований
? за зменшенням значення властивості price.
*/

// console.table(sortByDescendingPrice(cars));

/*
? Нехай функція sortByModel повертає новий масив автомобілів, відсортований за назвою моделі
? в алфавітному та зворотному алфавітному порядку, залежно від значення параметра order.
*/

// console.table(sortByModel(cars, 'asc'));
// console.table(sortByModel(cars, 'desc'));
