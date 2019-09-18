// Find the **first** div element in the document
const div = document.querySelector("div");
// Find **all** the divs in the document
const divs = document.querySelectorAll("div");
// ~ Find a div that is the **third** div in some element in document
const thirdDiv = document.querySelector("div:nth-of-type(3)");
// The actual third div
const actualThirdDiv = divs[2];

div.innerHTML = "<h1>Hello</h1>";

const span = document.querySelector("span");
console.log(span.innerText);

const input = document.querySelector("input");
// event handler
function handleInputChange() {
  console.log(input.value);
  span.innerText = input.value;
}
input.addEventListener("change", handleInputChange);

const range = document.querySelector("input[type=range]");
const output = document.querySelector("output");
function handleRangeChange() {
  output.innerText = range.value;
}
range.addEventListener("input", handleRangeChange);

const button = document.querySelector("button");
const text = document.querySelector("p");
// const originalText = text.innerHTML;
function handleButtonClick() {
  // IF IT IS HIDDEN ...

  // if (text.innerHTML === "") {
  // if (text.style.display === "none") {
  if (text.getAttribute("data-hidden")) {
    // SHOWING THE TEXT

    // text.innerHTML = originalText;
    // text.style.display = "block";
    text.style.transform = "none";
    text.removeAttribute("data-hidden");
    button.innerText = "Hide";
  } else {
    // HIDING THE TEXT

    // text.innerHTML = "";
    // text.style.display = "none";
    text.style.transform = "scale(0)";
    text.setAttribute("data-hidden", true);
    button.innerText = "Show";
  }
}
button.addEventListener("click", handleButtonClick);


