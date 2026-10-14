import { enemies } from "./state.js";

export function renderMoney(money) {
  return money;
}

export function renderBoard(board) {
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

  console.log(enemies, cell)
  if (enemies.some((enemy) => enemy.x === cell.x && enemy.y === cell.y)) {
    classes.push("enemy");
  }

  if (cell.isTower) {
    classes.push("tower");
  }

  return `<div class="${classes.join(" ")}"></div>`;
}