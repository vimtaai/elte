import { state } from "../state.js";

export class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.vx = 0;
    this.vy = 0;
    this.radius = 32;
    
    this.image = new Image();
    this.image.src = "images/player.png";
  }

  update(dt) {
    this.x += this.vx * dt;
    this.y += this.vy * dt;
  }

  render(context) {
    context.save();
    context.translate(this.x, this.y);

    context.drawImage(this.image, -this.radius, -this.radius);

    // context.beginPath();
    // context.arc(0, 0, this.radius, 0, Math.PI * 2);
    // context.strokeStyle = "blue";
    // context.stroke();

    context.restore();
  }

  collideWithAsteroid(asteroid) {
    const distance = Math.sqrt((this.x - asteroid.x) ** 2 + (this.y - asteroid.y) ** 2);
    if (distance < this.radius + asteroid.radius) {
      state.stage = "game over";
      state.gameover.score = state.scoreDisplay.score;
    }
  }
}
