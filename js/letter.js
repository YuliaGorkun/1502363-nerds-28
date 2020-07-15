var letterLink = document.querySelector(".letter-button");
var letterPopup = document.querySelector(".letter");
var letterClose = letterPopup.querySelector(".modal-close");
var letterForm = letterPopup.querySelector(".letter-form");
var letterName = letterPopup.querySelector(".letter-icon-name");
var letterEmail = letterPopup.querySelector(".letter-icon-email");
var letterText = letterPopup.querySelector(".letter-icon-text");
var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("letter");
} catch (err) {
  isStorageSupport = false;
}



letterLink.addEventListener("click", function (evt) {
  evt.preventDefault();
   letterPopup.classList.add("modal-show");
   if (storage) {
   letterName.value = storage;
    letterEmail.focus();
  } else {
    letterName.focus();
  }
});


letterClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  letterPopup.classList.remove("modal-show");
  letterPopup.classList.remove("modal-error");
});


letterForm.addEventListener("submit", function (evt) {
   if (!letterName.value || !letterEmail.value || !letterText.value) {
     evt.preventDefault();
       letterPopup.classList.remove("modal-error");
    loginPopup.offsetWidth = loginPopup.offsetWidth;
    letterPopup.classList.add("modal-error");
  } else {
    localStorage.setItem("letter", letterName.value);
  }
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
