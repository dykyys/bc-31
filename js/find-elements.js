'use strict';
//* Об'єкт window і document
// document.title = 'DOM is eazy';

//* Дідівські методи пошуку елементів (getElementBy...)

//* Сучасні методи пошуку елементів (querySelector)

const titleEl = document.querySelector('h1 #title');
const listRef = document.querySelector('#list');

// console.log(titleEl.nextElementSibling);
// console.log(titleEl.parentNode);
// const itemsList = [...listRef.children];
const listItems = listRef.querySelectorAll('#list > .list__item');
listItems.forEach(item => {
  const linkRef = item.querySelector('a');
  console.log(linkRef.textContent);
  //   console.log(item.lastElementChild.children.length);
  const childrenItemList = item.querySelectorAll('li');
  console.log(childrenItemList.length);
});
