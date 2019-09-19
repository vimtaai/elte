// ! 1. Mivel történik valami?
// ! 2. Mi történik vele?
// ! 3. Hogyan reagálok erre?

// ! (1) eseményt kiváltó objektum
const input = document.querySelector("input");
// ! (3) eseménykezelő függvény
function handleNumberChange() {
  // ! Beolvasás
  const R = input.value;

  // ! Feldolozás
  const A = (R ** 2) * Math.PI;

  // ! Kiírás
  const output = document.querySelector("output");
  output.innerText = A;
}
// ! (2) esemény figyelése
// ? https://developer.mozilla.org/en-US/docs/Web/Events
input.addEventListener("input", handleNumberChange);
// (1)                 (2)       (3)

const button = document.querySelector("button");
// ! így megmarad a memóriában a `p` akkor is ha az oldalról törlöm
const p = document.querySelector("p");
function handleButtonClick() {
  // p.hidden = !p.hidden;
  // p.style = "display: none";
  // if (p.style.display === "none") {
  //   p.style.display = "block";
  //   button.innerText = "Hide";
  // } else {
  //   p.style.display = "none";
  //   button.innerText = "Show";
  // }
  // if (p.parentNode !== null) {
  //   // ! elem kivétele a DOM fából
  //   p.parentNode.removeChild(p);
  // } else {
  //   if (button.nextSibling !== null) {
  //     // ! "insertAfter" hack
  //     button.parentNode.insertBefore(p, button.nextSibling);
  //   } else {
  //     button.parentNode.appendChild(p);
  //   }
  // }
  if (p.style.transform) {
    p.style.transform = "";
  } else {
    p.style.transform = "scale(0) rotate(359deg)";
  }
}
button.addEventListener("click", handleButtonClick);



