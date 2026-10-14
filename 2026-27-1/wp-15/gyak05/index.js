import { BOARD_SIZE, PATH } from "./params.js";

import { onCellClick, onTimerTick } from "./events.js";
import { renderBoard } from "./render.js";
import { board, setup } from "./state.js";
import { boardElement } from "./references.js";

boardElement.addEventListener("click", onCellClick);
setInterval(onTimerTick, 1000);

setup(BOARD_SIZE, PATH);
boardElement.innerHTML = renderBoard(board);
