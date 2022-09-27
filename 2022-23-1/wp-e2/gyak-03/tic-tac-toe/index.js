const wrapperElement = document.querySelector("#tic-tac-toe");

wrapperElement.addEventListener("click", onCellClick);

function onCellClick(event) {
  if (!event.target.matches("td")) {
    return;
  }

  const cellElement = event.target;
  const x = cellElement.cellIndex;
  const y = cellElement.parentNode.rowIndex;

  state.board[y][x] = state.currentPlayer;
  state.currentPlayer = state.currentPlayer === "x" ? "o" : "x";

  wrapperElement.innerHTML = render(state);
}

const state = {};

// Initial state
function initialize() {
  state.currentPlayer = "x";
  state.board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ];
}

// Rendering
function render(state) {
  return `
    <table>
      ${state.board.map(row => renderRow(row)).join("")}
    </table>
  `;
}

function renderRow(row) {
  return `
    <tr>
      ${row.map(cell => renderCell(cell)).join("")}
    </tr>
  `;
}

function renderCell(cell) {
  return `<td>${cell}</td>`;
}

initialize();
document.querySelector("#tic-tac-toe")
  .innerHTML = render(state);