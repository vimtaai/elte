import { randomBetween } from "./utils.js";

function createActor(width, height) {
  const x = randomBetween(0, width - 1);
  const y = randomBetween(0, height - 1);

  const div = document.createElement("div");

  div.dataset.x = x;
  div.dataset.y = y;

  div.style.left = x * 30 + "px";
  div.style.top = y * 30 + "px";

  return div;
}

export function createPlayer(width, height) {
  const player = createActor(width, height);
  player.dataset.type = "player";
  player.classList.add("player");
  player.innerText = "🙂";
  return player;
}

export function createRobot(width, height) {
  const robot = createActor(width, height);
  robot.dataset.type = "robot";
  robot.classList.add("robot");
  robot.innerText = "🤖";
  return robot;
}