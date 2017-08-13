var numberUsed = ["",""], sign = "", numberAmount = 0;
/*function calculateNumber(number) {
	numberUsed.push(number);
	if (numberUsed.length > 2)
		numberUsed.pop();
}
*/
//Using a function showOnScreen to pass the value of the numberUsed to display on the screen.
function  showOnScreen(algorism, number) {
	if (algorism == "")
		algorism = String(number);
	else
		algorism += String(number);
	document.getElementById("value").innerHTML = algorism;
	return algorism;
}
function addingNumber(number) {
	if (sign == "")
		numberUsed[numberAmount] = showOnScreen(numberUsed[numberAmount], number);
	else 
		numberUsed[numberAmount/*2*/] = showOnScreen(numberUsed[numberAmount], number);
}
//Using a sign to pass the value of the number for a function and calculate.
//how to improve this code?