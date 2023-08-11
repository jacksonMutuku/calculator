

function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    if (b !== 0) {
        return a / b;
    } else {
        return "Cannot divide by zero";
    }
}


function operate(operator, a, b) {
    switch (operator) {
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "*":
            return multiply(a, b);
        case "/":
            return divide(a, b);
        default:
            return "Invalid operator";
    }
}



document.addEventListener("DOMContentLoaded", function () {
    const displayElement = document.getElementById("display");
    const numberButtons = document.querySelectorAll(".number");
    const operatorButtons = document.querySelectorAll(".operator");
    const equalsButton = document.getElementById("equals");
    const clearButton = document.getElementById("clear");

    let displayValue = "0"; // Initial display value
    let firstNumber = null;
    let operator = null;
    let secondNumber = null;


    // Update the display
    function updateDisplay() {
        displayElement.textContent = displayValue;
    }

    // Handle number button clicks
    numberButtons.forEach(button => {
        button.addEventListener("click", function () {
            if (displayValue === "0") {
                displayValue = button.textContent;
            } else {
                displayValue += button.textContent;
            }
            updateDisplay();
        });
    });

    operatorButtons.forEach(button => {
        button.addEventListener("click", function () {
            firstNumber = parseFloat(displayValue);
            operator = button.textContent;
            displayValue = "0";
            updateDisplay();
        });
    });

    // Handle equals button click
    equalsButton.addEventListener("click", function () {
        if (operator && displayValue !== "") {
            secondNumber = parseFloat(displayValue);
            displayValue = operate(operator, firstNumber, secondNumber);
            updateDisplay();
            firstNumber = parseFloat(displayValue);
            operator = null;
            secondNumber = null;
        }
    });

    // Handle clear button click
    clearButton.addEventListener("click", function () {
        displayValue = "0";
        firstNumber = null;
        operator = null;
        secondNumber = null;
        updateDisplay();
    });
});