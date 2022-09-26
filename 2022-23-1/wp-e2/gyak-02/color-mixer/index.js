const redInput = document.querySelector("#red");
const greenInput = document.querySelector("#green");
const blueInput = document.querySelector("#blue");
const diceRullButton = document.querySelector("#mix");
const outputField = document.querySelector("output");

diceRullButton.addEventListener("click", onDiceRollButtonClick);

function onDiceRollButtonClick() {
  const redValue = parseInt(redInput.value);
  const greenValue = parseInt(greenInput.value);
  const blueValue = parseInt(blueInput.value);

  const color = `rgb(${redValue},${greenValue},${blueValue})`;

  outputField.style.backgroundColor = color;
}
