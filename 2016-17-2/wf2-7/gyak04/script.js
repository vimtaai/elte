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

let DEBUG = false;
let game = [];

function init(x, y, minecount) {
  // Üres tábla generálása
  game = [];
  if (x * y < minecount) minecount = x * y - 1;
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
  for (let i = 0; i < minecount; i++) {
    let xCoord, yCoord;
    do {
      xCoord = Math.floor(Math.random() * x);
      yCoord = Math.floor(Math.random() * y);
    } while (game[xCoord][yCoord].isMine);
    game[xCoord][yCoord].isMine = true;
    for (let a = -1; a <= 1; a++) {
      for (let b = -1; b <= 1; b++) {
        if (xCoord + a >= 0 && 
            xCoord + a < x &&
            yCoord + b >= 0 &&
            yCoord + b < y &&
            (a || b)) {
          game[xCoord + a][yCoord + b].neighborCount++;
        }
      }
    }
  }
}

function gameOver() {
  alert('GAME OVER');
}

// Eseménykezelők
function clickStart() {
  let x = parseInt($('#_X').value);
  let y = parseInt($('#_Y').value);
  let minecount = parseInt($('#_minecount').value);
  init(x, y, minecount);
  $('#_game').innerHTML = genTable(game);
}
$('#_start').addEventListener('click', clickStart, false);

function leftClickCell(e) {
  const x = e.delegatedTarget.getAttribute('data-x');
  const y = e.delegatedTarget.getAttribute('data-y');
  if (game[x][y].isRevealed || game[x][y].isMarked) return;
  if (game[x][y].isMine) {
    gameOver();
  } else {
    game[x][y].isRevealed = true;
    //$('#_game').innerHTML = genTable(game);
    $('#_game').rows[x].cells[y].innerHTML = genCell(game[x][y]);
  }
}
delegate('#_game', 'click', 'button', leftClickCell);

function rightClickCell(e) {

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
    return `<button data-x="${x}" data-y="${y}">
      ${cell.isRevealed ? cell.neighborCount : '&nbsp;'}
    </button>`;
  }
}