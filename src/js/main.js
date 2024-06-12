var burger = document.querySelector(".burger");
var menu = document.querySelector(".burger-menu");

var toggleMenu = function toggleMenu() {
  menu.classList.toggle("is-active");
  burger.classList.toggle("is-active");
};

burger.addEventListener("click", toggleMenu);
