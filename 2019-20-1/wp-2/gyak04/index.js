import { AppState } from './state.js';
import { render } from './render.js';
import { delegate } from './utils.js';

const state = new AppState(10, 10, 20);

const main = document.querySelector("main");
render(main, state);

function handleLeftClick() {
  console.log(this);
  const td = this.parentNode;
  const tr = td.parentNode;

  const x = td.cellIndex;
  const y = tr.rowIndex;
  // console.log(x, y);

  const field = state.board[y][x];
  field.isRevealed = true;
  render(main, state);
}
delegate(main, "click", "button", handleLeftClick);


// ! Globális névtérbe injenktálás
window.state = state;