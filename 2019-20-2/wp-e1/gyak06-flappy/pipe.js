export class Pipe {
  vx = -300;
  width = 100;
  gapHeight = 100;

  constructor(canvasWidth, canvasHeight) {
    const minHeight = 50;
    const maxHeight = canvasHeight - minHeight - this.gapHeight;

    this.x = canvasWidth;
    this.topHeight = Math.floor(Math.random() * maxHeight + 1) + minHeight;
    this.bottomHeight = canvasHeight - this.topHeight - this.gapHeight;
  }

  update(dt) {
    this.x += this.vx * dt;
  }

  render(context) {
    // Felső cső
    context.beginPath();
    context.rect(this.x, 0, this.width, this.topHeight);
    context.fill();

    // Alsó cső
    context.beginPath();
    context.rect(this.x, this.topHeight + this.gapHeight, this.width, this.bottomHeight);
    context.fill();
  }

  outOfGame() {
    return this.x < -this.width;
  }
}