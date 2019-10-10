import { createActor, updateActor } from "../actor.js";

export function createPlayer(width, height) {
  const player = createActor(width, height);
  player.dataset.type = "player";
  player.classList.add("player");
  updatePlayer(player);
  return player;
}

export function updatePlayer(player) {
  updateActor(player);
  player.innerText = 
    player.dataset.dead ? "💀" : 
    player.dataset.win ? "😁" : 
    "🙂";
}
