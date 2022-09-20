'use strict';

const panelList = document.querySelectorAll('.js-panel');

function onPanelClick(event) {
  const activePanel = document.querySelector('.is-open');

  if (event.currentTarget === activePanel) {
    activePanel.classList.toggle('is-open');
    return;
  }

  if (activePanel) {
    activePanel.classList.remove('is-open');
  }
  event.currentTarget.classList.add('is-open');
}

panelList.forEach((panel) => panel.addEventListener('click', onPanelClick));
