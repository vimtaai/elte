import { Field } from "./field.js";
import { getNeighbors } from "./utils.js";

export const Status = {
  PLAYING: 1,
  WIN: 2,
  LOSE: 4
}

export class AppState {
  status = Status.PLAYING;
  width = 0;
  height = 0;
  mineCount = 0;
  board = [];

  constructor(width, height, mineCount) {
    this.width = width;
    this.height = height;
    this.mineCount = mineCount;

    // ! Pálya generálása
    for (let y = 0; y < this.height; y++) {
      this.board.push([]);
      for (let x = 0; x < this.width; x++) {
        // ! Üres mezőkkel feltöltjük
        this.board[y][x] = new Field(x, y, false, false);
        //this.board[y][x].isRevealed = true;
      }
    }

    // ! Aknák lehelyezése
    for (let i = 0; i < this.mineCount; i++) {
      let x, y;
      // ! Generálom az X, Y koordinátákat, amíg találok egy olyat ami nem akna
      do {
        let coords = this.getRandomXY();
        x = coords.x;
        y = coords.y;
      } while (this.board[y][x].isMine);
      // ! Lerakom az aknát
      this.board[y][x].isMine = true;

      // ! Szomszédoknak növelem a szomszédszámát
      const neighbors = getNeighbors(this.board, x, y);
      for (const neighbor of neighbors) {
        neighbor.neighborCount++;
      }
    }
  }

  getRandomXY() {
    const x = Math.floor(Math.random() * this.width);
    const y = Math.floor(Math.random() * this.height);
    return { x, y };
  }

  reveal(x, y) {
    if (this.board[y][x].isFlagged) {
      return;
    }

    this.board[y][x].isRevealed = true;

    if (this.board[y][x].neighborCount === 0) {
      const neighbors = getNeighbors(this.board, x, y);
      for (const neighbor of neighbors) {
        if (!neighbor.isRevealed) {
          this.reveal(neighbor.x, neighbor.y);
        }
      }
    }

    const isLose = this.board.some(row => row.some(field => field.isGameOver));
    const isWin = this.board.every(row => row.every(field => field.isOK));

    if (isLose || isWin) {
      if (isLose) {
        this.status = Status.LOSE;
      }
      if (isWin) {
        this.status = Status.WIN;
      }
      for (const row of this.board) {
        for (const field of row) {
          field.isRevealed = true;
        }
      }
    }
  }
}



