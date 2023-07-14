const displayResult = document.querySelector('.result');
const clearButton = document.querySelector('.clear');
const digitButtons = document.querySelectorAll('.digit');
const operationButtons = document.querySelectorAll('.operation');
const evalButton = document.querySelector('.eval');
const signButton = document.querySelector('.sign');

let num1 = 0;
let operator = '';
let num2 = 0;
let clearOnNextInput = true;

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
    let result = 0;
    switch (operator) {
        case '+':
            result = add();
        case '-':
            result = subtract();
        case '*':
            result = multiply();
        case '/':
            result = divide();
    }
    return (Math.round(result * 100) / 100);
}

function updateDisplay(number) {
    displayResult.textContent = number;
}

function clear() {
    num1 = 0;
    operator = '';
    num2 = 0;
    clearOnNextInput = true;
    updateDisplay('0');
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
        clearOnNextInput = true;
    } else {
        num2 = parseFloat(displayResult.textContent);
        result = operate();
        updateDisplay(result);
        clearOnNextInput = true;
        num2 = 0;
        num1 = result;
        operator = operation;
    }
}

function evaluate() {
    if (operator == '')
        return;
    num2 = parseFloat(displayResult.textContent);
    result = operate();
    updateDisplay(result);
    clearOnNextInput = true;
    num2 = 0;
    num1 = result;
}

function changeSign() {
    if (displayResult == '')
        return;
    updateDisplay(-1 * parseFloat(displayResult.textContent));
}

clearButton.addEventListener('click', () => clear());

digitButtons.forEach(button => button.addEventListener('click', () => {
    addDigit(button.textContent);
}));

operationButtons.forEach(button => button.addEventListener('click', () => {
    execOperation(button.textContent);
}))

evalButton.addEventListener('click', () => evaluate());

signButton.addEventListener('click', () => changeSign());