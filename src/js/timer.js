import { Notify } from 'notiflix/build/notiflix-notify-aio';
const TIMER_DEADLINE = new Date(2022, 8, 29, 12, 12);

class Timer {
  #intervalId = null;
  #deadLine = null;
  #refs = {};
  #datasetValues = {
    days: ['день', 'дня', 'днів'],
    hours: ['година', 'години', 'годин'],
    minutes: ['хвилина', 'хвилини', 'хвилин'],
    seconds: ['секунда', 'секунди', 'секунд'],
  };

  constructor(rootSelector, deadLine) {
    this.#getRefs(rootSelector);
    this.#deadLine = deadLine;
  }

  #getRefs(rootSelector) {
    const timer = document.querySelector(rootSelector);
    this.#refs.fields = {};
    this.#refs.fields.days = timer.querySelector('.js-timer__days');
    this.#refs.fields.hours = timer.querySelector('.js-timer__hours');
    this.#refs.fields.minutes = timer.querySelector('.js-timer__minutes');
    this.#refs.fields.seconds = timer.querySelector('.js-timer__seconds');
    this.#refs.canvasArr = timer.querySelectorAll('canvas');
  }
  start() {
    if (this.#deadLine.getTime() <= Date.now()) {
      Notify.failure('Дата вибрана в минулому!', { position: 'center-center' });
      return;
    }

    Notify.success('Відлік почався!', { position: 'center-center' });

    this.#intervalId = setInterval(() => {
      const diff = this.#deadLine.getTime() - Date.now();

      if (diff <= 1000) {
        clearInterval(this.#intervalId);
        Notify.success('Yes!', {
          position: 'center-center',
        });
      }
      const data = this.#convertMs(diff);

      // for (const key in data) {
      //   this.#refs.fields[key].textContent = data[key];
      // }

      Object.entries(data).forEach(([name, value], index) => {
        const item = this.#refs.fields[name];
        item.textContent = this.#addLeadingZezo(value);
        item.dataset.title = this.#declensionNum(
          value,
          this.#datasetValues[name]
        );
        this.#drawCircle(index, value);
      });
    }, 1000);
  }
  #convertMs(diff) {
    const days = Math.floor(diff / 1000 / 60 / 60 / 24);
    const hours = Math.floor(diff / 1000 / 60 / 60) % 24;
    const minutes = Math.floor(diff / 1000 / 60) % 60;
    const seconds = Math.floor(diff / 1000) % 60;
    return { days, hours, minutes, seconds };
  }
  #addLeadingZezo(value) {
    return String(value).padStart(2, 0);
  }
  #declensionNum(num, words) {
    return words[
      num % 100 > 4 && num % 100 < 20
        ? 2
        : [2, 0, 1, 1, 1, 2][num % 10 < 5 ? num % 10 : 5]
    ];
  }
  #drawCircle(index, value) {
    const ctx = this.#refs.canvasArr[index].getContext('2d');
    ctx.clearRect(0, 0, 200, 200);
    ctx.beginPath();
    ctx.strokeStyle = 'red';

    ctx.lineWidth = 4;
    // ctx.lineCap = 'round';

    let path = 60 / 2;

    if (index === 1) {
      path = 24 / 2;
    }
    ctx.arc(
      100,
      100,
      100 - 2,
      (Math.PI / path) * (value - path / 2),
      (Math.PI / path) * (path * 2 - path / 2 - 0.01),
      true
    );

    ctx.stroke();
  }
}

const timer = new Timer('.timer__items', TIMER_DEADLINE);

timer.start();

// const timerRef = document.querySelector('.timer__items');
// const canvasArrayEl = document.querySelectorAll('canvas');
