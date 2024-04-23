/*

Hyperskill
Javascript - My First Project - Measure the total income of your shop

Objectives:

Print the Earned amount: line.
Print the item names and the earned amount for each of them;
Print the total earnings as shown below. Replace 0.0 with the actual total sum:
take user input for staff expenses and other expenses
calcuate net income
display net income

*/
const input = require('sync-input');

console.log("Earned amount:");
console.log("Bubblegum: $202");
console.log("Toffee: $118");
console.log("Ice cream: $2250");
console.log("Milk chocolate: $1680");
console.log("Doughnut: $1075");
console.log("Pancake: $80");

const arr = [202, 118, 2250, 1680, 1075, 80];
let income = 0;
for (let i = 0; i < arr.length; i++) {
  income += arr[i];
}

console.log("\nIncome: $" + income);

let staffExpenses = Number(input("Enter Staff Expenses: "));
let otherExpenses = Number(input("Enter Other Expenses: "));
let netIncome = income - (staffExpenses + otherExpenses);
console.log("Net Income: " + netIncome);

