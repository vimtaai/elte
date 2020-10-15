const WINDOWS_PER_FLOOR = 5;
const NUMBER_OF_FLOORS = 20;
const WINDOW_WIDTH = 30;
const WINDOW_HEIGHT = 10;
const HOUSE_COLOR = "navy";
const WINDOW_GAP = WINDOW_WIDTH / 2;
const FLOOR_GAP = WINDOW_HEIGHT;

const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = 300;
canvas.height = 500;

let houseWidth = WINDOWS_PER_FLOOR * WINDOW_WIDTH  + (WINDOWS_PER_FLOOR + 1) * WINDOW_GAP;
let houseHeight = NUMBER_OF_FLOORS * WINDOW_HEIGHT + (NUMBER_OF_FLOORS + 1) * FLOOR_GAP;

// Ház alapja
context.beginPath();
context.fillStyle = HOUSE_COLOR;
context.rect(10, 10, houseWidth, houseHeight + 10);
context.fill();

// Ablakok
for (let floor = 0; floor < NUMBER_OF_FLOORS; floor++) {
  for (let window = 0; window < WINDOWS_PER_FLOOR; window++) {
    context.beginPath();
    context.fillStyle = Math.random() < 0.3 ? "yellow" : "black";
    context.rect(
      10 + WINDOW_GAP + (WINDOW_WIDTH + WINDOW_GAP) * window, 
      10 + FLOOR_GAP + (WINDOW_HEIGHT + FLOOR_GAP) * floor,
      WINDOW_WIDTH,
      WINDOW_HEIGHT
    );
    context.fill();
  }
}