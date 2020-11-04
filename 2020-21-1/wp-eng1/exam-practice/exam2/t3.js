// Subtask 1
const width = imgData[0].length;
const height = imgData.length;

const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = width;
canvas.height = height;

// Subtask 2
function draw(scale = 1) {
  context.clearRect(0, 0, canvas.width, canvas.height);

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const pixel = imgData[y][x];
      context.fillStyle = `rgb(${pixel}, ${pixel}, ${pixel})`;
      context.beginPath();
      context.rect(x * scale, y * scale, scale, scale);
      context.fill();
    }
  }
}

draw(1);

// Subtask 3
const input = document.querySelector("input");

function handleInputUpdate() {
  const scale = parseInt(input.value);
  canvas.width = width * scale;
  canvas.height = height * scale;
  draw(scale);
}

input.addEventListener("input", handleInputUpdate);