
let mainValue = '';

// update display
const display = document.querySelector('.main-screen');

// add eventListeners to each number
const operators = document.querySelectorAll('.number');

operators.forEach(num => {
    num.addEventListener('click', () => {
        updateDisplay(num.value);
    });
});

// function to update display with number
function updateDisplay(num) {
    mainValue = mainValue + num;
    display.textContent = mainValue;
}

// clear screen
const ac = document.querySelector('.ac-sign');

ac.addEventListener('click', () => {
    clearAll();
});

function clearAll() {
    mainValue = '';
    display.textContent = 0;
}

// function completes operation on tw)o numbers

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