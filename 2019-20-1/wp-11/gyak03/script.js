const div = document.querySelector("div");

function handleKeyDown(event) {
  // console.log(event);
  event.preventDefault();

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

  div.innerText = label;
  clearTimeout(timer);
}
window.addEventListener("keydown", handleKeyDown);

let timer;
function handleKeyUp() {
  timer = setTimeout(function() {
    div.innerText = "";
  }, 2000);
}
window.addEventListener("keyup", handleKeyUp);

const headings = Array.from(document.querySelectorAll("h1"));
const lis = Array.from(document.querySelectorAll("nav li"));
function handleScroll(event) {
  const h = window.scrollY;

  // const currentHeading =
  //   headings
  //     .filter(heading => heading.offsetTop < h + 100)
  //     .pop() || headings[0];

  const currentHeading = headings
    .reverse()
    .find(heading => heading.offsetTop < h + 100);

  const index = headings.indexOf(currentHeading);

  for (const li of lis) {
    li.style.color = "black";
  }
  lis[index].style.color = "red";
}
window.addEventListener("scroll", handleScroll);
