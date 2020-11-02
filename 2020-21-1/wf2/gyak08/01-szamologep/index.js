// Feladat:
// GOMBNYOMÁSRA:
// 1. Beolvasni a számokat
// 2. Eldönteni, hogy mi a művelet
// 3. Kiszámolni az eredményt
// 4. Kiírni a felületre

// Elemek kiválasztása
const button = document.querySelector("button");
const number1 = document.querySelector("input:nth-of-type(1)");
const operator = document.querySelector("select");
// const number2 = operator.nextElementSibling;
const number2 = document.querySelector("input:nth-of-type(2)");
const output = document.querySelector("output");

// Eseménykezelő függvény
function handleButtonClick() {
  // Beolvasás (DOM)
  let x = parseFloat(number1.value);
  let y = parseFloat(number2.value);
  let o = operator.value;

  // Feldolgozás
  let result;
  // console.log(x, y, o);
  if (o === "+") {
    result = x + y;
  } else if (o === "-") {
    result = x - y;
  } else if (o === "×") {
    result = x * y;
  } else if (o === "÷") {
    result = x / y;
  }

  // Kiírás (DOM)
  console.log(typeof x, typeof y);
  console.log(result);
  output.innerHTML = result;
}

// Eseménykezelő regisztrálása
button.addEventListener("click", handleButtonClick);