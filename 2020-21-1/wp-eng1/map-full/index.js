// Import a function from another file
import { drawElevationMap } from "./draw-map.js";
import { drawWaterMap } from "./draw-water.js";
import { getAllElevationData, getAllWaterData, getElevationData, getWaterData } from "./get-data.js";

// Accessing the canvas element
const canvas = document.querySelector("canvas");

// // Start to draw a new *path*
// context.beginPath();
// // Change the fill color
// context.fillStyle = "rgb(255, 128, 0)";
// context.strokeStyle = "hsl(200, 100%, 50%)";
// context.lineWidth = 5;
// // Define basic shapes (rectangles, arc, ellipses, line, curves)
// context.rect(100, 50, 30, 50);
// // Filling the shape with a solid color
// context.fill();
// // Drawing the outline of the shape with a color
// context.stroke();

const button = document.querySelector("button");
const allButton = document.querySelector("#all");
const lat = document.querySelector("#lat");
const long = document.querySelector("#long");
const range = document.querySelector("#range");

// Attach an event handler to the button
async function handleButtonClick() {
  const latValue = lat.value;
  const longValue = long.value;
  const rangeValue = range.value;

  // We get the elevation data
  const mapData = await getElevationData(latValue, longValue, rangeValue);
  // We get the water data
  const waterData = await getWaterData(latValue, longValue, rangeValue);
  // And draw the map
  drawElevationMap(canvas, mapData);
  drawWaterMap(canvas, waterData);
}
button.addEventListener("click", handleButtonClick);

async function handleAllButtonClick() {
  // We get the elevation data
  const mapData = await getAllElevationData();
  // We get the water data
  const waterData = await getAllWaterData();
  // And draw the map
  drawElevationMap(canvas, mapData);
  drawWaterMap(canvas, waterData);
}
allButton.addEventListener("click", handleAllButtonClick);