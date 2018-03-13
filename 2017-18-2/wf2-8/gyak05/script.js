// Segédfüggvények
const $ = (s) => document.querySelector(s);

function delegate(parent, children, type, handler) {
  function delegatedFunction(event) {
    let target = event.target;
    if (target.matches(`${parent} ${children}, ${parent} ${children} *`)) {
      while (!target.matches(children)) {
        target = target.parentNode;
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
let gameState;
let timer;
let interval;

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
  gameState = 'playing';
  timer = 0;
  clearInterval(interval);
  interval = setInterval(timerTick, 1000);

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
function revealAll() {
  game.forEach(sor => sor.forEach(cella => {
    cella.isRevealed = true;
  }));
}

// Szomszédok feldedése
function revealNeighbors(x, y) {
  if (game[y][x].neighborCount == 0) {
    for (let xi = -1; xi <= 1; ++xi) {
      for (let yi = -1; yi <= 1; ++yi) {
        if (x + xi >= 0 &&
            x + xi <  maxX &&
            y + yi >= 0 &&
            y + yi <  maxY &&
            !game[y + yi][x + xi].isRevealed) {
          game[y + yi][x + xi].isRevealed = true;
          if (game[y + yi][x + xi].neighborCount == 0) {
            revealNeighbors(x + xi, y + yi);
          }
        }
      }
    }
  }
}

// Játék végének ellenőrzése
function end() {
  const win = game.every(sor => 
    sor.every(cella => 
      cella.isRevealed !== cella.isMine
    )
  );
  const lose = game.some(sor =>
    sor.some(cella =>
      cella.isMine && cella.isRevealed
    )
  );
  if (lose) {
    gameState = 'lose';
    clearInterval(interval);
    revealAll();
  } else if (win) {
    gameState = 'win';
    clearInterval(interval);
    revealAll();
  }
}

// Bal kattintás
function leftClick() {
  //console.log(this);
  if (gameState == 'playing') {
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
      revealNeighbors(x, y);
      end();
      render();
    }
  }
}
delegate('table', 'button', 'click', leftClick);

// Jobb kattintás
function rightClick(event) {
  event.preventDefault();
  if (gameState == 'playing') {
    //console.log(this);
    const td = this.parentNode;
    const tr = td.parentNode;
    const x = td.cellIndex;
    const y = tr.rowIndex;
    game[y][x].isFlagged = !game[y][x].isFlagged;
    if (game[y][x].isFlagged) {
      mineCount--;
    } else {
      mineCount++;
    }
    render();
  }
}
delegate('table', 'button', 'contextmenu', rightClick);

function doubleClick(event) {
  //console.log(event);
  event.preventDefault();
  if (event.buttons == 3) {
    const td = this;
    const tr = this.parentNode;
    const x = td.cellIndex;
    const y = tr.rowIndex;
    let c = 0;
    for (let xi = -1; xi <= 1; ++xi) {
      for (let yi = -1; yi <= 1; ++yi) {
        if (x + xi >= 0 &&
            x + xi <  maxX &&
            y + yi >= 0 &&
            y + yi <  maxY &&
            !game[y + yi][x + xi].isRevealed) {
          if (game[y + yi][x + xi].isFlagged) {
            c++;
          }
        }
      }
    }
    if (game[y][x].neighborCount == c) {
      for (let xi = -1; xi <= 1; ++xi) {
        for (let yi = -1; yi <= 1; ++yi) {
          if (x + xi >= 0 &&
              x + xi <  maxX &&
              y + yi >= 0 &&
              y + yi <  maxY &&
              !game[y + yi][x + xi].isRevealed) {
            if (!game[y + yi][x + xi].isFlagged) {
              game[y + yi][x + xi].isRevealed = true;
              if (game[y + yi][x + xi].neighborCount == 0) {
                revealNeighbors(x + xi, y + yi);
              }
            }
          }
        }
      }
    }
  }
}
delegate('table', 'td', 'mousedown', doubleClick);

delegate('table', 'td', 'contextmenu', function (event) {
  event.preventDefault();
});

// Időzítő-kezelő
function timerTick() {
  timer++;
  render();
}

// Állapot megjelenítése
function render() {
  $('tbody').innerHTML = genTable(game);
  $('#smiley').innerHTML = genSmiley(gameState);
  $('#mineCount').innerHTML = genMineCount(mineCount);
  $('#timer').innerHTML = genTimer(timer);
}

// Eltelt idő
function genTimer(timer) {
  return Math.floor(timer / 60) + ':' + (timer % 60);
}

// Maradék aknák száma
function genMineCount(mineCount) {
  return mineCount;
}

// Smiley generálása
function genSmiley(gameState) {
  if (gameState == 'win') {
    return '😎';
  } else if (gameState == 'playing') {
    return '😐';
  } else if (gameState == 'lose') {
    return '😖';
  }
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
