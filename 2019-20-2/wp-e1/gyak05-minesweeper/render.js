import { TileState } from "./tile.js";
import { GameState } from "./state.js";

export function render(state) {
  return `
    <caption>
      ${renderSmiley(state.gameState)}
    </caption>
    ${state.board.map(renderRow).join("\n")}
  `;
}

function renderSmiley(state) {
  if (state === GameState.PLAYING) {
    return "😐";
  } else if (state === GameState.WON) {
    return "😎";
  } else {
    return "💀";
  }
}

function renderRow(row) {
  return `<tr>${row.map(renderTile).join("\n")}</tr>`;
}

function renderTile(tile) {
  if (tile.state === TileState.FLAG || tile.state == TileState.UNREVEALED) {
    return `
      <td>
        <button>
          ${tile.state === TileState.FLAG ? "🏴‍" : ""}
        </button>
      </td>
    `;
  } else {
    return `
      <td>
        ${tile.isMine ? "💣" : tile.minesNearby === 0 ? "" : tile.minesNearby}
      </td>
    `;
  }
}
