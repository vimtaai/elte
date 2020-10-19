import { HEIGHT, WIDTH } from "../canvas.js";

export class GameOverDisplay {
  constructor() {
    this.score = 0;
  }

  update(dt) {}

  render(context) {    
    context.fillStyle = "rgba(0, 0, 0, 0.7)";
    context.beginPath();
    context.rect(0, HEIGHT / 2 - 50, WIDTH, 100);
    context.fill();

    context.fillStyle = "white";
    context.textAlign = "center";
    context.font = "30px Arial";
    context.fillText("Game Over", WIDTH / 2, HEIGHT / 2);
    context.font = "20px Arial";
    context.fillText(`Score: ${this.score}`, WIDTH / 2, HEIGHT / 2 + 40);
  }
}
