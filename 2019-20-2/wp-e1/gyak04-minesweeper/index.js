import { AppState } from "./state.js";
import { render } from "./render.js";

const state = new AppState();

state.init(20, 20, 50);
// console.dir(state);
document.querySelector("#game").innerHTML = render(state);