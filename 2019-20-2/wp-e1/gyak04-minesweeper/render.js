import { TileState } from "./tile.js";

export function render(state) {
  return state.board.map(renderRow).join("\n");
}

function renderRow(row) {
  return `<tr>${row.map(renderTile).join("\n")}</tr>`;
} 

function renderTile(tile) {
  return `
    <td>
      ${
        tile.state === TileState.FLAG 
        ? "🏴‍☠️" 
        : ""
      }
      ${
        tile.state === TileState.REVEALED 
        ? tile.isMine ? "💣" : tile.minesNearby 
        : ""
      }
      ${
        tile.state === TileState.UNREVEALED 
        ? "<button></button>" 
        : ""
      }
    </td>
  `;
}