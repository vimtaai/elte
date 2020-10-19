import { state } from "../state.js";

export function handleToggleDebug(event) {
  // Engedélyezett billentyűkre való szűrés
  const allowedKeys = ["Tab"];
  if (!allowedKeys.includes(event.code)) {
    return;
  }

  // Alapértelmezett esemény megakadályozása
  event.preventDefault();

  if (event.code === "Tab") {
    state.debug = !state.debug;
  }
}
