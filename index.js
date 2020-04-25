let country = document.querySelector(".js-select");
let selectOption = country.options[country.selectedIndex];
let lastSelected = localStorage.getItem("country");

if (lastSelected) {
  country.value = lastSelected;
}

country.onchange = function () {
  lastSelected = country.options[country.selectedIndex].value;
  localStorage.setItem("country", lastSelected);
};
