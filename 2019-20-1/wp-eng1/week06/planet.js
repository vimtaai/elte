export class Planet {
  constructor(radius, color, orbit, speed, center) {
    this.radius = radius * 2;
    this.color = color;
    this.orbit = orbit;
    this.speed = speed;
    this.center = center;
    this.angle = 0;
  }

  // ! calculated properties
  get x() {
    return this.center.x + Math.cos(this.angle) * this.orbit;
  }

  get y() {
    return this.center.y + Math.sin(this.angle) * this.orbit;
  }

  next(dt) {
    this.angle += this.speed * dt;
  }

  render(context) {
    // ! set the fill color
    context.fillStyle = this.color;
    // ! start to draw something new
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    context.fill();
  }
}