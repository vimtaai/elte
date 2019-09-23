function delegate(parent, type, selector, fn) {

  function delegatedFunction(e) {
    if (e.target.matches(`${selector},${selector} *`)) {
      let target = e.target;
      while (!target.matches(selector)) {
        target = target.parentNode;
      }
      e.delegatedTarget = target;
      return fn(e);
      // vagy
      return fn.call(target, e);
    }
  }

  parent.addEventListener(type, delegatedFunction, false);
}

function randomBetween(a, b) {
  return Math.floor(Math.random() * (b - a + 1)) + a;
}

const button = document.querySelector("button");
const main = document.querySelector("main");

function handleButtonClick() {
  // const html = "<div></div>";
  // main.innerHTML += html;
  const div = document.createElement("div");
  main.appendChild(div);
  const styles = getComputedStyle(div);
  const width = styles.width.slice(0, -2);
  const height = styles.height.slice(0, -2);
  div.style.position = "absolute";
  div.style.left = randomBetween(0, window.innerWidth - width) + "px";
  div.style.top = randomBetween(0, window.innerHeight - height) + "px";
  // ! Math.random() -> [0, 1) -> [a, b] // KEREK.LE(R * (b - a + 1)) + a
}
button.addEventListener("click", handleButtonClick);

let draggedDiv = null;
// ! event: eseményobjektum
function handleDivMouseDown(event) {
  // console.log(event);
  draggedDiv = event.delegatedTarget;
  draggedDiv.style.borderColor = "red";
}
delegate(main, "mousedown", "div", handleDivMouseDown);

function handleDivMouseUp(event) {
  draggedDiv.style.borderColor = "black";
  draggedDiv = null;
}
delegate(main, "mouseup", "div", handleDivMouseUp);

function handleDivMouseMove(event) {
  // ! csak akkor mozgatunk, ha van div kijelölve
  if (draggedDiv !== null) {
    console.log(event);
    // ! levágom a px-eket
    const top = parseInt(draggedDiv.style.top.slice(0, -2));
    const left = parseInt(draggedDiv.style.left.slice(0, -2));
    draggedDiv.style.top = top + event.movementY + "px";
    draggedDiv.style.left = left + event.movementX + "px";
  }
}
delegate(main, "mousemove", "div", handleDivMouseMove);



