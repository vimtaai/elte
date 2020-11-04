function delegate(parent, type, selector, handler) {
  parent.addEventListener(type, function (event) {
    const targetElement = event.target.closest(selector);

    if (this.contains(targetElement)) {
      handler.call(targetElement, event);
    }
  });
}

const button = document.querySelector("button");
const name = document.querySelector("#name");
const symbol = document.querySelector("#symbol");
const number = document.querySelector("#number");

// Subtask 1
function handleButtonClick() {
  const hidden = document.querySelectorAll("[data-hidden]");
  console.log(hidden)

  for (const item of hidden) {
    item.dataset.hidden = item.dataset.hidden === "true" ? "false" : "true";
  }
}
button.addEventListener("click", handleButtonClick);

let selectedElement;
let selectedElementBackground;
let allElements = Array.from(document.querySelectorAll("td[id]"));

function handleElementClick() {
  // Subtask 2
  if (selectedElement) {
    selectedElement.style.background = selectedElementBackground;
  }
  
  selectedElementBackground = this.style.background;
  selectedElement = this;
  this.style.background = "red";

  // Subtask 3
  name.innerText = this.dataset.name;
  symbol.innerText = this.id;
  number.innerText = allElements.indexOf(this) + 1;
}
delegate(document, "click", "td[id]", handleElementClick);