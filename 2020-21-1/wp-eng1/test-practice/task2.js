const div = document.querySelector("div");

function handleWindowClick(event) {
  const mouseX = event.pageX;
  const mouseY = event.pageY;

  div.style.width = window.innerWidth / 2 + "px";
  div.style.height = window.innerHeight / 2 + "px";

  if (mouseX < window.innerWidth / 2) {
    div.style.left = "0";
  } else {
    div.style.left = window.innerWidth / 2 + "px";
  }

  if (mouseY < window.innerHeight / 2) {
    div.style.top = "0";
  } else {
    div.style.top = window.innerHeight / 2 + "px";
  }
}

window.addEventListener("click", handleWindowClick);