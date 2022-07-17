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
