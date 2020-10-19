import { HEIGHT, WIDTH } from "../canvas.js";

export class GameOver {
  constructor(score) {
    this.score = score;
  }

  update(dt) {}

  render(context) {
    context.fillStyle = "white";
    context.font = "30px Arial";
    context.textAlign = "center";
    context.fillText("Game Over", WIDTH / 2, HEIGHT / 2);
    context.fillText(this.score, WIDTH / 2, HEIGHT / 2 + 30);
  }
}