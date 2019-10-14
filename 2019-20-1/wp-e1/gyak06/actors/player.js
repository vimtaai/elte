import { Actor } from "../actor.js";

export class Player extends Actor {
  constructor(x, y) {
    super(x, y);
    this.radius = 30;
    this.score = 0;
    this.angle = Math.PI / 2;
    this.gunLength = this.radius + 30;
  }

  get gunX() {
    return this.x + this.gunLength * Math.cos(this.angle);
  }

  get gunY() {
    return this.y + this.gunLength * Math.sin(this.angle);
  }

  render(ctx) {
    ctx.strokeStyle = "black";
    ctx.lineWidth = 3;
    
    ctx.translate(this.x, this.y);
    ctx.rotate(this.angle);
    // ! hand
    ctx.fillStyle = "wheat";
    ctx.beginPath();
    ctx.arc(this.gunLength - this.radius, 0, 10, 0, Math.PI * 2);
    ctx.stroke();
    ctx.fill();
    // ! gun
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.rect(0, -5, this.gunLength, 10);
    ctx.arc(this.gunLength, 0, 5, 0, Math.PI * 2);
    ctx.fill();
    ctx.rotate(-this.angle);
    ctx.translate(-this.x, -this.y);

    // ! body
    ctx.fillStyle = "wheat";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.stroke();
    ctx.fill();

    ctx.font = "40px Consolas";
    ctx.fillStyle = "black";
    ctx.fillText(this.score + " enemies ded...", 20, 50);
  }
}