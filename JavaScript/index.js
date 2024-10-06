console.log("Run ACPT..!");
console.log("DTMC");

const x = 15;
const y = 35;
const tot = x + y;

console.log(tot);

// document.write("DTMC");
// document.write("<h1>DTMC</h1>");
// document.write("<input type='Text '/>");

// number
const num = 50;

// string
const string = "Udaya Danushka";

// boolean
const bool = true;

// object
const obj = {
  name: "Udaya danushka",
  Ag: 31,
  DO: "1993/04/21",
  havefried: true,
};

// Array
const arry = [
  45,
  "ACPT",
  true,
  { name: "Udaya", Age: 31, DOB: "1993/04/21" },
  [21, "Danushka", false],
];

console.log(arry);

document.write("</br>");
document.write("</br>");
document.write(arry);

// =======================================================================================================================
// LET VARIABLE TYPE

let a = 20;
a = 30;

// in block scoope
{
  let ab = 20;
  //   console.log(ad);
}
// console.log(ad);

// Summery (let)
// 1. let variable ekak re declar karanne ba (let a) namuth re assign karanna puluwan (a = 30).
// 2. block scoope ekak athle hadana let varble ekak block scoope eken pita bavitha karanna ba.
// =======================================================================================================================

// VAR VARIABLE TYPE

var mname = "udaya";
console.log(mname);

var mname = "Danushka";
mname = "Yamange";
console.log(mname);

// in block scoope
{
  var age = 30;
}
console.log(age);

// Summerey (Var)
// 1. var variable type eke variable re declar karannath re assign karannath puluwan.
// 2. block scoope ekak athule hadana var variable ekak scoope eken pitath bavitha karanna puluwan.
// =======================================================================================================================

// CONST VARIABLE TYPE

const name1 = "Udaya";
// const name1 = "Danushka";
// name1 = "Danushka";
console.log(name1);

{
  const age2 = "60";
  console.log(age2);
}
// console.log(age2);

// Summerey (const)
// 1. const variable type eke variable re declar karannath ba re assign karannath ba.
// 2. block scoope ekak athule hadana const variable ekak scoope eka athule bavitha karanna puluwan pitadi bavitha karanna ba.
// =======================================================================================================================

// ARITHMETIC OPERATORS
const n1 = 25;
const n2 = 10;

// ADDITION (+)
const add = n1 + n2;
console.log(add);

// SUBTRACTION
const sub = n1 - n2;
console.log(sub);

// MULTIPICATION (*)
const mul = n1 * n2;
console.log(mul);

// DIVISION (/)
const div = n1 / n2;
console.log(div);

// MODULS (%)
const mod = n1 % n2;
console.log(mod);

// INCREMENT (++)
let j = 50;
j++;
console.log(j);

// DECREMENT (--)
let k = 26;
k--;
console.log(k);

// =======================================================================================================================

// comparison operators
const l = 13;
const m = 14;

// 1. Equal (==)
console.log(l == m);

// 2. Equal(===)

// Not equal(!==)
console.log(l !== m);

// Greater than (>) visala
console.log(l > m);

// less than (<) Kuda
console.log(l < m);

// Greater than or equl to (>=) visala ho samana
console.log(l >= m);

// less than or equal to (<=) Kuda ho samana
console.log(l <= m);

// ==========================================================================================================================

// Logical operators (AND, OR, NOT)
const p = false;
const q = true;

// AND (&&) Dekama true nam vitharak 'true'
console.log(p && q);

// OR (||) deken ekak hari true unoth output eka 'true'
console.log(p || q);

// NOT (!) dena variable eke virudda eka thama output eka
console.log(!p);

// ==========================================================================================================================

// Flow controllers

const st1 = 175;
const st2 = 125;

// IF

if (st1 == st2) {
  console.log("You are equal..!");
} else if (st1 > st2) {
  console.log("st1 you are greater than st2..!");
} else if (st1 < st2) {
  console.log("st2 You are not equal and not greater than to st1 ");
}

// SWITCH

const val = "Saranga";

switch (val) {
  case "Udaya":
    console.log("you are udaya");
    break;
  case "Danuhska":
    console.log("You are Danushka");
    break;
  case "Saranga":
    console.log("You are Saranga");
    break;
  default:
    console.log("Error...!");
}

// =======================================================================================================================

// Input marks 1-100

// 75-100 = A, 74-65 = B, 64-45 = C, 44-35 = S, 34> =Fail

const marks = 64;

if (marks > 100) {
  console.log("Error input");
} else if (marks >= 75) {
  console.log("A");
} else if (marks >= 65) {
  console.log("B");
} else if (marks >= 45) {
  console.log("C");
} else if (marks >= 35) {
  console.log("S");
} else if (marks < 0) {
  console.log("Error input");
} else {
  console.log("Fail");
}

