// Állapot

// ? lehet 1 vagy 2 attól függően, hogy melyik játékos jön
let player;
// ? 3×3-as mátrix, aminek az elemei lehet 0, 1, 2
let board;

// Kezdőállapot
function init() {
  // ! véletlenszerűen kisorsolom a kezdőjátékost
  player = Math.random() < 0.5 ? 1 : 2;
  // ! létrehozom az üres táblát
  board = [];
  for (let i = 0; i < 3; i++) {
    board.push([]);
    for (let j = 0; j < 3; j++) {
      board[i][j] = 0;
    }
  }
}