const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = 500;
canvas.height = 500;

const w = canvas.width / 2;
const h = canvas.height / 2;

let speed;
let angle;

function init() {
  angle = 0;
  speed = Math.PI;
}

function update(dt) {
  angle += speed * dt;
}

function render() {
  context.clearRect(0, 0, w, h);
  context.save();

  // Kör
  context.strokeStyle = "gray";
  context.translate(w / 2, h / 2);
  context.beginPath();
  context.arc(0, 0, 50, 0, Math.PI * 2);
  context.stroke();

  // Kör labda
  context.fillStyle = "red";
  context.rotate(angle);
  context.beginPath();
  context.arc(50, 0, 10, 0, Math.PI * 2);
  context.fill();

  context.restore();

  // ---------

  context.save();

  // Vízszintes vonal
  context.strokeStyle = "gray";
  context.translate(w / 2, 50);
  context.beginPath();
  context.moveTo(-50, 0);
  context.lineTo(50, 0);
  context.stroke();

  // Vízszintes labda
  context.fillStyle = "red";
  context.beginPath();
  context.arc(Math.cos(angle) * 50, 0, 10, 0, Math.PI * 2);
  context.fill();

  context.restore();

  // ---------

  context.save();

  // Függőleges vonal
  context.strokeStyle = "gray";
  context.translate(50, h / 2);
  context.beginPath();
  context.moveTo(0, -50);
  context.lineTo(0, 50);
  context.stroke();

  // Függőleges labda
  context.fillStyle = "red";
  context.beginPath();
  context.arc(0, Math.sin(angle) * 50, 10, 0, Math.PI * 2);
  context.fill();

  context.restore();

  // ---------

  context.save();

  // Összekötő vonal
  context.beginPath();
  context.moveTo(w / 2 + 50 * Math.cos(angle), h / 2 + 50 * Math.sin(angle));
  context.lineTo(w / 2 + 50 * Math.cos(angle), 50);
  context.moveTo(w / 2 + 50 * Math.cos(angle), h / 2 + 50 * Math.sin(angle));
  context.lineTo(50, h / 2 + 50 * Math.sin(angle));
  context.stroke();

  context.restore();
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

function handleKeyDown(event) {
  console.log(event.code);
  if (event.code === "ArrowUp") {
    speed += Math.PI / 8;
  } else if (event.code === "ArrowDown") {
    speed -= Math.PI / 8;
  }
}
addEventListener("keydown", handleKeyDown);
