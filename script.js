// add
function add(a, b) {
	return a + b;
}
// substract
function substract(a, b) {
	return a - b;
}
// multiply
function multiply(a, b) {
	return a * b;
}
// divide
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