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