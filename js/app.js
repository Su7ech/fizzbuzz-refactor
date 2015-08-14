// var userInput = prompt("Enter a number:");
// while (!(Number.isInteger(parseInt(userInput)))) {
// 	var userInput = prompt("That's not a recognized number, try again...");
// }

function getUserInput() {
	var element = document.getElementById('numInput');
	var text = element.value;
	var num = parseInt(text, 10);
	if (isValidNumber(num)) {
		resetLayout();
		fizzbuzz(num);
		element.value = '';
	} else {
		alert("Not a valid number, try again...");
		element.value = '';
	}
}
function resetLayout() {
	var currentDiv = document.getElementById("fizzbuzz");
	while (currentDiv.firstChild) {
		currentDiv.removeChild(currentDiv.firstChild);
	}
}
function isValidNumber(n) {
	return Number.isInteger(n);
}
function addFizzbuzz(n) {
	var p = document.createElement("p");
	var newContent = document.createTextNode(n);
	p.appendChild(newContent);

	var currentDiv = document.getElementById("fizzbuzz");
	currentDiv.appendChild(p);
}
function fizzbuzz(num) {
	function check(n) {
		var msg = '';
		if (i % 3 == 0) {msg += 'Fizz'};
		if (i % 5 == 0) {msg += 'Buzz'};
		return msg || n;
	}
	for (var i = 1; i <= num; i++) {
		addFizzbuzz(check(i));
	}
}