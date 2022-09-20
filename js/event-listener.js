'use strict';
/*
 * Основи подій. Створення та видалення слухачів. Об'єкт події
 */

// https://picsum.photos/200/300

const swapBtnRef = document.querySelector('.js-swap-btn');
const clearBtnRef = document.querySelector('.js-remove-listener');
const imgRef = document.querySelector('.js-img');

const onSwapBtnClick = () => {
  console.log('click');
  imgRef.src = 'https://picsum.photos/200/300';
  imgRef.alt = 'random photo';
};
swapBtnRef.addEventListener('click', onSwapBtnClick);

const onClearBtnClick = () => {
  console.log('clear');
  swapBtnRef.removeEventListener('click', onSwapBtnClick);
  swapBtnRef.disabled = true;
};
clearBtnRef.addEventListener('click', onClearBtnClick);
