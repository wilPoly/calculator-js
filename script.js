function add(a, b) {
	return a + b;
}

function substract(a, b) {
	return a - b;
}

function multiply(a, b) {
	return a * b;
}

function divide(a, b) {
	return a / b;
}

function operate(operator, a, b) {
	switch (operator) {
		case "+":
			return add(a, b);
		case "-":
			return substract(a, b);
		case "*":
			return multiply(a, b);
		case "/":
			return divide(a,b);
		default:
			return "invalid input";
	}
}

const display = document.querySelector("#display");
const buttons = document.querySelectorAll("#buttons > button");
console.table(buttons);

buttons.forEach(button => {
	button.addEventListener("click", (e) => compose(e.target));
});

function printValue(value) {
	display.textContent = `${value}`;
	console.log(value, typeof value);
}

let displayValue = "0";
let firstValue = 0;
let secondValue = 0;
let result = 0;
let operation = "";

function compose(button) {
	switch (button.className) {
		case "operator":
			operation = button.value;
			firstValue = Number(displayValue);
			displayValue = "0";
			break;

		case "operand":
			if (displayValue === "0") {
				displayValue = button.value;
			}
			else {
				displayValue += button.value;
			}
			printValue(displayValue);
			break;

		case "equals":
			secondValue = Number(displayValue);
			displayValue = operate(operation, firstValue, secondValue);
			printValue(displayValue);
			break;
		
		case "clear":
			allClear();
			break;
			
			console.log(operation);
	}
}

function allClear() {
	displayValue = "0";
	firstValue = 0;
	secondValue = 0;
	result = 0;
	operation = "";
	printValue(displayValue);
}