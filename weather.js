const COORDS = "coords";

function handleGeoSucces(position) {
  console.log(position);
}

function handleGeoErro() {
  console.log("Cant access geo location");
}

function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoErro);
}

function loadCoords() {
  const loadedCoords = localStorage.getItem(COORDS);
  if (loadedCoords === null) {
    askForCoords();
  } else {
    //getWeather
  }
}

function init() {}

init();
