import { state } from "../state.js";

export const playerSkinTimer = {
  timer: undefined,
  onTick() {
    state.player.nextSkin();
  }
};
