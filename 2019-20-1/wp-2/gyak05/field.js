export class Field {
  x = NaN;
  y = NaN;
  isFlagged = false;
  isMine = false;
  neighborCount = 0;
  isRevealed = false;

  constructor(x, y, isFlagged, isMine) {
    this.x = x;
    this.y = y;
    this.isFlagged = isFlagged;
    this.isMine = isMine;
  }

  // doesCauseGameOver() {
  //   return this.isMine && this.isRevealed;
  // }

  get isGameOver() {
    return this.isMine && this.isRevealed;
  }

  get isOK() {
    return (this.isRevealed && !this.isMine) || (!this.isRevealed && this.isMine)
  }
}