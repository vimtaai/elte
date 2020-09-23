function handleDetailsClick(event) {
  if (!event.target.matches(".details .summary")) {
    return;
  }

  const paragraph = event.target.nextElementSibling;
  // if (getComputedStyle(paragraph).display === "none") {
  if (paragraph.style.display === "block") {
    paragraph.style.display = "none";
  } else {
    paragraph.style.display = "block";
  }
}

window.addEventListener("click", handleDetailsClick);