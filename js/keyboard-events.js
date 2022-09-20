'use strict';
/*
 *Події клавіатури. keypress, keydown, keyup
 */
//https://www.toptal.com/developers/keycode/for/a

const pressKeyBoard = (event) => {
  console.log('key', event.key);
  console.log('code', event.code);
};

document.addEventListener('keydown', pressKeyBoard);
