const topLayer = document.querySelector('#top');
const bottomLayer = document.querySelector('#bottom');
topLayer.width = 500;
topLayer.height = 500;
bottomLayer.width = 500;
bottomLayer.height = 500;
const topLayerCtx = topLayer.getContext('2d');
const bottomLayerCtx = bottomLayer.getContext('2d');

function draw() {
    topLayerCtx.clearRect(0, 0,
                          topLayer.width, topLayer.height);
    drawLine(earth.distance, earth.angle, 
             venus.distance, venus.angle);
    drawPlanet(earth.distance, earth.angle, earth.radius);
    drawPlanet(venus.distance, venus.angle, venus.radius);
}

function drawPlanet(distance, angle, radius) {
    const x = (topLayer.width / 2) + distance * Math.cos(angle);
    const y = (topLayer.height / 2) + distance * Math.sin(angle);
    topLayerCtx.beginPath();
    topLayerCtx.fillStyle = 'white';
    topLayerCtx.arc(x, y, radius, 0, Math.PI * 2);
    topLayerCtx.fill();
    topLayerCtx.closePath();
}

function drawLine(d1, a1, d2, a2) {
    const x1 = (topLayer.width / 2) + d1 * Math.cos(a1);
    const y1 = (topLayer.height / 2) + d1 * Math.sin(a1);
    const x2 = (topLayer.width / 2) + d2 * Math.cos(a2);
    const y2 = (topLayer.height / 2) + d2 * Math.sin(a2);
    bottomLayerCtx.beginPath();
    bottomLayerCtx.strokeStyle = 'lightblue';
    bottomLayerCtx.moveTo(x1, y1);
    bottomLayerCtx.lineTo(x2, y2);
    bottomLayerCtx.stroke();
    bottomLayerCtx.closePath();
}

let earth, venus;

function init() {
    // Háttér
    bottomLayerCtx.fillStyle = 'rgb(0, 0, 0)';
    bottomLayerCtx.fillRect(0, 0, bottomLayer.width, bottomLayer.height);
    // Napocska
    bottomLayerCtx.beginPath();
    bottomLayerCtx.fillStyle = 'yellow';
    bottomLayerCtx.arc(bottomLayer.width / 2, bottomLayer.height / 2,
                20, 0, Math.PI * 2);
    bottomLayerCtx.fill();
    bottomLayerCtx.closePath();
    // Kezdőértékek
    earth = {
        distance: 200,
        radius: 10,
        angle: 0,
        speed: Math.PI / 11 * 10
    };
    venus = {
        distance: 100,
        radius: 5,
        angle: 0,
        speed: Math.PI / 4 * 10
    };
}

function drawFps(dt) {
    const fps = Math.round(1000 / dt);
    topLayerCtx.font = '30px Consolas';
    topLayerCtx.fillText(fps, 10, 50);
}

function step() {
    const dt = Date.now() - lastRunTime;
    lastRunTime = Date.now();
    earth.angle += earth.speed * dt / 1000;
    venus.angle += venus.speed * dt / 1000;
    // Ha belassítjuk, akkor csökken az FPS
    // for (let i = 0; i < 50; ++i) {
    //     console.log('aaaaaaaaaa');
    // }
    draw();
    drawFps(dt);
    requestAnimationFrame(step);
}

let lastRunTime = Date.now();
init();
step();