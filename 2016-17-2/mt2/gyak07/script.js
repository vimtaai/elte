// Segédfüggvények
const $ = document.querySelector.bind(document);

// Állapottér
let store = {
  state: {
    game: undefined,
    status: undefined
  },
  actions: {
    init: init,
    reveal: reveal,
    flag: flag,
    gameover: gameover,
    win: win
  }
};

function callAction(action, data) {
  store.actions[action](data);
  update();
  checkEnd();

  function update() {
    $('#_game').innerHTML = '';
    $('#_game').appendChild(Game(store.state));
  }

  function checkEnd() {
    if (store.state.status == 'playing') {
      // Vesztés ellenőrzése
      if (store.state.game.some(row => 
        row.some(cell => 
          cell.isRevealed && cell.isMine))) {
        callAction('gameover');
      }
      // Győzelem ellenőrzése
      if (store.state.game.every(row => 
        row.every(cell => 
          cell.isRevealed || cell.isMine))) {
        callAction('win');
      }
    }
  }
}

function init() {
  const width = parseInt($('#_width').value);
  const height = parseInt($('#_height').value);
  const minecount = parseInt($('#_minecount').value);

  // Beállítom a játékállapotot
  store.state.status = 'playing';

  // Üres pálya létrehozása
  store.state.game = [];
  for (let i = 0; i < height; i++) {
    store.state.game[i] = [];
    for (let j = 0; j < width; j++) {
      store.state.game[i][j] = {
        isMine: false,
        isRevealed: false,
        isMarked: false,
        neighborCount: 0
      };
    }
  }
  // Aknák felhelyezése
  for (let i = 0; i < minecount; i++) {
    // Hátultesztelős ciklus
    let randomX, randomY;
    do {
      randomX = Math.floor(Math.random() * width);
      randomY = Math.floor(Math.random() * height);
    } while (store.state.game[randomY][randomX].isMine);
    store.state.game[randomY][randomX].isMine = true;
    // Szomszédok kezelése
    for (let i = -1; i <= +1; i++) {
      for (let j = -1; j <= +1; j++) {
        if ((i != 0 || j != 0) &&
            (randomX + j >= 0) &&
            (randomX + j < width) &&
            (randomY + i >= 0) &&
            (randomY + i < height) &&
            (!store.state.game[randomY + i][randomX + j].isMine)) {
          store.state.game[randomY + i][randomX + j]
               .neighborCount++;
        }
      }
    }
  }
}

function reveal(cell) {
  if (store.state.status == 'playing') {
    cell.isRevealed = true;
  }
}

function flag(cell) {
  if (store.state.status == 'playing') {
    cell.isMarked = true;
  }
}

function gameover() {
  store.state.status = 'gameover';
}

function win() {
  store.state.status = 'win';
}

// Eseménykezelők ???
$('#_start').addEventListener('click', function () {
  callAction('init');
}, false);

// Komponensek
function Game(state) {
  return html`<table>
    ${state.game.map(row => Row(row))}
    ${state.status == 'win' 
      ? html`<tr><td colspan="${state.game[0].length}">Nyertél</td></tr>` 
      : ''}
    ${state.status == 'gameover' 
      ? html`<tr><td colspan="${state.game[0].length}">Vesztettél</td></tr>` 
      : ''}
  </table>`;
}

function Row(row) {
  return html`<tr>${row.map(cell => Cell(cell))}</tr>`;
}

function Cell(cell) {
  function click() {
    callAction('reveal', cell);
  }

  function rightClick(event) {
    event.preventDefault();
    callAction('flag', cell);
  }

  if (store.state.debug || store.state.status != 'playing')  {
    return html`<td>
      <button>${cell.isMine ? '💣' : cell.neighborCount}</button>
    </td>`;
  } else {
    return html`<td>
      <button onclick=${click}
              oncontextmenu=${rightClick}
              class="${cell.isRevealed ? 'revealed' : ''}">
        ${cell.isRevealed 
            ? (cell.isMine 
              ? '💣' 
              : cell.neighborCount) 
            : (cell.isMarked
              ? '🚩'
              : '')}
      </button>
    </td>`;
  }
}

// Ikonok
// Bomba: 💣
// Zászló: 🚩
// Kérdőjel: ❔