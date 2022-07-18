const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
//const loginButton = loginForm.querySelector("button");


function onLoginSubmit(event) {
    event.preventDefault();
    const username = loginInput.value;
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