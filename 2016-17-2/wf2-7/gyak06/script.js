function $(s) {
  return document.querySelector(s);
}

let state = {
  ball: {
    x: undefined,
    y: undefined,
    vx: undefined,
    vy: undefined
  },
  p1: {
    y: undefined,
    dir: undefined,
    score: undefined
  },
  p2: {
    y: undefined,
    dir: undefined,
    score: undefined
  }
};

const canvas = $('#_game');
const ctx = canvas.getContext('2d');
const fps = 60;
const dt = (1000 / fps); // 60 FPS Such wow. PC Masterrace
const width = canvas.width;
const height = canvas.height;
const barWidth = 15;
const barHeight = 80;

let lastRender;

function init(restart) {
  state.p1.y = Math.round(height / 2 - barHeight / 2);
  state.p2.y = Math.round(height / 2 - barHeight / 2);
  state.p1.dir = 0;
  state.p2.dir = 0;
  state.ball.x = Math.round(width / 2);
  state.ball.y = Math.round(height / 2);
  state.ball.vx = (Math.random() < 0.5 ? -1 : 1) * 
                  (Math.random() * width / 3 + width / 5) / fps;
  state.ball.vy = (Math.random() < 0.5 ? -1 : 1) * 
                  (Math.random() * height / 3) / fps;

  lastRender = Date.now();

  if (restart) {
    state.p1.score = 0;
    state.p2.score = 0;
  }
}

function step() {
  if (Date.now() - lastRender >= dt) {
    // Mozgás
    state.ball.x += state.ball.vx;
    state.ball.y += state.ball.vy;
    state.p1.y += state.p1.dir * 10;
    state.p2.y += state.p2.dir * 10;

    // Falról visszapattanás
    if (state.ball.y >= height || state.ball.y <= 0) {
      state.ball.vy *= -1;
    }

    // Ütőről visszapattanás
    if ((state.ball.x >= width - barWidth && 
        state.ball.y >= state.p2.y && 
        state.ball.y <= state.p2.y + barHeight) || 
        (state.ball.x <= barWidth && 
        state.ball.y >= state.p1.y && 
        state.ball.y <= state.p1.y + barHeight)) {
      state.ball.vx *= -1;
    }

    // Kiment a labda
    if (state.ball.x >= width) {
      state.p1.score += 1;
      init(false);
    }

    if (state.ball.x  <= 0) {
      state.p2.score += 1;
      init(false);
    }

    draw();
  }
  requestAnimationFrame(step);
}

function draw() {
  ctx.fillStyle = '#000';
  ctx.fillRect(0, 0, width, height);
  ctx.fillStyle = '#fff';
  // Labda megrajzolása
  ctx.beginPath();
  ctx.arc(state.ball.x, state.ball.y, 6, 0, Math.PI * 2);
  ctx.fill();
  ctx.closePath();
  // Ütők megrajzolása
  ctx.fillRect(0, state.p1.y, barWidth, barHeight);
  ctx.fillRect(width - barWidth, state.p2.y, barWidth, barHeight);
  // Pontszámok kiírása
  ctx.font = '40px sans-serif';
  ctx.fillText(state.p1.score, 10, 40);
  ctx.fillText(state.p2.score, width - 30, 40);

  // Tároljuk az utolsó renderelést
  lastRender = Date.now();
}

// Input
function keyboardKeyDown(e) {
  // Enterre induljon el
  if (e.key === 'Enter') {
    init(true);
    step();
  }
  if (e.key === 'w') {
    state.p1.dir = -1;
  }
  if (e.key === 's') {
    state.p1.dir = 1;
  }
  if (e.key === 'o') {
    state.p2.dir = -1;
  }
  if (e.key === 'l') {
    state.p2.dir = 1;
  }
}

function keyboardKeyUp(e) {
  if (e.key === 'w' || e.key === 's') {
    state.p1.dir = 0;
  }
  if (e.key === 'o' || e.key === 'l') {
    state.p2.dir = 0;
  }
}

window.addEventListener('keydown', keyboardKeyDown, false);
window.addEventListener('keyup', keyboardKeyUp, false);
