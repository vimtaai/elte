const circle = document.createElement("div");
circle.classList.add("circle");

// Eseménykezelő függvény
function handleMouseDown(event) {
    // const x = event.clientX;
    // const y = event.clientY;
    const {clientX: x, clientY: y} = event;
    // console.log(x, y);
    circle.style.top = y + "px";
    circle.style.left = x + "px";
    document.body.appendChild(circle);
}

// Globális események: window-hoz rendeljük hozzá
window.addEventListener("mousedown", handleMouseDown);

function handleMouseUp() {
    document.body.removeChild(circle);
}

window.addEventListener("mouseup", handleMouseUp);

function handleMouseMove(event) {
    const {clientX: x, clientY: y} = event;
    circle.style.top = y + "px";
    circle.style.left = x + "px";
}

window.addEventListener("mousemove", handleMouseMove);

// Lenyomott billenytyű kírása

const keyDisplay = document.createElement("div");
keyDisplay.classList.add("keydisplay");

const pressedKeys = new Set();

function handleKeyDown(event) {
    event.preventDefault();
    pressedKeys.add(event.key);
    keyDisplay.innerHTML = 
        Array.from(pressedKeys).join("+");
    document.body.appendChild(keyDisplay);
}

window.addEventListener("keydown", handleKeyDown);

function handleKeyUp(event) {
    event.preventDefault();
    pressedKeys.delete(event.key);
    keyDisplay.innerHTML = 
        Array.from(pressedKeys).join("+");
    if (pressedKeys.size === 0) {
        document.body.removeChild(keyDisplay);
    }
}

window.addEventListener("keyup", handleKeyUp);