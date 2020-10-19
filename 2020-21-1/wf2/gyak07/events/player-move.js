import { state } from "../state.js";

export function handlePlayerMove(event) {
  // Engedélyezett billentyűkre való szűrés
  const allowedKeys = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];
  if (!allowedKeys.includes(event.code)) {
    return;
  }

  if (event.code === "ArrowUp") {
    state.player.vy = -150;
  } else if (event.code === "ArrowDown") {
    state.player.vy = 150;
  } else if (event.code === "ArrowLeft") {
    state.player.vx = -150;
  } else if (event.code === "ArrowRight") {
    state.player.vx = 150;
  }
}

export function handlePlayerStop(event) {
  // Engedélyezett billentyűkre való szűrés
  const allowedKeys = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];
  if (!allowedKeys.includes(event.code)) {
    return;
  }

  if (event.code === "ArrowUp" && state.player.vy < 0) {
    state.player.vy = 0;
  } else if (event.code === "ArrowDown" && state.player.vy > 0) {
    state.player.vy = 0;
  } else if (event.code === "ArrowLeft" && state.player.vx < 0) {
    state.player.vx = 0;
  } else if (event.code === "ArrowRight" && state.player.vx > 0) {
    state.player.vx = 0;
  }
}

