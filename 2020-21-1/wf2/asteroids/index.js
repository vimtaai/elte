import { GameOverDisplay } from "./actors/game-over.js";
import { Player } from "./actors/player.js";
import { ScoreDisplay } from "./actors/score-display.js";
import { context, HEIGHT, WIDTH } from "./canvas.js";
import { handlePlayerMove, handlePlayerStop } from "./events/player-move.js";
import { handleToggleDebug } from "./events/toggle-debug.js";
import { handleFire } from "./events/fire.js";
import { state } from "./state.js";
import { asteroidTimer } from "./timers/asteroid-timer.js";
import { explosionSkinTimer } from "./timers/explosion-skin-timer.js";
import { playerSkinTimer } from "./timers/player-skin-timer.js";
import { energyRechargeTimer } from "./timers/energy-recharge-timer.js";

function init() {
  state.stage = "playing";

  state.player = new Player(WIDTH / 2, HEIGHT - 50);
  state.asteroids = [];
  state.explosions = [];
  state.bullets = [];
  state.gameover = new GameOverDisplay();
  state.scoreDisplay = new ScoreDisplay();
  state.degug = false;

  asteroidTimer.timer = setInterval(asteroidTimer.onTick, 300);
  playerSkinTimer.timer = setInterval(playerSkinTimer.onTick, 100);
  explosionSkinTimer.timer = setInterval(explosionSkinTimer.onTick, 100);
  energyRechargeTimer.timer = setInterval(energyRechargeTimer.onTick, 1000);
}

function update(dt) {
  if (state.stage === "playing") {
    // Játékos frissítése
    state.player.update(dt);

    // Aszteroidák frissítése
    for (const asteroid of state.asteroids) {
      asteroid.update(dt);

      // Ütközés játékossal
      state.player.collideWithAsteroid(asteroid);
      // Ütközés lövedékell
      for (const bullet of state.bullets) {
        bullet.collideWithAsteroid(asteroid);
      }

      // Ha kiment az aszteroida
      if (asteroid.isOutOfCanvas()) {
        // Kapunk egy pontot
        state.scoreDisplay.addScore();
        // Töröljük az aszeroidát
        asteroid.destroy();
      }
    }

    // Robbanások frissítése
    for (const explosion of state.explosions) {
      explosion.update(dt);
    }

    // Lövedékek frissítése
    for (const bullet of state.bullets) {
      bullet.update(dt);
    }
  } else if (state.stage === "game over") {
    for (const asteroid of state.asteroids) {
      asteroid.update(dt);
    }

    for (const explosion of state.explosions) {
      explosion.update(dt);
    }

    for (const bullet of state.bullets) {
      bullet.update(dt);
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

    // Robbanások kirajzolása
    for (const explosion of state.explosions) {
      explosion.render(context);
    }

    // Lövedékek kirajzolása
    for (const bullet of state.bullets) {
      bullet.render(context);
    }

    // Pontszám kirajzolása
    state.scoreDisplay.render(context);
  } else if (state.stage === "game over") {
    // Aszteroidák kirajzolása
    for (const asteroid of state.asteroids) {
      asteroid.render(context);
    }
    
    for (const explosion of state.explosions) {
      explosion.render(context);
    }

    for (const bullet of state.bullets) {
      bullet.render(context);
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
addEventListener("keydown", handleToggleDebug);
addEventListener("keydown", handleFire);
