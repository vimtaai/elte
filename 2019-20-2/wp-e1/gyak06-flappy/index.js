import { AppState, Stage } from "./state.js";

const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = 700;
canvas.height = 400;

const timeBetweenPipes = 1500;

const state = new AppState();
let lastFrameTime = performance.now();
let lastPipeTime = performance.now();

function next() {
  let currentTime = performance.now();
  let dt = (currentTime - lastFrameTime) / 1000; // sec

  if (currentTime - lastPipeTime > timeBetweenPipes) {
    state.newPipe(canvas.width, canvas.height);
    lastPipeTime = currentTime;
    console.log(state.pipes);
  }

  update(dt);
  render();

  lastFrameTime = currentTime;

  if (state.stage === Stage.PLAYING) {
    requestAnimationFrame(next);
  }
}

next();

function update(dt) {
  state.bird.update(dt);

  for (const pipe of state.pipes) {
    pipe.update(dt);

    if (state.bird.collidesWith(pipe)) {
      state.stage = Stage.GAMEOVER;
    }

    if (pipe.outOfGame()) {
      state.addScore();
      state.deletePipe(pipe);      
    }
  }
}

function render() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = "#70C5CE";
  context.fillRect(0, 0, canvas.width, canvas.height);

  if (state.stage === Stage.PLAYING) {
    state.bird.render(context);

    for (const pipe of state.pipes) {
      pipe.render(context);  
    }
  } else if (state.stage === Stage.GAMEOVER) {
    context.fillStyle = "#000000";
    context.font = "32px Arial";
    context.textAlign = "center";
    context.fillText("Game Over", canvas.width / 2, canvas.height / 2);
    context.fillText("Score: " + state.score, canvas.width / 2, canvas.height / 2 + 50);
  }
}

function handleKeyUp(event) {
  if (event.code !== "Space") {
    return;
  }

  state.bird.jump();
}
window.addEventListener("keyup", handleKeyUp);
