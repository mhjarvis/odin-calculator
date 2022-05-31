let defaultValue = 0;
let mainValue = '';
let tempValue1 = '';
let tempValue2 = '';

const getDisplay = document.querySelector('.main-screen');
const getAllClearButton = document.querySelector('.ac-sign');
const getAllNumbers = document.querySelectorAll('.number');
const getAdditionButton = document.querySelector('.plus-sign');
const getMinusButton = document.querySelector('minus-sign');
const getMultiplicationButton = document.querySelector('multiply-sign');
const getDivisionButton = document.querySelector('divide-sign');
const getEqualButton = document.querySelector('equal-sign');
const getDecimalButton = document.querySelector('decimal-sign');

(function() {
    // Add even listeners to each number key
    getAllNumbers.forEach(num => {
        num.addEventListener('click', () => {
            updateDisplay(num.value);
        });
    });

    // Update display with number
    function updateDisplay(num) {
        mainValue = mainValue + num;
        getDisplay.textContent = mainValue;
    }

    updateAllButtons();

})();

function updateAllButtons() {
    getAdditionButton.addEventListener('click', () => {
        clearAll();
    });

    getAllClearButton.addEventListener('click', () => {
        clearAll();
    });

    function clearAll() {
        mainValue = '';
        getDisplay.textContent = defaultValue;
    }
};

// Setup addition button


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