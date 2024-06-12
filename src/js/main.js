var popupBruneOpen = document.querySelector(".products-background-brune");
var popupBlondeOpen = document.querySelector(".products-background-blonde");
var popupIpaOpen = document.querySelector(".products-background-ipa");

var popupBruneBox = document.querySelector(".popup-beer.t-brune");
var popupBlondeBox = document.querySelector(".popup-beer.t-blonde");
var popupIpaBox = document.querySelector(".popup-beer.t-ipa");

var popupBruneClose = document.querySelector(".popup-beer-cross.t-brune");
var popupBlondeClose = document.querySelector(".popup-beer-cross.t-blonde");
var popupIpaClose = document.querySelector(".popup-beer-cross.t-ipa");

popupBruneOpen.addEventListener("click", function () {
  popupBruneBox.classList.add("is-open");
});
popupBlondeOpen.addEventListener("click", function () {
  popupBlondeBox.classList.add("is-open");
});
popupIpaOpen.addEventListener("click", function () {
  popupIpaBox.classList.add("is-open");
});

popupBruneClose.addEventListener("click", function () {
  popupBruneBox.classList.remove("is-open");
});
popupBlondeClose.addEventListener("click", function () {
  popupBlondeBox.classList.remove("is-open");
});
popupIpaClose.addEventListener("click", function () {
  popupIpaBox.classList.remove("is-open");
});

var burger = document.querySelector(".burger-icon");
var menu = document.querySelector(".burger-menu");

var toggleMenu = function toggleMenu() {
  menu.classList.toggle("is-active");
  burger.classList.toggle("is-active");
};

burger.addEventListener("click", toggleMenu);
