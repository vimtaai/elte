// 13. Készíts screencast módot egy oldalon!
// A lenyomott billentyűk kódját jelenítsd meg az oldalon.
// Kezeld külön a speciális karaktereket, azaz pl. Ctrl + A.

const outputElement = document.querySelector("output");

const pressedKeys = new Set();
const pressedModifiers = new Set();
const modifiers = ["Control", "Alt", "Shift", "Meta"];

function onKeyDown(event) {
	event.preventDefault();
	const pressedKey = event.key;
	if (modifiers.includes(pressedKey)) {
		pressedModifiers.add(pressedKey);
	} else {
		pressedKeys.add(pressedKey.toUpperCase());
	}
	renderPressedKeys();
}

function onKeyUp(event) {
	event.preventDefault();
	const pressedKey = event.key;
	if (modifiers.includes(pressedKey)) {
		pressedModifiers.delete(pressedKey);
	} else {
		pressedKeys.delete(pressedKey.toUpperCase());
	}
	renderPressedKeys();
}

function renderPressedKeys() {
	const allKeys = Array.from(pressedModifiers).concat(Array.from(pressedKeys));
	outputElement.innerText = allKeys.join(" + ");
}

window.addEventListener("keydown", onKeyDown);
window.addEventListener("keyup", onKeyUp);
