import { state, newGame, revealField } from "./state.js";
import { render } from "./render.js";

const game = document.querySelector("#game");
const newGameButton = document.querySelector("#new-game");
const xInput = document.querySelector("#x-input");
const yInput = document.querySelector("#y-input");
const minesInput = document.querySelector("#mines-input");

function handleNewGameClick() {
  const x = parseInt(xInput.value);
  const y = parseInt(yInput.value);
  const mines = parseInt(minesInput.value);

  newGame(x, y, mines); // Change the state
  game.innerHTML = render(state); // Rerender the state
  console.dir(state);
}

newGameButton.addEventListener("click", handleNewGameClick);

function delegate(parent, type, selector, handler) {
  parent.addEventListener(type, function (event) {
    const targetElement = event.target.closest(selector);

    if (this.contains(targetElement)) {
      handler.call(targetElement, event);
    }
  });
}

function handleFieldClick() {
  const button = this;
  const td = button.parentNode;
  const tr = td.parentNode;

  const x = td.cellIndex;
  const y = tr.rowIndex;

  revealField(x, y);
  game.innerHTML = render(state);
}

delegate(game, "click", "button", handleFieldClick);
