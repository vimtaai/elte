import { randomBetween } from "./utils.js";

export function createActor(width, height) {
  const x = randomBetween(0, width - 1);
  const y = randomBetween(0, height - 1);

  const div = document.createElement("div");

  div.dataset.x = x;
  div.dataset.y = y;

  updateActor(div);

  return div;
}

export function updateActor(actor) {
  actor.style.left = actor.dataset.x * 30 + "px";
  actor.style.top = actor.dataset.y * 30 + "px";
}