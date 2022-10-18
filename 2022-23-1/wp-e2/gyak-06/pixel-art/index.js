import { startButton, drawingElement, colorInput, colorHistoryElement, savedDrawingsElement } from './references.js';
import { onStartButtonClick, onPixelClick, onColorChange, onColorClick, onDrawingThumbnailClick } from './events.js';

startButton.addEventListener("click", onStartButtonClick);
drawingElement.addEventListener("click", onPixelClick);
colorInput.addEventListener("change", onColorChange);
colorHistoryElement.addEventListener("click", onColorClick);
savedDrawingsElement.addEventListener("click", onDrawingThumbnailClick);