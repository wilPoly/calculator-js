const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");
let result = "0";
let firstValue = 0;
let secondValue = 0;
let operation = "";

buttons.forEach(button => {
	button.addEventListener("click", (e) => compose(e.target));
});

function operate(operator, a, b) {
	switch (operator) {
		case "+":
			return a + b;
		case "-":
			return a - b;
		case "*":
			return a * b;
		case "/":
			return a / b;
		default:
			return "0";
	}
}

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

		case "back":
			if (result === "0")	{
				break;
			}
			else if (result.length === 1){
					allClear();
			}
			else {
				result = result.slice(0, result.length-1);
				printValue(result);
			}
			break;
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