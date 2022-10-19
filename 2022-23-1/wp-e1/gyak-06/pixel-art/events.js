import {
  colorHistoryElement,
  colorPicker,
  drawingElement,
  heightInput,
  savedDrawingsList,
  widthInput,
} from "./references.js";
import { state } from "./state.js";
import {
  renderColorHistory,
  renderDrawing,
  renderSavedDrawings,
} from "./template.js";

export function onStartClick() {
  const width = widthInput.valueAsNumber;
  const height = heightInput.valueAsNumber;

  state.initDrawing(width, height);

  drawingElement.innerHTML = renderDrawing(state.drawing);
}

export function onDrawingCellClick(event) {
  if (!event.target.matches("td")) {
    return;
  }

  const cell = event.target;
  const x = cell.cellIndex;
  const y = cell.parentNode.rowIndex;
  const color = colorPicker.value;

  console.log({ x, y });

  state.changeCellColor(x, y, color);

  drawingElement.innerHTML = renderDrawing(state.drawing);
}

export function onColorPickerChange() {
  const color = colorPicker.value;

  state.addColorToColorHistory(color);

  colorHistoryElement.innerHTML = renderColorHistory(state.colorHistory);
}

export function onSaveDrawingButtonClick() {
  state.saveDrawing();

  const drawingsAsJson = JSON.stringify(state.savedDrawings);
  localStorage.setItem("saved-drawing", drawingsAsJson);

  savedDrawingsList.innerHTML = renderSavedDrawings(state.savedDrawings);
}

export function onWindowLoad() {
  const dataInLocalStorage = localStorage.getItem("saved-drawing");
  const savedDrawings = dataInLocalStorage
    ? JSON.parse(dataInLocalStorage)
    : [];

  state.loadDrawings(savedDrawings);

  savedDrawingsList.innerHTML = renderSavedDrawings(state.savedDrawings);
}
