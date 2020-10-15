const ARC_WIDTH = 5;

const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = 500;
canvas.height = 500;

let arcs = [];

function init() {
  for (let i = 0; i < 16; i++) {
    arcs.push(new Arc(i));
  }
  console.log(arcs);
}

function update(dt) {
  for (let current_arc of arcs) {
    current_arc.update(dt);
  }
}

function render() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.lineWidth = ARC_WIDTH;
  for (let current_arc of arcs) {
    current_arc.render(context);
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

