export function renderTable(drawing) {
  return `
    <table>${drawing.map(row => renderRow(row)).join("\n")}</table>
  `;
}

function renderRow(row) {
  return `<tr>${row.map(col => renderPixel(col)).join("\n")}</tr>`;
}

function renderPixel(color) {
  return `<td style="background-color: ${color}"></td>`;
}

export function renderColorHistory(colorHistory) {
  return colorHistory.map(color => renderColor(color)).join("\n");
}

function renderColor(color) {
  return `
    <div
      class="saved-color"
      data-color="${color}"
      style="background-color: ${color};"
    ></div>
  `;
}

export function renderSavedDrawings(drawing) {
  return `
    <div class="drawing-thumbnail">
      ${renderTable(drawing)}
    </div>
  `;
}