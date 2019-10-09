import { randomCoords } from './utils.js';

// ! enum-like object
export const Status = {
  PLAYING: 1,
  LOSE: 2
};

export class State {
  constructor() {
    this.width = 20;
    this.height = 20;
    this.snake = [randomCoords(this.width, this.height)];
    this.apples = [randomCoords(this.width, this.height)];
    this.direction = { x: 0, y: 0 };
    this.status = Status.PLAYING;
  }

  move() {
    const head = this.snake[0];
    const newHead = {
      x: (head.x + this.direction.x + this.width) % this.width,
      y: (head.y + this.direction.y + this.height) % this.height
    }
    // ! add a new element to the start of an array
    this.snake.unshift(newHead);
  
    // ! check if I ate an apple (there is an apple here)
    const apple = this.apples.find(apple => 
      apple.x === newHead.x && apple.y === newHead.y
    );
    // ! if there is an apple
    if (apple === undefined) {
      // ! remove the last element from the snake (tail)
      this.snake.pop();
    } else {
      // ! remove the apple
      const indexOfAppleToRemove = this.apples.indexOf(apple);
      // ! remove 1 element from index indexOfAppleToRemove
      this.apples.splice(indexOfAppleToRemove, 1);
      // ! create a new apple
      this.apples.push(randomCoords(this.width, this.height));
    }
  
    const tail = this.snake.slice(1).find(snakePart => 
      snakePart.x === newHead.x && snakePart.y === newHead.y
    );
    // ! if I bite my own tail
    if (tail !== undefined) {
      // ! I lose the game
      this.status = Status.LOSE;
    }
  }
  
  // ! this just changes the values stored in the reference
  changeDirection({ x, y }) {
    // ! if I would just turn back
    /**
     *  0, 0  -> allow everything
     *  1, 0  -> disallow -1, 0 
     *  0, 1  -> disallow  0,-1
     * -1, 0  -> disallow  1, 0
     *  0,-1  -> disallow  0, 1
     */
  
    if (x === -this.direction.x && y === -this.direction.y) {
      // ! don't do anything
      return;
    }
  
    this.direction.x = x;
    this.direction.y = y;
  }
}

// ! this would overwrite the reference
// export function changeDirection(newDirection) {
//   direction = newDirection;
// }
