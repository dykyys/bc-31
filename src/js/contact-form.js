'use strict';
import throttle from 'lodash.throttle';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
// import storageAPI from './storage';
import { load, save, remove } from './storage';
const formRef = document.querySelector('.js-contact-form');
const FORM_STORAGE_KEY = 'form-storage-key';

initPage();

const handleInput = event => {
  const { name, value } = event.target;
  const savedData = load(FORM_STORAGE_KEY) ?? {};
  //   savedData = savedData ? savedData : {};

  savedData[name] = value;
  save(FORM_STORAGE_KEY, savedData);
};

function initPage() {
  const savedData = load(FORM_STORAGE_KEY);
  if (savedData) {
    Object.entries(savedData).forEach(([name, value]) => {
      formRef.elements[name].value = value;
    });
  }
}

const handleSubmit = event => {
  event.preventDefault();
  const {
    elements: { name, email, message },
  } = event.currentTarget;

  if (name.value === '' || email.value === '' || message.value === '') {
    Notify.failure('Заповніть всі поля!');
    return;
  }
  const userData = {};

  const formData = new FormData(event.currentTarget);

  formData.forEach((value, name) => {
    userData[name] = value;
  });

  console.log(userData);

  remove(FORM_STORAGE_KEY);
  event.currentTarget.reset();
  Notify.success('Дякуємо за зворотній відгук!');
};

const throttledHandleInput = throttle(handleInput, 300);

formRef.addEventListener('submit', handleSubmit);
formRef.addEventListener('input', throttledHandleInput);
