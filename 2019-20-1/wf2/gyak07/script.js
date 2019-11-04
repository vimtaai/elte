const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = 600;
canvas.height = 300;

// ! Állapot változók
const grav = 100;

let stage; // ? aim, fly

let ball = {
  x: undefined,
  y: undefined,
  vx: undefined,
  vy: undefined,
  radius: undefined
};

let targets = [];

// ! Random egész szám `a` és `b` között
function randomBetween(a, b) {
  return Math.floor(Math.random() * (b - a + 1)) + a;
}

// ! Kezdőállapot
function init() {
  stage = "aim";

  ball.x = 50;
  ball.y = canvas.height / 2;
  ball.vx = 0;
  ball.vy = 0;
  ball.radius = 5;

  targets = [];
  for (let i = 0; i < 10; i++) {
    // ! Létrehozok egy célpontot
    const target = {
      x: randomBetween(canvas.width / 2, canvas.width),
      y: randomBetween(0, canvas.height),
      radius: randomBetween(5, 20)
    };
    // ! Berakom a célpontok közé
    targets.push(target);
  }
}

function draw() {
  // ! Háttér
  context.fillStyle = "black";
  context.beginPath();
  context.rect(0, 0, canvas.width, canvas.height);
  context.fill();

  // ! Golyóbis
  context.fillStyle = "white";
  context.beginPath();
  context.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
  context.fill();

  // ! Csúzli
  if (stage === "aim") {
    context.fillStyle = "gray";
    context.beginPath();
    let x = ball.x - (mouseStartCoords.x - mouseCurrentCoords.x) / 5;
    let y = ball.y - (mouseStartCoords.y - mouseCurrentCoords.y) / 5;
    context.arc(x, y, ball.radius, 0, Math.PI * 2);
    context.fill();
    context.strokeStyle = "gray";
    context.beginPath();
    context.moveTo(ball.x, ball.y);
    context.lineTo(x, y);
    context.stroke();
  }

  // ! Célpontok
  for (let target of targets) {
    context.fillStyle = "red";
    context.beginPath();
    context.arc(target.x, target.y, target.radius, 0, Math.PI * 2);
    context.fill();
  }
}

let lastFrame = Date.now();

function next() {
  // ! Eltelt idő az utolsó rajzolás óta
  let dt = (Date.now() - lastFrame) / 1000; // ? sec

  if (stage === "fly") {
    // ? s = v × t
    // ? s = v × t + a / 2 × t^2
    ball.x += ball.vx * dt;
    ball.y += ball.vy * dt + grav / 2 * (dt ** 2);
    ball.vy += grav * dt;

    for (let target of targets) {
      let dist = Math.sqrt((ball.x - target.x)**2 + (ball.y - target.y)**2);
      if (dist < ball.radius + target.radius) {
        // ! Eltaláltam, akkor törlöm
        let index = targets.indexOf(target);
        targets.splice(index, 1);
      }
    }

    // ! Új lövés
    if (ball.y > canvas.height) {
      ball.x = 50;
      ball.y = canvas.height / 2;
      mouseStartCoords = {};
      stage = "aim";
    }
  }

  draw();

  // ! Utolsó rajzolás idejének frissítése
  lastFrame = Date.now();
  requestAnimationFrame(next);
}

let mouseStartCoords = {};
let mouseCurrentCoords = {};

function handleMouseDown(event) {
  // ! Eltárolom az egérnyomás koordinátáit
  mouseStartCoords.x = event.offsetX;
  mouseStartCoords.y = event.offsetY;
}
window.addEventListener("mousedown", handleMouseDown);

function handleMouseMove(event) {
  mouseCurrentCoords.x = event.offsetX;
  mouseCurrentCoords.y = event.offsetY;
}
window.addEventListener("mousemove", handleMouseMove);

function handleMouseUp() {
  // ! Ha célzás fázisban vagyunk
  if (stage === "aim") {
    // ! Kiszámolom a sebességeket
    ball.vx = mouseStartCoords.x - mouseCurrentCoords.x;
    ball.vy = mouseStartCoords.y - mouseCurrentCoords.y;
    stage = "fly";
  }
}
window.addEventListener("mouseup", handleMouseUp);


// ! Játék indítása
init();
next();

