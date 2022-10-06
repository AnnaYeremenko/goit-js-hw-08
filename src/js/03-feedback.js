import throttle from 'lodash.throttle';
const localStorageKey = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const textarea = document.querySelector('textarea');
const inputEl = document.querySelector('input');

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormInput, 500));

function onFormInput(evt) {
  const formData = { email: inputEl.value, message: textarea.value };
  // console.log(formData);
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
}

function onFormSubmit(evt) {
  evt.preventDefault();
  // console.log(JSON.parse(localStorage.getItem(localStorageKey)));
  console.log(JSON.parse(localStorage.getItem(localStorageKey)));
  evt.currentTarget.reset();
  localStorage.removeItem(localStorageKey);
}

function cheksStorage() {
  const parseSavedData = JSON.parse(localStorage.getItem(localStorageKey));
  // console.log(localStorage.getItem(localStorageKey));
  // console.log(parseSavedData);
  if (parseSavedData) {
    inputEl.value = parseSavedData.email;
    textarea.value = parseSavedData.message;
  } else {
    inputEl.value = '';
    textarea.value = '';
  }
}
cheksStorage();

