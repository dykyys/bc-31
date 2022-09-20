'use strict';

// const btnList = document.querySelectorAll('.js-accordion-btn');
// const onBtnClick = (event) => {
//   event.target.nextElementSibling.classList.toggle('active');
// };
// btnList.forEach((btn) => btn.addEventListener('click', onBtnClick));

class Accordion {
  constructor(selector) {
    this.list = document.querySelector(selector);
    console.log(this.list);
    this.list.addEventListener('click', this.onBtnClick);
  }
  onBtnClick(event) {
    if (event.target.nodeName !== 'BUTTON') {
      return;
    }
    event.target.nextElementSibling.classList.toggle('active');
  }
}

const acordion1 = new Accordion('.js-accordion-list');
