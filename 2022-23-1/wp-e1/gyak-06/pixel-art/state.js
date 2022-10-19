export const state = {
  drawing: [],
  colorHistory: [],
  savedDrawings: [],

  initDrawing(width, height) {
    this.drawing = [];

    for (let y = 0; y < height; y++) {
      this.drawing[y] = [];
      for (let x = 0; x < width; x++) {
        this.drawing[y][x] = "#ffffff";
      }
    }
  },

  changeCellColor(x, y, color) {
    this.drawing[y][x] = color;
  },

  addColorToColorHistory(color) {
    this.colorHistory.unshift(color);

    if (this.colorHistory.length > 5) {
      this.colorHistory.pop();
    }
  },

  saveDrawing() {
    const copyOfCurrentDrawing = JSON.parse(JSON.stringify(this.drawing));

    this.savedDrawings.push(copyOfCurrentDrawing);
  },

  loadDrawings(savedDrawings) {
    this.savedDrawings = savedDrawings;
  },
};
