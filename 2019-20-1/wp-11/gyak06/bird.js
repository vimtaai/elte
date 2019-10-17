export class Bird {
  constructor(y) {
    this.x = 50;
    this.y = y;
    this.speed = 10;
    this.grav = 500;
    this.score = 0;
  }

  next(dt) {
    this.y += this.speed * dt + this.grav / 2 * (dt ** 2);
    this.speed += this.grav * dt;
  }

  render(context) {
    // ! csőr
    context.beginPath();
    context.fillStyle = "red";
    context.moveTo(this.x + 30, this.y - 30);
    context.lineTo(this.x + 50, this.y - 20);
    context.lineTo(this.x + 30, this.y - 10);
    context.lineTo(this.x + 30, this.y - 30);
    context.fill();
    // ! madárka
    context.beginPath();
    context.fillStyle = "gold";
    context.arc(this.x, this.y, 30, 0, Math.PI * 2);
    // context.fill();
    // context.beginPath();
    // context.fillStyle = "yellow";
    context.arc(this.x + 20, this.y - 20, 20, 0, Math.PI * 2);
    context.fill();

    // ! pontszám
    context.font = "30px Consolas";
    context.fillStyle = "black";
    context.fillText(this.score, 20, 50);
  }

  collidesWith(pipe) {
    const pipeTopY = pipe.height > 0 ? pipe.y : pipe.y + pipe.height;
    const pipeBottomY = pipe.height > 0 ? pipe.y + pipe.height : pipe.y;
    const pipeLeftX = pipe.x;
    const pipeRightX = pipe.x + pipe.width;

    return this.x > pipeLeftX - 30 &&
      this.x < pipeRightX + 30 &&
      this.y > pipeTopY - 30 &&
      this.y < pipeBottomY + 30;
  }
}