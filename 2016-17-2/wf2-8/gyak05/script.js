function $(s) {
    return document.querySelector(s);
}

// Állapottér
let state;
let timer;

const width = getComputedStyle(document.body).width.slice(0,-2);
const height = getComputedStyle(document.body).height.slice(0,-2);

// Feldolgozók
function init(state) {
    console.log(width);
    let newState = {
        p1: {
            y: Math.round(height / 2),
            score: state ? state.p1.score : 0
        },
        p2: {
            y: Math.round(height / 2),
            score: state ? state.p2.score : 0
        },
        ball: {
            x: Math.round(width / 2),
            y: Math.round(height / 2),
            v: {
                x: (Math.random() < 0.5 ? 1 : -1) * width / 250,
                y: Math.round(Math.random() * height - 
                    height * 0.5) / 250
            }
        }
    };
    // returns a new state
    return newState;
}

function step(state) {
    //console.log(state);
    state.ball.x += state.ball.v.x;
    state.ball.y += state.ball.v.y;

    state.ball.v.y *= state.ball.y <= 0 ? -1 : 1;
    state.ball.v.y *= state.ball.y >= (height - 50) ? -1 : 1;

    if (state.ball.x < 30 && 
        (state.ball.y - state.p1.y) >= -30 &&
        (state.ball.y - state.p1.y) <= 150) {
        state.ball.v.x *= -1;
    }

    if (state.ball.x > (width - 30) && 
        (state.ball.y - state.p2.y) >= -30 &&
        (state.ball.y - state.p2.y) <= 150) {
        state.ball.v.x *= -1;
    }

    if (state.ball.x < 0) {
        state.p2.score += 1;
        state = init(state);
    }

    if (state.ball.x > width) {
        state = init(state);
        state.p1.score += 1;
    }
    // returns a new state
    return state;
}

function draw(state) {
    //console.log(state);
    let p1 = $('#p1');
    let p2 = $('#p2');
    let ball = $('#ball');

    p1.style.top = state.p1.y + 'px';
    p2.style.top = state.p2.y + 'px';
    ball.style.top = state.ball.y + 'px';
    ball.style.left = state.ball.x + 'px';

    $('#p2score').innerHTML = state.p2.score;
    $('#p1score').innerHTML = state.p1.score;
}

// Eseménykezelők
function pressEnter(e) {
    if (e.keyCode == 13) {
        state = init();
        draw(state);
        clearInterval(timer);
        timer = setInterval(function () {
            state = step(state);
            draw(state);
        }, 10);
    }
}
window.addEventListener('keydown', pressEnter, false);

function pressMove(e) {
    //console.log(e);
    const speed = 15;
    if (e.key === 'w') {
        state.p1.y -= speed;
    } else if (e.key === 's') {
        state.p1.y += speed;
    } else if (e.key === 'i') {
        state.p2.y -= speed;
    } else if (e.key === 'k') {
        state.p2.y += speed;
    }
    draw(state);
}
window.addEventListener('keydown', pressMove, false);
