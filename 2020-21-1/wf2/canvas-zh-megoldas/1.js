const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = 300;
canvas.height = 300;

context.fillStyle = "#ffffff";
context.fillRect(0, 0, 300, 300);

context.lineWidth = 5;
context.fillStyle = "#0193de";
context.strokeStyle = "#cbcbcb";
context.beginPath();
context.arc(150, 150, 100, 0, Math.PI / 2);
context.lineTo(150, 150);
context.lineTo(250, 150);
context.lineTo(50, 150);
context.arc(150, 150, 100, Math.PI, -Math.PI / 2);
context.lineTo(150, 150);
context.fill();
context.stroke();

context.lineWidth = 40;
context.strokeStyle = "#383330";
context.beginPath();
context.arc(150, 150, 100, 0, Math.PI * 2);
context.stroke();

context.lineWidth = 5;
context.strokeStyle = "#cbcbcb";
context.beginPath();
context.arc(150, 150, 80, 0, Math.PI * 2);
context.stroke();
