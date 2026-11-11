const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const width = canvas.width;
const height = canvas.height;

const asteroid = {
  x: 0,
  y: 20,
  width: 50,
  height: 40,
  img: new Image(),
};
const rocket = {
  x: width / 2,
  y: height - 50,
  width: 20,
  height: 50,
  img: new Image(),
};
asteroid.img.src = "asteroid.png";
rocket.img.src = "rocket.png";

// =============== Segédfüggvények =================

function isCollision(box1, box2) {
  return !(
    box2.y + box2.height < box1.y ||
    box1.x + box1.width < box2.x ||
    box1.y + box1.height < box2.y ||
    box2.x + box2.width < box1.x
  );
}

function calculateScore(){
  return Math.round(100 * Math.abs(asteroid.x + asteroid.width / 2 - rocket.x - rocket.width / 2));
}

// ============= Előadásból kimásolva =================

let lastFrameTime = performance.now();

function next(currentTime = performance.now()) {
  const dt = (currentTime - lastFrameTime) / 1000; // seconds
  lastFrameTime = currentTime;

  update(dt); // Update current state
  render(); // Rerender the frame

  requestAnimationFrame(next);
}

function update(dt) {}

function render() {
  // Canvas törlése
  ctx.clearRect(0, 0, width, height);
}

next(); // Start the loop
