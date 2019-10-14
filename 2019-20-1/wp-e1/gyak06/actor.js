export class Actor {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.vx = 0;
    this.vy = 0;
  }

  next(dt) {
    this.x += this.vx * dt;
    this.y += this.vy * dt;
  }

  collidesWith(actor) {
    const distance = 
      Math.sqrt((this.x - actor.x)**2  + (this.y - actor.y)**2);
    return distance < this.radius + actor.radius;
  }

  // ! abstract method helyett
  render(ctx) {}
}