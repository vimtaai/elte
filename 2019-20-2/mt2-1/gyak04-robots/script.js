// Konstansok
const gameWidth = 50;
const gameHeight = 40;
const maxRobotCount = 50;
const gridSize = 20;

// Segédfüggvények
function getRandomCoords() {
    const x = Math.floor(Math.random() * gameWidth);
    const y = Math.floor(Math.random() * gameHeight);
    return {x, y};
}

// Állapot
const robots = [];
const player = {};

function init() {
    // Player
    const {x, y} = getRandomCoords();
    player.x = x;
    player.y = y;
    // Object.assign(player, getRandomCoords());

    // Robots
    // for i in range(maxRobotCount)
    for (let i = 0; i < maxRobotCount; i++) {
        const newRobot = {};
        const {x, y} = getRandomCoords();
        newRobot.x = x;
        newRobot.y = y;
        newRobot.isAlive = true;
        robots.push(newRobot);
    }
}

// Eseménykezelők

// HTML generátorok
function renderGame(player, robots) {
    let html = renderPlayer(player);
    html += robots.map(renderRobot).join("\n");
    return html;
}

function renderPlayer(player) {
    const x = player.x * gridSize;
    const y = player.y * gridSize;

    const html = `
        <div style="top: ${y}px; left: ${x}px">🐼</div>
    `;

    return html;
}

function renderRobot(robot) {
    const x = robot.x * gridSize;
    const y = robot.y * gridSize;

    const html = `
        <div style="top: ${y}px; left: ${x}px">🤖</div>
    `;
    
    return html;
}