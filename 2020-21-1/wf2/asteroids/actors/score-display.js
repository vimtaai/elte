import { WIDTH } from "../canvas.js";

export class ScoreDisplay {
  constructor() {
    this.score = 0;
  }

  update(dt) {}

  render(context) {
    context.fillStyle = "white";
    context.font = "30px Arial";
    context.textAlign = "center";
    context.fillText(this.score, WIDTH / 2, 30);
  }

  addScore() {
    this.score += 1;
  }
}