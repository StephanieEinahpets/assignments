const readlineSync = require("readline-sync")


const add = (num1, num2) => {
    console.log(+num1 + +num2)
}

const sub = (num1, num2) => {
    console.log(+num1 - +num2)
}

const mul = (num1, num2) => {
    console.log(+num1 * +num2)
}

const div = (num1, num2) => {
    console.log(+num1 / +num2)
}

const firstNum = readlineSync.question("Please enter your first number: ")

const secondNum = readlineSync.question("Please enter your second number: ")

const operator = readlineSync.question("Please enter the operation to perform (add, sub, mul, div): ")

if(operator === "add"){
    add(firstNum, secondNum)
} else if(operator === "sub"){
    sub(firstNum, secondNum)
} else if(operator === "div"){
    div(firstNum, secondNum)
} else if(operator === "mul"){
    mul(firstNum, secondNum)
}

