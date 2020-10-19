import { HEIGHT, WIDTH } from "../canvas.js";
import { state } from "../state.js";
import { randomBetween } from "../utils.js";
import { Explosion } from "./explosion.js";

export class Asteroid {
  constructor() {
    this.x = randomBetween(0, WIDTH);
    this.vy = randomBetween(80, 150);
    this.radius = randomBetween(10, 30);
    this.y = -this.radius;
    this.angle = randomBetween(0, 180) / 180 * Math.PI;
    this.rotation = randomBetween(0, 10) / 10 * Math.PI;

    this.image = new Image();
    this.image.src = "images/asteroid.png";
  }

  update(dt) {
    this.y += this.vy * dt;
    this.angle += this.rotation * dt;
  }

  render(context) {
    context.save();
    context.translate(this.x, this.y);
    context.rotate(this.angle);

    context.drawImage(this.image, -this.radius, -this.radius, this.radius * 2, this.radius * 2);

    if (state.degug) {
      context.beginPath();
      context.strokeStyle = "gray";
      context.arc(0, 0, this.radius, 0, Math.PI * 2);
      context.stroke();
    }

    context.restore();
  }

  destroy() {
    let index = state.asteroids.indexOf(this);
    state.asteroids.splice(index, 1);
    state.explosions.push(new Explosion(this.x, this.y, this.vy));
  }

  isOutOfCanvas() {
    return this.y > HEIGHT + this.radius;
  }
}
