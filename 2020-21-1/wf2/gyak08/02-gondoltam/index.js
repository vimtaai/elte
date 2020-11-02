function thinkRandomNumber() {
  const random = Math.floor(Math.random() * 101);
  return random;
}

function init() {
  numberToGuess = thinkRandomNumber();
}

// Állapot
let numberToGuess;

const number = document.querySelector("input");
const button = document.querySelector("button");
const output = document.querySelector("output");

function handleButtonClick() {
  // Beolvasás
  let x = parseFloat(number.value);
  // Feldolgozás
  let result;
  if (x < numberToGuess) {
    result = "Nagyobbra gondoltam!";
  } else if (x > numberToGuess) {
    result = "Kisebbre gondoltam!";
  } else {
    result = "Talált, gondoltam egy új számra!";
    init();
  }

  // Kiírás
  output.innerHTML = result;
}

button.addEventListener("click", handleButtonClick);

init();