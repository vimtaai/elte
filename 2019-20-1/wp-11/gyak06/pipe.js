export class Pipe {
  constructor(y, height) {
    this.x = 1000;
    this.y = y;
    this.width = 80;
    this.height = height;
  }

  next(dt) {
    const speed = -200;
    this.x += speed * dt;
  }

  render(context) {
    context.beginPath();
    context.fillStyle = "forestgreen";
    context.rect(this.x, this.y, this.width, this.height);
    context.fill();
  }
}