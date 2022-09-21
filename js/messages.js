'use strict';

const listRef = document.querySelector('.js-messages-wrapper');
console.log(listRef);

const onMessageClick = event => {
  const { target } = event;
  if (target.nodeName !== 'BUTTON') {
    return;
  }
  target.parentNode.remove();
};

listRef.addEventListener('click', onMessageClick);
