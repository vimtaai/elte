import { state } from "../state.js";

export class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.vx = 0;
    this.vy = 0;
    this.radius = 20;
  }

  update(dt) {
    this.x += this.vx * dt;
    this.y += this.vy * dt;
  }

  render(context) {
    context.save();
    context.translate(this.x, this.y);
    context.beginPath();
    context.arc(0, 0, this.radius, 0, Math.PI * 2);
    context.strokeStyle = "blue";
    context.stroke();
    context.restore();
  }

  collideWithAsteroid(asteroid) {
    const distance = Math.sqrt((this.x - asteroid.x) ** 2 + (this.y - asteroid.y) ** 2);
    if (distance < this.radius + asteroid.radius) {
      state.stage = "game over";
    }
  }
}
