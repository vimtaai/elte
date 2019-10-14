import { Actor } from "./actor.js";
import { randomBetween } from "./utils.js";
import { canvas } from "./canvas.js";

export class Asteroid extends Actor {
  constructor() {
    const width = randomBetween(20, 50);
    const height = width;
    const x = randomBetween(0, canvas.width);
    const y = -height * 2;

    super(x, y);
    this.width = width;
    this.height = height;
    this.vx = 0;
    this.vy = randomBetween(100, 300);
  }

  render(context) {
    context.beginPath();
    context.arc(this.x, this.y, this.width / 2, 0, Math.PI * 2);
    context.fillStyle = "gray";
    context.fill();
  }
}



