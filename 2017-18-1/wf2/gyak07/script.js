const fps = 60;
const dinoX = 50;
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

let state = {
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

function genKaktusz() {
    const timeout = Math.trunc(Math.random() * 2000) + 1000; 
    // [4000;8000)
    const kaktusz = {
        jelmez: Math.trunc(Math.random() * 3),
        x: canvas.width
    };
    //console.log(kaktusz.jelmez);
    state.kaktuszok.push(kaktusz);
    setTimeout(genKaktusz, timeout);
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // Segédvonal
    // ctx.beginPath();
    // ctx.strokeStyle = 'green';
    // ctx.moveTo(0, canvas.height / 3 * 2 - 46);
    // ctx.lineTo(canvas.width, canvas.height / 3 * 2 - 46);
    // ctx.stroke();
    // ctx.closePath();
    // Dínó
    // ctx.fillStyle = 'yellow';
    // ctx.fillRect(dinoX, canvas.height / 3 * 2 - 46 - state.dino.y, 46, 46);
    ctx.drawImage(sprite, 
                  0 + state.dino.jelmez * 46, 0,
                  46, 46,
                  dinoX, canvas.height / 3 * 2 - 46 - state.dino.y,
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
    // Kaktuszok
    for (let kaktusz of state.kaktuszok) {
        // ctx.fillStyle = 'magenta';
        // ctx.fillRect(kaktusz.x, canvas.height / 3 * 2 - 46, 46, 46);
        ctx.drawImage(sprite, 
            0 + kaktusz.jelmez * 46, 46,            // kép (x,y)-tól
            46, 46,                                 // X × Y pixelt
            kaktusz.x, canvas.height / 3 * 2 - 46,  // vászon (x,y)-ba
            46, 46);                                // X × Y pixelesre
    }
}

let c = 0;

function step(lastRun) {
    // Új állapot
    if (Date.now() - lastRun > 1000 / fps && state.jatek.megy) {
        c++;
        if (c % fps == 0) {
            state.jatek.pont += 1;
        }

        if (state.dino.y > 0) {
            state.dino.jelmez = 2;
        } else if (c % (fps / 10) == 0) {
            state.dino.jelmez = state.dino.jelmez == 0 ? 1 : 0;
        }
        state.dino.y += state.dino.vy;
        state.dino.vy -= 250 / fps;
        if (state.dino.y < 0) {
            state.dino.y = 0;
        }
        for (let kaktusz of state.kaktuszok) {
            kaktusz.x -= 450 / fps;
        }
        draw();
        lastRun = Date.now();

        // Game over ellenőrzés
        for (let kaktusz of state.kaktuszok) {
            if (state.dino.y < 46 && Math.abs(dinoX - kaktusz.x) < 46) {
                //alert('Game over');
                //state.jatek.megy = false;
                state = {
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
            }
        }
    }

    requestAnimationFrame(() => step(lastRun));
}

function jump() {
    state.jatek.megy = true;
    if (state.dino.y == 0) {
        state.dino.vy = 2300 / fps;
    }
}

window.addEventListener('keypress', jump);

step(Date.now());
genKaktusz();
draw();