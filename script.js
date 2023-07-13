const displayResult = document.querySelector('.result');

let num1 = 0;
let operator = '';
let num2 = 0;

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
            return add;
        case '-':
            return subtract;
        case '*':
            return multiply;
        case '/':
            return divide;
    }
}

function addDigit(digit) {
    if (displayResult.textContent.length < 10)
        displayResult.textContent += digit;
}

function updateDisplay(number) {
    displayResult.textContent = number;
}