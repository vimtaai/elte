import { randomCoords } from "./utils.js";
import { Tile } from "./tile.js";

export const GameState = {
  NOT_STARTED: "not started",
  PLAYING: "playing",
  LOST: "lost",
  WON: "won"
};

export class AppState {
  board = [];
  gameState = GameState.NOT_STARTED;

  init(width, height, mineCount) {
    this.gameState = GameState.PLAYING;
    this.board = [];

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
      } while (this.board[newCoords.y][newCoords.x].isMine);

      this.board[newCoords.y][newCoords.x].isMine = true;

      for (let dx = -1; dx <= 1; dx++) {
        for (let dy = -1; dy <= 1; dy++) {
          const { x, y } = newCoords;
          if (this.board[y + dy] && this.board[y + dy][x + dx]) {
            this.board[y + dy][x + dx].minesNearby++;
          }
        }
      }
    }
  }
}
