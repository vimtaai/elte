import { Status } from "./state.js";

export function render(state, root) {
  root.innerHTML = "";
  // Array.from(game.children).forEach(child => child.remove());

  if (state.status === Status.PLAYING) {
    root.append(...renderGame(state));
  } else if (state.status === Status.LOSE) {
    root.append(renderScoreScreen(state));
  }
}

function renderScoreScreen({ snake }) {
  const div = document.createElement("div");
  div.innerText = "You LOSE. Your score is: " + snake.length;
  return div;
}

function renderGame({ snake, apples }) {
  const elements = [];

  // ! generate DOM
  for (const snakePart of snake) {
    const div = document.createElement("div");
    div.classList.add("snake");
    // ! making the head different
    if (snake.indexOf(snakePart) === 0) {
      div.classList.add("head");
    }
    div.style.left = snakePart.x * 30 + "px";
    div.style.top = snakePart.y * 30 + "px";
    elements.push(div);
  }

  for (const apple of apples) {
    const div = document.createElement("div");
    div.classList.add("apple");
    div.style.left = apple.x * 30 + "px";
    div.style.top = apple.y * 30 + "px";
    elements.push(div);
  }

  return elements;
}