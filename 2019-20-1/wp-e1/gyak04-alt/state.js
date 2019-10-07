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

export class State {
  root = null;
  board = [];
  width = 4;
  height = 4;

  constructor(root) {
    this.root = root;
    this.board = [];

    this.newBlock();
    this.newBlock();
  }

  newBlock() {
    // ! ha nincs üres hely, akkor nem csinálok semmit
    if (this.board.length === this.width * this.height) {
      return;
    }

    // ! keresek egy üres helyet
    let x, y;
    do {
      x = Math.floor(Math.random() * 4);
      y = Math.floor(Math.random() * 4);
    } while (this.findBlock(x, y));

    // ! berakunk ide egy 2-est
    const block = document.createElement("div");
    this.board.push(block);
    block.innerText = 2;
    block.dataset.x = x;
    block.dataset.y = y;
    block.style.opacity = 0;
    this.updateBlock(block);
    this.root.append(block);
    setTimeout(function () {
      block.style.opacity = 1
    }, 10);
  }

  deleteBlock(block) {
    this.root.removeChild(block);
    this.board.splice(this.board.indexOf(block), 1);
  }

  findBlock(x, y) {
    return this.board.find(block =>
      parseInt(block.dataset.x) === x && parseInt(block.dataset.y) === y
    );
  }

  updateBlock(block) {
    block.style.left = (block.dataset.x * 50) + "px";
    block.style.top = (block.dataset.y * 50) + "px";
    block.style.background = colors[block.innerText];
  }

  moveLeft() {
    for (let x = 1; x < this.width; x++) {
      for (let y = 0; y < this.width; y++) {
        const block = this.findBlock(x, y);

        if (block === undefined) {
          continue;
        }

        // ! amíg van hova tolni
        while (block.dataset.x > 0 && !this.findBlock(block.dataset.x - 1, y)) {
          // ! 1-el eltolom
          block.dataset.x--;
          this.updateBlock(block);
        }

        // ! ha mellette ugyanolyan van
        const neighborBlock = this.findBlock(block.dataset.x - 1, y);

        if (neighborBlock && neighborBlock.innerText === block.innerText) {
          neighborBlock.innerText *= 2;
          this.deleteBlock(block);
          this.updateBlock(neighborBlock);
        }
      }
    }
  }

  moveRight() {
    for (let x = this.width - 2; x >= 0; x--) {
      for (let y = 0; y < this.height; y++) {
        const block = this.findBlock(x, y);

        if (block === undefined) {
          continue;
        }

        // ! amíg van hova tolni
        while (block.dataset.x < this.width - 1 && !this.findBlock(+block.dataset.x + 1, y)) {
          // ! 1-el eltolom
          block.dataset.x++;
        }

        this.updateBlock(block);

        // ! ha mellette ugyanolyan van
        const neighborBlock = this.findBlock(+block.dataset.x + 1, y);

        if (neighborBlock && neighborBlock.innerText === block.innerText) {
          neighborBlock.innerText *= 2;
          this.deleteBlock(block);
          this.updateBlock(neighborBlock);
        }
      }
    }
  }

  moveUp() {
    for (let y = 1; y < this.height; y++) {
      for (let x = 0; x < this.width; x++) {
        const block = this.findBlock(x, y);

        if (block === undefined) {
          continue;
        }

        // ! amíg van hova tolni
        while (block.dataset.y > 0 && !this.findBlock(x, block.dataset.y - 1)) {
          // ! 1-el eltolom
          block.dataset.y--;
        }

        this.updateBlock(block);

        // ! ha mellette ugyanolyan van
        const neighborBlock = this.findBlock(x, block.dataset.y - 1);

        if (neighborBlock && neighborBlock.innerText === block.innerText) {
          neighborBlock.innerText *= 2;
          this.deleteBlock(block);
          this.updateBlock(neighborBlock);
        }
      }
    }
  }

  moveDown() {
    for (let y = this.height - 2; y >= 0; y--) {
      for (let x = 0; x < this.width; x++) {
        const block = this.findBlock(x, y);

        if (block === undefined) {
          continue;
        }

        // ! amíg van hova tolni
        while (block.dataset.y < this.height - 1 && !this.findBlock(x, +block.dataset.y + 1)) {
          // ! 1-el eltolom
          block.dataset.y++;
        }

        this.updateBlock(block);

        // ! ha mellette ugyanolyan van
        const neighborBlock = this.findBlock(x, +block.dataset.y + 1);

        if (neighborBlock && neighborBlock.innerText === block.innerText) {
          neighborBlock.innerText *= 2;
          this.deleteBlock(block);
          this.updateBlock(neighborBlock);
        }
      }
    }
  }
}