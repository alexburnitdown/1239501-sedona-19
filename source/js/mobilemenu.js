
var menuClose = document.querySelector(".main-nav__close");
var menu = document.querySelector(".main-nav__list");
var burger = document.querySelector(".main-nav__toggle");



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
