import { state } from "../state.js";

export const energyRechargeTimer = {
  timer: undefined,
  onTick() {
    state.player.gainEnergy(1);
  }
};
