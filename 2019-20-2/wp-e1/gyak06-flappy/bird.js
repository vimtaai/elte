export class Bird {
  x = 30;
  vy = 0; // px / sec
  ay = 300;
  radius = 15;

  constructor(y) {
    this.y = y;
  }

  update(dt) {
    //  dy =  vy × dt
    //   s =  v × t + a / 2 × t^2
    this.y += this.vy * dt + (this.ay / 2) * dt * dt;
    this.vy += this.ay * dt;
  }

  render(context) {
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    context.fill();
  }

  jump() {
    this.vy -= 300;
  }

  collidesWith(pipe) {
    return (
      this.x >= pipe.x - this.radius &&                        // már eljutott a csőig
      this.x <= pipe.x + pipe.width + this.radius &&           // még nem ment túl rajta
      (this.y < pipe.topHeight + this.radius ||                // ütközik a felsővel
        this.y > pipe.topHeight + pipe.gapHeight - this.radius) // ütkötik az alsóval
    );
  }
}
