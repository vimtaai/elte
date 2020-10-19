import { state } from "../state.js";

export function handlePlayerMove(event) {
  // Engedélyezett billentyűkre való szűrés
  const allowedKeys = [
    "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", 
    "KeyW", "KeyS", "KeyA", "KeyD"
  ];
  if (!allowedKeys.includes(event.code)) {
    return;
  }

  if (event.code === "ArrowUp" || event.code === "KeyW") {
    state.player.vy = -150;
  } else if (event.code === "ArrowDown" || event.code === "KeyS") {
    state.player.vy = 150;
  } else if (event.code === "ArrowLeft" || event.code === "KeyA") {
    state.player.vx = -150;
  } else if (event.code === "ArrowRight" || event.code === "KeyD") {
    state.player.vx = 150;
  }
}

export function handlePlayerStop(event) {
  // Engedélyezett billentyűkre való szűrés
  const allowedKeys = [
    "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", 
    "KeyW", "KeyS", "KeyA", "KeyD"
  ];
  if (!allowedKeys.includes(event.code)) {
    return;
  }

  if (event.code === "ArrowUp" || event.code === "KeyW" && state.player.vy < 0) {
    state.player.vy = 0;
  } else if (event.code === "ArrowDown" || event.code === "KeyS" && state.player.vy > 0) {
    state.player.vy = 0;
  } else if (event.code === "ArrowLeft" || event.code === "KeyA" && state.player.vx < 0) {
    state.player.vx = 0;
  } else if (event.code === "ArrowRight" || event.code === "KeyD" && state.player.vx > 0) {
    state.player.vx = 0;
  }
}

