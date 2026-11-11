const task1 = document.querySelector('#task1');
const task2 = document.querySelector('#task2');
const task3 = document.querySelector('#task3');
const task4 = document.querySelector('#task4');

const game = [
  "XXOO",
  "O OX",
  "OOO ",
];

const solution1 = game.every((row) => row.length === game[0].length);
task1.innerHTML = solution1;
//const solution2 = game[0].split("").every((char) => char === "X" || char === "O");
const solution2 = !game[0].includes(" ");
task2.innerHTML = solution2;
const characters = game.join("").split("");
const xCount = characters.filter((char) => char === "X").length;
const oCount = characters.filter((char) => char === "O").length;
task3.innerHTML = `X / O = ${xCount} / ${oCount}`;
const solution4 = game.findIndex((row) => row.includes("XXX") || row.includes("OOO")); 
task4.innerHTML = solution4;