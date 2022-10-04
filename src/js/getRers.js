export const getRefs = () => ({
  contactContainer: document.querySelector('.js-contacts-container'),
  create: document.querySelector('.js-create'),
  refresh: document.querySelector('.js-refresh'),
  update: document.querySelector('.js-update'),
  listBtnClose: document.querySelectorAll('.btn-close'),
  form: document.querySelector('.js-contact-form'),
  openModalBtn: document.querySelector('[data-modal-open]'),
  closeModalBtn: document.querySelector('[data-modal-close]'),
  modal: document.querySelector('[data-modal]'),
});
