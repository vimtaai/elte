export let board;

export function init() {
  board = [];
  for (let i = 0; i < 4; i++) {
    board.push([]);
    for (let j = 0; j < 4; j++) {
      board[i].push(0);
    }
  }

  // board = [
  //   [0, 0, 0, 0],
  //   [0, 0, 0, 0],
  //   [0, 0, 0, 0],
  //   [0, 0, 0, 0]
  // ];

  newBlock();
  newBlock();
}

export function newBlock() {
  // ! ha nincs üres hely, akkor nem csinálok semmit
  if (board.every(row => row.every(block => block !== 0))) {
    return;
  }

  // ! keresek egy üres helyet
  let x, y;
  do {
    // ? [a, b] = Math.floor(Math.random() * (b - a + 1)) + a
    x = Math.floor(Math.random() * 4);
    y = Math.floor(Math.random() * 4);
  } while(board[y][x] !== 0);

  // ! berakunk ide egy 2-est
  board[y][x] = 2;
}

export function moveLeft() {
  for (let x = 1; x < 4; x++) {
    for (let y = 0; y < 4; y++) {
      if (board[y][x] === 0) {
        continue;
      }

      let i = x;
      // ! amíg van hova tolni
      while (i > 0 && board[y][i - 1] === 0) {
        // ! 1-el eltolom
        board[y][i - 1] = board[y][i];
        board[y][i] = 0;
        i--;
      }

      // ! ha mellette ugyanolyan van
      if (i > 0 && board[y][i - 1] === board[y][i]) {
        board[y][i - 1] *= 2;
        board[y][i] = 0;
      } 
    }
  }
}

export function moveRight() {
  for (let x = 2; x >= 0; x--) {
    for (let y = 0; y < 4; y++) {
      if (board[y][x] === 0) {
        continue;
      }

      let i = x;
      // ! amíg van hova tolni
      while (i < 4 && board[y][i + 1] === 0) {
        // ! 1-el eltolom
        board[y][i + 1] = board[y][i];
        board[y][i] = 0;
        i++;
      }

      // ! ha mellette ugyanolyan van
      if (i < 4 && board[y][i + 1] === board[y][i]) {
        board[y][i + 1] *= 2;
        board[y][i] = 0;
      } 
    }
  }
}

export function moveUp() {
  for (let y = 1; y < 4; y++) {
    for (let x = 0; x < 4; x++) {
      if (board[y][x] === 0) {
        continue;
      }

      let i = y;
      // ! amíg van hova tolni
      while (i > 0 && board[i - 1][x] === 0) {
        // ! 1-el eltolom
        board[i - 1][x] = board[i][x];
        board[i][x] = 0;
        i--;
      }

      // ! ha mellette ugyanolyan van
      if (i > 0 && board[i - 1][x] === board[i][x]) {
        board[i - 1][x] *= 2;
        board[i][x] = 0;
      } 
    }
  }
}

export function moveDown() {
  for (let y = 2; y >= 0; y--) {
    for (let x = 0; x < 4; x++) {
      if (board[y][x] === 0) {
        continue;
      }

      let i = y;
      // ! amíg van hova tolni
      while (i < 3 && board[i + 1][x] === 0) {
        // ! 1-el eltolom
        board[i + 1][x] = board[i][x];
        board[i][x] = 0;
        i++;
      }

      // ! ha mellette ugyanolyan van
      if (i < 3 && board[i + 1][x] === board[i][x]) {
        board[i + 1][x] *= 2;
        board[i][x] = 0;
      } 
    }
  }
}