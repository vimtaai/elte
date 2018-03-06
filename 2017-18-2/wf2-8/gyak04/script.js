// Segédfüggvények
const $ = (s) => document.querySelector(s);

// Állapot
let state;

// Kezdőállapot létrehozása
function init() {
  const x = $('#x').value;
  const y = $('#y').value;
  const m = $('#m').value;
  state = [];
  for (let i = 0; i < y; ++i) {
    state[i] = [];
    for (let j = 0; j < x; ++j) {
      state[i][j] = {
        isRevealed: false,
        isMine: false,
        isFlagged: false,
        neighborCount: 0
      };
    }
  }
  for (let i = 0; i < m; ++i) {
    let rx;
    let ry;
    do {
      rx = Math.trunc(Math.random() * x);
      ry = Math.trunc(Math.random() * y);
    } while (state[ry][rx].isMine);
    state[ry][rx].isMine = true;
    for (let xi = -1; xi <= 1; ++xi) {
      for (let yi = -1; yi <= 1; ++yi) {
        if (rx + xi >= 0 &&
            rx + xi <  x &&
            ry + yi >= 0 &&
            ry + yi <  y) {
          state[ry + yi][rx + xi].neighborCount++;
        }
      }
    }
  }
  render(state);
}
$('input[type=button]').addEventListener('click', init);

// Következő állapot generálása
function next() { }

// Játék végének ellenőrzése
function end() { }

// Állapot megjelenítése
function render(state) {
  $('table').innerHTML = genTable(state);
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
