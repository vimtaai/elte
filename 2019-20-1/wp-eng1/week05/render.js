import { snake, apples } from "./state.js";

export function render(game) {
  game.innerHTML = "";
  // Array.from(game.children).forEach(child => child.remove());

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
    game.append(div);
  }

  for (const apple of apples) {
    const div = document.createElement("div");
    div.classList.add("apple");
    div.style.left = apple.x * 30 + "px";
    div.style.top = apple.y * 30 + "px";
    game.append(div);
  }
}
