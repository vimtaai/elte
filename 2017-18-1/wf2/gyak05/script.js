const $ = (s) => document.querySelector(s);

const canvas = $('canvas');
const ctx = canvas.getContext('2d');

canvas.width = 640;
canvas.height = 480;

const fps = 60;
const r = 5;
const g = 1;

// Kezdőállapot generálása
function init() {
    return {
        labda: {
            x: 100,
            y: 100,
            vx: 20,
            vy: 0
        }
    };
}

// Léptetés (régi állapotból új állapot)
function next(state) {
    let newState = Object.assign({}, state);
    const dt = (fps / 1000);
    newState.labda.x += newState.labda.vx * dt;
    newState.labda.y += newState.labda.vy * dt;
    newState.labda.y += g / 2 * dt * dt;
    newState.labda.vy += g;
    if (newState.labda.x + r >= canvas.width) {
        newState.labda.vx *= -1;
    }
    if (newState.labda.y + r >= canvas.height) {
        newState.labda.vy *= -1;
    }
    if (newState.labda.x - r <= 0) {
        newState.labda.vx *= -1;
    }
    if (newState.labda.y - r <= 0) {
        newState.labda.vy *= -1;
    }
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

function step(state, lastRun) {
    if (Date.now() - lastRun >= (1000 / fps)) {
        state = draw(next(state));
        lastRun = Date.now();
    }
    requestAnimationFrame(() => step(state, lastRun));
}

step(init(), Date.now());