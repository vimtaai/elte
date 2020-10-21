// Function that actually draws the map
export function drawWaterMap(canvas, mapData) {
  // Getting the 2d drawing context from the canvas
  const context = canvas.getContext("2d");

  // Get the size of the map
  const width = mapData[0].length;
  const height = mapData.length;

  const waterCoverageThreshold = 90;
  const maxWaterCoverage = 100;

  // Go through the matrix
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      // Find the color for the pixel
      const coverage = mapData[y][x];
      // If there is less then 10% water don't print anything
      if (coverage < waterCoverageThreshold) {
        continue;
      }

      // SCALE: 220 HUE 80% SATURATION 25-50% LIGHTNESS
      const lightness = 25 + (coverage / maxWaterCoverage * 25);
      // Set fill color
      context.fillStyle = `hsl(220, 80%, ${lightness}%)`;

      // Draw a pixel
      context.beginPath();
      context.rect(x, y, 1, 1);
      context.fill();
    }
  }
}
