import { State } from "./state.js";

const root = document.querySelector("#board");
const state = new State(root);

function handleKeyDown(event) {
  if (event.key === "ArrowDown") {
    state.moveDown();
  } else if (event.key === "ArrowUp") {
    state.moveUp();
  } else if (event.key === "ArrowLeft") {
    state.moveLeft();
  } else if (event.key === "ArrowRight") {
    state.moveRight();
  } else {
    return;
  }

  state.newBlock();
}
window.addEventListener("keydown", handleKeyDown);

window.state = state;