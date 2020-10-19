import { Asteroid } from "../actors/asteroid.js";
import { state } from "../state.js";

export const asteroidTimer = {
  timer: undefined,
  onTick() {
    state.asteroids.push(new Asteroid());
  }
};
