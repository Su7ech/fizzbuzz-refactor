var userInput = prompt("Enter a number:");
while (!(Number.isInteger(parseInt(userInput)))) {
	var userInput = prompt("That's not a recognized number, try again...");
}

function fizzbuzz(num) {
	function check(n) {
		var msg = '';
		if (i % 3 == 0) {msg += 'Fizz'};
		if (i % 5 == 0) {msg += 'Buzz'};
		return msg || n;
	}
	for (var i = 1; i <= userInput; i++) {
		document.write("<p>" + check(i) + "</p>");
	}
}
fizzbuzz(userInput);