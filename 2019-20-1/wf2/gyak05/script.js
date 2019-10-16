function delegate(parent, type, selector, fn) {

  function delegatedFunction(e) {
    if (e.target.matches(`${selector},${selector} *`)) {
      let target = e.target;
      while (!target.matches(selector)) {
        target = target.parentNode;
      }
      e.delegatedTarget = target;
      return fn(e);
      // vagy
      return fn.call(target, e);
    }
  }

  parent.addEventListener(type, delegatedFunction, false);
}

// Állapot

// ? lehet 1 vagy 2 attól függően, hogy melyik játékos jön
let player;
// ? 3×3-as mátrix, aminek az elemei lehet 0, 1, 2
let board;
// ? logikai, nyert-e valaki
// let isWon;
// ? string, ami azt mutatja, hogy milyen állapotban van a játék
let gameState;

const X = 20;
const Y = 20;
const N = 5;

// Kezdőállapot
function init() {
  // ! véletlenszerűen kisorsolom a kezdőjátékost
  player = Math.random() < 0.5 ? 1 : 2;
  // ! létrehozom az üres táblát
  board = [];
  for (let i = 0; i < Y; i++) {
    board.push([]);
    for (let j = 0; j < X; j++) {
      board[i][j] = 0;
    }
  }
  gameState = "playing";
}

const table = document.querySelector("table");
// Állapot kirajzolása
function render() {
  let html = "";
  html += "<caption>"
  if (gameState === "playing") {
    html += `Következő játékos: ${player}`;
  } else if (gameState === "win") {
    html += `Nyert ${player}`;
  } else if (gameState === "draw") {
    html += `Döntetlen`;
  }
  html += "</caption>";
  // ! Veszem egyesével a sorokat a táblából
  for (const row of board) {
    html += "<tr>";
    // ! Veszem egyesével a cellákat a sorból (0, 1, 2)
    for (const cell of row) {
      html += "<td>";
      if (cell === 1) {
        html += "X"
      } else if (cell === 2) {
        html += "O";
      }
      html += "</td>";
    }
    html += "</tr>";
  }
  table.innerHTML = html;
}

const button = document.querySelector("button");
function handleButtonClick() {
  init();
  render();
}
button.addEventListener("click", handleButtonClick);

function handleCellClick() {
  const td = event.delegatedTarget;
  const x = td.cellIndex;
  const y = td.parentNode.rowIndex;

  // ! Ha még nem rakott ide senki
  if (board[y][x] === 0) {
    board[y][x] = player;
    // ! Győzött-e valaki?
    if (isGameWon()) {
      // isWon = true;
      gameState = "win";
      // ! Döntetlen-e?
    } else if (!isThereEmptyCell()) {
      gameState = "draw";
      // ! Következő játékos
    } else {
      player = 3 - player;
    }
    // player = player === 1 ? 2 : 1;
    render();
  }
}
delegate(table, "click", "td", handleCellClick);

function isThereEmptyCell() {
  return board.some(row => row.some(cell => cell === 0));
}

function isGameWon() {
  // ! Eldöntés tétel mátrixra
  return board.some((row, y) => row.some((cell, x) => isCellOK(cell, x, y)));
}

function isCellOK(cell, x, y) {
  if (cell === 0) {
    return false;
  }

  const N2 = Math.floor((N - 1) / 2);
  const N3 = Math.ceil((N - 1) / 2);
  // ! Virtuális keret az éppen vizsgált cella körül
  const neighbors = [];
  for (let i = y - N2; i <= y + N3; i++) {
    neighbors[i + N2] = [];
    for (let j = x - N2; j <= x + N3; j++) {
      if (board[i] !== undefined && board[i][j] !== undefined) {
        neighbors[i + N2][j + N2] = board[i][j];
      } else {
        neighbors[i + N2][j + N2] = 0;
      }
    }
  }

  // ! vízszintes ellenőrzés
  if (neighbors[y + N2].every(c => c === cell)) {
    return true;
  }

  // ! függőleges ellenőrzés
  if (neighbors.every(row => row[x + N2] === cell)) {
    return true;
  }

  // ! főátló ellenőrzés
  if (neighbors.every((row, ry) => row[x + N2 - (y + N2 - ry)] === cell)) {
    return true;
  }

  // ! mellékátló ellenőrzés
  if (neighbors.every((row, ry) => row[x + (y - ry)] === cell)) {
    return true;
  }

  // if (neighbors[y][x - 1] === cell && neighbors[y][x + 1] === cell) {
  //   return true;
  // }
  // if (neighbors[y - 1][x] === cell && neighbors[y + 1][x] === cell) {
  //   return true;
  // }
  // if (neighbors[y - 1][x - 1] === cell && neighbors[y + 1][x + 1] === cell) {
  //   return true;
  // }
  // if (neighbors[y - 1][x + 1] === cell && neighbors[y + 1][x - 1] === cell) {
  //   return true;
  // }

  return false;
}

