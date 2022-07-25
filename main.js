let calculator = {

    displayValue: '0',
    firstValue: null,
    operator: null
}

let screen = document.querySelector(".main-screen");
let allNumberButtons = document.querySelectorAll(".number");
let allClearButton = document.querySelector(".operator-all-clear");
let operatorButtons = document.querySelectorAll(".operator-data");
let equalButton = document.querySelector(".operator-equals");
let decimalButton = document.querySelector(".operator-decimal");

// event listener and actions for number buttons
allNumberButtons.forEach(num => {
    num.addEventListener("click", () => {
        inputNumber(num.value);
        console.log(calculator);
        updateDisplay();
    })
})

// event listener for decimal
decimalButton.addEventListener("click", () => {
    let t1 = calculator.displayValue;

    if(t1.includes(".")) {
        return;
    } else {
        if(calculator.displayValue == '0') {
            inputNumber("0.");
            updateDisplay();
        } else {
            inputNumber(".");
            console.log(calculator);
            updateDisplay();
        }
    }
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

    if(calculator.firstValue == null && calculator.operator == null) {
        return;
    }

    let finalValue = operate(Number(calculator.firstValue, 10), Number(calculator.displayValue, 10), calculator.operator);
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

// function that updates display
function updateDisplay() {
    let temp = testNumber();
    if(temp.includes(".")) {
        temp = removeZeros(temp);
    }
    console.log(typeof(temp));
    screen.innerHTML = temp;
}

function removeZeros(t2) {
    let length = t2.length;
    t2 = t2.split("");
    for(let i = length; i > 0; i--) {
        if(t2[i] != "0") {
            return t2.join("");
        }
        t2 = t2.pop();
    }
}

// test displayValue for excess numbers
function testNumber() {
    let t = String(calculator.displayValue);
    if(t.length > 12) {
        t = t.substring(0, 13);
    }
    return t;
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