export function delegate(parent, type, selector, fn) {
  function delegatedFunction(e) {
    const handlerElement = this;
    const sourceElement = e.target;

    const closestElement = sourceElement.closest(selector);
    if (handlerElement.contains(closestElement)) {
      const delegatedElement = closestElement;
      fn.call(delegatedElement, e);
    }
  }

  parent.addEventListener(type, delegatedFunction);
}

// ? delegate(main, "click", "button", handleButtonClick);

export function getNeighbors(board, x, y) {
  const neighbors = [];

  for (let j = -1; j <= 1; j++) {
    for (let k = -1; k <= 1; k++) {
      if (board[y + j] !== undefined && board[y + j][x + k] !== undefined && (j !== 0 || k !== 0)) {
        neighbors.push(board[y + j][x + k]);
      }
    }
  }

  return neighbors;
}

export function getCoords(tdElement) {
  const trElement = tdElement.parentNode;

  const x = tdElement.cellIndex;
  const y = trElement.rowIndex;

  return {x, y};
}





