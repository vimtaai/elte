import { state } from "../state.js";

export const explosionSkinTimer = {
  timer: undefined,
  onTick() {
    for (const explosion of state.explosions) {
      explosion.nextSkin();
    }
  }
};
