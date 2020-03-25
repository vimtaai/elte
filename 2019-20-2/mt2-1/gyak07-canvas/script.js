const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

let player = {
  x: 50,
  y: 50
}

function next() {
  update();
  render();

  requestAnimationFrame(next);
}

// Állapot frissítése
function update() {

}

// Állapot kirajzolása
function render() {
  // Vászon törlése
  context.clearRect(0, 0, canvas.width, canvas.height);
  // Játékos kirajzolása
  context.beginPath();
  context.rect(player.x, player.y, 20, 20);
  context.fill();
}

// Eseménykezelés
function handleKeyDown(event) {
  if (event.code === "ArrowLeft") {
    player.x -= 1;
  } else if (event.code === "ArrowRight") {
    player.x += 1;
  }
}
window.addEventListener("keydown", handleKeyDown);

next();