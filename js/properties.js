'use strict';
//* Атрибути як властивості об'єкту

// https://picsum.photos/200/300

/*
 * Доступ до атрибутів
 *
 * elem.hasAttribute(name)
 * elem.getAttribute(name)
 * elem.setAttribute(name, value)
 * elem.removeAttribute(name)
 * elem.attributes
 */

const titleRef = document.querySelector('.js-hero__title');
const imgRef = document.querySelector('[alt="Labrador"]');
const swapBtn = document.querySelector('[data-swap="false"]');
const saveBtn = document.querySelector('[data-action="save"]');
const closeBtn = document.querySelector('[data-action="close"]');

// titleRef.style.color = 'tomato';
// titleRef.style.fontSize = '50px';
// console.log(titleRef.style.color);
// console.log(titleRef.style.lineHeight);
// const hasClass = titleRef.classList.contains('hero__title');

// titleRef.classList.add('hero__title');
// imgRef.src = 'https://picsum.photos/200/300';
// imgRef.alt = 'random photo';
// console.log(imgRef.dataset.index);
// console.log(imgRef.dataset.source);
// console.log(imgRef.dataset.length);
// console.log(imgRef.hasAttribute('sasdf'));
// console.log(imgRef.getAttribute('data-source'));
// console.log(imgRef.removeAttribute('data-source'));

swapBtn.addEventListener('click', () => {
  imgRef.src = 'https://picsum.photos/200/300';
  imgRef.alt = 'random photo';
  // saveBtn.removeAttribute('disabled');
  //   saveBtn.disabled = false;
  //   console.log(saveBtn.disabled);
});

closeBtn.addEventListener('click', () => {
  saveBtn.disabled = false;
  closeBtn.disabled = true;
});

saveBtn.addEventListener('click', () => {
  closeBtn.removeAttribute('disabled');
  saveBtn.disabled = true;
});

// console.log(window.getComputedStyle(titleRef).color);
