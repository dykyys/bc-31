// https://ru.wikipedia.org/wiki/UTF-8#:~:text=Unicode%20Transformation%20Format%2C%208%2Dbit,%D1%81%207%2D%D0%B1%D0%B8%D1%82%D0%BD%D0%BE%D0%B9%20%D0%BA%D0%BE%D0%B4%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%BE%D0%B9%20ASCII.
// https://ru.wikipedia.org/wiki/%D0%A1%D0%BF%D0%B8%D1%81%D0%BE%D0%BA_MIME-%D1%82%D0%B8%D0%BF%D0%BE%D0%B2

import 'material-icons/iconfont/material-icons.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { refs } from './js/refs';

import {
  getContacts,
  getContactById,
  updateContact,
  deleteContact,
} from './js/service/contact.service';
import { createContact } from './js/createContact';

import { loading, stopLoading } from './js/spinner';
loading();
getContacts()
  .then(data => {
    const sortedData = [...data].sort((a, b) => b.id - a.id);
    const markup = sortedData.map(createContact).join('');
    refs.list.insertAdjacentHTML('beforeend', markup);
    stopLoading();
  })
  .catch(error => {
    Notify.failure(`${error.message}. Shit happens!`);
    stopLoading();
  });

// getContactById(30).then(data => {
//   const markup = createContact(data);
//   console.log(markup);
//   refs.list.insertAdjacentHTML('beforeend', markup);
// });

refs.updateBtn.addEventListener('click', () => {
  const newContact = {
    id: 31,
    name: 'Mango 5',
    phone: 5555555,
  };
  loading();
  updateContact(newContact)
    .then(data => {
      console.log(data);
      Notify.success(`Contact ${data.name}, was updated!`);
      stopLoading();
    })
    .catch(error => {
      Notify.failure(`${error.message}. Shit happens!`);
      stopLoading();
    });
});

const onDeleteContact = event => {
  if (event.target.nodeName !== 'BUTTON') {
    return;
  }
  const item = event.target.closest('.js-contact-card');
  loading();
  deleteContact(item.dataset.id)
    .then(data => {
      item.remove();
      Notify.info(`${data.name} deleted!`);
      stopLoading();
    })
    .catch(error => {
      Notify.failure(`${error.message}. Shit happens!`);
      stopLoading();
    });
};
refs.list.addEventListener('click', onDeleteContact);
