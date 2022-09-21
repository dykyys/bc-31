'use strict';

const palletItemsRef = document.querySelectorAll('.pallet__item');
const palletListRef = document.querySelector('.js-pallet');

palletItemsRef.forEach(item => {
  const randomColor = getRangomColor();
  item.style.backgroundColor = randomColor;
  item.dataset.color = randomColor;
});

const onPalletClick = event => {
  const { target } = event;
  if (target.nodeName === 'UL') {
    return;
  }

  const activeItem = document.querySelector('.active');

  if (activeItem) {
    activeItem.classList.remove('active');
    activeItem.firstElementChild.textContent = '...';
  }

  const item = target.closest('.pallet__item');

  if (activeItem === item) {
    return;
  }

  item.classList.add('active');
  item.firstElementChild.textContent = item.dataset.color;
};
palletListRef.addEventListener('click', onPalletClick);

// Для динамічного створення палітри
function getRangomColor() {
  return `#${getRandomHex()}${getRandomHex()}${getRandomHex()}`;
}

function getRandomHex() {
  return Math.round(Math.random() * 256)
    .toString(16)
    .padStart(2, '0');
}

// if (activeItem?.firstElementChild === target || activeItem === target) {
//   return;
// }

// if (target.nodeName === 'SPAN') {
//   target.parentNode.classList.add('active');
//   target.textContent = target.parentNode.dataset.color;
//   return;
// }
