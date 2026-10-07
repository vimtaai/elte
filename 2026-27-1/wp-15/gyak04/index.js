const BOARD_SIZE = 6;
const PATH = [
  [1, 0],
  [1, 1],
  [1, 2],
  [1, 3],
  [1, 4],
  [2, 4],
  [3, 4],
  [3, 3],
  [3, 2],
  [3, 1],
  [4, 1],
  [5, 1],
  [5, 2],
  [5, 3],
  [5, 4],
  [5, 5],
];

const boardElement = document.querySelector("#board");

const board = [];

function setup() {
  for (let y = 0; y < BOARD_SIZE; y += 1) {
    const row = [];

    for (let x = 0; x < BOARD_SIZE; x += 1) {
      const isRoad = PATH.some((coords) => coords[0] === x && coords[1] === y);
      row.push({ isRoad, isTower: false });
    }

    board.push(row);
  }
}

function renderBoard() {
  return `
    ${board.map(renderRow).join("\n")}
  `;
}

function renderRow(row) {
  return `
    ${row.map(renderCell).join("\n")}
  `;
}

function renderCell(cell) {
  const classes = ["cell"];

  if (cell.isRoad) {
    classes.push("path");
  }

  if (cell.isTower) {
    classes.push("tower");
  }

  return `<div class="${classes.join(" ")}"></div>`;
}

function onCellClick(event) {
  if (!event.target.closest("div.cell")) {
    return;
  }

  const cellElement = event.target.closest("div.cell");

  if (cellElement.classList.contains("path")) {
    return;
  }

  const cellIndex = Array.from(boardElement.children).indexOf(cellElement);
  const y = Math.floor(cellIndex / BOARD_SIZE);
  const x = cellIndex % BOARD_SIZE;

  board[y][x].isTower = true;
  console.log(board);
  boardElement.innerHTML = renderBoard();
}

boardElement.addEventListener("click", onCellClick);

setup();
boardElement.innerHTML = renderBoard();
