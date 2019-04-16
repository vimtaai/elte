// Segédfüggvények

function $(selector) {
  return document.querySelector(selector);
}

function delegate(parent, type, selector, handler) {
  function delegatedFunction(event) {
    const target = event.target.closest(selector);

    if (target === null) {
      return;
    }

    event.delegatedTarget = target;
    handler.call(target, event);
  }

  parent.addEventListener(type, delegatedFunction);
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function xyCoords(td) {
  const x = td.cellIndex;
  const y = td.parentNode.rowIndex;
  return { x, y };
}

// Állapottér

let size;
let board = [];
let player1;
let player2;
let currentPlayer;
let state;
let previousCard;
let currentCard;

function isWon() {
  return board.every(row => row.every(cell => cell.isRevealed));
}

// Kezdőállapot
function init() {
  size = parseInt($("select").value);
  player1 = 0;
  player2 = 0;
  currentPlayer = random(1, 2);
  state = "card1";

  board = [];
  for (let y = 0; y < size; y++) {
    board[y] = [];
  }
  for (let i = 1; i <= (size * size) / 2; i++) {
    for (let j = 1; j <= 2; j++) {
      // 2 db-ot rakunk le minden kártyából
      let x;
      let y;

      do {
        x = random(0, size - 1);
        y = random(0, size - 1);
      } while (board[y][x] !== undefined);
      // addig generálok koordinátákat, amíg az éppen aktuális foglalt

      board[y][x] = {
        number: i,
        isRevealed: false,
        isRevealing: false
      };
    }
  }
}

// Pontszám növelése
function scorePoints() {
  // az aktuális játékos pontot kap
  if (currentPlayer === 1) {
    player1++;
  } else {
    player2++;
  }
}

// Győzelem kezelése
function handleVictory() {
  if (isWon()) {
    state = "win";
    if (player1 > player2) {
      alert(`1. játékos nyert`);
    } else if (player2 > player1) {
      alert(`2. játékos nyert`);
    } else {
      alert(`Döntetlen`);
    }
  } else {
    state = "card1";
  }
}

// Ez a függvény fogja eltűntetni a kártyákat
function hideCards() {
  previousCard.isRevealed = false;
  currentCard.isRevealed = false;

  // elmentem, mi volt az előző kártya
  previousCard = currentCard;
  // most nincs "éppen kattintott" kártya
  currentCard = null;

  state = "card1";
  currentPlayer = currentPlayer === 1 ? 2 : 1;

  render();
}

// Eseménykezelő
function startClick() {
  init(); // Kezdőállapot
  render(); // Kirajzolás
}
$("button").addEventListener("click", startClick);

function cardClick() {
  // console.log(event.delegatedTarget);
  // console.log(this);
  const { x, y } = xyCoords(this.parentNode);
  console.log(x, y);
  currentCard = board[y][x];

  if (state !== "card1" && state !== "card2") {
    return;
  }

  // ha ez a kártya már fel volt fedve
  if (currentCard.isRevealed) {
    // ne történjen semmi
    return;
  }

  // felfedem
  currentCard.isRevealed = true;

  // ha ez az első kártya
  if (state === "card1") {
    // következő állapot
    state = "card2";
    // elmentem, mi volt az előző kártya
    previousCard = currentCard;
  } else if (state === "card2") {
    // ha a két kártya megegyezik
    if (currentCard.number === previousCard.number) {
      // pontot adok
      scorePoints();
      // megnézem, hogy győzött-e valaki
      handleVictory();
      // elmentem, mi volt az előző kártya
      previousCard = currentCard;
    } else {
      // várakozó állapotba állítom a játékot
      state = "waiting";
      // 1000 ms után fusson le a hideCards függvény
      setTimeout(hideCards, 1000);
    }
  }

  render();
}

delegate($("#board"), "click", ".card", cardClick);

function render() {
  $("#board").innerHTML = genBoard(board);
  $("#player1").innerHTML = genPlayer(player1);
  $("#player2").innerHTML = genPlayer(player2);
}

// HTML generátor
function genBoard(board) {
  let html = "";
  for (const row of board) {
    html += `<tr>`;
    for (const cell of row) {
      let classes = "card";
      if (cell.isRevealed) classes += " revealed";
      if (cell === currentCard) classes += " revealing";

      html += `
        <td>
          <div class="${classes}">
            <span>${cell.isRevealed ? cell.number : ""}</span>
          </div>
        </td>
      `;
    }
    html += `</tr>`;
  }
  return html;
}

function genPlayer(player) {
  return player + " pont";
}
