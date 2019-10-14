import { initCanvas, context, canvas } from './canvas.js';
import { Player } from './player.js';
import { Asteroid } from './asteroid.js';

initCanvas();

// context.fillStyle = "#a4b4fa";
// context.rect(200, 200, 150, 100);
// context.fill();

const player = new Player(canvas.width / 2, canvas.height - 50);
const asteroids = [];
let lastRender = Date.now();

function next() {
  const dt = (Date.now() - lastRender) / 1000; // ? mp
  context.clearRect(0, 0, canvas.width, canvas.height);

  // ! asteroid spawn
  const asteroidSpawnProbability = 1 * dt;
  if (Math.random() < asteroidSpawnProbability) {
    asteroids.push(new Asteroid());
  }

  // ! next
  player.next(dt);
  asteroids.forEach(asteroid => { asteroid.next(dt) });

  // ! ha kiment a képből, akkor töröljük
  for (const asteroid of asteroids) {
    if (asteroid.y > canvas.height) {
      asteroids.splice(asteroids.indexOf(asteroid), 1);
      player.score++;
    }
  }

  // ! render
  player.render(context);
  asteroids.forEach(asteroid => { asteroid.render(context) });

  for (const asteroid of asteroids) {
    const dist = Math.sqrt(
      (player.x - asteroid.x) ** 2 + (player.y - asteroid.y) ** 2
    );
    if (dist < player.height * (2/3) + asteroid.width / 2) {
      alert("ded 😣");
      return;
    }
  }

  lastRender = Date.now();
  requestAnimationFrame(next);
}

requestAnimationFrame(next);

function handleKeyDown(event) {
  if (event.key === "ArrowUp") {
    player.vy = -100;
  } else if (event.key === "ArrowDown") {
    player.vy = 100;
  } else if (event.key === "ArrowLeft") {
    player.vx = -100;
  } else if (event.key === "ArrowRight") {
    player.vx = 100;
  }
}
window.addEventListener("keydown", handleKeyDown);

function handleKeyUp(event) {
  if (event.key === "ArrowUp") {
    if (player.vy < 0) player.vy = 0;
  } else if (event.key === "ArrowDown") {
    if (player.vy > 0) player.vy = 0;
  } else if (event.key === "ArrowLeft") {
    if (player.vx < 0) player.vx = 0;
  } else if (event.key === "ArrowRight") {
    if (player.vx > 0) player.vx = 0;
  }
}
window.addEventListener("keyup", handleKeyUp);
