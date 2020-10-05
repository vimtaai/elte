class Player {
  constructor(x, y) {
    this.width = 150;
    this.height = 10;
    this.speed = 150;

    this.x = x;
    this.y = y;
    this.vx = 0;
  }

  update(dt) {
    this.x += this.vx * dt;
  }

  render(context) {
    context.save();
    context.translate(this.x, this.y);
    context.beginPath();
    context.rect(-this.width / 2, 
                 -this.height / 2, 
                 this.width, 
                 this.height);
    context.fill();
    context.restore();
  }
}