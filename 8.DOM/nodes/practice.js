"use strict";
const prompt = require("prompt-sync")();

// Q1
// let age = prompt("Enter your age: ");
// age = Number.parseInt(age);

// const ageVerify = (age) => age > 18;

// // Q2

// if (age > 0) {
//   if (ageVerify(age)) {
//     alert("You can drive");
//   } else alert("You cant drive");
// } else console.error("Enter the valid age");

// Q4
// let number = Number.parseInt(prompt("Enter number: "));

// if (number > 4) location.href = "https://google.com";

// console.log(location);

// Q5
// const color = prompt("enter the color: ");

// document.body.style.background = color;

// let num = prompt("Enter the number between 1 and choose");

//
//
// --> snake, water, gun - Game
//
const userInput = prompt("Enter 'S', 'W' or 'G': ");
let choice;
if (userInput === "s" || userInput === "S") {
  choice = 0;
} else if (userInput === "w" || userInput === "W") {
  choice = 1;
} else if (userInput === "g" || userInput === "G") {
  choice = 2;
} else console.error("Please enter valid choice!");

// S = 0, W = 1, G = 2
const randomNumber = Number.parseInt(Math.random() * 3);

let result;
if (randomNumber === 0 && choice === 1) {
  result = "S";
  console.log(result, "win!");
} else if (randomNumber === 0 && choice === 2) {
  result = "G";
  console.log(result, "win!");
} else if (randomNumber === 1 && choice === 2) {
  result = "W";
  console.log(result, "win!");
} else if (randomNumber === choice) {
  console.log("Draw!");
} else console.log("Run again");
