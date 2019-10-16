import { Actor } from "../actor.js";
import { randomBetween } from "../utils.js";
import { canvas } from "../canvas.js";

export class Enemy extends Actor {
  constructor() {
    const radius = 25;
    const side = randomBetween(1, 4);
    let x, y;
    if (side === 1) {
      // ! top
      y = -radius;
      x = randomBetween(0, canvas.width);
    } else if (side === 2) {
      // ! right
      x = canvas.width + radius;
      y = randomBetween(0, canvas.height);
    } else if (side === 3) {
      // ! bottom
      y = canvas.height + radius;
      x = randomBetween(0, canvas.width);
    } else if (side === 4) {
      // ! left
      x = -radius;
      y = randomBetween(0, canvas.height);
    }

    super(x, y);
    this.radius = radius;
  }

  next(dt, player) {
    const speed = 150;
    const distanceFromPlayer = 
      Math.sqrt((player.x - this.x)**2 + (player.y - this.y)**2);
    this.vx = (player.x - this.x) / distanceFromPlayer * speed;
    this.vy = (player.y - this.y) / distanceFromPlayer * speed;

    super.next(dt);
  }

  render(ctx) {
    ctx.strokeStyle = "black";
    ctx.lineWidth = 3;

    ctx.fillStyle = "gray";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.stroke();
    ctx.fill();
  }
}