#! /usr/bin/env node
// import inquirer library for take from users of input
import inquirer from "inquirer";
// Importing the chalk library to add color and styling to terminal output
import chalk from "chalk";
console.log(chalk.bgMagenta.italic("\t\t Welcom to Word Counter"));
// declare a constant 'answer' and assign it to the result of inquirer.prompt function
const answer = await inquirer.prompt({
    name: "sentence",
    type: "input",
    message: chalk.yellow("Enter your sentence to count the word."),
});
// "Split the sentence into words using the split method and trim any excess whitespace."
let words = answer.sentence.trim().split(" ");
// "Print the list of words after splitting the sentence."
console.log(words);
// print  length of sentence
console.log(chalk.magenta.italic("your sentence word count is  "), words.length);
