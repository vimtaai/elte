// Segédfüggvények
function $(s) {
  return document.querySelector(s);
}

function $$(s) {
  return document.querySelectorAll(s);
}

function delegate(pSel, type, cSel, fn) {
    const p = $(pSel);
    p.addEventListener(type, function (e) {
        let t;
        for (t = e.target;
             t !== p && !t.matches(cSel);
             t = t.parentNode);
        if (t === p) { return; }
        e.delegatedTarget = t;
        fn.call(t, e);
    }, false);
}

// Állapottér

const GAMEOVER = -1;
const PLAYING = 0;
const WIN = 1;

let DEBUG = false;
let gameState = PLAYING;
let game = [];
let markedCount = 0;
let mineCount = 0;
let maxX;
let maxY;

function init(x, y, c) {
  // Üres tábla generálása
  gameState = PLAYING;
  markedCount = 0;
  mineCount = c;
  maxX = x;
  maxY = y;
  game = [];
  if (x * y < mineCount) mineCount = x * y - 1;
  for (let i = 0; i < x; i++) {
    game[i] = [];
    for (let j = 0; j < y; j++) {
      game[i][j] = {
        isMine: false,
        isRevealed: false,
        isMarked: false,
        neighborCount: 0
      };
    }
  }
  // Aknák generálása
  for (let i = 0; i < mineCount; i++) {
    let xCoord, yCoord;
    do {
      xCoord = Math.floor(Math.random() * x);
      yCoord = Math.floor(Math.random() * y);
    } while (game[xCoord][yCoord].isMine);
    game[xCoord][yCoord].isMine = true;
    for (let a = -1; a <= 1; a++) {
      for (let b = -1; b <= 1; b++) {
        if (xCoord + a >= 0 && 
            xCoord + a < maxX &&
            yCoord + b >= 0 &&
            yCoord + b < maxY &&
            (a || b)) {
          game[xCoord + a][yCoord + b].neighborCount++;
        }
      }
    }
  }
}

function revealAll() {
  for (let row of game) {
    for (let cell of row) {
      cell.isRevealed = true;
    }
  }
  $('#_game').innerHTML = genTable(game);
}

function checkGameOver() {
  const isLost = game.some(row =>
    row.some(cell => 
      cell.isMine && cell.isRevealed));
  if (isLost) {
    gameState = GAMEOVER;
    revealAll();
    alert('You lost the GAME!');
  }
}

function checkVictory() {
  // Ha már csak aknaszámnyi fel nem fedett mező van
  // Funkcionális programozás
  const notRevealed = game.reduce((c, row) => 
    c + row.reduce((sum, cell) => 
      sum + (cell.isRevealed ? 0 : 1)
    , 0)
  , 0);
  // Imperatív programozás
  // let notRevealed = 0;
  // for (let i = 0; i < game.length; i++) {
  //   for (let j = 0; j < game[i].length; j++) {
  //     notRevealed += game[i][j].isRevealed ? 1 : 0;
  //   }
  // }
  // Ha minden akna jól meg van jelölve
  // Funkcionális programozás
  const isWon = game.every(row => 
    row.every(cell => 
      cell.isMarked === cell.isMine));
  // Imperatív programozás
  // let isWon = true;
  // for (let i = 0; i < game.length && isWon; i++) {
  //   for (let j = 0; j < game[i].length && isWon; j++) {
  //     isWon = (game[i][j].isMarked === game[i][j].isMine);
  //   }
  // }
  console.log('isWon: ' + isWon, 'notRevealed: ' + notRevealed);
  if (isWon || (notRevealed === mineCount)) {
    gameState = WIN;
    revealAll();
    alert('You won!');
  }
}

function revealNeigbors(x, y) {
  game[x][y].isRevealed = true;
  if (game[x][y].neighborCount === 0) {
    for (let a = -1; a <= 1; a++) {
      for (let b = -1; b <= 1; b++) {
        //console.log(x + a, y + b);
        if (x + a >= 0 && 
            x + a < maxX &&
            y + b >= 0 &&
            y + b < maxY &&
            !game[x + a][y + b].isRevealed) {
          revealNeigbors(x + a, y + b);
        }
      }
    }
  }
}

// Eseménykezelők
function clickStart() {
  let x = parseInt($('#_X').value);
  let y = parseInt($('#_Y').value);
  let mineCount = parseInt($('#_minecount').value);
  init(x, y, mineCount);
  $('#_game').innerHTML = genTable(game);
  $('#_remaining').innerHTML = mineCount;
}
$('#_start').addEventListener('click', clickStart, false);

function leftClickCell(e) {
  const x = parseInt(e.delegatedTarget.getAttribute('data-x'));
  const y = parseInt(e.delegatedTarget.getAttribute('data-y'));
  if (gameState !== PLAYING || 
      game[x][y].isRevealed || 
      game[x][y].isMarked) return;

  revealNeigbors(x, y);
  checkGameOver();
  checkVictory();
  $('#_game').innerHTML = genTable(game);
  //$('#_game').rows[x].cells[y].innerHTML = genCell(game[x][y], x, y);
}
delegate('#_game', 'click', 'button', leftClickCell);

function rightClickCell(e) {
  e.preventDefault();
  const x = parseInt(e.delegatedTarget.getAttribute('data-x'));
  const y = parseInt(e.delegatedTarget.getAttribute('data-y'));
  if (gameState !== PLAYING || 
      game[x][y].isRevealed) return;
  markedCount += (game[x][y].isMarked ? -1 : 1);
  game[x][y].isMarked = !game[x][y].isMarked;
  checkVictory();
  $('#_game').rows[x].cells[y].innerHTML = genCell(game[x][y], x, y);
  $('#_remaining').innerHTML = mineCount - markedCount;
}
delegate('#_game', 'contextmenu', 'button', rightClickCell);

// HTML generátorok
function genTable(table) {
  let html = '';
  for (let i = 0; i < table.length; i++) {
    html += `<tr>`;
    for (let j = 0; j < table[i].length; j++) {
      html += `<td>${genCell(table[i][j], i, j)}</td>`;
    }
    html += `</tr>`;
  }
  return html;
}

function genCell(cell, x, y) {
  if (DEBUG) {
    return `<button>${cell.isMine ? '&#128163;' : cell.neighborCount}</button>`;
  } else {
    return `
    <button data-x="${x}" data-y="${y}"
            ${(cell.isRevealed ? ' class="revealed"' : '')}>
      ${cell.isRevealed ? 
        (cell.isMine ? '💣' : (cell.neighborCount === 0 ? '&nbsp;' : cell.neighborCount)) : 
        (cell.isMarked ? '🚩' : '&nbsp;')}
    </button>`;
  }
}

// Ikonok
// Bomba: 💣
// Zászló: 🚩
// Kérdőjel: ❔