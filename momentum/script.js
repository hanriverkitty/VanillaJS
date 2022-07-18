// const 상수, 변하지 않는값
// let 바뀔수 있는값
// boolean 참 혹은 거짓
// null 은 값이 비어있다
const a = 5;
const b = 2;
const hanriver = "123"
let c = 5;
let d = 2;
let hanriver1 = "123"
console.log(12312312);
console.log("hello");
console.log(a + b);
console.log(a * b);
console.log(a / b);
console.log("hello " + hanriver);
console.log(c + d);
console.log(c * d);
console.log(c / d);
console.log("hello " + hanriver1);
hanriver1 = "456";
console.log("hello " + hanriver1);
const amIFat = true;
console.log(amIFat);
const null1 = null;
console.log(null1);
let something;
console.log(something, null1);
//undefined 변수는 존재하나 값이 전달되지 않았다, 메모리는 존재한다
const mon = "mon";
const tue = "tue";
const wed = "wed";
const thu = "thu";
const fri = "fri";
const sat = "sat";
const sun = "sun";
const daysOfWeek = [mon, tue, wed, thu, fri, sat, sun];
const daysOfWeek1 = ["mon", "tue", "wed", "thu", "fri", "sat"];

console.log(daysOfWeek);
console.log(daysOfWeek1);
console.log(daysOfWeek1[4]);
daysOfWeek1.push("sun");
console.log(daysOfWeek1);


//object
const player = {
    name: "nico",
    points: 10,
    fat: true,
};
console.log(player);
console.log(player.name);
console.log(player["name"]);

//change value
player.fat = false;
console.log(player);

//add object
player.lastName = "potato";
console.log(player);

player.points = player.points + 15;
console.log(player);


function sayHello(nameOfPerson, age) {
    console.log("Hello my name is " + nameOfPerson + " and I'm " + age);
}
sayHello("nico", 10);
sayHello("dal", 23);
sayHello("lynn", 21);

function plus(firstNumber, secondNumber) {
    console.log(firstNumber + secondNumber);
}

function divide(a, b) {
    console.log(a / b);
}
plus(60, 8);
divide(98, 20);

const player1 = {
    name: "nico",
    sayHello1: function (otherPersonsName) {
        console.log("hello! " + otherPersonsName + " nice to meet you");
    },
};

console.log(player1);
console.log(player1.name);
player1.sayHello1("lynn");
player1.sayHello1("nico");

const age = 96;
function calculateKrAge(ageOfForeigner) {
    return ageOfForeigner + 2;
}
const krAge = calculateKrAge(age);
console.log(krAge);

// const promptAge = prompt("How old are you?");
// console.log(typeof parseInt(promptAge));
// //실행하는 동안 JS의 실행을 멈춘다. 뜨는 팝업에 css도 적용못한다

// const promptAge1 = parseInt(prompt("How old are you?"));
// console.log(promptAge1);

// console.log(isNaN(promptAge1));
// //isNaN 숫자가 아닐경우 true 
// if (isNaN(promptAge1) || promptAge1 < 0) {
//     console.log("Please write a real positive number");
// } else if (promptAge1 < 18) {
//     console, log("You are too young");
// } else if (promptAge1 >= 18 && promptAge1 <= 50) {
//     console.log("You can drink");
// } else if (promptAge1 > 50 && promptAge1 <= 80) {
//     console.log("You should exercise");
// } else if (promptAge1 > 80) {
//     console.log("You can do whatever you want.");
// }

document.title = "hello from JS"
//document는 모든것의 시작점

const title = document.getElementById("title");
console.log(title);
console.dir(title);
title.innerText = "Got you";
console.log(title.id);
console.log(title.className);

const hellos = document.getElementsByClassName("hello");
console.log(hellos);

const title1 = document.getElementsByTagName("h1");
console.log(title1);

//querySelector element를 CSS 방식으로 검색할 수 있다
//const title2 = document.querySelector(#hello");
//hello라는 id값의 것 가져오기

const title2 = document.querySelector(".hello h1");
//hello class의 h1이 여러개가 있어도 첫번째것만 가져온다
console.log(title2);
title2.style.color = "red";


const title3 = document.querySelectorAll(".hello h1");
console.log(title3);

function handleTitleClicked() {
    title2.style.color = "yellow";
}
title2.addEventListener("click", handleTitleClicked);