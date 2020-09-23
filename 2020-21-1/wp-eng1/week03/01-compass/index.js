const arrow = document.querySelector("div");

// Event handler
function handleMouseMove(event) {
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;

  const angleInRadians = Math.atan2(centerY - event.pageY, centerX - event.pageX);
  const angleInDegrees = angleInRadians / Math.PI * 180;

  console.log(angleInDegrees);
  arrow.style.transform = `rotate(${angleInDegrees}deg)`;
}

// Bind the event (global)
window.addEventListener("mousemove", handleMouseMove);