import { HEIGHT } from "../canvas.js";
import { state } from "../state.js";
import { Explosion } from "./explosion.js";

export class Bullet {
  constructor(x, y) {
    this.x = x;
    this.vy = -HEIGHT;
    this.y = y;
    this.radius = 10;
  }

  update(dt) {
    this.y += this.vy * dt;

    if (this.isOutOfCanvas()) {
      this.destroy();
    }
  }

  render(context) {
    context.save();
    context.translate(this.x, this.y);

    context.beginPath();
    context.fillStyle = "red";
    context.ellipse(0, 0, 2, this.radius, 0, 0, Math.PI * 2);
    context.fill();
    context.beginPath();
    context.fillStyle = "salmon";
    context.ellipse(0, 0, 1, this.radius, 0, 0, Math.PI * 2);
    context.fill();

    context.restore();
  }

  destroy() {
    let index = state.bullets.indexOf(this);
    state.bullets.splice(index, 1);
  }

  collideWithAsteroid(asteroid) {
    const distance = Math.sqrt((this.x - asteroid.x) ** 2 + (this.y - asteroid.y) ** 2);
    if (distance < this.radius + asteroid.radius) {
      asteroid.destroy();
      this.destroy();
    }
  }

  isOutOfCanvas() {
    return this.y > HEIGHT + this.radius;
  }
}
