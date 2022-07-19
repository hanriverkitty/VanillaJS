const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";
const toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));

    //JSON.parse Array형태로 만들어준다.
}

function deleteToDo(event) {
    //console.log(event.target.parentElement.innerText);
    const li = event.target.parentElement;
    li.remove();
}



function paintToDo(newTodo) {
    //html요소 추가
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handelToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    toDos.push(newTodo);
    paintToDo(newTodo);
    saveToDos();
}
toDoForm.addEventListener("submit", handelToDoSubmit);

function sayHello(item) {
    console.log("This is turn of ", item);
}

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos) {
    const parsedToDos = JSON.parse(savedToDos);
    //array에 있는 각각의  item에 대해 function을 실행할수 있다
    parsedToDos.forEach(sayHello);
}
