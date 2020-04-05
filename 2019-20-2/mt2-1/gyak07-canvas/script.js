const newAsteroidProbability = 0.8;

function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = 500;
canvas.height = 500;

const spaceship = new Image();
spaceship.src = "spaceship.png";

let player = {
  x: canvas.width / 2,
  y: canvas.height - 100,
  vx: 0,
  vy: 0,
  r: 20
};

let asteroids = new Set();
let stage = "playing";
let score = 0;

let lastFrameTime = performance.now();

function next() {
  const currentFrameTime = performance.now();
  const dt = (currentFrameTime - lastFrameTime) / 1000;

  update(dt);
  render();

  lastFrameTime = currentFrameTime;
  if (stage === "playing") {
    requestAnimationFrame(next);
  }
}

// Állapot frissítése
function update(dt) {
  if (Math.random() < newAsteroidProbability * dt) {
    // Új aszteroida születik
    const newAsteroid = {
      x: randomBetween(0, canvas.width),
      vx: randomBetween(-25, 25),
      vy: randomBetween(50, 175),
      r: randomBetween(15, 40)
    };
    newAsteroid.y = -newAsteroid.r;
    asteroids.add(newAsteroid);
  }

  // dx = vx × dt
  player.x += player.vx * dt;
  player.y += player.vy * dt;

  player.x = Math.min(player.x, canvas.width);
  player.x = Math.max(player.x, 0);

  player.y = Math.min(player.y, canvas.height);
  player.y = Math.max(player.y, 0);

  for (const asteroid of asteroids) {
    asteroid.x += asteroid.vx * dt;
    asteroid.y += asteroid.vy * dt;
    
    const distance = Math.sqrt((player.x - asteroid.x) ** 2 + (player.y - asteroid.y) ** 2);
    if (distance < asteroid.r + player.r) {
      // TODO: ütköznek
      stage = "gameover";
    }

    if (asteroid.y >= canvas.height + asteroid.r) {
      score += 1;
      asteroids.delete(asteroid);
    }
  }
}

// Állapot kirajzolása
function render() {
  // Vászon törlése
  context.clearRect(0, 0, canvas.width, canvas.height);

  if (stage === "playing") {
    // Játékos kirajzolása
    context.strokeStyle = "red";
    // context.beginPath();
    // context.arc(Math.round(player.x), Math.round(player.y), player.r, 0, Math.PI * 2);
    // context.stroke();
    context.drawImage(
      spaceship,                                                            // kép
      0, 0, 500, 500,                                                       // eredeti képen mettől, mekkora részt 
      player.x - player.r, player.y - player.r + 3, player.r * 2, player.r * 2  // canvasen mettől, mekkorában
    );

    // Aszteroidák kirajzolása
    context.fillStyle = "black";
    for (const asteroid of asteroids) {
      context.beginPath();
      context.arc(asteroid.x, asteroid.y, asteroid.r, 0, Math.PI * 2);
      context.fill();
    }
    context.fillStyle = "blue";
    context.font = "20px Arial";
    context.fillText("Score: " + score, 20, 30);
  } else if (stage === "gameover") {
    context.font = "32px Arial";
    context.textAlign = "center";
    context.fillText("Game Over", canvas.width / 2, canvas.height / 2);
    context.font = "26px Arial";
    context.fillText("Score: " + score, canvas.width / 2, canvas.height / 2 + 50);
  }
}

// Eseménykezelés
function handleKeyDown(event) {
  if (event.code === "ArrowLeft") {
    player.vx = -100;
  } else if (event.code === "ArrowRight") {
    player.vx = +100;
  } else if (event.code === "ArrowUp") {
    player.vy = -100;
  } else if (event.code === "ArrowDown") {
    player.vy = +100;
  }
}
window.addEventListener("keydown", handleKeyDown);

function handleKeyUp(event) {
  if (event.code === "ArrowLeft" && player.vx < 0) {
    player.vx = 0;
  } else if (event.code === "ArrowRight" && player.vx > 0) {
    player.vx = 0;
  } else if (event.code === "ArrowUp" && player.vy < 0) {
    player.vy = 0;
  } else if (event.code === "ArrowDown" && player.vy > 0) {
    player.vy = 0;
  }
}
window.addEventListener("keyup", handleKeyUp);

next();