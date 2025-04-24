//  1-mashq

const name: string = "azizbek";
const age: number = 19;
const student: boolean = true;

console.log(name, age, student);

//  2-mashq

function getSum(num1: number, num2: number): number {
  return num1 + num2;
}

const sum = getSum(5, 8);
console.log(sum);

//  3-mashq

interface IPerson {
  name: string;
  age: number;
}

const obj: IPerson = {
  name: "Ali",
  age: 28,
};

console.log(obj);

//  4-mashq

const array: number[] = [1, 2, 3, 4, 5];

for (let index = 0; index < array.length; index++) {
  console.log(array[index]);
}

//  5-mashq

enum WeeekDay {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

let day: WeeekDay = WeeekDay.Sunday;
console.log(day);

//  6-mashq

type StrOrInt = string | number;

function Io(item: StrOrInt): void {
  console.log(item);
}

const func = Io(85);
console.log(func);

//  7-mashq

function Info(name: string, age: number): string {
  return `Salom ${name}, siz ${age} yoshdasiz`;
}

const func2 = Info("Azamat", 17);
console.log(func2);

//  8-mashq

function CheckType(item2: any): string {
  return typeof item2;
}

const typeItem = CheckType("sdjsdi");

console.log(typeItem);

//  9-mashq

class Student {
  name: string;
  course: number;
  constructor(name: string, course: number) {
    this.name = name;
    this.course = course;
  }

  Info(): string {
    return `${this.name} ${this.course}`;
  }
}

const student1 = new Student("Shoxruh", 1);

console.log(student1.Info());

//  10-mashq

function firstElement<T>(arr: T[]): T {
  return arr[0];
}

let firstNumber = firstElement([10, 20, 30]);
let firstAl = firstElement(["a", "b", "c"]);

console.log(firstNumber, firstAl);
