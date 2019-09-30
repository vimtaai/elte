import { board, init, moveRight, moveLeft, moveUp, moveDown, newBlock } from "./state.js";
import { render } from "./render.js";

init();
render(board);

function handleKeyDown(event) {
  if (event.key === "ArrowDown") {
    moveDown();
  } else if (event.key === "ArrowUp") {
    moveUp();
  } else if (event.key === "ArrowLeft") {
    moveLeft();
  } else if (event.key === "ArrowRight") {
    moveRight();
  } else {
    return;
  }

  newBlock();
  render(board);
}
window.addEventListener("keydown", handleKeyDown);