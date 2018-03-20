//////////////////
// Beállítások

const tankWidth = 50; // tank szélessége
const tankHeight = 70; // tank magassága
const fps = 60; // képfrissítési gyakoriság
const interval = 1000 / fps; // két képkocka közötti idő
const speed = 80; // tankok mozgási sebessége (px/s)
const turnSpeed = Math.PI / 2; // Forgási sebesség (rad/s)

const canvas = document.querySelector('canvas');
canvas.width = 640;
canvas.height = 480;
const context = canvas.getContext('2d');

//////////////////
// Állapot
let red = {
    x: undefined, 
    y: undefined,
    vx: undefined,
    vy: undefined
};
let blue = {
    x: undefined, 
    y: undefined,
    vx: undefined,
    vy: undefined
};

//////////////////
// Kezdőállapot
function init() {
    red = {
        x: 100, 
        y: 100,
        vx: 0,
        vy: 0
    };
    blue = {
        x: canvas.width - 100, 
        y: canvas.height - 100,
        vx: 0,
        vy: 0
    };
}

//////////////////
// Rajzolás

function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    drawTank(red.x, red.y, 'red');
    drawTank(blue.x, blue.y, 'blue');
}

function drawTank(x, y, color) {
    context.fillStyle = color;
    context.fillRect(x - tankWidth / 2, y - tankHeight / 2, 
                     tankWidth, tankHeight);
    context.fillRect(x - tankWidth / 6, y - 5/6 * tankHeight,
                     tankWidth / 3, tankHeight / 3);
}

//////////////////
// Irányítás
function keyDown(event) {
    console.log(event.code);
    switch (event.code) {
        case 'KeyW':
            red.vy = -speed;
            break;
        case 'KeyA':
            red.vx = turnSpeed;
            break;
        case 'KeyS':
            red.vy = speed;
            break;
        case 'KeyD':
            red.vx = -turnSpeed;
            break;
        case 'Numpad8':
            blue.vy = -speed;
            break;
        case 'Numpad4':
            blue.vx = turnSpeed;
            break;
        case 'Numpad5':
            blue.vy = speed;
            break;
        case 'Numpad6':
            blue.vx = -turnSpeed;
            break;
    }
}
window.addEventListener('keydown', keyDown);

function keyUp(event) {
    console.log(event.code);
    switch (event.code) {
        case 'KeyW':
            red.vy = 0;
            break;
        case 'KeyA':
            red.vx = 0;
            break;
        case 'KeyS':
            red.vy = 0;
            break;
        case 'KeyD':
            red.vx = 0;
            break;
        case 'Numpad8':
            blue.vy = 0;
            break;
        case 'Numpad4':
            blue.vx = 0;
            break;
        case 'Numpad5':
            blue.vy = 0;
            break;
        case 'Numpad6':
            blue.vx = 0;
            break;
    }
}
window.addEventListener('keyup', keyUp);

//////////////////
// Léptetés
function step() {
    red.y += red.vy * interval / 1000;
    blue.y += blue.vy * interval / 1000;
    draw();
}

init();
setInterval(step, interval);
