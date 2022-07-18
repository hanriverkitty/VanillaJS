const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
//const loginButton = loginForm.querySelector("button");
const link = document.querySelector("a");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem("username", username);
    //greeting.innerText = "Hello " + username;
    greeting.innerText = `Hello ${username}`;

    greeting.classList.remove(HIDDEN_CLASSNAME);
    console.log(username);

    /*
    if (username === "") {
        alert("Plase write your name");
    } else if (username.length > 15) {
        alert("Your name is too long.")
    }*/


}
//loginButton.addEventListener("click", handleBtnClick);
loginForm.addEventListener("submit", onLoginSubmit);



/*function handleLinkClick(event) {
    event.preventDefault();
    console.log(event);
    alert("click!");
}
link.addEventListener("click", handleLinkClick);*/