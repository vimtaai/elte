import { boardElement, scoreElement } from "./references.js";
import { state } from "./state.js";

export const ui = {
  updateScore() {
    scoreElement.textContent = state.currentScore;
  },
  updateMolePosition() {
    const moleCellElement = boardElement.querySelector(".mole");
    // const x = state.moleCoordinates.x;
    // const y = state.moleCoordinates.y;
    const { x, y } = state.moleCoordinates;

    moleCellElement.classList.remove("mole");
    boardElement.rows[y].cells[x].classList.add("mole");
  },
};
