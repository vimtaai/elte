// Segédfüggvények
function $(s) {
    return document.querySelector(s);
}

// Konstansok
const refreshRate = 1000 / 60;
const maxX = window.innerWidth;
const maxY = window.innerHeight;

// Állapot
let uto1y, uto2y;
let labda = {
    x: undefined,
    y: undefined,
    vx: undefined,
    vy: undefined
};
let wDown, sDown, iDown, kDown;

// Kezdőállapot
function init() {
    uto1y = 0;
    uto2y = 0;
    labda = {
        x: maxX / 2,
        y: maxY / 2,
        vx: (Math.floor(Math.random() * 150) + 50) 
                * (Math.random() < 0.5 ? -1 : 1),
        vy: (Math.floor(Math.random() * 150) + 50) 
                * (Math.random() < 0.5 ? -1 : 1)
    };
}

// Megjelenítés
function render() {
    const a = $('#a');
    const b = $('#b');
    const c = $('#c');

    a.style.top = uto1y + 'px';
    a.style.left = 0 + 'px';
    c.style.top = uto2y + 'px';
    c.style.right = 0 + 'px';
    b.style.top = labda.y + 'px';
    b.style.left = labda.x + 'px';
}

// Következő állapot
function next() {
    labda.x += labda.vx * refreshRate / 1000;
    labda.y += labda.vy * refreshRate / 1000;
    // ütközés az alsó fallal
    if (labda.y < 0 || labda.y > maxY) {
        labda.vy *= -1;
    }
    // ütközés az ütőkkel
    const utoWidth = parseInt(getComputedStyle($('#a')).width);
    const utoHeight = parseInt(getComputedStyle($('#a')).height);

    // bal oldali ütő
    if (labda.x < utoWidth && 
        labda.y > uto1y && 
        labda.y < uto1y + utoHeight) {
            labda.vx *= -1;
    }
    // jobb oldali ütő
    if (labda.x > maxX - utoWidth && 
        labda.y > uto2y && 
        labda.y < uto2y + utoHeight) {
            labda.vx *= -1;
    }

    // ütők mozgatása
    if (wDown) {
        uto1y -= 100 * refreshRate / 1000;
    }
    if (sDown) {
        uto1y += 100 * refreshRate / 1000;
    }
    if (iDown) {
        uto2y -= 100 * refreshRate / 1000;
    }
    if (kDown) {
        uto2y += 100 * refreshRate / 1000;
    }

    if (end()) {
        init();
    }
}

// Vége van-e
function end() {
    return labda.x < 0 || labda.x > maxX;
}

// Bemenet kezelése
function keyDown(event) {
    if (event.key == 'w') {
        wDown = true;
    }
    if (event.key == 's') {
        sDown = true;
    }
    if (event.key == 'i') {
        iDown = true;
    }
    if (event.key == 'k') {
        kDown = true;
    }
}
window.addEventListener('keydown', keyDown);

function keyUp(event) {
    if (event.key == 'w') {
        wDown = false;
    }
    if (event.key == 's') {
        sDown = false;
    }
    if (event.key == 'i') {
        iDown = false;
    }
    if (event.key == 'k') {
        kDown = false;
    }
}
window.addEventListener('keyup', keyUp);

// Léptetés függvény
function step() {
    next();
    render();
}

// Elindítás
init();
setInterval(step, refreshRate);