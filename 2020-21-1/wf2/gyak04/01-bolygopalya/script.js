// Kezdeti beállítások (boilerplate code)
const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

// Vászon beállítások
canvas.width = 500;
canvas.height = 400;
// Koordinátarendszer
context.translate(canvas.width / 2, canvas.height / 2);
context.strokeStyle = "White";

// Segédfüggvények
function degToRad(deg) {
  return (deg / 180) * Math.PI;
}

function getCoords(angle, c) {
  let x = c * Math.cos(degToRad(angle));
  let y = c * Math.sin(degToRad(angle));

  return [x, y];
}

// Konstansok
//                 fok / mp
const speedVenus = 360 / 225;
const speedEarth = 360 / 365;
const distVenus = 108;
const distEarth = 149;
const timeFactor = 200;

// Állapot
let state = {
  earthAngle: 0,
  venusAngle: 0,
  lines: [],
};

function update(dt) {
  // Bolygók mozgatása
  state.earthAngle += speedEarth * dt;
  state.venusAngle += speedVenus * dt;

  // Új vonal felvétele
  let [venusX, venusY] = getCoords(state.venusAngle, distVenus);
  let [earthX, earthY] = getCoords(state.earthAngle, distEarth);

  state.lines.push({ venusX, venusY, earthX, earthY });
}

function render() {
  // Háttér / Vászon törlése
  context.fillStyle = "black";
  context.rect(-canvas.width / 2, -canvas.height / 2, canvas.width, canvas.height);
  context.fill();
  
  // Vonalak
  for (let line of state.lines) {
    context.beginPath();
    context.moveTo(line.venusX, line.venusY);
    context.lineTo(line.earthX, line.earthY);
    context.stroke();
  }

  // Vénusz
  context.save();
  context.rotate(degToRad(state.venusAngle));
  context.fillStyle = "orange";
  context.beginPath();
  context.arc(distVenus, 0, 2, 0, degToRad(360));
  context.fill();
  context.closePath();
  context.restore();

  // Föld
  context.save();
  context.rotate(degToRad(state.earthAngle));
  context.fillStyle = "Lightblue";
  context.beginPath();
  context.arc(distEarth, 0, 4, 0, degToRad(360));
  context.fill();
  context.closePath();
  context.restore();

  // Napocska
  context.beginPath();
  context.fillStyle = "Yellow";
  context.arc(0, 0, 10, 0, degToRad(360));
  context.fill();
  context.closePath();
}

let lastFrameTime = performance.now();
function next() {
  // Eltelt idő kiszámítása
  let currentTime = performance.now();
  let dt = (currentTime - lastFrameTime) / 1000 * timeFactor;

  update(dt);
  render();

  lastFrameTime = currentTime;
  requestAnimationFrame(next);
}

next();
