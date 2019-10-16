import { init, width, height, move } from "./state.js";
import { render } from "./render.js";

const game = document.querySelector("#game");

function start() {
  init();
  game.style.width = width * 30 + "px";
  game.style.height = height * 30 + "px";
  // ! every 250ms do this
  setInterval(function () {
    move();
    render(game);
  }, 250);
}
