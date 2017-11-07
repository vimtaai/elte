const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
canvas.width = 640;
canvas.height = 300;
const sprite = new Image();
sprite.src = 'sprite.png';

function padLeft(nr, n, str) {
    //return Array(n-String(nr).length+1).join(str||'0')+nr;
    return (str||'0').repeat(n - String(nr).length) + nr;
}

const startState = {
    jatek: {
        pont: 0,
        ejjel: false,
        sebesseg: 30,
        megy: false
    },
    dino: {
        jelmez: 0,
        y: 0,
        vy: 0
    },
    kaktuszok: []
};

let state = startState;

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // Dínó
    ctx.drawImage(sprite, 
                  0 + state.dino.jelmez * 46, 0,
                  46, 46,
                  50, canvas.height / 3 * 2 - 46 - state.dino.y,
                  46, 46);
    // Talaj
    ctx.beginPath();
    ctx.strokeStyle = 'black';
    ctx.moveTo(0, canvas.height / 3 * 2);
    ctx.lineTo(canvas.width, canvas.height / 3 * 2);
    ctx.stroke();
    ctx.closePath();
    // Pontszám
    ctx.font = '24px Consolas';
    ctx.fillText(padLeft(state.jatek.pont, 5), canvas.width - 110, 30);
    // TODO: kaktuszok
}

function step(lastRun) {
    // Új állapot
    if (Date.now() - lastRun > 60) {
        state.jatek.pont += 1;
        if (state.dino.y > 0) {
            state.dino.jelmez = 2;
        } else {
            state.dino.jelmez = state.dino.jelmez == 0 ? 1 : 0;
        }
        state.dino.y += state.dino.vy;
        state.dino.vy -= 10;
        if (state.dino.y < 0) {
            state.dino.y = 0;
        }
        draw();
        lastRun = Date.now();
    }

    requestAnimationFrame(() => step(lastRun));
}

function jump() {
    if (state.dino.y == 0) {
        state.dino.vy = 40;
    }
}

window.addEventListener('keypress', jump);

step(Date.now());