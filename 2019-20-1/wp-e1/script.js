// window; // global namespace (browser)
console.dir(document);

const input1 = document.querySelector("input:nth-of-type(1)");
const input2 = document.querySelector("input:nth-of-type(2)");
const select = document.querySelector("select");
const output = document.querySelector("output");
const button = document.querySelector("button");

// eseménykezelő függvény
function handleButtonClick() {
  // beolvasás
  const a = parseFloat(input1.value);
  const b = parseFloat(input2.value);
  const op = select.value;

  // feldolgozás
  let result;
  if (op === "+") {
    result = a + b;
  } else if (op === "-") {
    result = a - b;
  } else if (op === "×") {
    result = a * b;
  } else if (op === "÷") {
    result = a / b;
  }

  // kiírás
  output.innerHTML = "<strong>" + result + "</strong>";

  // output.innerText = parseFloat(input1.value) + parseFloat(input2.value);
}
button.addEventListener("click", handleButtonClick);

// HTML elemek kiválasztása
const rangeInput = document.querySelector("#rangeInput");
const rangeValue = document.querySelector("#rangeValue");

function handleRangeInput() {
  rangeValue.innerText = rangeInput.value;
}
rangeInput.addEventListener("input", handleRangeInput);

const minus = document.querySelector("#minus");
const plus = document.querySelector("#plus");
const stepper = document.querySelector("#stepper");

const max = 10;
const min = 0;
function handleMinusClick() {
  const value = parseFloat(stepper.value);
  stepper.value = value - 1;

  if (value - 1 === min) {
    minus.disabled = true;
  }
  plus.disabled = false;
}
minus.addEventListener("click", handleMinusClick);

function handlePlusClick() {
  const value = parseFloat(stepper.value);
  stepper.value = value + 1;
  
  if (value + 1 === max) {
    plus.disabled = true;
  }
  minus.disabled = false;
}
plus.addEventListener("click", handlePlusClick);

const color = document.querySelector("#color");
function handleColorChange() {
  const newColor = color.value;
  // document.body.style = `background: ${newColor};`;
  document.body.style.background = newColor;
}
color.addEventListener("change", handleColorChange);

const color2 = document.querySelector("#color2");
function handleColorChange2() {
  const newColor = color2.value;
  // document.body.style = `color: ${newColor};`;
  document.body.style.color = newColor;
}
color2.addEventListener("change", handleColorChange2);