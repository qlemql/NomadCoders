const weather = document.querySelector(".js-weather");

const API_KEY = "d4e07388c20816f7b6dcd43bc1f34fac";
const COORDS = "coords";

function getWeather(lat, lng) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      const temperature = json.main.temp;
      const place = json.name;
      weather.innerText = `${temperature} @ ${place}`;
    }); //then은 데이터가 완전히 들어온 다음에 함수를 호출
}

function saveCoords(coordsObj) {
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSucces(position) {
  const latituede = position.coords.latituede;
  const longitude = position.coords.longitude;
  const coordsObj = {
    latituede,
    longitude,
  };
  saveCoords(coordsObj);
  getWeather(latituede, longitude);
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
    const parsedCoords = JSON.parse(loadedCoords);
    getWeather(parsedCoords.latituede, parsedCoords.longitude);
  }
}

function init() {
  loadCoords();
}
init();
