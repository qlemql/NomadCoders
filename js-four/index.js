const bg = document.querySelector("body");

function handleResize() {
  let resize = window.innerWidth;
  if (resize > 1400) {
    bg.style.backgroundColor = "#F58334";
  } else if (resize > 1000) {
    bg.style.backgroundColor = "#8F4FAE";
  } else if (resize < 800) {
    bg.style.backgroundColor = "#EEBC12";
  } else {
    bg.style.backgroundColor = "#2E8CD5";
  }
}

window.addEventListener("resize", handleResize);
