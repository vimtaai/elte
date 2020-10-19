import { state } from "../state.js";

export function handleFire(event) {
  // Engedélyezett billentyűkre való szűrés
  const allowedKeys = ["Space"];
  if (!allowedKeys.includes(event.code)) {
    return;
  }

  // Alapértelmezett esemény megakadályozása
  event.preventDefault();

  if (event.code === "Space") {
    state.player.fire();
  }
}
