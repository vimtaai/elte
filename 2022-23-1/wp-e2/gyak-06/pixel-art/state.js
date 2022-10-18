export const state = {
  drawing: [],
  colorHistory: [],

  initDrawing(x, y) {
    const actualX = Math.min(x, 25);
    const actualY = Math.min(y, 25);

    this.drawing = [];

    for (let row = 0; row < actualY; row++) {
      this.drawing[row] = [];

      for (let col = 0; col < actualX; col++) {
        this.drawing[row][col] = "#ffffff";
      }
    }
  },

  fillCellWithColor(x, y, color) {
    this.drawing[y][x] = color;
  },

  storeColorInHistory(color) {
    // this.colorHistory.unshift(color);
    // this.colorHistory = this.colorHistory.slice(0, 5);
    
    this.colorHistory = [color, ...this.colorHistory].slice(0, 5);
  }
};