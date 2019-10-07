import { AppState, Status } from './state.js';
import { render } from './render.js';
import { delegate, getNeighbors, getCoords } from './utils.js';

const state = new AppState(10, 10, 10);

const main = document.querySelector("main");
render(main, state);

function handleLeftClick() {
  // console.log(this);
  if (state.status !== Status.PLAYING) {
    return;
  }

  const { x, y } = getCoords(this);
  // console.log(x, y);

  // ! Festőalgoritmus
  state.reveal(x, y);

  render(main, state);
}
delegate(main, "click", "td", handleLeftClick);

function handleRightClick(event) {
  event.preventDefault();
  if (state.status !== Status.PLAYING) {
    return;
  }

  const { x, y } = getCoords(this);

  if (!state.board[y][x].isRevealed) {
    state.board[y][x].isFlagged = !state.board[y][x].isFlagged;
  }
  render(main, state);
}
delegate(main, "contextmenu", "td", handleRightClick);

function handleDoubleClick(event) {
  event.preventDefault();

  if (event.buttons !== 3) {
    return;
  }

  const { x, y } = getCoords(this);

  // ! Csak akkor fut le, ha duplakattintás
  const neighbors = getNeighbors(state.board, x, y);

  const flagCount = neighbors.filter(n => n.isFlagged).length;

  if (flagCount === state.board[y][x].neighborCount) {
    for (const neighbor of neighbors) {
      state.reveal(neighbor.x, neighbor.y);
    }
  }

  render(main, state);
}
delegate(main, "mousedown", "td", handleDoubleClick);

// ! Globális névtérbe injenktálás
window.state = state;