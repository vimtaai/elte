import { randomCoords } from './utils.js';

export let width;
export let height;
export let snake;
export let apples;
export let direction;

export function init() {
  width = 20;
  height = 20;
  snake = [randomCoords(width, height)];
  apples = [randomCoords(width, height)];
  direction = { x: 0, y: 0 };
}

export function move() {
  const head = snake[0];
  const newHead = {
    x: head.x + direction.x,
    y: head.y + direction.y
  }
  // ! add a new element to the start of an array
  snake.unshift(newHead);
  // ! remove the last element from an array
  snake.pop();
}