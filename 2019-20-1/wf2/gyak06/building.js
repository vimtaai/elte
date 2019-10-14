let canvas = document.querySelector("canvas");
let context = canvas.getContext("2d");

canvas.height = 300;

// ! (5×15) ablak
const floors = 10; 
const windowsPerFloor = 8;

// ! ház alapja
let houseWidth = 7 * windowsPerFloor + 2;
let houseHeight = 17 * floors + 2;

context.fillStyle = "brown";
context.beginPath();
context.rect(0, 0, houseWidth, houseHeight);
context.fill();

for (let i = 0; i < windowsPerFloor; i++) {
  for (let j = 0; j < floors; j++) {
    let random = Math.random();
    if (random < 0.1) {
      context.fillStyle = "yellow";
    } else if (random > 0.7) {
      context.fillStyle = "black";
    } else {
      context.fillStyle = "gray";
    }
    context.beginPath();
    context.rect(2 + i * 7, 2 + j * 17, 5, 15);
    context.fill();
  }
}




