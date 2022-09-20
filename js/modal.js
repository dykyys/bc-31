'use strict';

const openBtnRef = document.querySelector('.js-modal-open');
const backDropRef = document.querySelector('.js-backdrop');
const closeBtnRef = document.querySelector('.js-modal-close');

const pressKeyBoard = (event) => {
  if (event.code !== 'Escape') {
    return;
  }
  onCloseClick();
};

// const toggleOpen = () => {
//   backDropRef.classList.toggle('is-open');
// };

const onOpenClick = () => {
  //   toggleOpen();
  backDropRef.classList.add('is-open');
  document.addEventListener('keydown', pressKeyBoard);
};

const onCloseClick = () => {
  //   toggleOpen();
  backDropRef.classList.remove('is-open');
  document.removeEventListener('keydown', pressKeyBoard);
};
const onBackDropClick = (event) => {
  if (event.target === event.currentTarget) {
    onCloseClick();
  }
};

backDropRef.addEventListener('click', onBackDropClick);
openBtnRef.addEventListener('click', onOpenClick);
closeBtnRef.addEventListener('click', onCloseClick);
