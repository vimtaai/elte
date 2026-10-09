// export let currentScore = 0;
// export let moleCoordinates = { x: 2, y: 2 };

export const state = {
  currentScore: 0,
  moleCoordinates: { x: 2, y: 2 },
  gainScore() {
    this.currentScore += 1;
  },
  loseScore() {
    this.currentScore -= 1;
  },
  moveMole(x, y) {
    this.moleCoordinates = { x, y };
  },
};
