const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = 500;
canvas.height = 400;

let ball = new Ball(0, 0, 20, 15);
let ball2 = new Ball(210, 100, -10, 25);

function update(dt) {
  ball.update(dt);
  ball2.update(dt);
}

function render() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  ball.render(context);
  ball2.render(context);
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

next();