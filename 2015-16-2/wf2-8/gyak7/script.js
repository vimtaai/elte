// Segédfüggvények

function $(selector) {
    return document.querySelector(selector);
}

// Adatszerkezetek

var canvas = $('canvas');
var context = canvas.getContext('2d');
var ball;
var bar;
var lastStep;
var interval;
var hitCount;

// Eseménykezelők 

function init() {
    $('body').className = 'playing';
    canvas.width = 500;
    canvas.height = 500;
    canvas.style.width = canvas.width;
    canvas.style.height = canvas.height;
    lastStep = Date.now();
    hitCount = 0;
    ball = {
        x: canvas.width / 2,
        y: canvas.height / 2,
        vx: Math.floor(Math.random() * 5 + 5) * (Math.random() < 0.5 ? -1 : 1),
        vy: -Math.floor(Math.random() * 5 + 5),
        r: 15
    };
    bar = {
        x: canvas.width / 2,
        width: 100,
        height: 20,
        speed: 30
    };
    interval = 25;
    
    setInterval(function () {
        interval *= 0.9;
    }, 5000);
    draw();
}

function draw() {
    context.fillStyle = 'white';
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = 'blue';
    context.beginPath();
    context.arc(ball.x, ball.y, ball.r, 0, Math.PI * 2);
    context.fill();
    context.endPath;
    context.fillStyle = 'forestgreen';
    context.fillRect(bar.x - bar.width / 2, canvas.height - bar.height, bar.width, bar.height);
    context.fillStyle = 'red';
    context.font = '25px Arial';
    context.fillText(hitCount, 10, 30);
}

function step() {
    if (Date.now() >= lastStep + interval) {
        ball.x += ball.vx;
        ball.y += ball.vy;
        draw();
        
        if (ball.x + ball.r >= canvas.width ||
            ball.x - ball.r <= 0) {
            ball.vx *= -1;
            hitCount++;
        }
        if (ball.y - ball.r < 0 ||
            (ball.y + ball.r >= canvas.height - bar.height &&
             ball.x - ball.r >= bar.x - bar.width / 2 && 
             ball.x + ball.r <= bar.x + bar.width / 2)) {
            ball.vy *= -1;
            hitCount++;
        }
        
        lastStep = Date.now();
    }
    if (ball.y + ball.r >= canvas.height) {
        $('body').className = 'theend';        
    } else {
        requestAnimationFrame(step);
    }
}

window.addEventListener('keydown', function (event) {
    if (event.keyCode == 39) {
        bar.x = (bar.x + bar.width / 2 + bar.speed <= canvas.width) ? bar.x + bar.speed : canvas.width - bar.width / 2;
    } else if (event.keyCode == 37) {
        bar.x = (bar.x - bar.width / 2 - bar.speed >= 0) ? bar.x - bar.speed : bar.width / 2;
    }
});

window.addEventListener('keydown', function (event) {
    if (event.keyCode == 32) {
        init();
        requestAnimationFrame(step);
    }
});