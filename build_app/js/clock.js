const clock = document.querySelector("#clock")

//interval 주기적으로 일어나는것
function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    //padStart padEnd string이 원하는 길이를 충족시키지 못하면 앞이나 뒤에 문자를 붙임
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

//setInterval(sayHello, 5000);
getClock();
setInterval(getClock, 1000);