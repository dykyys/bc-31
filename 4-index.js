/*
 * Оператори порівняння (<, >, <=, >=, ==, ===, !=, !==)
 */

/*
 * Результатом порівняння буде булеве значення.
 * Рядки порівнюються по unicode.
 * При порівнянні рядків, рядки порівнюються посимвольно.
 * При порівнянні різних типів, операнди приводяться до числа.
 */

// console.log('ay' < 'ah');
// console.log('h', 'h'.charCodeAt(0));
// console.log('y', 'y'.charCodeAt(0));

// console.log('7' > 5);

// console.log(null === undefined);

/*
 * Приведення різних типів до числа:
 * true --> 1
 * false --> 0
 * '' --> 0
 * null --> 0
 * undefined --> 0
 */

//* Оператор менше (<)
// console.log(2 < 12);
// console.log(12 < 2);
// console.log('a' < 'b');
// console.log('b' < 'a');
// console.log('A' < 'a');
// console.log('a p p l e' < 'a p p n anana');
// console.log('apple' > 'yellow');
// console.log('bananana' < 'apple');
// console.log(true < false);
// console.log(false < true);

//* Оператор більше (>)
// console.log(10 > 20);
// console.log(20 > 10);

//* Оператор менше або дорівнює (<=)
// console.log(6 <= 6);
// console.log(5 <= 5);
// console.log(5 <= 4);

//* Оператор більше або дорівнює (>=)
// console.log(5 >= 3);
// console.log(5 >= 5);
// console.log(3 >= 4);

//* Не суворе рівенство (==)
// console.log(null > 0); //false
// console.log(null == 0); //false
// console.log(null >= 0); //true

// console.log(undefined === null);

// console.log('123' === 123);
// console.log(true === '1');
// console.log(4 === 5 - true);

//* Суворе рівенство (===)
// console.log('123' === 123);
// console.log(null === null);
// console.log(2 + 2 === 4);
// console.log(0 === -0);

//* Не дорівнює (!=)
// console.log('4' != 4);

//* Суворе не дорівнює (!==)
// console.log('4' !== 4);
// console.log(NaN !== NaN);
