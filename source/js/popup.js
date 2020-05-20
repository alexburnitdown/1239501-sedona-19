var menuClose = document.querySelector(".main-nav__close");
var popupError = document.querySelector(".form-modal--error");
var popupErrorClose = popupError.querySelector(".form-modal__button--error");
var popupSuccess = document.querySelector(".form-modal--success");
var popupSuccessClose = popupSuccess.querySelector(".form-modal__button--success");
var phone = document.querySelector("[name=form-phone]");
var email = document.querySelector("[name=form-email]");
var form = document.querySelector(".form-contacts");
var menu = document.querySelector(".main-nav__list");
var burger = document.querySelector(".main-nav__toggle");

form.addEventListener("submit", function(evt) {
  if (!phone.value || !email.value) {
    evt.preventDefault();
    popupError.classList.add("form-modal__show");
  } else {
     evt.preventDefault();
    popupSuccess.classList.add("form-modal__show");
  }
});

popupErrorClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  popupError.classList.remove("form-modal__show");
});

popupSuccessClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  popupSuccess.classList.remove("form-modal__show");
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (popupError.classList.contains("form-modal__show") || popupSuccess.classList.contains("form-modal__show")) {
      evt.preventDefault();
      popupError.classList.remove("form-modal__show");
      popupSuccess.classList.remove("form-modal__show");
    }
  }
});

menuClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  menu.classList.add("site-list__hide");
  burger.classList.add("form-modal__show");
});

burger.addEventListener("click", function(evt) {
  evt.preventDefault();
  menu.classList.remove("site-list__hide");
  burger.classList.remove("form-modal__show");
});