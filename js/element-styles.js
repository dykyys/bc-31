'use strict';
//* Об'єкт style, cssText, classList

// const btnRef = document.querySelector('.js-modal-btn');
// const backdropRef = document.querySelector('.js-backdrop');
// btnRef.addEventListener('click', () => {
//   console.log('click');
//   backdropRef.classList.add('is-backdrop-open');
// });

const btnRef = document.querySelectorAll('.js-modal-btn');
// const backdropRef = document.querySelector('.js-backdrop');
// btnRef.addEventListener('click', () => {
//   console.log('click');
//   backdropRef.classList.add('is-backdrop-open');
// });

btnRef.forEach(btn => {
  btn.addEventListener('click', event => {
    // event.target.className = '';
    // event.target.classList.toggle('btn-active');
    // const index = event.target.dataset.modal;
    // const backdropRef = document.querySelector(`div[data-modal="${index}"]`);
    // backdropRef.classList.add('is-backdrop-open');
  });
});

const titleRef = document.querySelector('.js-sec-title');

titleRef.style.cssText = 'color: tomato; font-size: 50px; background: lime';
