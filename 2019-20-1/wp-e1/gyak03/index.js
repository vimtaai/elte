import { getCoordinates } from "./utils.js";
import { player1, player2, ball } from './elements.js';
import { ballSpeed } from './state.js';

// ! event: eseményobjektum
function handleKeydown(event) {
  // console.log(event);
  if (event.code === "ArrowLeft") {
    // ! Balra megyek
    // let tmp = getCoordingates(player1);
    // const x = tmp.x;
    // const y = tmp.y;
    const {x} = getCoordinates(player1);
    player1.style.left = (x - 1) + "%";
  } else if (event.code === "ArrowRight") {
    // ! Jobbra megyek
    const {x} = getCoordinates(player1);
    player1.style.left = (x + 1) + "%";
  } else if (event.code === "KeyA") {
    // ! Balra megyek
    const {x} = getCoordinates(player2);
    player2.style.left = (x - 1) + "%";
  } else if (event.code === "KeyD") {
    // ! Jobbra megyek
    const {x} = getCoordinates(player2);
    player2.style.left = (x + 1) + "%";
  }
}
window.addEventListener("keydown", handleKeydown);

function handleTick() {
  const {x, y} = getCoordinates(ball);
  ball.style.left = (x + ballSpeed.x) + "%";
  ball.style.top = (y + ballSpeed.y) + "%";

  // let tmp = getCoordingates(ball);
  // const newX = tmp.x;
  // const newY = tmp.y;
  const {x: newX, y: newY} = getCoordinates(ball);
  if (newX >= 100) {
    ballSpeed.x *= -1;
    ball.style.left = "100%";
  } else if (newX <= 0) {
    ballSpeed.x *= -1;
    ball.style.left = "0%";
  }

  if (newY >= 100) {
    // ! player1-el ütközött-e?
    const {x: player1X} = getCoordinates(player1);
    if (player1X - 3 <= newX && player1X + 20 >= newX) {
      ball.style.top = "100%";
      ballSpeed.y *= -1;
    } else {
      // ! Timer leállítása
      clearInterval(timer);
      console.log("Player 2 wins");
    }
  } else if (newY <= 0) {
    // ! player2-vel ütközött-e?
    const {x: player2X} = getCoordinates(player2);
    if (player2X - 3 <= newX && player2X + 20 >= newX) {
      ball.style.top = "0%";
      ballSpeed.y *= -1;
    } else {
      // ! Timer leállítása
      clearInterval(timer);
      console.log("Player 1 wins");
    }
  }
}
// ! Indíts el egy időzítőt (100ms)
const timer = setInterval(handleTick, 100);






