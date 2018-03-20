const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
const width = 640;
const height = 480;
canvas.width = width;
canvas.height = height;

const fps = 60;
const interval = 1000 / fps;
const groundLevel = 400;
const dinoX = 40;
const cactusSpeed = 250;

const sprite = new Image();
sprite.src = 'sprite.png';

// Állapot
let state;
let score;
let dino = {
    y: undefined,
    vy: undefined,
    state: undefined,
    step: undefined
};
let cacti = [];

// Kezdőállapot
function init() {
    state = 'playing';
    score = 0;
    dino = {
        y: 0,
        vy: 0,
        state: 0,
        step: 0
    };
    cacti = [];
}

// Kirajzolás
function render() {
    // törlés
    context.clearRect(0, 0, width, height);
    // dínó kirajzolás
    context.drawImage(
        sprite, 
        dino.state * 46, 0, 46, 46, 
        dinoX, groundLevel - dino.y - 46, 46, 46
    );
    // föld kirajzolás
    context.beginPath();
    context.strokeStyle = '#444';
    context.moveTo(0, groundLevel);
    context.lineTo(width, groundLevel);
    context.stroke();
    context.closePath();
    // kaktuszok
    for (let cactus of cacti) {
        context.drawImage(
            sprite,
            cactus.type * 46, 46, 46, 46,
            cactus.x, groundLevel - 46, 46, 46
        );
    }
    // Pontszám
    context.font = '30px Consolas';
    context.fillText(score, dinoX, 50);
}

// Játék vége
function end() {
    for (let cactus of cacti) {
        if (Math.abs(dinoX - cactus.x) < 46 && dino.y < 46) {
            state = 'gameover';            
            console.log(state);
        }
    }
}

// Cikluslépés
function step() {
    dino.step = (dino.step + 1) % (fps / 5);
    if (dino.step == 0) {
        dino.state = (dino.state + 1) % 2;
        score++;
    }
    dino.y += dino.vy * interval / 1000;
    dino.vy -= 300 * interval / 1000;
    if (dino.y <= 0) {
        dino.y = 0;
        dino.vy = 0;
    }
    if (dino.y > 0) {
        dino.state = 2;
    }
    for (let cactus of cacti) {
        cactus.x -= cactusSpeed * interval / 1000;
    }
    end();
    if (state == 'gameover') {
        clearInterval(timer);
    }
    render();
}
init();
let timer = setInterval(step, interval);

function genCactus() {
    cacti.push({
        x: width + 46,
        type: Math.trunc(Math.random() * 3)
    });
    setTimeout(genCactus, 
               Math.trunc(Math.random() * 1500) + 500);
}
genCactus();

function buttonPress() {
    if (dino.y == 0) {
        dino.vy = 300;
    }
    if (state == 'gameover') {
        init();
        timer = setInterval(step, interval);
    }
}
window.addEventListener('keydown', buttonPress);