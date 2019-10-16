const root = document.querySelector("#board");
const colors = {
  2: "purple", 
  4: "blue",
  8: "cyan",
  16: "lime",
  32: "yellow",
  64: "gold",
  128: "orange",
  256: "red",
  512: "maroon",
  1024: "gray",
  2048: "black"
}

export function render(board) {
  // ! kitörlünk mindent ami eddig volt
  root.innerHTML = "";

  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (board[i][j] !== 0) {
        // ! generálunk egy új div-et
        const block = document.createElement("div");
        // ! belerakjuk a megfelelő számértéket
        block.innerText = board[i][j];
        // ! helyére rakom az elemet
        block.style.left = (j * 50) + "px";
        block.style.top = (i * 50) + "px";
        // ! átszínezem
        block.style.background = colors[board[i][j]];
        // ! hozzáfűzzük a HTML oldalhoz
        root.append(block);
      }
    }
  }
}