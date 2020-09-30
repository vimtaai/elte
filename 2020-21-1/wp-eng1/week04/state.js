// State
// Set of variables (in an object)
// Functions that change those variables

import { Field } from "./state/field.js";

export const state = {
  board: [] // Matrix of fields
};

// Initalite the state for a new game
export function newGame(x, y, mines) {
  state.board = [];

  // Initalize the board with empty fields
  for (let i = 0; i < y; i++) {
    let row = [];
    for (let j = 0; j < x; j++) {
      row.push(new Field());
    }
    state.board.push(row);
  }

  // Place mines
  if (mines >= x * y) {
    return;
  }

  for (let i = 0; i < mines; i++) {
    // Generate a random coordinate where there is no mine
    let mineX;
    let mineY;

    do {
      mineX = Math.floor(Math.random() * x);
      mineY = Math.floor(Math.random() * y);
    } while (state.board[mineY][mineX].isMine);

    state.board[mineY][mineX].isMine = true;

    // Increase the neigborCount of all neighbors by 1
    for (let dx = -1; dx <= 1; dx++) {
      for (let dy = -1; dy <= 1; dy++) {
        // Check if the field exists
        if (state.board[mineY + dy] && state.board[mineY + dy][mineX + dx]) {
          state.board[mineY + dy][mineX + dx].neighborCount += 1;
        }
      }
    }
  }
}