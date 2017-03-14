// Segédfüggvények
const $ = document.querySelector.bind(document);

// Állapottér
let store = {
  state: {
    game: undefined
  },
  actions: {
    init: init
  }
};

function init() {
  const width = parseInt($('#_width').value);
  const height = parseInt($('#_height').value);
  const minecount = parseInt($('#_minecount').value);

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
  // Újragenerálás
  $('#_game').innerHTML = Game(store.state.game);
}

// Eseménykezelők ???
$('#_start').addEventListener('click', store.actions.init, false);

// Komponensek
function Game(board) {
  return board.map(row => Row(row)).join('');
}

function Row(row) {
  return `<tr>${row.map(cell => Cell(cell)).join('')}</tr>`;
}

function Cell(cell) {
  function click() {
    console.log('kattt');
  }

  if (store.state.debug) {
    return `<td>
      <button>${cell.isMine ? '💣' : cell.neighborCount}</button>
    </td>`;
  } else {
    return `<td>
      <button onclick="(${click})(event)">&nbsp;</button>
    </td>`;
  }
}

// Ikonok
// Bomba: 💣
// Zászló: 🚩
// Kérdőjel: ❔