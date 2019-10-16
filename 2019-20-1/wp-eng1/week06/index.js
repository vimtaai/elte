import { State } from "./state.js";
import { render } from "./render.js";
import { context } from "./canvas.js";

let state;
let lastFrame; // ! timestamp of the last frame

// ! creates the next frame
function next() {
  const timeElapsed = (Date.now() - lastFrame) / 1000;

  // ! planets are moving
  for (const planet of state.planets) {
    planet.next(timeElapsed);
  }

  render(state, context);

  lastFrame = Date.now();
  requestAnimationFrame(next);
}

function start() {
  state = new State();

  lastFrame = Date.now();
  requestAnimationFrame(next);
}

start();