import { Bird } from "./bird.js";
import { Pipe } from "./pipe.js";

const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = 700;
canvas.height = 500;

let lastFrame = Date.now();
let lastPipe = 0;
const bird = new Bird(50);
const pipes = [];

function render() {
  // ! vászon törlése
  context.clearRect(0, 0, canvas.width, canvas.height);

  // ! szereplők kirajzolása
  bird.render(context);
  for (const pipe of pipes) {
    pipe.render(context);
  }
}

function next() {
  const dt = (Date.now() - lastFrame) / 1000; // ? sec
  if (Date.now() - lastPipe > 1500) {
    createPipe();
    lastPipe = Date.now();
  }

  let score = 0;
  bird.next(dt);
  for (const pipe of pipes) {
    pipe.next(dt);

    // ! ha kiment a képernyőből
    if (pipe.x + pipe.width < 0) {
      pipes.splice(pipes.indexOf(pipe), 1);
      score = 1;
    }
  }
  bird.score += score;

  // ! játék vége
  if (bird.y > canvas.height) {
    return;
  }
  for (const pipe of pipes) {
    if (bird.collidesWith(pipe)) {
      return;
    }
  }

  render();
  lastFrame = Date.now();
  requestAnimationFrame(next);
}

next();

function handleKeyDown(event) {
  if (event.code === "Space") {
    event.preventDefault();
    bird.speed = -200;
  }
}
window.addEventListener("keydown", handleKeyDown);

function createPipe() {
  const maxHeight = canvas.height / 2;
  const gapHeight = canvas.height / 3;

  const height = Math.floor(Math.random() * maxHeight);
  pipes.push(new Pipe(0, height));
  pipes.push(new Pipe(canvas.height, -canvas.height + height + gapHeight));
}