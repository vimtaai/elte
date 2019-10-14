import { Actor } from "../actor.js";

export class Bullet extends Actor {
  constructor(player, targetX, targetY) {
    super(player.gunX, player.gunY);
    this.radius = 5;

    const speed = 500;
    const distanceFromTarget = 
      Math.sqrt((targetX - this.x)**2 + (targetY - this.y)**2);
    this.vx = (targetX - this.x) / distanceFromTarget * speed;
    this.vy = (targetY - this.y) / distanceFromTarget * speed;
  }

  render(ctx) {
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
  }
}