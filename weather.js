const API_KEY = "d4e07388c20816f7b6dcd43bc1f34fac";
const COORDS = "coords";

function saveCoords(coordsObj) {
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSucces(position) {
  const latituede = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    latituede,
    longitude,
  };
  saveCoords(coordsObj);
}

function handleGeoError() {
  console.log("Cant access geo loaction");
}

function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

function loadCoords() {
  const loadedCoords = localStorage.getItem(COORDS);
  if (loadedCoords === null) {
    askForCoords();
  } else {
    // getWeather
  }
}

function init() {
  loadCoords();
}
init();
