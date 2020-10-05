// Új labda
function handleSpacePress(event) {
  // Előfeltétel ellenőrzése
  if (event.code !== "Space") {
    return;
  }

  let x = randomBetween(0, canvas.width);
  let y = randomBetween(0, canvas.height);
  let vx = randomBetween(100, 300);
  let vy = randomBetween(100, 300);
  let color = `hsl(0, ${randomBetween(50, 100)}%, ${randomBetween(25, 75)}%)`;

  balls.push(new Ball(x, y, vx, vy, color));
}

addEventListener("keypress", handleSpacePress);

// Játékosok mozgatása
function handlePlayerMove(event) {
  console.log(event);
  if (!["KeyA", "KeyD", "Numpad4", "Numpad6"].includes(event.code)) {
    return;
  }

  if (event.code === "KeyA") {
    player1.vx = -player1.speed;
  } else if (event.code === "KeyD") {
    player1.vx = player1.speed;
  } else if (event.code === "Numpad4") {
    player2.vx = -player2.speed;
  } else if (event.code === "Numpad6") {
    player2.vx = player2.speed;
  }
}

addEventListener("keydown", handlePlayerMove);

// Játékosok megállítása
function handlePlayerStop(event) {
  console.log(event);
  if (!["KeyA", "KeyD", "Numpad4", "Numpad6"].includes(event.code)) {
    return;
  }

  if (event.code === "KeyA" || event.code === "KeyD") {
    player1.vx = 0;
  } else if (event.code === "Numpad4" || event.code === "Numpad6") {
    player2.vx = 0;
  }
}

addEventListener("keyup", handlePlayerStop);
