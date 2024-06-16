#!/usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

// Parent class
class Person {
  public personality: string;
  public answer: string;

  constructor(ans: string, person: string) {
    this.answer = ans;
    this.personality = person;
  }

  public askQuestion() {
    const answers = this.answer.split(","); // Split the concatenated answers into an array

    // Check if all answers start with "1." or "2."
    const allExtrovert = answers.every(ans => ans.startsWith("1."));
    const allIntrovert = answers.every(ans => ans.startsWith("2."));

    if (allExtrovert) {
      this.personality = "Extrovert";
    } else if (allIntrovert) {
      this.personality = "Introvert";
    } else {
      this.personality = "You are still a Mystery"; // Set personality to mystery for mixed answers
    }
  }
}

// Child class
class Student extends Person {
  private _name: string = "";

  get Name() {
    return this._name;
  }

  public set Name(value: string) {
    this._name = value;
  }
}

// Ask for name
let ans = await inquirer.prompt({
  name: "ans",
  message: chalk.bold.yellow("\nEnter your name"),
  type: "input",
});


// Store name
const userName = ans.ans;


// Ask for habit
let userInput = await inquirer.prompt([
  {
    name: "q1",
    message: chalk.bold.yellow("\nPlease select a type of personality"),
    type: "list",
    choices: ["1. You like to talk to others", "2. You would rather keep to yourself", ],
  },
  {
    name: "q2",
    type: "list",
    message: "How do you recharge yourself?",
    choices: ["1. Hang out with friends", "2. Live alone"],
  },
  {
    name: "q3",
    message: "Do you like to work independently or are you sociable?",
    type: "list",
    choices: ["1. Enjoy teamwork", "2. Work independently"],
  },
]);



// Concatenate answers
let answer = `${userInput.q1},${userInput.q2},${userInput.q3}`;

// Instance of Person
let person1 = new Person(answer, "You are still a Mystery");
person1.askQuestion(); // Call method

// Instance of Student
let student1 = new Student(answer, "You are still a Mystery");
student1.Name = userName; // Store name as a property

// Welcome Message
console.log( chalk.bold.hex('#FF1493')("\n***********************************************************"));

console.log(
  chalk.bold.italic.hex('#FF1493')("\n\t\tWELCOME TO OOP MY PERSONALITY TEST\n"));

console.log(chalk.bold.hex('#FF1493')("***********************************************************"));

// Console the result
console.log(`\nYour name is: ${chalk.bold.rgb(255, 69, 0)(student1.Name.toUpperCase() )} and Personality is: ${chalk.bold.rgb(255, 69, 0)(person1.personality)}.`);




