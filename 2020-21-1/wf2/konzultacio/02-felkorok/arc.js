class Arc {
  constructor(i) {
    this.i = i;
    this.rotation = 0;
    this.speed = (i + 1) / 16 * Math.PI;
  }

  update(dt) {
    this.rotation += this.speed * dt;
  }

  render(context) {
    context.save();
    context.translate(canvas.width / 2, canvas.height / 2);
    context.rotate(this.rotation);
    context.beginPath();
    // 0->360 => 0->40 => -20->20
    context.strokeStyle = `hsl(${(16 - this.i) * (300 / 16) - 20}, 100%, 50%)`;
    context.arc(0, 0, (this.i + 1) * ARC_WIDTH, 0, Math.PI, true);
    context.stroke();
    context.restore();
  }
}