// <⚠️ DONT DELETE THIS ⚠️>
// import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/

const over = document.querySelector("h2");

const superEventHandler = {
  Enter: function handleenter() {
    over.style.color = colors[0];
    over.innerHTML = "The mouse is here!";
  },
  leave: function handleleave() {
    over.style.color = colors[1];
    over.innerText = "The mouse is gone!";
  },

  resieze: function handleresize() {
    over.style.color = colors[2];
    over.innerText = "You just resized";
  },

  contextmenu: function handlecontextmenu() {
    over.style.color = colors[4];
    over.innerText = "That was a right click!";
  },
};

over.addEventListener("mouseenter", superEventHandler.Enter);
over.addEventListener("mouseleave", superEventHandler.leave);
window.addEventListener("resize", superEventHandler.resieze);
window.addEventListener("contextmenu", superEventHandler.contextmenu);
