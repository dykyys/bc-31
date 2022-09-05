'use strict';
//https://marketplace.visualstudio.com/items?itemName=meganrogge.template-string-converter

/*
 * Конкатенація рядків, шаблонні рядки
 */

/*
  ? Запросіть у користувача ім'я з віком та виведіть у консоль повідомлення:
  ? Hello ім'я_користувача, your age is вік_користувача.
*/

// const userName = prompt('Put your name!');
// const userAge = prompt('Put your age!');

// const message = 'Hello ' + userName + ', your age is '+ userAge;
// console.log(message);
//? Виконайте завдання вище, використовуючи шаблонні рядки

// const message = `Hello ${userName} your age is ${userAge}`;
// console.log(message);

/*
 * Властивості та методи рядків
 */

// const string = 'Welcome to Bahamas!';

//? Запросіть у користувача ім'я та дізнайтесь з кількох символів складається ім'я.
// const userName = prompt('Put your name!');
// console.log(userName.length);

//? Попросіть користувача ввести email і переведіть у нижній регістр.

// let userEmail = prompt('Put your email!');
// userEmail = userEmail.toLowerCase();
// console.log(userEmail);
//? Попросіть користувача ввести email і переведіть у верхній регістр

// let userEmail = prompt('Put your email!');
// userEmail = userEmail.toUpperCase();
// console.log(userEmail);

/*
  ? Є рядок 'HTML, CSS, JS, PHP, React, Vue, Node.js, C, C++'.
  ? Дізнайтеся, чи є в цьому рядку мова: 'JS'?.
  ? Дізнайтесь позицію на якій перебуває цей підрядок
*/

// const languagesStr =
//   'HTML, CSS, JS, JS, PHP, React, Vue, Node, C, C++, Javascript';

// const findString = 'JS'.toLowerCase();

// const inString = languagesStr.toLowerCase().includes(findString);

// console.log(inString);

// console.log(languagesStr.indexOf('JS'));

//? У нас є рядок '24px', дізнайтеся на що закінчується цей рядок, на %, rem, em або px;

// const str = '24px';
// const subStr = 'px';

// console.log(str.endsWith(subStr));

// ? У нас є рядок '23,4', замініть кому на крапку

// const str = '23,4';

// const updateStr = str.replace(',', '.');
// console.log(updateStr);

//? У нас є рядок 'styles.css, about.css, portfolio.css', замініть .css на .min.css

// const str = 'styles.css, about.css, portfolio.css';

// const updateStr = str.replaceAll('.css', '.min.css');
// console.log(str);
// console.log(updateStr);

/*
  ? У нас є рядок:
  ? 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?'.
  ? Замініть усі входження dog на monkey.
*/
// const str =
//   'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';

// const updateStr = str.replaceAll('dog', 'monkey');
// console.log(updateStr);

//? У нас є дата у форматі '12:05:21', замініть (:) на (.)

// const str = '12:05:21';
// const updateStr = str.replaceAll(':', '.');
// console.log(updateStr);
/*
  ? Даний рядок'Vasyl Pupkin is 24 years old'.
  ? Скопіюйте з цього рядка окремо ім'я з прізвищем та окремо вік.
*/
// const someStr = 'Vasyl Pupkin is 24 years old';

// const fullName = someStr.slice(0, 12);
// //2 indexOf === 16
// //4 indexOf === 17
// const age = someStr.slice(16, 18);
// console.log(age);
