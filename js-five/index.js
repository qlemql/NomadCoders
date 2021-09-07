// import "./styles.css";

// You're gonna need this
const NINE_HOURS_MILLISECONDS = 32400000;
const clockContainer = document.querySelector(".js-clock"),
  clockTitle = clockContainer.querySelector("h1");

function getTime() {
  // Don't delete this.
  const xmasDay = new Date("2020-12-24:00:00:00+0900");
  const now = new Date();
  const distance = xmasDay - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  clockTitle.innerText = `${days < 10 ? `0${days}` : days}일  ${
    hours < 10 ? `0${hours}` : hours
  }시간  ${minutes < 10 ? `0${minutes}` : minutes}분  ${
    seconds < 10 ? `0${seconds}` : seconds
  }초`;
}
function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();
