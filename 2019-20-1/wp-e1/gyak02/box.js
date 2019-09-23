const div = document.querySelector("div");

const leftButton = document.querySelector("button:nth-of-type(1)");
const rightButton = document.querySelector("button:nth-of-type(2)");

function handleLeftButtonClick() {
  const styles = getComputedStyle(div);
  const leftPos = styles.left.slice(0, -2); // levágja a %-ot
  div.style.left = (leftPos - 10) + "px";
}
leftButton.addEventListener("click", handleLeftButtonClick);

function handleRightButtonClick() {
  const styles = getComputedStyle(div);
  const leftPos = parseFloat(styles.left.slice(0, -2)); // levágja a %-ot
  div.style.left = (leftPos + 10) + "px";
}
rightButton.addEventListener("click", handleRightButtonClick);