// =======================================================================================================================

// Arrary get data
const array1 = [25, { Name: "Udaya" }, "Nimal"];

console.log(array1[1]);

const Fruits = ["Apple", "Mango", "Banana", "Orange", "Papaya"];

// 5 weni index eka console log ekata ganna vidiya
console.log(Fruits[4]);

// =======================================================================================================================

// POP Method

// Array ekaka tjiyena last index eka makala danna puluwan
// Array ekaka thiyena makunu last index eka varible ekakata ganna puluwan

const remove_fruit = Fruits.pop();
console.log(Fruits);
console.log(remove_fruit);

// PUSH Method

Fruits.push("Kiwi");
console.log(Fruits);

// SHIFT Method

const remove_1index = Fruits.shift();
console.log(Fruits);
console.log(remove_1index);

// UNSHIFT Method

Fruits.unshift("Kiwi");
console.log(Fruits);

// =======================================================================================================================

// FOR Loop

for (let i = 0; i < 10; i++) {
  console.log(i);
}

for (let i = 0; i < Fruits.length; i++) {
  console.log(Fruits[i]);
}

// let i = 0; (Expasion - 1)
// i < 0; (Expasion - 2)
// i++ (Expasion - 3)
// { console.log(i);} (Code block)

// =======================================================================================================================

// WHILE Loop

let ii = 0;

while (ii < Fruits.length) {
  console.log(Fruits[ii]);
  ii++;
}

// While loop eka condition check karala after run body

// DO WHILE Loop
let yud = 0;

do {
  console.log("Y Udaya Danushka");
  yud++;
} while (yud < 100);

// For Fruits array

let yu = 0;

do {
  console.log(Fruits[yu]);
  yu++;
} while (yu < Fruits.length);

// =======================================================================================================================

// Global scoope

const global = 25;

// Function scope

function getName() {
  const fun = false;
}

// block scope
{
}

// =======================================================================================================================

// Object (Object ekak haila thiyenne properties and behevier wala ekathuwak vidiyata)
const car = {
  color: "red",
  wheelCount: 4,
  Bname: "BMW",
  year: "2017",
  drive: function () {
    console.log("..................................");
  },
  break: function () {
    console.log("..................................");
  },
};

// Access object and get data
console.log(car.year);
car.break();
car.drive();

// =======================================================================================================================

// Function types

// Name function
function getName() {
  console.log("This is the Name Function output");
}

// Anonymouse Function
let Address = function () {
  console.log("This is the Anonymouse function output");
};

// Arrow function
const setAddress = () => {
  console.log("This is the Arrow Funtion output");
};

// Name Function called
getName();

// Anonymouse Function called
Address();

// Arrow Function called
setAddress();

// =======================================================================================================================

// Examples for function
// Normal funtion
function getData() {
  console.log("Y Udayada Danushka");
}

getData();

// Using parameters
function equalNumer(number1, number2) {
  console.log(number1 + number2);
}

equalNumer(25, 35);

function passName(firstName, lastName) {
  console.log("Full Name : ", firstName, lastName);
}

passName("Udaya", "Danushka");

// =======================================================================================================================

// Function return value (Using Arrow function)

const getDetails = (name2) => {
  return name2;
};

const details = getDetails("My name is Udaya");
console.log(details);

// Function ekaka default return value ekak enawa eka pitata yanna nodi block karagena inne block scope eken eka ain kalama nikamma return value eka catch karanna puluwan

// Ex

const getDetails1 = (name3) => "My name is" + name3;

const details1 = getDetails1("kasun");
console.log(details1);

// Input Student name and marks
// Marks > 60
// Print => "Eshan is pass" or Fail

function stdetils(stName, stMarks) {
  let stState;
  if (stMarks > 60) {
    stState = "Passed";
  } else {
    stState = "Fail";
  }
  return { stName, stState };
}

const stResult = stdetils("Eshan", 40);
console.log(stResult.stName + " is " + stResult.stState);

// =======================================================================================================================
// Event handaling

// On Click

function handOver() {
  console.log("This is the onclick event output");
}

function showMe() {
  document.getElementById("displayText").innerText = "Udaya Danushka";
}

// On Change

function onChangefunction() {
  const getValue = document.getElementById("onChange").value;
  console.log(getValue);
}

// On Mouse Over Event

function mouseOverfunction() {
  console.log("On Mouse Hover Event");
}
function mouseOutfunction() {
  console.log("On Mouse Out Event");
}

// On Key Up Event

function onKeyupfunction() {
  console.log(document.getElementById("onKeyup").value);
}

// On Key Down Event

function onKeydownfunction() {
  console.log(document.getElementById("onKeydown").value);
}

// On Key Press Event

function onKeypressfunction() {
  console.log(document.getElementById("onKeypress").value);
}
