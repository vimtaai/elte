const outputElement = document.querySelector("#pressed-key-display");

window.addEventListener("keydown", onKeypress);

function onKeypress(event) {
  // console.log("Key pressed", event);
  event.preventDefault();

  const modifierKeys = {
    shift: event.shiftKey ? "Shift + " : "",
    alt: event.altKey ? "Alt + " : "",
    control: event.ctrlKey ? "Control + " : ""
  };

  outputElement.textContent = `
    ${modifierKeys.shift}
    ${modifierKeys.alt}
    ${modifierKeys.control}
    ${event.key}
  `;
}
