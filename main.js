
let displayValue = 0;

let firstNum = null;
let waitingForSecondNum = true;
let temp = [];
let operator;


// add event listeners to all numbers
let allNumberButtons = document.querySelectorAll(".number");

allNumberButtons.forEach(num => {
    num.addEventListener("click", () => {
        pushNumbersToArray(num.value);
    })
})

// add event listeners to all operators
let allOperatorButtons = document.querySelectorAll(".operator");

allOperatorButtons.forEach(op => {
    op.addEventListener("click", () => {
        useOperator(op.value);
    })
}) 

// add numbers to array as they are clicked  

function pushNumbersToArray(value) {
    temp.push(value); 
    updateDisplay(temp.join(""));
    console.log(value); 
}

function useOperator(value) {
    if(firstNum !== null) {
        console.log("minus");
        let secondNumber = Number(temp.join(""));
        firstNum = operate(firstNum, secondNumber, value);
        temp = [];
        updateDisplay(firstNum);
    } else if(value == '/' || value == '*' || value == '-' || value == "+") {
        console.log(value);
        firstNum = Number(temp.join(""));
        operator = value;
        temp = [];
        console.log("elseif value: " + value);
    }
}

// update main screen
function updateDisplay(displayValue) {
    let screen = document.querySelector(".main-screen");
    screen.innerHTML = displayValue;
}


 
// function completes operation on two numbers
function operate(num1, num2, operator) {

    if(operator == '+') {
        return add(num1, num2);
    }
    if(operator == '-') {
        return subtract(num1, num2);
    }
    if(operator == '*') {
        return multiply(num1, num2);
    }
    if(operator == '/') {
        return divide(num1, num2);
    }
}
// mathematical functions
function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}