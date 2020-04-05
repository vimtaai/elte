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
    context.strokeStyle = "#503146";
    context.lineWidth = 5;
    context.fillStyle = "#9CE659";
    context.beginPath();
    context.rect(this.x, 0, this.width, this.topHeight);
    context.fill();
    context.stroke();
    context.fillStyle = "#73BF2E";
    context.beginPath();
    context.rect(this.x+10, 5, this.width-10, this.topHeight-10);
    context.fill();

    // Alsó cső
    context.fillStyle = "#9CE659";
    context.beginPath();
    context.rect(this.x, this.topHeight + this.gapHeight, this.width, this.bottomHeight);
    context.fill();
    context.stroke();
    context.fillStyle = "#73BF2E";
    context.beginPath();
    context.rect(this.x+10, this.topHeight + this.gapHeight+5, this.width-10, this.bottomHeight-10);
    context.fill();
  }

  outOfGame() {
    return this.x < -this.width;
  }
}