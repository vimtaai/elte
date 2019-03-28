const cardWidth = 60;
const cardHeight = 80;
const cardMargin = 10;

function $(selector) {
  return document.querySelector(selector);
}

function delegate(parent, type, selector, fn) {
  function delegatedFunction(e) {
    if (e.target.matches(`${selector},${selector} *`)) {
      let target = e.target;
      while (!target.matches(selector)) {
        target = target.parentNode;
      }
      e.delegatedTarget = target;
      return fn(e);
    }
  }

  parent.addEventListener(type, delegatedFunction, false);
}

let player1;
let player2;
let currentPlayer;
let board;
let state;
let firstCard;
let secondCard;

function init() {
  const size = parseInt($("#size").value);

  player1 = {
    name: "Player 1",
    score: 0
  };
  player2 = {
    name: "Player 2",
    score: 0
  };
  currentPlayer = Math.random() < 0.5 ? player1 : player2;

  board = [];

  const maxNumber = (size * size) / 2;
  const numbers = {};
  for (let i = 1; i <= maxNumber; i++) {
    numbers[i] = 0;
  }

  for (let i = 0; i < size * size; i++) {
    let number = -1;
    do {
      let random = Math.floor(Math.random() * maxNumber + 1);
      console.log(random, numbers);
      if (numbers[random] < 2) {
        number = random;
        numbers[random] += 1;
      }
    } while (number === -1);

    board.push({
      number: number,
      x: i % size,
      y: Math.trunc(i / size),
      isRevealed: false,
      isSelected: false
    });
  }

  const boardDiv = $("#board");
  boardDiv.style.width = size * (cardWidth + cardMargin) - cardMargin + "px";
  boardDiv.style.height = size * (cardHeight + cardMargin) - cardMargin + "px";
  state = "STARTING";
  draw();

  setTimeout(function() {
    state = "NOREVEALED";
    draw();
  }, 1000);
}

$("#start").addEventListener("click", init);

function newTurn() {
  firstCard.isRevealed = false;
  secondCard.isRevealed = false;
  firstCard.isSelected = false;
  secondCard.isSelected = false;
  firstCard = undefined;
  secondCard = undefined;
  currentPlayer = currentPlayer === player1 ? player2 : player1;
  state = "NOREVEALED";

  draw();
}

function isOver() {
  return board.every(card => card.isRevealed);
}

function cardClick(event) {
  const cardIdx = event.delegatedTarget.getAttribute("data-idx");
  const card = board[cardIdx];

  if (card.isRevealed) {
    return;
  }

  if (state === "NOREVEALED") {
    firstCard = card;
    firstCard.isRevealed = true;
    firstCard.isSelected = true;
    state = "1REVEALED";
  } else if (state === "1REVEALED") {
    secondCard = card;
    secondCard.isRevealed = true;
    secondCard.isSelected = true;
    state = "2REVEALED";

    if (firstCard.number === secondCard.number) {
      currentPlayer.score++;
      firstCard.isSelected = false;
      secondCard.isSelected = false;

      if (isOver()) {
        state = "ENDED";
      } else {
        state = "NOREVEALED";
      }
    } else {
      setTimeout(newTurn, 1000);
    }
  }

  draw();
}

delegate($("#board"), "click", ".card", cardClick);

function draw() {
  $("#board").innerHTML = genBoard(board);
  $("#player1").innerHTML = genPlayer(player1);
  $("#player2").innerHTML = genPlayer(player2);
}

function genPlayer(player) {
  const isCurrentPlayer = player === currentPlayer;
  return `<span${
    isCurrentPlayer ? ` style="color: #29be8f"` : ``
  }>${player.name + " : " + player.score} pont</span>`;
}

function genBoard(board) {
  let html = "";

  if (state === "ENDED") {
    html += `<h1>${currentPlayer.name} nyert!</h1>`;
  } else {
    for (let i = 0; i < board.length; i++) {
      const card = board[i];
      let className = "card";
      if (state === "STARTING") {
        className += " starting";
      }
      if (card.isSelected) {
        className += " selected";
      } else if (card.isRevealed) {
        className += " revealed";
      }

      let style = `width: ${cardWidth}px; height: ${cardHeight};`;
      style += `top: ${card.y * (cardHeight + cardMargin)}px;`;
      style += ` left: ${card.x * (cardWidth + cardMargin)}px;`;

      html += `<div class="${className}" style="${style}" data-idx="${i}">
          ${card.isRevealed ? card.number : ""}
      </div>`;
    }
  }

  return html;
}
