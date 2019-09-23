class Field {
  isFlagged = false;
  isMine = false;
  neighborCount = 0;
  isRevealed = false;

  constructor(isFlagged, isMine) {
    this.isFlagged = isFlagged;
    this.isMine = isMine;
  }

  // doesCauseGameOver() {
  //   return this.isMine && this.isRevealed;
  // }

  get isGameOver() {
    return this.isMine && this.isRevealed;
  }
}