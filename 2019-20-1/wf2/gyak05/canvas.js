let canvas = document.querySelector("canvas");
let context = canvas.getContext("2d");

canvas.width = 400;
canvas.height = 250;

context.fillStyle = "red";
context.beginPath();
context.moveTo(100, 100);
context.lineTo(150, 150);
context.lineTo(100, 150);
context.lineTo(100, 100);
context.stroke();
context.fill();

context.fillStyle = "blue";
context.beginPath();
context.moveTo(50, 50);
context.lineTo(50, 100);
context.lineTo(100, 100);
context.lineTo(100, 50);
context.lineTo(50, 50);
context.fill();