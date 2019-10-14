import { ctx, canvas } from "./canvas.js";
import { Player } from "./actors/player.js";
import { Enemy } from "./actors/enemy.js";
import { Bullet } from "./actors/bullet.js";

canvas.width = window.innerWidth - 16;
canvas.height = window.innerHeight - 16;

let lastRender = Date.now();
const player = new Player(canvas.width/2, canvas.height/2);
const enemies = [];
const bullets = [];

// ! szimulációs lépés
function next() {
  // ! eltelt idő számolás
  const dt = (Date.now() - lastRender) / 1000; // ? sec

  // ! enemy spawn
  const spawnRate = 2; // ? enemy / sec
  const chanceOfNewEnemy = spawnRate * dt;
  if (Math.random() < chanceOfNewEnemy) {
    enemies.push(new Enemy());
    // console.log(enemies);
  }

  // ! lépteti a szereplőket
  player.next(dt);
  for (const enemy of enemies) {
    enemy.next(dt, player);
  }
  for (const bullet of bullets) {
    bullet.next(dt);
  }

  // ! kirajzolja a jelenetet
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  player.render(ctx);
  for (const enemy of enemies) {
    enemy.render(ctx);
  }
  for (const bullet of bullets) {
    bullet.render(ctx);
  }

  // ! ütközések
  for (const enemy of enemies) {
    let isDead = false;

    for (const bullet of bullets) {
      if (enemy.collidesWith(bullet)) {
        // ! haljon meg az enemy és a bullet
        const bulletIndex = bullets.indexOf(bullet);
        const enemyIndex = enemies.indexOf(enemy);

        bullets.splice(bulletIndex, 1);
        enemies.splice(enemyIndex, 1);
        isDead = true;
        player.score++;
        break;
      }
    }

    if (isDead) {
      continue;
    }

    if (enemy.collidesWith(player)) {
      ctx.textAlign = "center";
      ctx.font = "100px Consolas";
      ctx.fillStyle = "black";
      ctx.fillText("GAME OVER", canvas.width/2, canvas.height/2);
      return; // ! kilépek a játékciklusból
    }
  }

  // ! frissítem az utolsó renderelés idejét
  lastRender = Date.now();

  requestAnimationFrame(next);
}

next();

// ! eseménykezelés
function handleKeyDown(event) {
  // console.log(event);
  if (event.code === "KeyW") {
    player.vy = -200; // ? px/sec
  } else if (event.code === "KeyS") {
    player.vy = 200;
  } else if (event.code === "KeyA") {
    player.vx = -200;
  } else if (event.code === "KeyD") {
    player.vx = 200;
  }
}
window.addEventListener("keydown", handleKeyDown);

function handleKeyUp(event) {
  if (event.code === "KeyW") {
    if (player.vy < 0) player.vy = 0; // ? px/sec
  } else if (event.code === "KeyS") {
    if (player.vy > 0) player.vy = 0;
  } else if (event.code === "KeyA") {
    if (player.vx < 0) player.vx = 0;
  } else if (event.code === "KeyD") {
    if (player.vx > 0) player.vx = 0;
  }
}
window.addEventListener("keyup", handleKeyUp);

function handleClick(event) {
  const x = event.pageX;
  const y = event.pageY;

  bullets.push(new Bullet(player, x, y));
}
window.addEventListener("click", handleClick);

function handleMouseMove(event) {
  const x = event.pageX;
  const y = event.pageY;

  player.angle = Math.atan2(y - player.y, x - player.x);
}
window.addEventListener("mousemove", handleMouseMove);