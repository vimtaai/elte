const button = document.querySelector("button");
const speed = document.querySelector("input");

function handleButtonClick() {
  const speedValue = parseFloat(speed.value);
  const rows = document.querySelectorAll("tbody tr");

  for (const row of rows) {
    const totalSize = row.querySelector("td:nth-of-type(2)");
    const percentage = row.querySelector("td:nth-of-type(3)");

    const totalSizeValue = parseFloat(totalSize.innerText);
    const completed = parseFloat(percentage.innerText) / 100 * totalSizeValue;

    // Subtask 2.
    console.log(totalSizeValue);
    console.log(completed);

    // Subtask 3.
    const newCompleted = Math.min(completed + speedValue, totalSizeValue);
    percentage.innerText = newCompleted / totalSizeValue * 100 + "%";
  }
}

button.addEventListener("click", handleButtonClick);