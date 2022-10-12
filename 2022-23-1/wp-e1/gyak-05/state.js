export const state = {
  drawing: [],

  initDrawing(width, height) {
    this.drawing = [];

    for (let y = 0; y < height; y++) {
      this.drawing[y] = [];
      for (let x = 0; x < width; x++) {
        this.drawing[y][x] = "";
      }
    }
  },
};
