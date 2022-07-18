const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
//const loginButton = loginForm.querySelector("button");
const link = document.querySelector("a");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
const savedUsername = localStorage.getItem(USERNAME_KEY);

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    //greeting.innerText = "Hello " + username;
    paintGreetings(username);
    console.log(username);

    /*
    if (username === "") {
        alert("Plase write your name");
    } else if (username.length > 15) {
        alert("Your name is too long.")
    }*/


}

function paintGreetings(username) {
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `Hello ${username}`;
}
//loginButton.addEventListener("click", handleBtnClick);
if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUsername);
}



/*function handleLinkClick(event) {
    event.preventDefault();
    console.log(event);
    alert("click!");
}
link.addEventListener("click", handleLinkClick);*/