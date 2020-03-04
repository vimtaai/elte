import { randomCoords } from "./utils.js";
import { Tile } from "./tile.js";

export class AppState {
  board = [];

  init(width, height, mineCount) {
    for (let y = 0; y < height; y++) {
      this.board.push([]);
      for (let x = 0; x < width; x++) {
        this.board[y].push(new Tile(x, y));
      }
    }

    for (let i = 0; i < mineCount; i++) {
      let newCoords;

      do {
        newCoords = randomCoords(width, height);
      } while(this.board[newCoords.y][newCoords.x].isMine);

      this.board[newCoords.y][newCoords.x].isMine = true;
    }
  }
}