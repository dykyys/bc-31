'use strict';
/*
 * Поширення подій (занурення, таргетинг, спливання)
 */

// https://developer.mozilla.org/ru/docs/Web/API/EventTarget/addEventListener

const sectionRef = document.querySelector('.section');
const divRef = document.querySelector('.div');
const textRef = document.querySelector('.text');

window.addEventListener('click', event => {
  console.group('Listener on window (4 -  сплиття, подія на window)');
  console.log('target', event.target);
  console.log('currentTarget', event.currentTarget);
  console.groupEnd();
});

sectionRef.addEventListener('click', event => {
  console.group('Listener on section (3 -  сплиття, подія на секції)');
  console.log('target', event.target);
  console.log('currentTarget', event.currentTarget);
  console.groupEnd();
});

divRef.addEventListener('click', event => {
  console.group('Listener on div (2 -  сплиття, подія на div)');
  console.log('target', event.target);
  console.log('currentTarget', event.currentTarget);
  console.groupEnd();
});

textRef.addEventListener('click', event => {
  console.group('Listener on p (1 -  сплиття, подія на p)');
  console.log('target', event.target);
  console.log('currentTarget', event.currentTarget);
  console.groupEnd();
});
