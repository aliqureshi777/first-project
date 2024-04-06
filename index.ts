#! /usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Enter first number", type: "number", name: "firstNumber" },
  { message: "Enter Second number", type: "number", name: "secondNumber" },
  {
    message: "Enter Operator",
    type: "list",
    name: "operator",
    choices: ["+", "-", "/", "*"],
  },
]);

if (answer.operator === "+") {
  console.log(answer.firstNumber + answer.secondNumber);
} else if (answer.operator === "-") {
  console.log(answer.firstNumber - answer.secondNumber);
} else if (answer.operator === "*") {
  console.log(answer.firstNumber * answer.secondNumber);
} else if (answer.operator === "/") {
  console.log(answer.firstNumber / answer.secondNumber);
} else {
  console.log("Please select valid operator");
}
