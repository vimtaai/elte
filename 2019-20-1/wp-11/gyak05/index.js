import { randomBetween } from "./utils.js";
import { createPlayer, updatePlayer } from "./actor/player.js";
import { createRobot, updateRobot } from "./actor/robot.js";

const game = document.querySelector("#game");
const button = document.querySelector("button");
const teleport = document.querySelector("#teleport");
const width = 20;
const height = 20;

function setup() {
  // ! letöröljük a játékot
  game.innerHTML = "";
  // Array.from(game.children).forEach(e => e.remove());
  // ! beállítja a játéktábla méretét (30×30px-es grid)
  game.style.width = width * 30 + "px";
  game.style.height = height * 30 + "px";
  // ! random helyre lerakja a playert
  game.append(createPlayer(width, height));
  // ! random helyekre lerakja a robotokat
  for (let i = 0; i < randomBetween(10, 20); i++) {
    game.append(createRobot(width, height));
  }
  teleport.disabled = false;
  teleport.dataset.remaining = 5;
  teleport.innerText = `Teleport (${teleport.dataset.remaining})`;
}
button.addEventListener("click", setup);

function nextTurn() {
  const player = document.querySelector(".player");
  const robots = Array.from(document.querySelectorAll(".robot"));

  // ! robotok mozgatása
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
  }

  // ! robotok ütközése egymással
  for (const robot of robots) {
    // const sel = `.robot[data-x="${robot.dataset.x}"][data-y="${robot.dataset.y}"]`;
    // const robotsHere = document.querySelectorAll(sel);
    const robotsHere = robots.filter(r =>
      r.dataset.x === robot.dataset.x && r.dataset.y === robot.dataset.y
    );
    if (robotsHere.length > 1) {
      for (const r of robotsHere) {
        r.dataset.dead = true;
      }
    }
  }

  // ! játékos meghalt-e (a player koordinátáján van-e robot)
  const isRobotHere = robots.some(r =>
    r.dataset.x === player.dataset.x && r.dataset.y === player.dataset.y
  );
  if (isRobotHere) {
    player.dataset.dead = true;
    teleport.disabled = true;
  }

  // ! az összes robot meghalt-e
  const allRobotsDead = robots.every(r => r.dataset.dead);
  if (allRobotsDead) {
    player.dataset.win = true;
    teleport.disabled = true;
  }

  // ! szereplők kinézetének frissítése
  updatePlayer(player);
  Array.from(robots).forEach(updateRobot);
}

function handleKeyDown(event) {
  const player = document.querySelector(".player");

  if (player.dataset.dead || player.dataset.win) {
    return;
  }

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

  nextTurn();
}
// ! globális eseménykezelés
window.addEventListener("keydown", handleKeyDown);

function handleTeleportClick() {
  if (parseInt(teleport.dataset.remaining) === 0) {
    return;
  }

  const player = document.querySelector(".player");

  player.dataset.x = randomBetween(0, width);
  player.dataset.y = randomBetween(0, height);

  teleport.dataset.remaining--;
  teleport.innerText = `Teleport (${teleport.dataset.remaining})`;

  nextTurn();
}
teleport.addEventListener("click", handleTeleportClick);