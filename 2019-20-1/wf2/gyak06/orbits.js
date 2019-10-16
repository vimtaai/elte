let canvas = document.querySelector("canvas");
let context = canvas.getContext("2d");

canvas.width = 500;
canvas.height = 500;

let venus = {
  angle: 0,
  speed: 13,
  radius: 150
};

let earth = {
  angle: 0,
  speed: 8,
  radius: 200
}

function getCoords(angle, radius) {
  let x = radius * Math.cos(angle);
  let y = radius * Math.sin(angle);
  return { x, y };
}

context.fillStyle = "black";
context.beginPath();
context.rect(0, 0, canvas.width, canvas.height);
context.fill();

context.translate(canvas.width / 2, canvas.height / 2);

context.fillStyle = "yellow";
context.beginPath();
context.arc(0, 0, 10, 0, Math.PI * 2);
context.fill();

context.strokeStyle = "white";
for (let i = 0; i < 500; i++) {
  context.beginPath();
  // ! odamegyek a vénuszhoz
  let venusCoords = getCoords(venus.angle, venus.radius);
  context.moveTo(venusCoords.x, venusCoords.y);
  // ! vonalat húzok a földig
  let earthCoords = getCoords(earth.angle, earth.radius);
  context.lineTo(earthCoords.x, earthCoords.y);
  context.stroke();

  venus.angle += venus.speed;
  earth.angle += earth.speed;
}
