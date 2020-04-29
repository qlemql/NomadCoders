const number = document.querySelector("h3");
let Var = number.querySelector("var");
const range = document.querySelector(".rangeSlider");
const bar = range.querySelector("input");
const form = document.querySelector(".form");
const div = form.querySelector(".guess");
let MY_NUMBER = div.querySelector(".rangeInput");
const button = div.querySelector(".btn");
const CHOSE = document.querySelector(".chose");
const RESULT = document.querySelector(".result");

const MAX = 200;
let MAX_NUMBER = bar.value;

number.innerText = `Generate a number between 0 and ${bar.value}`;

function numberGame() {
  const RANDOMDICE = randomGen();
  const span = document.createElement("span");
  span.innerText = `You Chose : ${MY_NUMBER.value}, the machine chose : ${RANDOMDICE}
  `;
  CHOSE.innerText = span.innerText;

  let image = document.querySelector(".img");
  if (RANDOMDICE === parseInt(MY_NUMBER.value)) {
    image.src =
      "https://img.animalplanet.co.kr/news/2019/10/31/700/191lerah0b366ig7n50c.jpg";
    RESULT.innerText = `You Won`;
  } else {
    image.src =
      "http://www.dnd2.net/files/attach/images/756/041/025/c76050dfcc10b20ed5a9fb6e7342e291.png";
    RESULT.innerText = `You Lose`;
  }
}

function handlePlay(event) {
  const currentValue = MY_NUMBER.value;
  numberGame();
}

function handleClick(event) {
  const currentValue = bar.value;
  number.innerText = `Generate a number between 0 and ${currentValue}`;
  MAX_NUMBER = currentValue;
}

function randomGen(a) {
  a = bar.value;
  const math = Math.floor(Math.random() * a);
  return math;
}

function init() {
  bar.addEventListener("input", handleClick);
  button.addEventListener("click", handlePlay);
}

init();
