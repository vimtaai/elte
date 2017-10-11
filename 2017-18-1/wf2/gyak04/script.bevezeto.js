const $ = (s) => document.querySelector(s);

const canvas = $('canvas');
const ctx = canvas.getContext('2d');

canvas.width = 640;
canvas.height = 480;

ctx.fillStyle = 'red';
ctx.fillRect(100, 100, 200, 50);

ctx.strokeStyle = 'blue';
ctx.lineWidth = 5;
ctx.moveTo(150, 150);
ctx.lineTo(200, 200);
ctx.stroke();

ctx.moveTo(50, 50);
ctx.lineTo(50, 100);
ctx.lineTo(100, 100);
ctx.lineTo(150, 150);
ctx.lineTo(150, 50);
ctx.lineTo(50, 50);
ctx.stroke();
ctx.fillStyle = 'green';
ctx.fill();

ctx.beginPath();
ctx.moveTo(200, 250);
ctx.lineTo(250, 200);
ctx.lineTo(300, 100);
ctx.lineTo(350, 150);
ctx.lineTo(150, 150);
ctx.lineTo(200, 250);
ctx.stroke();
ctx.fillStyle = 'yellow';
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = 'magenta';
ctx.arc(canvas.width/2, canvas.height/2, 
        100, 0, Math.PI * 2);
ctx.stroke();
ctx.fill();
ctx.closePath();
