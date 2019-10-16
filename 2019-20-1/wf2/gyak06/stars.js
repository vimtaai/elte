let canvas = document.querySelector("canvas");
let context = canvas.getContext("2d");

const N = 100;

canvas.width = 400;
canvas.height = 200;

function randomCoords() {
  return {
    x: Math.floor(Math.random() * canvas.width),
    y: Math.floor(Math.random() * canvas.height)
  }
}

context.fillStyle = "black";
context.beginPath();
context.rect(0, 0, canvas.width, canvas.height);
context.fill();

for (let i = 0; i < N; i++) {
  let r = Math.random();
  let color = 
    r < 0.3 ? "rgba(0, 255, 255, 0.6)" : 
    r > 0.7 ? "rgba(255, 0, 0, 0.6)" : 
    "rgba(255, 255, 0, 0.6)";
  r = Math.random();
  let size = 
    r < 0.3 ? 0.5 : 
    r > 0.9 ? 1.5 : 
    1;

  let coords = randomCoords();
  context.fillStyle = color;
  context.beginPath();
  context.arc(coords.x, coords.y, size, 0, Math.PI * 2);
  context.fill();
}