import { HEIGHT, WIDTH } from "../canvas.js";
import { state } from "../state.js";
import { Bullet } from "./bullet.js";
import { Explosion } from "./explosion.js";

const SPRITE_COUNT = 4;
const SPRITES_PER_ROW = 4;
const SPRITE_SIZE = 64;

const MAX_HP = 100;
const MAX_ENERGY = 20;

export class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.vx = 0;
    this.vy = 0;
    this.radius = 32;
    this.skin = 1;

    this.hp = MAX_HP;
    this.energy = 10;
    
    this.image = new Image();
    this.image.src = "images/player.png";
  }

  update(dt) {
    this.x += this.vx * dt;
    this.y += this.vy * dt;
  }

  render(context) {
    context.save();
    context.translate(this.x, this.y);

    const x = this.skin % SPRITES_PER_ROW * SPRITE_SIZE;
    const y = Math.floor(this.skin / SPRITES_PER_ROW) * SPRITE_SIZE;

    // Kép részletének kirajzolása
    context.drawImage(this.image, x, y, SPRITE_SIZE, SPRITE_SIZE, -this.radius, -this.radius, this.radius * 2, this.radius * 2);

    if (state.degug) {
      context.beginPath();
      context.strokeStyle = "lightgreen";
      context.arc(0, 0, this.radius, 0, Math.PI * 2);
      context.stroke();
    }

    context.restore();

    // HP
    context.beginPath();
    context.fillStyle = "lightgreen";
    context.rect(WIDTH - 15, HEIGHT - 10, 5, -(HEIGHT - 20) * this.hp / MAX_HP);
    context.fill();

    // Energy
    context.beginPath();
    context.fillStyle = "salmon";
    context.rect(15, HEIGHT - 10, -5, -(HEIGHT - 20) * this.energy / MAX_ENERGY);
    context.fill();
  }

  nextSkin() {
    this.skin = (this.skin + 1) % SPRITE_COUNT;
  }

  gainEnergy(amount = 1) {
    if (this.energy < MAX_ENERGY) { 
      this.energy += amount;
    }
  }

  loseEnergy(amount = 1) {
    if (this.energy >= amount) {
      this.energy -= amount;
    }
  }

  fire() {
    // Ha nincs energia, nem csinálunk semmit
    if (this.energy === 0) {
      return;
    }

    this.loseEnergy(1);
    state.bullets.push(new Bullet(this.x + 27, this.y - 5));
    state.bullets.push(new Bullet(this.x - 27, this.y - 5));
  }

  collideWithAsteroid(asteroid) {
    const distance = Math.sqrt((this.x - asteroid.x) ** 2 + (this.y - asteroid.y) ** 2);
    if (distance < this.radius + asteroid.radius) {
      this.hp -= 10;
      asteroid.destroy();

      if (this.hp <= 0) {
        state.explosions.push(new Explosion(this.x, this.y, 0));
        state.stage = "game over";
        state.gameover.score = state.scoreDisplay.score;
      }
    }
  }
}
