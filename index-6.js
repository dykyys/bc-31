/*
 *  Метод reduce()
 */

// масив.reduce((previousValue, element, index, array) => {
// Тіло колббек-функції
// }, initialValue);

/*
? Порахуємо суму масиву чисел
*/

// const numbers = [1, 2, 3, 4, 5];

// 1 ітерація
// prevValue = 0; el = 1; idx = 0;
// return prevValue + element; // 0 + 1
// prevValue = 1;

// 2 ітерація
// prevValue = 1; el = 2; idx = 1;
// return prevValue + element; // 1 + 2
// prevValue = 3;

// 3 ітерація
// prevValue = 3; el = 3; idx = 2;
// return prevValue + element; // 3 + 3
// prevValue = 6;

// 4 ітерація
// prevValue = 6; el = 4; idx = 3;
// return prevValue + element; // 6 + 4
// prevValue = 10;

// 5 ітерація
// prevValue = 10; el = 5; idx = 4;
// return prevValue + element; // 10 + 5
// prevValue = 15;

// const total = numbers.reduce((acc, element, index) => {
//   console.log('acc', acc);
//   console.log('element', element);
//   console.log('index', index);
//   return acc + element;
// }, 0);
// console.log(total);

/*
? Нехай функція getTotalAmount повертає загальну кількість автомобілів (значення властивостей amount).
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

const totalCars = cars.reduce((acc, { amount }) => acc + amount, 0);
// console.log('totalCars', totalCars);
/*Потрібно зібрати всі теги в один масив
 * відфільтрувати уніклаьні теги
 */
const tweets = [
  { id: '000', likes: 5, tags: ['js', 'nodejs'] },
  { id: '001', likes: 2, tags: ['html', 'css'] },
  { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
  { id: '003', likes: 8, tags: ['css', 'react'] },
  { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
];
//[ ['js', 'nodejs'], ['html', 'css'], ['html', 'js', 'nodejs']  ]
// const allTags = tweets.reduce((acc, { tags }) => {
//   acc.push(...tags);
//   return acc;
// }, []);

const allTags = tweets
  .reduce((acc, { tags }) => [...acc, ...tags], [])
  .filter((tag, index, array) => array.indexOf(tag) === index);

// console.log('allTags', allTags);

// const allTags = tweets.reduce((acc, { tags }) => [...acc, ...tags], []);

// console.log('allTags', allTags);

// const tags = [
//   'js',
//   'nodejs',
//   'html',
//   'css',
//   'html',
//   'js',
//   'nodejs',
//   'css',
//   'react',
//   'js',
//   'nodejs',
//   'react',
// ];
// !false --> true
// const uniqueTags = tags.reduce((acc, tag) => {
//   // if (!acc.includes(tag)) {
//   //   acc.push(tag);
//   // }
//   // return acc;

//   return acc.includes(tag) ? acc : [...acc, tag];
// }, []);

// const uniqueTags = tags.reduce(
//   (acc, tag) => (acc.includes(tag) ? acc : [...acc, tag]),
//   []
// );

// console.log(uniqueTags);
