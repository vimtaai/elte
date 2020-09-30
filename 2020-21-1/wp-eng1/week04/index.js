import { state, newGame } from "./state.js";
import { render } from "./render.js";

const game = document.querySelector("#game");

newGame(10, 10, 15);
console.dir(state);
game.innerHTML = render(state);