// Function that actually draws the map
export function drawElevationMap(canvas, mapData) {
  // Getting the 2d drawing context from the canvas
  const context = canvas.getContext("2d");

  // Get the size of the map
  const width = mapData[0].length;
  const height = mapData.length;

  // Resize the canvas
  canvas.width = width;
  canvas.height = height;

  // Find the highest number in the matrix and use that
  const maxLowElevation = 500; 
  const maxHighElevation = 3000; 

  // Go through the matrix
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      // Find the color for the pixel
      const elevation = mapData[y][x];

      // If it is below 1000m change the color
      if (elevation < maxLowElevation) {
        // SCALE: 120-20 HUE 80% SATURATION 50% LIGHTNESS
        const color = 120 - (elevation / maxLowElevation * 100);
        // Set fill color
        context.fillStyle = `hsl(${color}, 80%, 50%)`;

      // If it is above 1000m the color is brown, change the lightness
      } else {
        const lightness = 50 - (elevation - maxLowElevation) / maxHighElevation * 50;
        context.fillStyle = `hsl(20, 80%, ${lightness}%)`;
      }

      // Draw a pixel
      context.beginPath();
      context.rect(x, y, 1, 1);
      context.fill();
    }
  }
}
