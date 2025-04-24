"use strict";
//  1-mashq
Object.defineProperty(exports, "__esModule", { value: true });
const name = "azizbek";
const age = 19;
const student = true;
console.log(name, age, student);
//  2-mashq
function getSum(num1, num2) {
    return num1 + num2;
}
const sum = getSum(5, 8);
console.log(sum);
const obj = {
    name: "Ali",
    age: 28,
};
console.log(obj);
//  4-mashq
const array = [1, 2, 3, 4, 5];
for (let index = 0; index < array.length; index++) {
    console.log(array[index]);
}
//  5-mashq
var WeeekDay;
(function (WeeekDay) {
    WeeekDay[WeeekDay["Monday"] = 0] = "Monday";
    WeeekDay[WeeekDay["Tuesday"] = 1] = "Tuesday";
    WeeekDay[WeeekDay["Wednesday"] = 2] = "Wednesday";
    WeeekDay[WeeekDay["Thursday"] = 3] = "Thursday";
    WeeekDay[WeeekDay["Friday"] = 4] = "Friday";
    WeeekDay[WeeekDay["Saturday"] = 5] = "Saturday";
    WeeekDay[WeeekDay["Sunday"] = 6] = "Sunday";
})(WeeekDay || (WeeekDay = {}));
let day = WeeekDay.Sunday;
console.log(day);
function Io(item) {
    console.log(item);
}
const func = Io(85);
console.log(func);
//  7-mashq
function Info(name, age) {
    return `Salom ${name}, siz ${age} yoshdasiz`;
}
const func2 = Info("Azamat", 17);
console.log(func2);
//  8-mashq
function CheckType(item2) {
    return typeof item2;
}
const typeItem = CheckType("sdjsdi");
console.log(typeItem);
//  9-mashq
class Student {
    name;
    course;
    constructor(name, course) {
        this.name = name;
        this.course = course;
    }
    Info() {
        return `${this.name} ${this.course}`;
    }
}
const student1 = new Student("Shoxruh", 1);
console.log(student1.Info());
//  10-mashq
function firstElement(arr) {
    return arr[0];
}
let firstNumber = firstElement([10, 20, 30]);
let firstAl = firstElement(["a", "b", "c"]);
console.log(firstNumber, firstAl);
