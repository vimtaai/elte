import { PATH } from "./params.js";

export const board = [];
export let money = 0; 
export const enemies = [];

export function setup(boardSize, path) {
  money = 30;
  const [x, y] = PATH[0];
  enemies.push({ x, y });

  for (let y = 0; y < boardSize; y += 1) {
    const row = [];

    for (let x = 0; x < boardSize; x += 1) {
      const isRoad = path.some((coords) => coords[0] === x && coords[1] === y);
      row.push({ x, y, isRoad, isTower: false });
    }

    board.push(row);
  }
}

export function buyTower(x, y) {
  if (board[y][x].isTower) {
    return;
  }
  
  if (money < 10) {
    return;
  }

  board[y][x].isTower = true;
  money -= 10;
}

export function moveEnemies() {
  for (const enemy of enemies) {
    const pathIndex = PATH.findIndex(
      ([x, y]) => enemy.x === x && enemy.y === y
    );

    // TODO: lose life if an enemy reaches the end of path
    if (pathIndex === PATH.length - 1) {
      continue;
    }

    const [newX, newY] = PATH[pathIndex + 1];
    enemy.x = newX;
    enemy.y = newY;
  }
}

