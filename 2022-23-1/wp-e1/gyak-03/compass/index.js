const compass = document.querySelector("#compass");

window.addEventListener("pointermove", onMouseMove);

function onMouseMove(event) {
    const mouseX = event.pageX;
    const mouseY = event.pageY;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    const distanceX = mouseX - centerX;
    const distanceY = mouseY - centerY;
    
    const angle = Math.atan2(distanceY, distanceX);
    const angleInDegrees = angle / Math.PI * 180;

    compass.style.transform = `rotate(${angleInDegrees + 90}deg)`;
}