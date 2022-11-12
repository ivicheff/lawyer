import logo from './menu.js';

const showForm = () => {
  const email = document.querySelector('.email-button');
  const emailButton = document.querySelector('.email-button__button');
  const emailForm = document.querySelector('.email-button__form');
  const emailSender = document.querySelector('.input-mail-form__sender');
  const emailMessage = document.querySelector('.input-mail-form__message');
  const emailSubmit = document.querySelector('.email-button__submit');
  const emailReceiver = document.querySelector('.input-mail-form__receiver');

  logo.addEventListener('click', () => {
    if (email.style.display != "flex") {
      email.style.display = "flex";
    } else {
      email.style.display = "none";
    }
  })

  emailButton.addEventListener('click', () => {
    let width = window.innerWidth;
    if (width <= 1200) {
      emailForm.style.flexDirection = "column";

    }


    if (emailForm.style.display != "flex") {
      emailForm.style.display = "flex";
      emailForm.style.flexDirection = "column";
      emailButton.style.display = "none";
      emailReceiver.value = "ivan.ivichev@yandex.com"
      emailForm.style.alignItems = "center";
      // styles
    }
  })

  emailSubmit.addEventListener('click', () => {
    emailForm.style.display = "none";
    emailButton.style.display = "flex";

  })

}

showForm();


