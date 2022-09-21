const itemsListRef = document.querySelector('.js-key__list');
const audioRef = document.querySelector('.audio');

const removeActiveClass = event => {
  if (event.propertyName !== 'transform') {
    return;
  }
  event.target.classList.remove('playing');
};

const onItemClick = event => {
  const { target } = event;
  if (target.nodeName === 'UL') {
    return;
  }

  const item = target.closest('.key__item');
  addPlaying(item);

  // if (target.nodeName === 'LI') {
  //   addPlaying(target);
  // }
  // if (target.nodeName === 'SPAN') {
  //   addPlaying(target.parentNode);
  // }

  const key = item.dataset.key;

  playSoud(key);
};

const onKeyBoardPress = event => {
  playSoud(event.keyCode);

  const item = document.querySelector(`li[data-key="${event.keyCode}"]`);
  if (!item) {
    return;
  }
  addPlaying(item);
};

function playSoud(key) {
  const sound = document.querySelector(`audio[data-key="${key}"]`);
  if (!sound) {
    return;
  }
  sound.currentTime = 0;
  sound.play();
}

function addPlaying(item) {
  item.classList.add('playing');
}
itemsListRef.addEventListener('transitionend', removeActiveClass);
itemsListRef.addEventListener('click', onItemClick);
document.addEventListener('keydown', onKeyBoardPress);
