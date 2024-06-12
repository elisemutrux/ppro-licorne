var popupOpen = document.querySelector(".products-background-brune");
var popupBox = document.querySelector(".popup-beer");
var popupClose = document.querySelector(".popup-beer-cross");

popupOpen.addEventListener("click", function (toogle) {
  popupBox.classList.add("is-open");
});

popupClose.addEventListener("click", function (toogle) {
  popupBox.classList.remove("is-open");
});
