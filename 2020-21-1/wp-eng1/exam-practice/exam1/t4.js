const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");
canvas.width = 500;
canvas.height = 500;

const bigMacPlus = document.querySelector("#bigmacplus");
const bigMacMinus = document.querySelector("#bigmacminus");
const spotifyPlus = document.querySelector("#spotifyplus");
const spotifyMinus = document.querySelector("#spotifyminus");


// Subtask 1
let bigMacPrice = [250];
function handleBigMacPlus() {
  bigMacPrice.push(bigMacPrice[bigMacPrice.length - 1] + 10);
  draw();
}
bigMacPlus.addEventListener("click", handleBigMacPlus);

function handleBigMacMinus() {
  bigMacPrice.push(bigMacPrice[bigMacPrice.length - 1] - 10);
  draw();
}
bigMacMinus.addEventListener("click", handleBigMacMinus);

// Subtask 2
let spotifyPrice = [300];
function handleSpotifyPlus() {
  spotifyPrice.push(spotifyPrice[spotifyPrice.length - 1] + 10);
  draw();
}
spotifyPlus.addEventListener("click", handleSpotifyPlus);

function handleSpotifyMinus() {
  spotifyPrice.push(spotifyPrice[spotifyPrice.length - 1] - 10);
  draw();
}
spotifyMinus.addEventListener("click", handleSpotifyMinus);

function draw() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.textAlign = "center";

  // Subtask 1
  context.beginPath();
  context.strokeStyle = "red";
  context.fillStyle = "red";
  context.moveTo(0, canvas.height - bigMacPrice[0]);
  for (let i = 1; i < bigMacPrice.length; i++) {
    context.lineTo(i * 10, canvas.height - bigMacPrice[i]);
    // Subtask 3
    if (i >= 2 && bigMacPrice[i] - bigMacPrice[i - 1] !== bigMacPrice[i - 1] - bigMacPrice[i - 2]) {
      context.fillText(bigMacPrice[i], i * 10, canvas.height - bigMacPrice[i] - 10);
    }
  }
  context.stroke();

  // Subtask 2
  context.beginPath();
  context.strokeStyle = "green";
  context.fillStyle = "green";
  context.moveTo(0, canvas.height - spotifyPrice[0]);
  for (let i = 1; i < spotifyPrice.length; i++) {
    context.lineTo(i * 10, canvas.height - spotifyPrice[i]);
    // Subtask 3
    if (i >= 2 && spotifyPrice[i] - spotifyPrice[i - 1] !== spotifyPrice[i - 1] - spotifyPrice[i - 2]) {
      context.fillText(spotifyPrice[i], i * 10, canvas.height - spotifyPrice[i] - 10);
    }
  }
  context.stroke();
}