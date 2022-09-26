const diceAmountInput = document.querySelector("#dice-amount");
const diceTypeInput = document.querySelector("#dice-type");
const diceRullButton = document.querySelector("#dice-roll");
const outputField = document.querySelector("output");

diceRullButton.addEventListener("click", onDiceRollButtonClick);

function onDiceRollButtonClick() {
  const amount = parseInt(diceAmountInput.value);
  const type = parseInt(diceTypeInput.value);

  const rollResults = [];

  for (let i = 0; i < amount; i++) {
    rollResults.push(getRandomInteger(1, type));
  }

  const sum = rollResults.reduce((a, b) => a + b, 0);

  outputField.textContent = amount === 1 ? sum : `${rollResults.join(' + ')} = ${sum}`;
}

function getRandomInteger(minValue, maxValue) {
  return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
}
