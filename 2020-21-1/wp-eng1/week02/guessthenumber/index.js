// Utility functions
function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Enum-like data structure
const Answers = {
  CORRECT: "CORRECT",
  LOWER: "LOWER",
  HIGHER: "HIGHER"
};

// State
let numberToGuess = getRandomInteger(1, 100);

// References to elements
const guessButton = document.querySelector("#guess");
const guessInput = document.querySelector("#guessInput");
const output = document.querySelector("output");

// Event handlers
function handleGuessButtonClick() {
  const guess = parseInt(guessInput.value);
  // console.log(guess, numberToGuess);

  // Business logic
  let answer;
  if (guess === numberToGuess) {
    answer = Answers.CORRECT;
    numberToGuess = getRandomInteger(1, 100);
  } else if (guess > numberToGuess) {
    answer = Answers.LOWER;
  } else {
    answer = Answers.HIGHER;
  }

  // Output
  output.innerHTML = renderAnswer(answer);
}

// Event binding
guessButton.addEventListener("click", handleGuessButtonClick);

// HTML generator
function renderAnswer(answer) {
  if (answer === Answers.CORRECT) {
    return "Correct! Let's start again!";
  } else {
    return `I thought of a number that is ${answer === Answers.LOWER ? "lower" : "higher"} than that.`;
  }
}