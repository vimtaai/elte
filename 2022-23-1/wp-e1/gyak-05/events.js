import { drawingElement, heightInput, widthInput } from "./references.js";
import { state } from "./state.js";
import { renderDrawing } from "./template.js";

export function onStartClick() {
  const width = widthInput.valueAsNumber;
  const height = heightInput.valueAsNumber;

  state.initDrawing(width, height);

  drawingElement.innerHTML = renderDrawing(state.drawing);
}
