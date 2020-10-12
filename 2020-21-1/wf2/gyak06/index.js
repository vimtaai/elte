import { Player } from "./actors/player.js";
import { context, HEIGHT, WIDTH } from "./canvas.js";
import { handlePlayerMove, handlePlayerStop } from "./events/player-move.js";
import { state } from "./state.js";
import { asteroidTimer } from "./timers/asteroid-timer.js";

function init() {
  state.stage = "playing";
  state.player = new Player(WIDTH / 2, HEIGHT - 50);
  state.asteroids = [];

  asteroidTimer.timer = setInterval(asteroidTimer.onAsteroidTimer, 1000);
}

function update(dt) {
  if (state.stage === "playing") {
    // Játékos frissítése
    state.player.update(dt);

    // Aszteroidák frissítése
    for (const asteroid of state.asteroids) {
      asteroid.update(dt);

      state.player.collideWithAsteroid(asteroid);
    }
  } else if (state.stage === "game over") {
    // ???
  }
}

function render() {
  context.clearRect(0, 0, WIDTH, HEIGHT);
    if (state.stage === "playing") {
    // Játékos kirajzolása
    state.player.render(context);

    // Aszteroidák kirajzolása
    for (const asteroid of state.asteroids) {
      asteroid.render(context);
    }
  } else if (state.stage === "game over") {
    // Kiírni a pontszámot
    // TODO: ennek nem itt van a helye
    context.font = "30px Arial";
    context.textAlign = "center";
    context.fillText("Game Over", WIDTH / 2, HEIGHT / 2);
  }
}

let lastFrameTime = performance.now();
function next() {
  let currentTime = performance.now();
  let dt = (currentTime - lastFrameTime) / 1000;

  update(dt);
  render();

  lastFrameTime = currentTime;
  
  requestAnimationFrame(next);
}

init();
next();

addEventListener("keydown", handlePlayerMove);
addEventListener("keyup", handlePlayerStop);