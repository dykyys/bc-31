'use strict';
/*
 *Події елементів форм. focus, blur, change, input, submit
 */

const inputRef = document.querySelector('.js-username-input');
const btnRef = document.querySelector('.js-contact-form-submit');
const checkboxRef = document.querySelector('.js-policy-checkbox');
const formRef = document.querySelector('.js-contact-form');
const outputRef = document.querySelector('.js-username-output');

const handleInput = (event) => {
  const { value, dataset } = event.target;
  const requiredLength = Number(dataset.length);

  outputRef.textContent = value.trim();

  event.target.classList.remove('focus');

  const inputLength = value.length === requiredLength;
  const add = inputLength ? 'valid' : 'invalid';
  const remove = !inputLength ? 'valid' : 'invalid';

  changeClass(add, remove, event.target);
  //   if (value.length === requiredLength) {
  //     changeClass('valid', 'invalid', event.target);
  //   } else {
  //     changeClass('invalid', 'valid', event.target);
  //   }
};

const changeClass = (add, remove, element) => {
  element.classList.add(add);
  element.classList.remove(remove);
};

const onFocus = (event) => {
  event.target.classList.add('focus');
};

const onFormInput = (event) => {
  if (checkboxRef.checked && inputRef.value.length === 8) {
    btnRef.disabled = false;
    return;
  }
  btnRef.disabled = true;
};

const handleSubmit = (event) => {
  event.preventDefault();
  const {
    target: { name },
  } = event;
  console.log(name.value);
};

formRef.addEventListener('submit', handleSubmit);

formRef.addEventListener('input', onFormInput);
inputRef.addEventListener('focus', onFocus);
inputRef.addEventListener('input', handleInput);

// const formRef = document.querySelector('.js-username-input');
// let count = 0;
// const onChange = () => {
//   count += 1;
//   console.log(count);
//   console.log(' change');
// };
// const onBlur = () => {
//   count += 1;
//   console.log(count);
//   console.log('blur');
// };

// formRef.addEventListener('blur', onBlur);
// formRef.addEventListener('change', onChange);
//DRY
