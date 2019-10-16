import { createPlayer, createRobot } from "./actor.js";
import { randomBetween } from "./utils.js";

const game = document.querySelector("#game");
const button = document.querySelector("button");
const width = 20;
const height = 20;

function setup() {
  // ! letöröljük a játékot
  game.innerHTML = "";
  // Array.from(game.children).forEach(e => e.remove());
  // ! beállítja a játéktábla méretét (30×30px-es grid)
  game.style.width = width * 30  + "px";
  game.style.height = height * 30 + "px";
  // ! random helyre lerakja a playert
  game.append(createPlayer(width, height));
  // ! random helyekre lerakja a robotokat
  for (let i = 0; i < randomBetween(10, 20); i++) {
    game.append(createRobot(width, height));
  }
}
button.addEventListener("click", setup);

function handleKeyDown(event) {
  const player = document.querySelector(".player");
  const robots = document.querySelectorAll(".robot");

  // ! frissítem a koordinátákat
  if (event.key === "ArrowDown") {
    player.dataset.y++;
  } else if (event.key === "ArrowUp") {
    player.dataset.y--;
  } else if (event.key === "ArrowLeft") {
    player.dataset.x--;
  } else if (event.key === "ArrowRight") {
    player.dataset.x++;
  }

  // ! frissítem a CSS-t
  player.style.left = player.dataset.x * 30 + "px";
  player.style.top = player.dataset.y * 30 + "px";

  for (const robot of robots) {
    if (robot.dataset.dead) {
      continue;
    }

    const xDistance = robot.dataset.x - player.dataset.x;
    const yDistance = robot.dataset.y - player.dataset.y;

    // ! x vagy y irányba mozgunk?
    if (Math.abs(xDistance) > Math.abs(yDistance)) {
      robot.dataset.x -= Math.sign(xDistance)
    } else {
      robot.dataset.y -= Math.sign(yDistance);
    }

    robot.style.left = robot.dataset.x * 30 + "px";
    robot.style.top = robot.dataset.y * 30 + "px";
  }

  for (const robot of robots) {
    // const sel = `.robot[data-x="${robot.dataset.x}"][data-y="${robot.dataset.y}"]`;
    // const robotsHere = document.querySelectorAll(sel);
    const robotsHere = Array.from(robots).filter(r => 
      r.dataset.x === robot.dataset.x && r.dataset.y === robot.dataset.y
    );
    if (robotsHere.length > 1) {
      for (const r of robotsHere) {
        r.innerText = "🔥";
        r.dataset.dead = true;
      }
    }
  }
}
// ! globális eseménykezelés
window.addEventListener("keydown", handleKeyDown);

