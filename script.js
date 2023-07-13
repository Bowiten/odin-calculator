const displayResult = document.querySelector('.result').textContent;

let num1 = 0;
let operator = '';
let num2 = 0;

const add = function() {
    return num1 + num2;
}

const subtract = function() {
    return num1 - num2;
}

const multiply = function() {
    return num1 * num2;
}

const divide = function() {
    return (num2 != 0 ? num1 / num2 : `You can't divide by zero!`);
}

function operate(num1, operator, num2) {
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
    if (displayResult.length < 10)
        displayResult += digit;
}