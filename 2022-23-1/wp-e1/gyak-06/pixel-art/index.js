import {
  onColorPickerChange,
  onDrawingCellClick,
  onSaveDrawingButtonClick,
  onStartClick,
  onWindowLoad,
} from "./events.js";
import {
  colorPicker,
  drawingElement,
  saveDrawingButton,
  startButton,
} from "./references.js";

startButton.addEventListener("click", onStartClick);
drawingElement.addEventListener("click", onDrawingCellClick);
colorPicker.addEventListener("change", onColorPickerChange);
saveDrawingButton.addEventListener("click", onSaveDrawingButtonClick);
window.addEventListener("load", onWindowLoad);
