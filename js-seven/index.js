const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoPending = document.querySelector(".js-toDoPending"),
  toDoFinished = document.querySelector(".js-toDoFinished");

const TODOS_LS = "toDos";
const FINISHED_LS = "finishedDo";

let toDos = [];
let finDos = [];

function deleteToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  toDoPending.removeChild(li);
  const cleanToPending = toDos.filter((toDo) => {
    return toDo.id !== parseInt(li.id);
  });
  toDos = cleanToPending;
  saveToDos();
}

function deleteFinishedDo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  toDoFinished.removeChild(li);
  const cleanToFinished = finDos.filter((finDo) => {
    return finDo.id !== parseInt(li.id);
  });
  finDos = cleanToFinished;
  saveFinDos();
}

function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function saveFinDos() {
  localStorage.setItem(FINISHED_LS, JSON.stringify(finDos));
}

function transFinDos(event) {
  const spanText = event.path[1].childNodes[0].innerHTML;
  deleteFinishedDo(event);
  paidntToDo(spanText);
}

function transToDo(event) {
  const spanText = event.path[1].childNodes[0].innerHTML;
  deleteToDo(event);
  finishedToDo(spanText);
}

function paidntToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const checkBtn = document.createElement("button");
  const span = document.createElement("span");
  const data = new Date();
  const newId = data.getTime();
  delBtn.innerText = "❌";
  delBtn.addEventListener("click", deleteToDo);
  checkBtn.innerText = "✔";
  checkBtn.addEventListener("click", transToDo);
  span.innerText = text;
  li.appendChild(span);
  li.appendChild(delBtn);
  li.appendChild(checkBtn);
  li.id = newId;
  toDoPending.appendChild(li);
  const toDoObj = {
    text: text,
    id: newId,
  };
  toDos.push(toDoObj);
  saveToDos();
}

function finishedToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const returnBtn = document.createElement("button");
  const span = document.createElement("span");
  delBtn.innerText = "❌";
  delBtn.addEventListener("click", deleteFinishedDo);
  returnBtn.innerText = "⏪";
  returnBtn.addEventListener("click", transFinDos);
  const data = new Date();
  const newId = data.getTime();
  span.innerText = text;
  li.appendChild(span);
  li.appendChild(delBtn);
  li.appendChild(returnBtn);
  li.id = newId;
  toDoFinished.appendChild(li);
  const finDoObj = {
    text: text,
    id: newId,
  };
  finDos.push(finDoObj);
  saveFinDos();
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paidntToDo(currentValue);
  toDoInput.value = "";
}

function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach(function (toDo) {
      paidntToDo(toDo.text);
    });
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
