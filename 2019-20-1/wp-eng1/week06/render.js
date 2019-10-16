export function render(state, context) {
  // ! clearing the canvas
  context.clearRect(
    0, 0, context.canvas.width, context.canvas.height
  );

  // ! render all the planets
  for (const planet of state.planets) {
    planet.render(context);
  }
}