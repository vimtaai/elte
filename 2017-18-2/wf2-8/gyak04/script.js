// Segédfüggvények
const $ = (s) => document.querySelector(s);

function delegate(parent, children, type, handler) {
  function delegatedFunction(event) {
    let target = event.target;
    if (target.matches(`${parent} ${children}, ${parent} ${children} *`)) {
      while (!target.matches(children)) {
        target = targer.parentNode;
      }

      // event.delegatedTarget = target;
      // handler(event);
      return handler.call(target, event);
    }
  }
  $(parent).addEventListener(type, delegatedFunction);
}

// Állapot
let game;
let isStarted;
let maxX, maxY;
let mineCount;

// Aknák lehelyezése
function placeMines(clickX, clickY) {
  for (let i = 0; i < mineCount; ++i) {
    let rx;
    let ry;
    do {
      rx = Math.trunc(Math.random() * maxX);
      ry = Math.trunc(Math.random() * maxY);
    } while (game[ry][rx].isMine || 
             (rx == clickX && ry == clickY));

    game[ry][rx].isMine = true;
    for (let xi = -1; xi <= 1; ++xi) {
      for (let yi = -1; yi <= 1; ++yi) {
        if (rx + xi >= 0 &&
            rx + xi <  maxX &&
            ry + yi >= 0 &&
            ry + yi <  maxY) {
          game[ry + yi][rx + xi].neighborCount++;
        }
      }
    }
  }
}

// Kezdőállapot létrehozása
function init() {
  const x = $('#x').value;
  const y = $('#y').value;
  const m = $('#m').value;
  // Kezdőállapot
  game = [];
  isStarted = false;
  maxX = x;
  maxY = y;
  mineCount = m;
  for (let i = 0; i < y; ++i) {
    game[i] = [];
    for (let j = 0; j < x; ++j) {
      game[i][j] = {
        isRevealed: false,
        isMine: false,
        isFlagged: false,
        neighborCount: 0
      };
    }
  }
  render();
}
$('input[type=button]').addEventListener('click', init);

// Következő állapot generálása
function next() { }

// Játék végének ellenőrzése
function end() { }

// Bal kattintás
function leftClick() {
  //console.log(this);
  const td = this.parentNode;
  const tr = td.parentNode;
  const x = td.cellIndex;
  const y = tr.rowIndex;
  if (!isStarted) {
    placeMines(x, y);
    isStarted = true;
  }
  if (!game[y][x].isFlagged) {
    game[y][x].isRevealed = true;
    render();
  }
}
delegate('table', 'button', 'click', leftClick);

// Jobb kattintás
function rightClick(event) {
  console.log(this);
  event.preventDefault();
  const td = this.parentNode;
  const tr = td.parentNode;
  const x = td.cellIndex;
  const y = tr.rowIndex;
  game[y][x].isFlagged = !game[y][x].isFlagged;
  render();
}
delegate('table', 'button', 'contextmenu', rightClick);

// Állapot megjelenítése
function render() {
  $('table').innerHTML = genTable(game);
}

// Táblázat generálása
function genTable(table) {
  let html = '';
  for (let i = 0; i < table.length; ++i) {
    html += '<tr>';
    for (let j = 0; j < table[i].length; ++j) {
      html += genCell(table[i][j]);
    }
    html += '</tr>';
  }
  return html;
}

// Cella generálása
function genCell(cell) {
  let content;

  if (cell.isRevealed) {
    if (cell.isMine) {
      content = '💣';
    } else {
      content = cell.neighborCount == 0 ? '' : cell.neighborCount;
    }
  } else {
    content = `<button>${cell.isFlagged ? '🏳️‍🌈' : ''}</button>`;
  }

  return `<td>${content}</td>`;
}
