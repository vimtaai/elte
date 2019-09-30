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
let isWon;

// Kezdőállapot
function init() {
  // ! véletlenszerűen kisorsolom a kezdőjátékost
  player = Math.random() < 0.5 ? 1 : 2;
  // ! létrehozom az üres táblát
  board = [];
  for (let i = 0; i < 3; i++) {
    board.push([]);
    for (let j = 0; j < 3; j++) {
      board[i][j] = 0;
    }
  }
  isWon = false;
}

const table = document.querySelector("table");
// Állapot kirajzolása
function render() {
  let html = "";
  html += `<caption>${isWon ? "Nyert" : "Következő játékos"}: ${player}</caption>`;
  // ! Veszem egyesével a sorokat a táblából
  for (const row of board) {
    html += "<tr>";
    // ! Veszem egyesével a cellákat a sorból (0, 1, 2)
    for (const cell of row) {
      html += `<td>${cell}</td>`;
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
    if (isGameWon()) {
      isWon = true;
    } else {
      player = 3 - player;
    }
    // player = player === 1 ? 2 : 1;
    render();
  }
}
delegate(table, "click", "td", handleCellClick);

function isGameWon() {
  // ! Eldöntés tétel mátrixra
  return board.some((row, y) => row.some((cell, x) => isCellOK(cell, x, y)));
}

function isCellOK(cell, x, y) {
  if (cell === 0) {
    return false;
  }

  // ! Virtuális keret az éppen vizsgált cella körül
  const neighbors = [];
  for (let i = y-1; i <= y+1; i++) {
    neighbors[i] = [];
    for (let j = x-1; j <= x+1; j++) {
      if (board[i] !== undefined && board[i][j] !== undefined) {
        neighbors[i][j] = board[i][j];
      } else {
        neighbors[i][j] = 0;
      }
    }
  }

  if (neighbors[y][x-1] === cell && neighbors[y][x+1] === cell) {
    return true;
  }
  if (neighbors[y-1][x] === cell && neighbors[y+1][x] === cell) {
    return true;
  }
  if (neighbors[y-1][x-1] === cell && neighbors[y+1][x+1] === cell) {
    return true;
  }
  if (neighbors[y-1][x+1] === cell && neighbors[y+1][x-1] === cell) {
    return true;
  }

  return false;
}

