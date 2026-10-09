import { state } from "./state.js";
import { startTimer } from "./timer.js";
import { ui } from "./ui.js";
import { generateNewCoordinates } from "./utils.js";

export function onTimerTick() {
  const { x, y } = state.moleCoordinates;
  const { x: newX, y: newY } = generateNewCoordinates(x, y);
  state.moveMole(newX, newY);
  ui.updateMolePosition();
}

export function onCellClick(event) {
  if (event.target.closest(".mole")) {
    onMoleClick(event);
  } else if (event.target.closest("td:not(.mole)")) {
    onEmptyCellClick();
  }
}

function onMoleClick() {
  state.gainScore();
  const { x, y } = state.moleCoordinates;
  const { x: newX, y: newY } = generateNewCoordinates(x, y);
  state.moveMole(newX, newY);
  ui.updateScore();
  ui.updateMolePosition();
  startTimer(onTimerTick);
}

function onEmptyCellClick() {
  if (state.currentScore > 0) {
    state.loseScore();
  }

  ui.updateScore();
}
