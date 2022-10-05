import { Notify } from 'notiflix/build/notiflix-notify-aio';
import throttle from 'lodash.throttle';
import localStorApi from './localestorage';
import { loading, stopLoading } from './spinner';
import { refs } from './refs';
import { createContact } from './service/contact.service';
import { createContactMarkup } from './createContactMarkup';

const LOCAL_STORAGE_KEY = 'user-data';
initForm();
const toggleHiddenModal = () => {
  refs.backdrop.classList.toggle('is-hidden');
};

const handleSubmit = async event => {
  event.preventDefault();
  const { name, email, phone } = event.target.elements;

  if (name.value === '' || email.value === '' || phone.value === '') {
    Notify.failure('Заповніть всі поля і спробуйте ще раз!');
    return;
  }

  const userData = {};

  const formData = new FormData(refs.form);

  formData.forEach((value, name) => {
    userData[name] = value;
  });
  loading();

  try {
    const data = await createContact(userData);
    Notify.success(`${data.name} created!`);
    console.log(data);
    const markup = createContactMarkup(data);
    refs.list.insertAdjacentHTML('afterbegin', markup);
  } catch (error) {
    Notify.failure(`${error.message}. Shit happens!`);
  } finally {
    stopLoading();
  }

  toggleHiddenModal();
  event.target.reset();
  localStorApi.remove(LOCAL_STORAGE_KEY);
};

const handleInput = event => {
  const { name, value } = event.target;
  let persistedData = localStorApi.load(LOCAL_STORAGE_KEY);
  persistedData = persistedData ? persistedData : {};

  persistedData[name] = value;
  localStorApi.save(LOCAL_STORAGE_KEY, persistedData);
};

function initForm() {
  let persistedData = localStorApi.load(LOCAL_STORAGE_KEY);
  if (persistedData) {
    Object.entries(persistedData).forEach(([name, value]) => {
      refs.form.elements[name].value = value;
    });
  }
}

refs.openModal.addEventListener('click', toggleHiddenModal);
refs.closeModal.addEventListener('click', toggleHiddenModal);

refs.form.addEventListener('input', throttle(handleInput, 300));
refs.form.addEventListener('submit', handleSubmit);
