const canvas = document.querySelector('canvas');
canvas.width = 800;
canvas.height = 600;
const context = canvas.getContext('2d');

// context.fillStyle = 'red';
// context.strokeStyle = 'green';
// context.lineWidth = 4;
// context.beginPath();
// context.moveTo(100, 100);
// context.lineTo(200, 100);
// context.lineTo(200, 200);
// context.lineTo(100, 200);
// context.lineTo(100, 100);
// context.closePath();
// context.fill();
// context.stroke();

// context.fillStyle = 'maroon';
// context.strokeStyle = 'blue';
// context.beginPath();
// context.moveTo(100, 100);
// context.lineTo(150, 50);
// context.lineTo(200, 100);
// context.fill();
// context.stroke();
// context.closePath();

// context.translate(canvas.width / 2, canvas.height / 2);
// context.scale(100, 100);
// context.lineWidth = 0.01;
// context.beginPath();
// for (let x = -Math.PI; x <= Math.PI; x += 0.01) {
//   let y = Math.sin(x);
//   context.lineTo(x, y);
// }
// context.stroke();
// context.closePath();

// Állapot
let isMouseDown = false;

function mouseDown (e) {
  isMouseDown = true;
  let color = document.querySelector('[type=color]').value;
  let width = document.querySelector('[type=number]').value;
  context.strokeStyle = color;
  context.lineWidth = width;
  context.beginPath();
  context.moveTo(e.offsetX, e.offsetY);
}
canvas.addEventListener('pointerdown', mouseDown);

function mouseUp () {
  isMouseDown = false;
  context.closePath();
}
canvas.addEventListener('pointerup', mouseUp);

function mouseMove (e) {
  if (!isMouseDown) {
    return;
  }

  context.lineTo(e.offsetX, e.offsetY);
  context.stroke();
}
canvas.addEventListener('pointermove', mouseMove);

function buttonClick () {
  context.clearRect(0, 0, canvas.width, canvas.height);
}
document.querySelector('button').addEventListener('click', buttonClick);



