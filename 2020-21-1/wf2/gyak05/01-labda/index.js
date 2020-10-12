const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = 500;
canvas.height = 400;

let ballCount = 0;
let balls = [];
let player1 = undefined;
let player2 = undefined;

// Kezdőállapot
function init() {
  player1 = new Player(canvas.width / 2, 0);
  player2 = new Player(canvas.width / 2, canvas.height);

  for (let i = 0; i < ballCount; i++) {
    let x = randomBetween(0, canvas.width);
    let y = randomBetween(0, canvas.height);
    let vx = randomBetween(100, 300);
    let vy = randomBetween(100, 300);
    let color = `hsl(0, ${randomBetween(50, 100)}%, ${randomBetween(25, 75)}%)`;

    balls.push(new Ball(x, y, vx, vy, color));
  }
}

// Játékciklus
function update(dt) {
  // Szereplők önálló mozgása
  player1.update(dt);
  player2.update(dt);

  for (let ball of balls) {
    ball.update(dt);
  }

  // Interakció más szereplőkkel
  for (let ball of balls) {
    ball.bounceBack(canvas);
    ball.bounceFromPlayer(player1);
    ball.bounceFromPlayer(player2);
  }
}

function render() {
  context.clearRect(0, 0, canvas.width, canvas.height);

  player1.render(context);
  player2.render(context);

  for (let ball of balls) {
    ball.render(context);
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