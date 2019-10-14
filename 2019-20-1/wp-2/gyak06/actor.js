export class Actor {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.vx = 0;
    this.vy = 0;
  }

  next(dt) {
    this.x += dt * this.vx;
    this.y += dt * this.vy;
  }
}