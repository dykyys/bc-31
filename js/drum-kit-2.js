const itemsListRef = document.querySelector('.js-key__list');

const audioRef = document.querySelector('.audio');

const removeActiveClass = event => {
  if (event.propertyName !== 'transform') {
    return;
  }
  event.target.classList.remove('playing');
};
itemsListRef.addEventListener('transitionend', removeActiveClass);

const onItemClick = event => {
  const { target } = event;
  if (target.nodeName === 'UL') {
    return;
  }

  const item = target.closest('.key__item');

  if (!item.dataset.src) {
    return;
  }
  playSoud(item);
  addPlaying(item);
};

function addPlaying(item) {
  item.classList.add('playing');
}

const onKeyBoardPress = event => {
  const item = document.querySelector(`li[data-key="${event.keyCode}"]`);
  if (!item?.dataset.src) {
    return;
  }
  playSoud(item);
  addPlaying(item);
};

function playSoud(item) {
  audioRef.src = item.dataset.src;
  audioRef.currentTime = 0;
  audioRef.play();
}
itemsListRef.addEventListener('click', onItemClick);
document.addEventListener('keydown', onKeyBoardPress);
