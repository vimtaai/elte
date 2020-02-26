const circle = document.createElement("div");
circle.classList.add("circle");

function handleMouseDown(event) {
    // const x = event.clientX;
    // const y = event.clientY;
    const { clientX: x, clientY: y } = event;

    circle.style.top = y + "px";
    circle.style.left = x + "px";

    document.body.appendChild(circle);
}

window.addEventListener("mousedown", handleMouseDown);

function handleMouseUp() {
    document.body.removeChild(circle);
}

window.addEventListener("mouseup", handleMouseUp);

function handleMouseMove(event) {
    const { clientX: x, clientY: y } = event;

    circle.style.top = y + "px";
    circle.style.left = x + "px";
}

window.addEventListener("mousemove", handleMouseMove);

// ----

const keyDisplay = document.createElement("div");
keyDisplay.classList.add("keydisplay");

const pressedKeys = new Set();

function handleKeyDown(event) {
    event.preventDefault();
    pressedKeys.add(event.key.toUpperCase());

    keyDisplay.innerHTML = Array.from(pressedKeys).join("+");
    
    document.body.appendChild(keyDisplay);
}

window.addEventListener("keydown", handleKeyDown);

function handleKeyUp(event) {
    pressedKeys.delete(event.key.toUpperCase());
    
    keyDisplay.innerHTML = Array.from(pressedKeys).join("+");

    if (pressedKeys.size === 0 && document.body.contains(keyDisplay)) {
        document.body.removeChild(keyDisplay);
    }
}

window.addEventListener("keyup", handleKeyUp);