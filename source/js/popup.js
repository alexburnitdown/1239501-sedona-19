
var sendButton = document.querySelectorAll(".form-contacts__button");
var close = document.querySelector(".main-nav__close");
var popupError = document.querySelector(".form-modal--error");
var popupErrorClose = popupError.querySelector(".form-modal__button--error");
var popupSuccess = document.querySelector(".form-modal--success");
var popupSuccessClose = popupSuccess.querySelector(".form-modal__button--success");
var phone = document.querySelector("[name=form-phone]");
var email = document.querySelector("[name=form-email]");

if ()

sendButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  popupError.classList.add("modal-show");
});

sendButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  popupSuccess.classList.add("modal-show");
});

popupErrorClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  popupError.classList.remove("modal-show");
});

popupSuccessClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  popupSuccess.classList.remove("modal-show");
});

