'use strict';
import throttle from 'lodash.throttle';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
// import storageAPI from './storage';

const formRef = document.querySelector('.js-contact-form');
const FORM_STORAGE_KEY = 'form-storage-key';

let userData = {
  name: formRef.elements.name.value,
  email: formRef.elements.email.value,
  message: formRef.elements.message.value,
};

initPage();

const handleInput = event => {
  const { name, value } = event.target;

  userData[name] = value;

  const strData = JSON.stringify(userData);
  localStorage.setItem(FORM_STORAGE_KEY, strData);
};

function initPage() {
  let savedData = localStorage.getItem(FORM_STORAGE_KEY);

  if (savedData) {
    userData = JSON.parse(savedData);
    formRef.elements.name.value = userData.name;
    formRef.elements.email.value = userData.email;
    formRef.elements.message.value = userData.message;
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
  userData = {};
  const formData = new FormData(event.currentTarget);

  formData.forEach((value, name) => {
    userData[name] = value;
  });
  console.log(userData);
  localStorage.removeItem(FORM_STORAGE_KEY);
  event.currentTarget.reset();
  Notify.success('Дякуємо за зворотній відгук!');
};

const throttledHandleInput = throttle(handleInput, 300);

formRef.addEventListener('submit', handleSubmit);
formRef.addEventListener('input', throttledHandleInput);
