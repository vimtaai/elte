import { state } from "../state.js";

const SPRITE_COUNT = 20;
const SPRITES_PER_ROW = 5;
const SPRITE_SIZE = 64;

export class Explosion {
  constructor(x, y, vy) {
    this.x = x;
    this.y = y;
    this.vy = vy;
    this.radius = SPRITE_SIZE / 2;

    this.skin = 0;

    this.image = new Image();
    this.image.src = "images/explosion.png";
  }

  update(dt) {
    this.y += this.vy * dt;

    // Ha vége, akkor törlöm
    if (this.skin === SPRITE_COUNT - 1) {
      this.destroy();
    }
  }

  render(context) {
    context.save();
    context.translate(this.x, this.y);

    const x = this.skin % SPRITES_PER_ROW * SPRITE_SIZE;
    const y = Math.floor(this.skin / SPRITES_PER_ROW) * SPRITE_SIZE;

    context.drawImage(this.image, x, y, SPRITE_SIZE, SPRITE_SIZE, -this.radius, -this.radius, this.radius * 2, this.radius * 2);

    context.restore();
  }

  nextSkin() {
    this.skin = (this.skin + 1) % SPRITE_COUNT;
  }

  destroy() {
    let index = state.explosions.indexOf(this);
    state.explosions.splice(index, 1);
  }
}
