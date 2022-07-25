let calculator = {

    displayValue: '0',
    firstValue: null,
    waitingForSecondValue: false,
    operator: null
}

let screen = document.querySelector(".main-screen");
let allNumberButtons = document.querySelectorAll(".number");
let allClearButton = document.querySelector(".operator-all-clear");
let operatorButtons = document.querySelectorAll(".operator-data");
let equalButton = document.querySelector(".operator-equals");

// event listener and actions for number buttons
allNumberButtons.forEach(num => {
    num.addEventListener("click", () => {
        inputNumber(num.value);
        console.log(calculator);
        updateDisplay();
    })
})

// event listener and actions for operator buttons
operatorButtons.forEach(op => {
    op.addEventListener("click", () => {

        if(calculator.firstValue == null) {
            calculator.firstValue = calculator.displayValue;
            calculator.displayValue = '0';
            calculator.operator = op.value;
            console.log(calculator);
        } else if(calculator.firstValue != null && calculator.operator != null && calculator.displayValue == '0'){
            calculator.operator = op.value;
            console.log(calculator);
        } else { //else is used for operations that are performed before the equal sign is called
            let tempValue = operate(parseInt(calculator.firstValue, 10), parseInt(calculator.displayValue, 10), calculator.operator);
            tempValue = String(tempValue);
            calculator.displayValue = tempValue;
            updateDisplay()
            calculator.firstValue = tempValue;
            calculator.operator = op.value;
            calculator.displayValue = '0';
            console.log(calculator);
            
            //calculator.firstValue = calculator.displayValue;
            //calculator.displayValue = '0';
            console.log(calculator);
        }
    })
})

// event listener and actions for equal button
equalButton.addEventListener("click", () => {
    let finalValue = operate(parseInt(calculator.firstValue, 10), parseInt(calculator.displayValue, 10), calculator.operator);
    console.log(finalValue);
    calculator.displayValue = finalValue;
    calculator.firstValue = null;
    calculator.operator = null;

    updateDisplay();
    console.log(calculator);
})

// event listener and actions for all clear button
allClearButton.addEventListener("click", () => {
    calculator.displayValue = '0';
    calculator.firstValue = null;
    calculator.waitingForSecondValue = false;
    calculator.operator = null;
    updateDisplay();
})

// function to update display number
function inputNumber(num) {
    if(calculator.displayValue == '0') {
        calculator.displayValue = num;
    } else {
        calculator.displayValue = calculator.displayValue + num;
    }
}

// updates display
function updateDisplay() {
    screen.innerHTML = calculator.displayValue;
}

// function completes operation on two numbers
function operate(num1, num2, operator) {

    if (operator == '+') {
        return add(num1, num2);
    }
    if (operator == '-') {
        return subtract(num1, num2);
    }
    if (operator == '*') {
        return multiply(num1, num2);
    }
    if (operator == '/') {
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














/*
allNumberButtons.forEach(num => {
    num.addEventListener("click", () => {
        Calculator.arrayOfValues.push(num.value);
        updateDisplay();
    })
})

// add event listerner to AC button
let allClear = document.querySelector(".operator-all-clear");

allClear.addEventListener("click", () => {
    Calculator.defaultDisplay = 0;
    Calculator.firstNumber, Calculator.secondNumber = 0;
    Calculator.waitingForFirstNumber, Calculator.waitingForSecondNumber, Calculator.waitingOnOperator = true;
    Calculator.mainOperator, Calculator.finalValue = null;
    Calculator.arrayOfValues = [];
    screen.innerHTML = 0;
})

// add event listeners to all operators
let allOperatorButtons = document.querySelectorAll(".operator-data");

allOperatorButtons.forEach(op => {
    op.addEventListener("click", () => {
        Calculator.operator = (op.value);
        Calculator.firstNumber = Calculator.arrayOfValues.join("");
        updateDisplay();
    })
})

// add event listener to equal sign
let equalSign = document.querySelector(".operator-equals");

equalSign.addEventListener("click", () => {
    Calculator.secondNumber = Calculator.arrayOfValues.join("");
    Calculator.finalValue = operate(Calculator.firstNumber, Calculator.secondNumber, Calculator.operator);
    screen.innerHTML = Calculator.finalValue;
})








// function completes operation on two numbers
function operate(num1, num2, operator) {

    if (operator == '+') {
        return add(num1, num2);
    }
    if (operator == '-') {
        return subtract(num1, num2);
    }
    if (operator == '*') {
        return multiply(num1, num2);
    }
    if (operator == '/') {
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






















/* let displayValue = 0;
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
})  */

/* // add numbers to array as they are clicked  
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
} */

/* function startTheWaterfall() {
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
} */


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


/* // update main screen
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
} */



