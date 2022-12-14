'use strict';

/*
 * Так як ми працюємо з вебом, рано чи пізно потрібно додавати собі на сторінку скрипти. І якщо ваш проект - це щось трохи більше, ніж маленька сторінка, швидше за все, ви захочете винести той скрипт у окремий файлик. Ну і звісно після того його собі підключити. Думаю, код схожий на <script src="index.js"> буде вам досить знайомий. Але куди правильно помістити цей код? В head? В кінець body? Може варто додати ще якийсь атрибут для способу завантаження скрипта?

Взагалі, коли браузер зустрічає такий код, він зупиняється, завантажує сам скрипт, виконує його, і тільки тоді продовжить працювати над рештою розмітки. Якщо у вас після підключення скрипта є ще якась кнопка, сам скрипт її, на жаль, не побачить. Тому варіант додати в кінець body виглядає досить непогано. Хоча і тут свої проблеми, так як браузер вважає, що не закінчив працювати з html, поки не завантажив скрипт.

На допомогу приходять такі атрибути як async та defer. З англійської вже маємо певне уявлення, що щось буде асинхронним, а щось інше відкладеним. Якщо браузер побачить async, він почне паралельно завантажувати сам скрипт і обробляти html. Коли скрипт буде завантажено, він зупинить обробку html, виконає скрипт, після чого продовжить далі роботу з html. А зустрівши defer, браузер так само паралельно почне завантажувати скрипт, але виконувати його він буде тільки тоді, коли закінчить всю роботу з html. Тому висновок такий - async використовувати тоді, коли немає маніпуляцій з DOM, а defer - коли вони є.
 */

/*
Не можемо звертатися до змінної без її оголошення
*/

/*
 * Базові примітивні типи: number, string, boolean, null и undefined.
 */

/*
 * Виведення даних: console.log та alert. Вкладка Console у Chrome Devtools.
 */
// https://marketplace.visualstudio.com/items?itemName=akamud.vscode-javascript-snippet-pack
// https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens

// console.log('10');
// console.log(10);
// alert('Hello');

/*
 * Змінні: оголошення з let та const, іменування.
 */

// const age = 21;

// console.log(typeof age);

/*
 * Отримання даних: prompt и confirm.
 */

// const userAge = prompt('Скільки вам років?');

// alert(userAge);

// const isAdult = confirm('Вам є 18 років?');
// console.log(isAdult);
