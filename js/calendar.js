'use strict';
//false, 0, undefined, "", null, NaN

const calendarRef = document.querySelector('.calendar');

const onCalendarClick = event => {
  const { target } = event;
  if (target.nodeName === 'TH' || target.textContent === '') {
    return;
  }

  const activeTD = document.querySelector('.active');

  if (activeTD === target) {
    activeTD.classList.remove('active');
    return;
  }

  if (activeTD) {
    activeTD.classList.remove('active');
  }

  target.classList.add('active');
};

calendarRef.addEventListener('click', onCalendarClick);
