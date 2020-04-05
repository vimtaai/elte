export class Bird {
  x = 100;
  vy = 0; // px / sec
  ay = 300;
  hRadius = 17;
  iRadius = 21;
  image = new Image();
  track = [];

  constructor(y) {
    this.y = y;
    this.image.src = "flappy.png";
  }

  update(dt) {
    this.track.unshift({x: this.x, y: this.y});
    for (const trackPoint of this.track) {
      trackPoint.x -= 300 * dt;
    }
    //  dy =  vy × dt
    //   s =  v × t + a / 2 × t^2
    this.y += this.vy * dt + (this.ay / 2) * dt * dt;
    this.vy += this.ay * dt;
  }

  render(context) {
    context.lineWidth = 5;
    context.strokeStyle = "brown";
    context.beginPath();
    context.moveTo(this.x, this.y);
    for (const trackPoint of this.track) {
      context.lineTo(trackPoint.x, trackPoint.y);
    }
    context.stroke();
    context.lineWidth = 1;
    // context.beginPath();
    // context.arc(this.x, this.y, this.hRadius, 0, Math.PI * 2);
    // context.stroke();
    context.drawImage(this.image, this.x - this.iRadius, this.y - this.iRadius);
  }

  jump() {
    this.vy -= 300;
  }

  collidesWith(pipe) {
    return (
      this.x >= pipe.x - this.hRadius &&                        // már eljutott a csőig
      this.x <= pipe.x + pipe.width + this.hRadius &&           // még nem ment túl rajta
      (this.y < pipe.topHeight + this.hRadius ||                // ütközik a felsővel
        this.y > pipe.topHeight + pipe.gapHeight - this.hRadius) // ütkötik az alsóval
    );
  }
}
