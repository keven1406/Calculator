var numberOne = "", numberTwo = "", sign = "", numberAmount = 0;
var screen = document.getElementById("value");
//Using a function showOnScreen to pass the value of the numberUsed to display on the screen.
function result() {
	numberOne = Number(numberOne);
	numberTwo = Number(numberTwo);
	if (sign == "+")
		screen.innerHTML = numberOne + numberTwo;
	if (sign == "-")
		screen.innerHTML = numberOne - numberTwo;
	if (sign == "*") 
		screen.innerHTML = numberOne * numberTwo;
	numberOne = "";
	numberTwo = "";
	sign = "";
}
function addSign(operator) {
	sign = operator;
}
//Displaying the digit on the screen.
function showOnScreen(algorism, number) {
	if (algorism == "")
		algorism = String(number);
	else
		algorism += String(number);
	screen.innerHTML = algorism;
	return algorism;
}
//Using the "if/else" condition to differentiate the variables.
function addingNumber(number) {
	if (sign == "")
		numberOne = showOnScreen(numberOne, number);
	else {
		numberTwo = showOnScreen(numberTwo, number);
	}
}