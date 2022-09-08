'use strict';
/*
 * Функціональні висловлювання та оголошення функції.
 * Параметри, аргументи, повернення.
 */

// function фм'я_функції(праметр_1, параметр_2...) {
// Тіло функції
// }

// 'Josie Pierce'
// 'Vera Knight'
// 'Alan Lamb'

// const numbers = [1, 2, 3, 4, 5, 6];
// const numbers2 = [6, 7, 8, 9];

// function addNumbers(a, b) {}

/*
Написати функцію для додавання чисел з
перевіркю вхідних даних
*/

/*
? Напишіть функцію calcAverage() яка приймає довільну кількість аргументів і повертає їхнє середнє значення.
? За умови, що усі аругменти будуть лише числами.
? Додай перевірку, що аргументами можуть бути не числа
*/

// function calcAverage() { }

// calcAverage(2, 'e', 3, 'd', 5, 6, 'g', 'd', 69, 65);

/*
? Напиши функцію calcBMI(weight, height) яка розраховує та повертає індекс маси тіла людини.
? Для цього необхідно розділити вагу в кілограмах на квадрат висоти людини (зросту).
? Вага та висота будуть спеціально передані як рядки. Нецілі числа можуть бути задані у вигляді 24.7 або 24,7,
? тобто як роздільник дробової частини може бути кома.
? Індекс маси тіла необхідно округлити до однієї цифри після коми;
*/

// function calcBMI(weight, height) {

// }

// const mangoBIM = calcBMI('88,3sm', '1.75');
// console.log(mangoBIM);

// const pollyBMI = calcBMI('80,3', '1,95');
// console.log(pollyBMI);

/*
? Напиши функцію min(a,b), яка повертає найменше з чисел a та b.
? Добав перевірку, що параметри це числа
*/

/*
? Напиши функцію getRectArea(dimensions) для обчислення площі прямокутника зі сторонами,
? значення яких будуть передані до параметра dimensions у вигляді рядка.
? Значення гарантовано розділені пробілом.
*/

// console.log(getRectArea('8 11')); // 88
// console.log(getRectArea('18 11')); // 198
// console.log(getRectArea('8 21')); // 168

/*
? Напиши функцію logItems(items), яка отримує масив та використовує цикл for,
? який для кожного елемента масиву виводитиме в консоль повідомлення
? у форматі <номер елемента> - <значення елемента>. Нумерація елементів має починатися з першого.
? Наприклад, для першого елемента масиву ['Mango', 'Poly', 'Ajax'] з індексом 0 буде виведено 1 - Mango,
? а для індексу 2 виведе 3 – Ajax.
*/

// logItems(['Mango', 'Poly', 'Ajax']);
// logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);
// logItems();

/*
? Напиши функцію logItems(items), яка отримує довільну кількість аргументів ,
? для кожного елемента виводитиме в консоль повідомлення
? у форматі <номер елемента> - <значення елемента>. Нумерація елементів має починатися з першого.

*/

// function logItems(...args) Х }
// logItems('🍎', '🍇', '🍑', '🍌', '🍋', '🍑', '🍌', '🍋');

/*Стек */

// function task1() {
//   console.log('2 - before task 2');
//   task2();
//   console.log('7 - after task 2');
//   console.log('8 - Completed task 1');
// }
// function task2() {
//   console.log('3 - before task 3');
//   task3();
//   console.log('5 - after task 3');
//   console.log('6 - Completed task 2');
// }

// function task3() {
//   console.log('4 - Completed task 3');
// }

// console.log('1 - before task 1');
// task1();
// console.log('9 - after task 1');

// function foo() {
//   console.log('foo - start');
//   console.log('foo - 1');
//   baz();
//   console.log('Code back 202');
//   bar();
//   console.log('Code back 204');
//   console.log('foo- end');
// }
// function baz() {
//   console.log('baz - start');
//   console.log('baz - 2');
//   console.log('baz - end');
// }
// function bar() {
//   // foo();
//   console.log('bar - start');
//   console.log('bar-3');
//   console.log('bar - end');
// }

// foo();

/*
? Напиши функцію printContactsInfo(names, phones) яка виводить у консоль ім'я та телефонний номер користувача.
? У параметри names і phones будуть передані рядки імен та телефонних номерів, розділені комами.
? Порядковий номер імен та телефонів у рядках вказують на відповідність.
? Кількість імен та телефонів гарантовано однакова.
*/

// printContactsInfo(
//   'Jacob,William,Solomon,Artemis',
//   '89001234567,89001112233,890055566377,890055566300'
// );

// printContactsInfo(
//   'Vera,Carr,Violet,Sherman',
//   '89001234567,89001112233,890055566377,890055566300'
// );

/*
? Напиши функцію findLargestNumber(numbers), яка шукає найбільше число в масиві.
*/

// function findLargestNumber(numbers1, numbers2) { }

// console.log(findLargestNumber([25555, 17, 94, 1, 23, 37], [49, 4, 7, 83, 12])); // 94
// console.log(findLargestNumber([49, 4, 7, 83, 12])); // 83

/*
? Напишіть функції для роботи з колекцією навчальних курсів courses:
? addCourse(name) - додає курс до кінця колекції
? removeCourse(name) - видаляє курс із колекції
? updateCourse(oldName, newName) – змінює ім'я на нове
*/

// const courses = ["HTML", "CSS", "JavaScript", "React", "PostgreSQL"];

// addCourse("Express");
// addCourse("React");
// removeCourse("CSS");
// removeCourse("Linux");
// updateCourse("HTML", "Vue");
// updateCourse("Linux", "Windows");
// console.table(courses);
