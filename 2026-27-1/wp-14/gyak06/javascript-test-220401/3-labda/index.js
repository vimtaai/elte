const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

// ============= Előadásból kimásolva =================

let lastFrameTime = performance.now();

function next(currentTime = performance.now()) {
  const dt = (currentTime - lastFrameTime) / 1000; // seconds
  lastFrameTime = currentTime;

  update(dt); // Update current state
  render(); // Rerender the frame

  requestAnimationFrame(next);
}

function update(dt) {
  
}

function render() {
  
}

next(); // Start the loop

