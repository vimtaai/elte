import { startButton, drawingElement } from './references.js';
import { onStartButtonClick, onPixelClick } from './events.js';

startButton.addEventListener("click", onStartButtonClick);
drawingElement.addEventListener("click", onPixelClick);

