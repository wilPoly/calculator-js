const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");
let result = "0";
let firstValue = 0;
let secondValue = 0;
let operation = "";

buttons.forEach(button => {
	button.addEventListener("click", (e) => compose(e.target.value));
});

window.addEventListener("keydown", (e) => {
	compose(e.key);
	console.log(e.key);
	e.preventDefault();
});

function operate(operator, a, b) {
	switch (operator) {
		case "+":
			return formatNumber(a + b);
		case "-":
			return formatNumber(a - b);
		case "*":
			return formatNumber(a * b);
		case "/":
			return formatNumber(a / b);
		default:
			return "0";
	}
}

function formatNumber(value) {
	return value.toFixed(3).replace(/\.0+$/, "");
}

function compose(input) {
	let operators = ["+", "-", "*", "/"];
	let operands = [...Array(10).keys()].map(i => i.toString());

	switch (true) {
		case operators.includes(input):
			if (firstValue !== 0) {
				equals();
				operation = input;
				firstValue = Number(result);
				secondValue = 0;
				result = "0";
			}
			else {
				operation = input;
				firstValue = Number(result);
				result = "0";
				console.log(result, firstValue);
			}
			break;

		case operands.includes(input):
			console.log(input);
			if (result === "0") {
				result = input;
			}
			else {
				result += input;
			}
			printValue(result);
			break;

		case input === ".":
			if (result.includes(".")) {
				break;
			}
			else {
				result += input;
			}
			printValue(result);
			break;
		
		case input === "=":
		case input === "Enter":
			equals();
			break;

		case input === "Escape":
			allClear();
			break;

		case input === "Backspace":
			backSpace();
			break;
	}
}

function equals () {
	secondValue = Number(result);
	result = operate(operation, firstValue, secondValue);
	printValue(result);
	firstValue = 0;
}

function backSpace() {
	if (result !== "0")	{
		if (result.length === 1){
			result = "0";
			printValue(result);
		}
		else {
			result = result.slice(0, result.length-1);
			printValue(result);
		}
	}
}

function printValue(value) {
	display.textContent = `${value}`;
	console.log(value, typeof value);
}

function allClear() {
	result = "0";
	firstValue = 0;
	secondValue = 0;
	operation = "";
	printValue(result);
}