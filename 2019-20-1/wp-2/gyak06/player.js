import { Actor } from "./actor.js";

export class Player extends Actor {
  constructor(x, y) {
    super(x, y);
    this.width = 30;
    this.height = 30;
    this.score = 0;
  }

  render(context) {
    context.beginPath();
    context.moveTo(
      this.x, 
      this.y - this.height * (2/3)
    );
    context.lineTo(
      this.x + this.width * (1/2),
      this.y + this.height * (1/3)
    );
    context.lineTo(
      this.x - this.width * (1/2),
      this.y + this.height * (1/3),
    );
    context.closePath();
    context.fillStyle = "red";
    context.fill();

    context.font = "30px Segoe UI";
    context.fillText(this.score, 30, 30);
  }
}