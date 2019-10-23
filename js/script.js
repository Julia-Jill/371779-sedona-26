var button = document.querySelector(".search-intro-btn");
var popup = document.querySelector(".form-search");
var arrival = popup.querySelector("[name=arrival-date]");

button.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.toggle("modal-show");
  arrival.focus();
  if (popup.classList.contains("modal-show")) {
	  evt.preventDefault();
    popup.classList.add("modal-hide");
  }
})


window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("modal-show")) {
      evt.preventDefault();
      popup.classList.remove("modal-show");
    }
  }
})
