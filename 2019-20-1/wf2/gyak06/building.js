let canvas = document.querySelector("canvas");
let context = canvas.getContext("2d");

canvas.height = 300;

// ! (5×15) ablak
const floors = 30;
const windowsPerFloor = 5;

// ! ház alapja
let houseWidth = 18 * windowsPerFloor + 4;
let houseHeight = 7 * floors + 5;

context.fillStyle = "brown";
context.beginPath();
context.rect(0, 0, houseWidth, houseHeight);
context.fill();

for (let i = 0; i < windowsPerFloor; i++) {
  for (let j = 0; j < floors; j++) {
    let random = Math.random();
    if (random < 0.3) {
      context.fillStyle = "yellow";
    } else {
      context.fillStyle = "black";
    }
    context.beginPath();
    context.rect(4 + i * 18, 4 + j * 7, 14, 5);
    context.fill();
  }
}
