import { newXInput, newYInput, drawingElement, colorInput, colorHistoryElement, savedDrawingsElement } from './references.js';
import { state } from './state.js';
import { renderColorHistory, renderSavedDrawings, renderTable } from './template.js';

export function onPixelClick(event) {
  if (!event.target.matches("td")) {
    return;
  }

  const color = colorInput.value;
  const td = event.target;
  const x = td.cellIndex;
  const y = td.parentNode.rowIndex;

  state.fillCellWithColor(x, y, color);

  drawingElement.innerHTML = renderTable(state.drawing);
}

export function onStartButtonClick() {
  const x = newXInput.valueAsNumber;
  const y = newYInput.valueAsNumber;

  state.initDrawing(x, y);

  drawingElement.innerHTML = renderTable(state.drawing);
}

export function onColorChange() {
  const color = colorInput.value;

  state.storeColorInHistory(color);

  colorHistoryElement.innerHTML = renderColorHistory(state.colorHistory);
}

export function onColorClick(event) {
  // if (!event.target.classList.contains("saved-color")) {
  if (!event.target.matches(".saved-color")) {
    return;
  }

  const savedColorElement = event.target;
  const color = savedColorElement.dataset.color;

  console.log(color);

  colorInput.value = color;
}

export function onDrawingThumbnailClick(event) {
  if (!event.target.closest(".drawing-thumbnail")) {
    return;
  }

  const dataToSave = JSON.stringify(state.drawing);
  localStorage.setItem("saved-drawing", dataToSave);

  console.log(dataToSave);

  const dataToRender = JSON.parse(localStorage.getItem("saved-drawing"));
  savedDrawingsElement.innerHTML = renderSavedDrawings(dataToRender);
}