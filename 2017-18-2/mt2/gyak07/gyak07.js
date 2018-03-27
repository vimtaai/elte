//////////////////
// Beállítások

const tankWidth = 50; // tank szélessége
const tankHeight = 70; // tank magassága
const fps = 60; // képfrissítési gyakoriság
const interval = 1000 / fps; // két képkocka közötti idő
const speed = 80; // tankok mozgási sebessége (px/s)
const turnSpeed = - Math.PI / 2; // Forgási sebesség (rad/s)
const bulletSpeed = 120; // lövedék mozgási sebessége (px/s)

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
    vy: undefined, 
    angle: undefined,
    bullets: []
};
let blue = {
    x: undefined, 
    y: undefined,
    vx: undefined,
    vy: undefined,
    angle: undefined,
    bullets: []
};

//////////////////
// Kezdőállapot
function init() {
    red = {
        x: 100, 
        y: 100,
        vx: 0,
        vy: 0,
        angle: Math.PI,
        bullets: []
    };
    blue = {
        x: canvas.width - 100, 
        y: canvas.height - 100,
        vx: 0,
        vy: 0,
        angle: 0,
        bullets: []
    };
}

//////////////////
// Rajzolás

function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    drawTank(red.x, red.y, red.angle, 'red');
    drawTank(blue.x, blue.y, blue.angle, 'blue');
    for (let bullet of red.bullets) {
        drawBullet(bullet.x, bullet.y, 'red');
    }
    for (let bullet of blue.bullets) {
        drawBullet(bullet.x, bullet.y, 'blue');
    }
}

function drawTank(x, y, angle, color) {
    context.translate(x, y);
    context.rotate(angle - Math.PI / 2);
    context.fillStyle = color;
    context.fillRect(- tankWidth / 2, - tankHeight / 2, 
                     tankWidth, tankHeight);
    context.fillRect(- tankWidth / 6, - 5/6 * tankHeight,
                     tankWidth / 3, tankHeight / 3);
    context.rotate(-angle + Math.PI / 2);
    context.translate(-x, -y);
}

function drawBullet(x, y, color) {
    context.fillStyle = color;
    context.beginPath();
    context.arc(x, y, 5, 0, Math.PI * 2);
    context.closePath();
    context.fill();
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
        case 'Numpad0':
            blue.bullets.push({
                x: blue.x,
                y: blue.y,
                angle: blue.angle + Math.PI
            });
            break;
        case 'Space':
            red.bullets.push({
                x: red.x,
                y: red.y,
                angle: red.angle + Math.PI
            });
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
// Találat keresése
function hit(bullet, tank) {
    const d = Math.sqrt((bullet.y - tank.y) ** 2 + 
                        (bullet.x - tank.x) ** 2);
    const r = 5 + tankWidth / 2;
    if (d < r) {
        alert('Vége!!!');
        init();
    }
}

//////////////////
// Léptetés
function step() {
    // Tankok mozgása
    red.y += red.vy * Math.sin(red.angle) * interval / 1000;
    red.x += red.vy * Math.cos(red.angle) * interval / 1000;
    blue.y += blue.vy * Math.sin(blue.angle) * interval / 1000;
    blue.x += blue.vy * Math.cos(blue.angle) * interval / 1000;
    // Tankok forgása
    red.angle += red.vx * interval / 1000;
    blue.angle += blue.vx * interval / 1000;
    // Lövedékek mozgása
    for (let bullet of red.bullets) {
        bullet.y += bulletSpeed * Math.sin(bullet.angle) * interval / 1000;
        bullet.x += bulletSpeed * Math.cos(bullet.angle) * interval / 1000;
        hit(bullet, blue);
    }
    for (let bullet of blue.bullets) {
        bullet.y += bulletSpeed * Math.sin(bullet.angle) * interval / 1000;
        bullet.x += bulletSpeed * Math.cos(bullet.angle) * interval / 1000;
        hit(bullet, red);
    }
    draw();
}

init();
setInterval(step, interval);
