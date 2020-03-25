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

// Állapot (state)
let robots = [];
let player = {};
let stage = "not started";
let teleportCount = 0;

function init() {
    // Játéktér méretének beállítása
    const width = gameWidth * gridSize;
    const height = gameHeight * gridSize;
    game.style.width = width + "px";
    game.style.height = height + "px";

    stage = "playing";
    teleportCount = 10;

    // Player
    // const {x, y} = getRandomCoords();
    // player.x = x;
    // player.y = y;
    player = getRandomCoords();
    // Object.assign(player, getRandomCoords());

    // Robots
    robots = [];
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
const game = document.querySelector("#game");

const newButton = document.querySelector("button");
function handleNewButtonClick() {
    // Kezdőállapot beállítása
    init();
    // Változások megjelenítése
    game.innerHTML = renderGame(player, robots, stage);
}
newButton.addEventListener("click", handleNewButtonClick);

const teleportButton = document.querySelector("#teleport");
function handleTeleportClick() {
    if (stage !== "playing" || teleportCount === 0) {
        return;
    }

    player = getRandomCoords();
    teleportCount -= 1;
    game.innerHTML = renderGame(player, robots, stage);
}
teleportButton.addEventListener("click", handleTeleportClick);

function handleKeyUp(event) {
    if (stage !== "playing") {
        return;
    }

    // Játékos mozog
    if (event.code === "Numpad7") {
        player.y--;
        player.x--;
    } else if (event.code === "Numpad8") {
        player.y--;
    } else if (event.code === "Numpad9") {
        player.y--;
        player.x++;
    } else if (event.code === "Numpad6") {
        player.x++;
    } else if (event.code === "Numpad3") {
        player.y++;
        player.x++;
    } else if (event.code === "Numpad2") {
        player.y++;
    } else if (event.code === "Numpad1") {
        player.y++;
        player.x--;
    } else if (event.code === "Numpad4") {
        player.x--;
    }

    // Robotok mozognak
    for (const robot of robots) {
        if (!robot.isAlive) {
            continue;
        }

        if (player.y < robot.y) {
            robot.y--;
        } else if (player.y > robot.y) {
            robot.y++;
        }
        if (player.x < robot.x) {
            robot.x--;
        } else if (player.x > robot.x) {
            robot.x++;
        }
    }

    // Ütközések vizsgálata
    for (const robot of robots) {
        if (robot.x === player.x && robot.y === player.y) {
            stage = "gameover";
        }

        for (const robot2 of robots) {
            // Önmagammal nem hasonlítok
            if (robot === robot2) {
                continue; // Ugrás a következő robotra
            }

            if (robot.x === robot2.x && robot.y === robot2.y) {
                robot.isAlive = false;
                robot2.isAlive = false;
            }
        }
    }

    if (stage !== "gameover" && robots.every(robot => !robot.isAlive)) {
        stage = "victory";
    }
    
    // Változások megjelenítése
    game.innerHTML = renderGame(player, robots, stage);
}
window.addEventListener("keyup", handleKeyUp);

// HTML generátorok
function renderGame(player, robots, stage) {
    if (stage === "gameover") {
        return `<h1>Game Over</h1>`;
    } else if (stage === "victory") {
        return `<h1>Victory</h1>`;
    } else if (stage === "playing") {
        let html = renderPlayer(player);
        html += robots.map(renderRobot).join("\n");
        return html;
    }
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
        <div style="top: ${y}px; left: ${x}px">
            ${robot.isAlive ? "🤖" : "🔥"}
        </div>
    `;
    
    return html;
}