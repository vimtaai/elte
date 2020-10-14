// State
// Set of variables (in an object)
// Functions that change those variables

import { Field } from "./state/field.js";

// Enum-like data structure
// enum Stage { NOT_STARTED, PLAYING, VICTORY, DEFEAT };
export const Stage = {
  NOT_STARTED: 1,
  PLAYING: 2,
  VICTORY: 4,
  DEFEAT: 8
};

export const state = {
  stage: Stage.NOT_STARTED,
  board: [] // Matrix of fields
};

// Initalite the state for a new game
export function newGame(x, y, mines) {
  state.stage = Stage.PLAYING;
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

// Reveal a single field
export function revealField(x, y) {
  // If it's flagged, SKIP
  if (state.board[y][x].isFlagged) {
    return;
  }

  state.board[y][x].isRevealed = true;

  if (state.board[y][x].isMine) {
    state.board[y][x].isExploded = true;
  }

  // If it's not empty, SKIP
  if (state.board[y][x].neighborCount !== 0) {
    return;
  }
  
  // Reveal all its neighbors
  for (let dx = -1; dx <= 1; dx++) {
    for (let dy = -1; dy <= 1; dy++) {
      // If it doesn't exist, SKIP
      if (!state.board[y + dy] || !state.board[y + dy][x + dx]) {
        continue;
      }

      // Check if the field is not revealed yet
      if (!state.board[y + dy][x + dx].isRevealed) {
        // Recursively reveal the field
        revealField(x + dx, y + dy);
      }
    }
  }
}

export function toggleFlag(x, y) {
  state.board[y][x].isFlagged = !state.board[y][x].isFlagged;
}

export function checkForEndOfGame() {
  if (checkForDefeat()) {
    state.stage = Stage.DEFEAT;
    revealBoard();
  } else if (checkForVictory()) {
    state.stage = Stage.VICTORY;
    revealBoard();
  }
}

function checkForVictory() {
  return state.board.every(row => row.every(field => (field.isRevealed && !field.isMine) || (!field.isRevealed && field.isMine)));
}

function checkForDefeat() {
  return state.board.some(row => row.some(field => field.isMine && field.isRevealed));
}

function revealBoard() {
  state.board.forEach(row => row.forEach(field => { field.isRevealed = true }));
}