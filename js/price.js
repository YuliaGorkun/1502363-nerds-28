var priceLink = document.querySelector(".product-price");
var pricePopup = document.querySelector(".price");
var priceClose = pricePopup.querySelector(".modal-close");
var isStorageSupport = true;
var storage = "";


priceLink.addEventListener("click", function (evt) {
  evt.preventDefault();
   pricePopup.classList.add("modal-show");
});


window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (letterPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      letterPopup.classList.remove("modal-show");
       letterPopup.classList.remove("modal-error");
    }
  }
});
