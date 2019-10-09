import { State } from "./state.js";
import { render } from "./render.js";

const game = document.querySelector("#game");
let state;

function start() {
  state = new State();
  game.style.width = state.width * 30 + "px";
  game.style.height = state.height * 30 + "px";
  // ! every 250ms do this
  setInterval(function () {
    state.move();
    render(state, game);
  }, 250);
}

function handleKeyDown(event) {
  if (event.key === "ArrowLeft") {
    state.changeDirection({x: -1, y: 0});
  } else if (event.key === "ArrowRight") {
    state.changeDirection({x: 1, y: 0});
  } else if (event.key === "ArrowUp") {
    state.changeDirection({x: 0, y: -1});
  } else if (event.key === "ArrowDown") {
    state.changeDirection({x: 0, y: 1});
  }
}
window.addEventListener("keydown", handleKeyDown);

start();