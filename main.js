
let Calculator = {
    
    defaultDisplay: 0,
    firstNumber: null,
    secondNumber: null,
    waitingForFirstNumber: true,
    waitingForSecondNumber: true,
    arrayOfValues: [];
}



let displayValue = 0;
let firstNum = null;
let waitingForSecondNum = true;
let arrayOfValues = [];
let tempNumber = [];
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
    tempNumber.push(value);
    updateDisplay(arrayOfValues.join("") + tempNumber.join(""));
}

// add operator to array or call equal function
function useOperator(value) {

    if(value == '=') {
        arrayOfValues.push(tempNumber.join(""));
        tempNumber = [];
        startTheWaterfall();
        return;
    }

    updateDisplay(arrayOfValues.join("") + tempNumber.join("") + value);

    if(value == 'AC') {
        resetVariables();
    } else if(value != '=') {
        if(tempNumber.length != 0) {    //only add number to array if there is a value in tempNumber
            arrayOfValues.push(Number(tempNumber.join("")));
        }
        tempNumber = [];
        arrayOfValues.push(value);
    }
    console.log(arrayOfValues);
}

function startTheWaterfall() {
    updateDisplay(arrayOfValues);

    let temp1;
    let temp2;
    let operator;
    let waiting = false;

    for(let i = 0; i < arrayOfValues.length; i++) {
        if(Number(arrayOfValues[i]) && waiting == false) {
            temp1 = arrayOfValues[i];
        } else if(!Number(arrayOfValues[i])) {
            operator = arrayOfValues[i];
            waiting = true;
        } else if(Number(arrayOfValues[i]) && waiting == true) {
            temp2 = arrayOfValues[i];
            temp1 = operate(Number(temp1), Number(temp2), operator);
            temp2 = null;
            operator = null;
            waiting = false;
        }

        console.log(temp1);
    }
    arrayOfValues = [];
    arrayOfValues.push(temp1);
    updateDisplay(temp1);
}

 
/*     if(firstNum !== null) {
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
    } */


// update main screen
function updateDisplay(displayValue) {
    let screen = document.querySelector(".main-screen");
    screen.innerHTML = displayValue;
}

function resetVariables() {
    firstNum = null;
    waitingForSecondNum = true;
    arrayOfValues = [];
    operator = "";
    updateDisplay(0);
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