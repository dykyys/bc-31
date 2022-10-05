// https://ru.wikipedia.org/wiki/UTF-8#:~:text=Unicode%20Transformation%20Format%2C%208%2Dbit,%D1%81%207%2D%D0%B1%D0%B8%D1%82%D0%BD%D0%BE%D0%B9%20%D0%BA%D0%BE%D0%B4%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%BE%D0%B9%20ASCII.
// https://ru.wikipedia.org/wiki/%D0%A1%D0%BF%D0%B8%D1%81%D0%BE%D0%BA_MIME-%D1%82%D0%B8%D0%BF%D0%BE%D0%B2

import 'material-icons/iconfont/material-icons.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { refs } from './refs';

import {
  getContacts,
  getContactById,
  updateContact,
  deleteContact,
} from './service/axios-contact.service';
import { createContactMarkup } from './createContactMarkup';

import { loading, stopLoading } from './spinner';

initPage();

async function initPage() {
  loading();
  try {
    const data = await getContacts();
    const sortedData = [...data].sort((a, b) => b.id - a.id);
    const markup = sortedData.map(createContactMarkup).join('');
    refs.list.insertAdjacentHTML('beforeend', markup);
  } catch (error) {
    Notify.failure(`${error.message}. Shit happens!`);
  } finally {
    stopLoading();
  }
}

refs.updateBtn.addEventListener('click', async () => {
  const newContact = {
    id: 23,
    name: 'Mango 5',
    phone: 5555555,
  };
  loading();
  try {
    const data = await updateContact(newContact);
    console.log(data);
    Notify.success(`Contact ${data.name}, was updated!`);
  } catch (error) {
    Notify.failure(`${error.message}. Shit happens!`);
  } finally {
    stopLoading();
  }
});

const onItemClick = event => {
  if (event.target.nodeName === 'UL') {
    return;
  }
  const item = event.target.closest('.js-contact-card');

  loading();
  if (event.target.nodeName === 'BUTTON') {
    onDeleteBtnClick(item);
    return;
  }

  if (event.target.nodeName !== 'A') {
    contactInfo(item.dataset.id);
  }
};

refs.list.addEventListener('click', onItemClick);

async function contactInfo(id) {
  toggleModalInfo();
  try {
    const data = await getContactById(id);
    const markup = createContactMarkup(data);
    refs.infoBox.innerHTML = markup;
  } catch (error) {
    Notify.failure(`${error.message}. Shit happens!`);
  } finally {
    stopLoading();
  }
}

async function onDeleteBtnClick(item) {
  try {
    const data = await deleteContact(item.dataset.id);
    item.remove();
    Notify.info(`${data.name} deleted!`);
  } catch (error) {
    Notify.failure(`${error.message}. Shit happens!`);
  } finally {
    stopLoading();
  }
}

function toggleModalInfo() {
  refs.infoBackdrop.classList.toggle('is-hidden');
  refs.infoBox.innerHTML = '';
}
refs.infoBackdrop.addEventListener('click', event => {
  if (
    event.target === event.currentTarget ||
    event.target.nodeName === 'BUTTON'
  ) {
    toggleModalInfo();
  }
});
