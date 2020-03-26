import { AppState, GameState } from "./state.js";
import { render } from "./render.js";
import { TileState } from "./tile.js";

const state = new AppState();

const game = document.querySelector("#game");
const startButton = document.querySelector("button");
function handleStartButtonClick() {
  const width = document.querySelector("#width").value;
  const height = document.querySelector("#height").value;
  const mineCount = document.querySelector("#mineCount").value;

  if (mineCount >= width * height) {
    return;
  }

  state.init(width, height, mineCount);
  game.innerHTML = render(state);
}
startButton.addEventListener("click", handleStartButtonClick);

function handleTileClick(event) {
  if (!event.target.matches("button")) {
    return;
  }

  if (state.gameState !== GameState.PLAYING) {
    return;
  }

  const td = event.target.parentNode;
  const tr = td.parentNode;
  const x = td.cellIndex;
  const y = tr.rowIndex;

  if (state.board[y][x].state === TileState.FLAG) {
    return;
  }

  // Festőalgoritmus
  reveal(x, y);

  if (isGameLost()) {
    state.gameState = GameState.LOST;
    revealAll();
  } else if (isGameWon()) {
    state.gameState = GameState.WON;
    revealAll();
  }

  game.innerHTML = render(state);
}
game.addEventListener("click", handleTileClick);

function handleTileRightClick(event) {
  if (!event.target.matches("button")) {
    return;
  }

  event.preventDefault();

  if (state.gameState !== GameState.PLAYING) {
    return;
  }

  const td = event.target.parentNode;
  const tr = td.parentNode;
  const x = td.cellIndex;
  const y = tr.rowIndex;

  const newState =
    state.board[y][x].state === TileState.FLAG
      ? TileState.UNREVEALED
      : TileState.FLAG;
  state.board[y][x].state = newState;

  game.innerHTML = render(state);
}
game.addEventListener("contextmenu", handleTileRightClick);

function handleContextMenuPrevent(event) {
  event.preventDefault();
}
game.addEventListener("contextmenu", handleContextMenuPrevent);

function handleDoubleClick(event) {
  if (!event.target.matches("td")) {
    return;
  }

  if (event.buttons !== 3) {
    return;
  }

  if (state.gameState !== GameState.PLAYING) {
    return;
  }

  const td = event.target;
  const tr = td.parentNode;
  const x = td.cellIndex;
  const y = tr.rowIndex;

  let flagCount = 0;
  for (let dy = -1; dy <= 1; dy++) {
    for (let dx = -1; dx <= 1; dx++) {
      if (
        state.board[y + dy] &&
        state.board[y + dy][x + dx] &&
        state.board[y + dy][x + dx].state === TileState.FLAG
      ) {
        flagCount++;
      }
    }
  }

  if (flagCount === state.board[y][x].minesNearby) {
    const minesNearby = state.board[y][x].minesNearby;
    state.board[y][x].minesNearby = 0;
    reveal(x, y);
    state.board[y][x].minesNearby = minesNearby;
  }

  if (isGameLost()) {
    state.gameState = GameState.LOST;
    revealAll();
  } else if (isGameWon()) {
    state.gameState = GameState.WON;
    revealAll();
  }

  game.innerHTML = render(state);
}
game.addEventListener("mousedown", handleDoubleClick);

function isGameLost() {
  return state.board.some(row =>
    row.some(tile => tile.state === TileState.REVEALED && tile.isMine)
  );
}

function isGameWon() {
  return state.board.every(row =>
    row.every(tile => tile.isMine !== (tile.state === TileState.REVEALED))
  );
}

function revealAll() {
  state.board.forEach(row =>
    row.forEach(tile => (tile.state = TileState.REVEALED))
  );
}

function reveal(x, y) {
  state.board[y][x].state = TileState.REVEALED;

  if (state.board[y][x].minesNearby === 0) {
    for (let dy = -1; dy <= 1; dy++) {
      for (let dx = -1; dx <= 1; dx++) {
        if (
          state.board[y + dy] &&
          state.board[y + dy][x + dx] &&
          state.board[y + dy][x + dx].state === TileState.UNREVEALED
        ) {
          reveal(x + dx, y + dy);
        }
      }
    }
  }
}
