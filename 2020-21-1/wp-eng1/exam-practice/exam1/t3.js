const input = document.querySelector("input");

function handleKeyDown(event) {
  // Subtask 1.
  if (event.code === "Backspace" || event.code === "Delete") {
    event.preventDefault();
    return;
  }

  // Subtask 2.
  const allowedChars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
  if (!allowedChars.includes(event.key)) {
    event.preventDefault();
    return;
  }

  // Subtask 3.
  const ipAddress = input.value;
  const parts = ipAddress.split(".");
  if (parts.length < 4) {
    input.classList.remove("correct");
    input.classList.add("incorrect");
    return;
  }

  for (const part of parts) {
    if (parseInt(part) < 0 || parseInt(part) > 255) {
      input.classList.remove("correct");
      input.classList.add("incorrect");
    } else {
      input.classList.add("correct");
      input.classList.remove("incorrect");
    }
  }
}
input.addEventListener("keydown", handleKeyDown);