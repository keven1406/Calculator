var numberUsed = [], sign, algorismOne = "", algorismTwo = "";
function calculateNumber(number) {
	numberUsed.push(number);
	if (numberUsed.length > 2)
		numberUsed.pop();
}
//Using a variable to pass the value of the number.

function addingNumber(number) {
	if (algorismOne == "")
		algorismOne = String(number);
	else
		algorismOne += number;
	document.getElementById("value").innerHTML = algorismOne;
}
