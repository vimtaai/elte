const $ = (s) => document.querySelector(s);

const canvas = $('canvas');
const ctx = canvas.getContext('2d');

canvas.width = 640;
canvas.height = 480;

const fps = 60;
const r = 5;
const g = 10;

// Kezdőállapot
const initState = {
    labda: {
        x: 100,
        y: 100,
        vx: 50,
        vy: 0
    }
}

// Léptetés (régi állapotból új állapot)
function next(state, dt) {
    let newState = Object.assign({}, state);
    // Haladás
    newState.labda.x += newState.labda.vx * dt;
    newState.labda.y += newState.labda.vy * dt;
    newState.labda.y += g / 2 * dt * dt;
    newState.labda.vy += g;
    // Visszapattanások
    if (newState.labda.x + r >= canvas.width) newState.labda.vx *= -1;
    if (newState.labda.y + r >= canvas.height) newState.labda.vy *= -1;
    if (newState.labda.x - r <= 0) newState.labda.vx *= -1;
    if (newState.labda.y - r <= 0) newState.labda.vy *= -1;
    return newState;
}

// Állapot kirajzolása
function draw(state) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.fillStyle = 'black';
    ctx.arc(state.labda.x, state.labda.y, r, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();
    return state;
}

function step(state, lastRun, now) {
    requestAnimationFrame((nextRun) => step(draw(next(state, (now-lastRun) / 1000)), now, nextRun));
}

step(initState, performance.now(), performance.now());