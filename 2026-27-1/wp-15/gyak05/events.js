import { BOARD_SIZE } from "./params.js";
import { boardElement, goldElement } from "./references.js";
import { renderBoard, renderMoney } from "./render.js";
import { board, buyTower, money, moveEnemies } from "./state.js";

export function onCellClick(event) {
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

  buyTower(x, y);
  goldElement.innerHTML = renderMoney(money);
  boardElement.innerHTML = renderBoard(board);
}

export function onTimerTick() {
  moveEnemies();
  boardElement.innerHTML = renderBoard(board);
}