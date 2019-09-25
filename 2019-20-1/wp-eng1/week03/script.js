// ! event handler function
// ! `event` => event object that describes the details of the event
function handleMouseMove(event) {
  // const x = event.pageX;
  // const y = event.pageY;
  const {pageX: cx, pageY: cy} = event;
  const ax = window.innerWidth / 2;
  const ay = window.innerHeight / 2;
  const x = cx - ax;
  const y = cy - ay;
  const angle = Math.atan2(y, x);
  const img = document.querySelector("img");
  img.style.transform = `rotate(${angle}rad)`;;
}
window.addEventListener("mousemove", handleMouseMove);
// ! window.addEventListener => global event

function createScreenCastLabel(event) {
  let label = "";
  if (event.ctrlKey) {
    label += "Ctrl + ";
  }
  if (event.altKey) {
    label += "Alt + ";
  }
  if (event.shiftKey) {
    label += "Shift + ";
  }
  if (event.metaKey) {
    label += "Meta + ";
  }
  const modifierKeys = ["Control", "Alt", "Shift", "Meta"];
  if (!modifierKeys.includes(event.key)) {
    label += event.key;
  }
  return label;
}

let timers = [];
const div = document.querySelector("div");
function handleKeyDown(event) {
  // ! cancelling the default functionality
  event.preventDefault();
  // ! if there is a timer
  if (timers.length !== 0) {
    // ! cancel the timer
    timers.forEach(timer => clearTimeout(timer));
  }
  div.innerText = createScreenCastLabel(event);
}

window.addEventListener("keydown", handleKeyDown);
function handleKeyUp(event) {
  const timer = setTimeout(function () {
    div.innerText = "";
  }, 3000);
  timers.push(timer);
}
window.addEventListener("keyup", handleKeyUp);