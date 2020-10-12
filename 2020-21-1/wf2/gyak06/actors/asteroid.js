import { WIDTH } from "../canvas.js";
import { randomBetween } from "../utils.js";

export class Asteroid {
  constructor() {
    this.x = randomBetween(0, WIDTH);
    this.vy = randomBetween(80, 150);
    this.radius = randomBetween(10, 30);
    this.y = -this.radius;
  }

  update(dt) {
    this.y += this.vy * dt;
  }

  render(context) {
    context.save();
    context.translate(this.x, this.y);
    context.beginPath();
    context.arc(0, 0, this.radius, 0, Math.PI * 2);
    context.strokeStyle = "gray";
    context.stroke();
    context.restore();
  }
}
