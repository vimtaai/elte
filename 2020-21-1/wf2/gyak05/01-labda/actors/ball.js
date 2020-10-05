class Ball {
  constructor(x, y, vx, vy, color) {
    this.radius = 10;

    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.color = color;
  }

  update(dt) {
    this.x += this.vx * dt;
    this.y += this.vy * dt;
  }

  render(context) {
    context.save();
    context.translate(this.x, this.y);
    context.fillStyle = this.color;
    context.beginPath();
    context.arc(0, 0, this.radius, 0, Math.PI * 2);
    context.fill();
    context.restore();
  }

  // Interakciók más szereplőkkel
  bounceBack(canvas) {
    if (this.x >= canvas.width && this.vx > 0 || this.x <= 0 && this.vx < 0) {
      this.vx *= -1;
    }
  
    // if (this.y >= canvas.height && this.vy > 0 || this.y <= 0 && this.vy < 0) {
    //   this.vy *= -1;
    // }
  }

  bounceFromPlayer(player) {
    if (this.x >= player.x - player.width / 2 &&
        this.x <= player.x + player.width / 2 &&
        Math.abs(this.y - player.y) < this.radius + player.height / 2) {
      this.vy *= -1;
    }
  }
}