// const numberInputElements = document.querySelectorAll("input.number");

// function onNumberInputKeypress(event) {
// 	// const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
// 	const numberRegex = new RegExp("\\d");

// 	// if (!numbers.includes(event.key)) {
// 	//     event.preventDefault();
// 	// }
// 	if (!numberRegex.test(event.key)) {
// 		event.preventDefault();
// 	}
// }

function isDigit(string) {
	const numberRegex = /\d/;
	return numberRegex.test(string);
}

function onNumberInputInput(event) {
	if (!event.target.matches("input.number")) {
		return;
	}

	const inputElement = event.target;
	const inputValue = inputElement.value;
	inputElement.value = inputValue.split("").filter(isDigit).join("");
}

function onMouseMove(event) {
	// const x = event.x;
	// const y = event.y;
	const { x, y } = event;
	const outputContent = `[x: ${x}, y: ${y}]`;
	mouseOutputElement.textContent = outputContent;
}

const mainElement = document.querySelector("main");
mainElement.addEventListener("input", onNumberInputInput);

const mouseOutputElement = document.querySelector("#mouse");
window.addEventListener("mousemove", onMouseMove);
