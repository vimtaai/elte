import { GameOver } from "./actors/game-over.js";
import { Player } from "./actors/player.js";
import { ScoreDisplay } from "./actors/score-display.js";
import { context, HEIGHT, WIDTH } from "./canvas.js";
import { handlePlayerMove, handlePlayerStop } from "./events/player-move.js";
import { state } from "./state.js";
import { asteroidTimer } from "./timers/asteroid-timer.js";

function init() {
  state.stage = "playing";
  state.player = new Player(WIDTH / 2, HEIGHT - 50);
  state.asteroids = [];
  state.score = 0;
  state.gameover = new GameOver(0);
  state.scoreDisplay = new ScoreDisplay();

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

      // Ha kiment az aszteroida
      if (asteroid.isOutOfCanvas()) {
        // Kapunk egy pontot
        state.scoreDisplay.addScore();
        // Töröljük az aszeroidát
        let index = state.asteroids.indexOf(asteroid);
        state.asteroids.splice(index, 1);
      }
    }
  } else if (state.stage === "game over") {
    for (const asteroid of state.asteroids) {
      asteroid.update(dt);
    }
  }
}

function render() {
  context.clearRect(0, 0, WIDTH, HEIGHT); 

  // Háttér
  // context.fillStyle = "black";
  // context.fillRect(0, 0, WIDTH, HEIGHT);

  if (state.stage === "playing") {
    // Játékos kirajzolása
    state.player.render(context);

    // Aszteroidák kirajzolása
    for (const asteroid of state.asteroids) {
      asteroid.render(context);
    }

    // Pontszám kirajzolása
    state.scoreDisplay.render(context);
  } else if (state.stage === "game over") {
    // Aszteroidák kirajzolása
    for (const asteroid of state.asteroids) {
      asteroid.render(context);
    }

    // Kiírni a pontszámot
    state.gameover.render(context);
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