var popupBruneOpen = document.querySelector(".products-background-brune");
var popupBlondeOpen = document.querySelector(".products-background-blonde");
var popupIpaOpen = document.querySelector(".products-background-ipa");

var popupBruneBox = document.querySelector(".popup-beer.t-brune");
var popupBlondeBox = document.querySelector(".popup-beer.t-blonde");
var popupIpaBox = document.querySelector(".popup-beer.t-ipa");

var popupBruneClose = document.querySelector(".popup-beer-cross.t-brune");
var popupBlondeClose = document.querySelector(".popup-beer-cross.t-blonde");
var popupIpaClose = document.querySelector(".popup-beer-cross.t-ipa");

popupBruneOpen.addEventListener("click", function (toogle) {
  popupBruneBox.classList.add("is-open");
});
popupBlondeOpen.addEventListener("click", function (toogle) {
  popupBlondeBox.classList.add("is-open");
});
popupIpaOpen.addEventListener("click", function (toogle) {
  popupIpaBox.classList.add("is-open");
});

popupBruneClose.addEventListener("click", function (toogle) {
  popupBruneBox.classList.remove("is-open");
});
popupBlondeClose.addEventListener("click", function (toogle) {
  popupBlondeBox.classList.remove("is-open");
});
popupIpaClose.addEventListener("click", function (toogle) {
  popupIpaBox.classList.remove("is-open");
});
