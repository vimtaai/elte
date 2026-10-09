import { onCellClick, onTimerTick } from "./events.js";
import { boardElement } from "./references.js";
import { startTimer } from "./timer.js";

boardElement.addEventListener("click", onCellClick);
startTimer(onTimerTick);
