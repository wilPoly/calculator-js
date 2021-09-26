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
			return "0";
	}
}

const display = document.querySelector("#display");
const buttons = document.querySelectorAll("#buttons > button");

buttons.forEach(button => {
	button.addEventListener("click", (e) => compose(e.target));
});

function printValue(value) {
	display.textContent = `${value}`;
	console.log(value, typeof value);
}

let result = "0";
let firstValue = 0;
let secondValue = 0;
let operation = "";

function compose(button) {
	switch (button.className) {
		case "operator":
			if (firstValue !== 0) {
				secondValue = Number(result);
				result = operate(operation, firstValue, secondValue).toFixed(3);
				printValue(result);
				operation = button.value;
				firstValue = Number(result);
				secondValue = 0;
				result = "0";
			}
			else {
				operation = button.value;
				firstValue = Number(result);
				result = "0";
				console.log(result, firstValue);
			}
			break;

		case "operand":
			if (result === "0") {
				result = button.value;
			}
			else {
				result += button.value;
			}
			printValue(result);
			break;

		case "comma":
			if (result.includes(".")) {
				break;
			}
			else {
				result += button.value;
			}
			printValue(result);
			break;
		
		case "equals":
			secondValue = Number(result);
			result = operate(operation, firstValue, secondValue).toFixed(3);
			printValue(result);
			firstValue = 0;
			break;
		
		case "clear":
			allClear();
			break;
	}
}

function allClear() {
	result = "0";
	firstValue = 0;
	secondValue = 0;
	operation = "";
	printValue(result);
}