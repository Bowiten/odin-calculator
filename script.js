const displayResult = document.querySelector('.result');
const digitButtons = document.querySelectorAll('.digit');
const operationButtons = document.querySelectorAll('.operation');

let num1 = 0;
let operator = '';
let num2 = 0;
let clearOnNextInput = false;

function add() {
    return num1 + num2;
}

function subtract() {
    return num1 - num2;
}

function multiply() {
    return num1 * num2;
}

function divide() {
    return (num2 != 0 ? num1 / num2 : `Error`);
}

function operate() {
    switch (operator) {
        case '+':
            return add();
        case '-':
            return subtract();
        case '*':
            return multiply();
        case '/':
            return divide();
    }
}

function updateDisplay(number) {
    displayResult.textContent = number;
}

function addDigit(digit) {
    if (displayResult.textContent.length >= 10)
        return;
    if (clearOnNextInput) {
        updateDisplay('');
        clearOnNextInput = false;
    }
    displayResult.textContent += digit;
}

function execOperation(operation) {
    if (operator == '') {
        num1 = parseFloat(displayResult.textContent);
        operator = operation;
        updateDisplay('');
    } else {
        num2 = parseFloat(displayResult.textContent);
        result = operate();
        updateDisplay(result);
        operator = operation;
        clearOnNextInput = true;
        num2 = 0;
        num1 = result;
    }
}

digitButtons.forEach(button => button.addEventListener('click', () => {
    addDigit(button.textContent);
}));

operationButtons.forEach(button => button.addEventListener('click', () => {
    execOperation(button.textContent);
}))