export function renderDrawing(drawing) {
  return `
    <table>${drawing.map(renderRow).join("\n")}</table>
  `;
}

function renderRow(row) {
  return `
    <tr>${row.map(renderCell).join("\n")}</tr>
  `;
}

function renderCell(cell) {
  return `
    <td style="background-color: ${cell}"></td>
  `;
}

export function renderColorHistory(colorHistory) {
  return colorHistory.map(renderSavedColor).join("\n");
}

function renderSavedColor(color) {
  return `
    <div
      class="saved-color"
      style="background-color: ${color}"
    ></div>
  `;
}

export function renderSavedDrawings(savedDrawings) {
  return savedDrawings.map(renderSavedDrawing).join("\n");
}

function renderSavedDrawing(drawing) {
  return `
    <div class="saved-drawing">
      ${renderDrawing(drawing)}
    </div>
  `;
}
