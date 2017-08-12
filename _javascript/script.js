var numberUsed = [], sign;
function calculateNumber(number) {
	numberUsed.push(number);
	if (numberUsed.length > 2)
		numberUsed.pop();
}