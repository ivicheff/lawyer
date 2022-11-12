import logo from './menu.js';

const showForm = () => {
  const email = document.querySelector('.email-button');
  const emailButton = document.querySelector('.email-button__button');
  const emailForm = document.querySelector('.email-button__form');
  const emailSender = document.querySelector('.input-mail-form__sender');
  const emailMessage = document.querySelector('.input-mail-form__message');
  const emailSubmit = document.querySelector('.email-button__submit');
  const emailReceiver = document.querySelector('.input-mail-form__receiver');
  const navLinksInner = document.querySelector('.nav-links__inner');

  logo.addEventListener('click', () => {
    // if (email.style.display != "flex") {
    //   email.style.display = "flex";
    // } else {
    //   email.style.display = "none";
    // }
    return (email.style.display != "flex" ? email.style.display = "flex" : null)
  })



  emailButton.addEventListener('click', () => {
    let width = window.innerWidth;
    if (width <= 1200) {
      emailForm.style.flexDirection = "column";
      navLinksInner.style.display = "none";
    }
    if (emailForm.style.display != "flex") {
      emailForm.style.display = "flex";
      emailForm.style.flexDirection = "column";
      emailForm.style.alignItems = "center";

      emailButton.style.display = "none";
      //MAIL VALUE
      emailReceiver.value = "ivan.ivichev@yandex.com"
    }
  })

  emailSubmit.addEventListener('click', () => {
    emailForm.style.display = "none";
    emailButton.style.display = "flex";
    return (navLinksInner.style.display == "none" ? navLinksInner.style.display = "flex" : null)
  })

}

showForm();


