import { newXInput, newYInput, drawingElement } from './references.js';
import { state } from './state.js';
import { renderTable } from './template.js';

export function onPixelClick(event) {
  if (!event.target.matches("td")) {
    return;
  }

  const td = event.target;
  const x = td.cellIndex;
  const y = td.parentNode.rowIndex;

  state.drawing[y][x] = "#000000";

  drawingElement.innerHTML = renderTable(state.drawing);
}

export function onStartButtonClick() {
  const x = newXInput.valueAsNumber;
  const y = newYInput.valueAsNumber;

  state.drawing = [];

  for (let row = 0; row < y; row++) {
    state.drawing[row] = [];
    for (let col = 0; col < x; col++) {
      state.drawing[row][col] = "#ffffff";
    }
  }

  drawingElement.innerHTML = renderTable(state.drawing);
}