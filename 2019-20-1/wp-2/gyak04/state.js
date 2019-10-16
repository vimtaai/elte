import { Field } from "./field.js";

export class AppState {
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
        this.board[y][x] = new Field(false, false);
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
      } while(this.board[y][x].isMine);
      // ! Lerakom az aknát
      this.board[y][x].isMine = true;
    }
  }

  getRandomXY() {
    const x = Math.floor(Math.random() * this.width);
    const y = Math.floor(Math.random() * this.height);
    return { x, y };
  }
}



