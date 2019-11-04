const div = document.querySelector("div");

function handleClick(event) {
  const x = event.pageX;
  const y = event.pageY;

  const w = window.innerWidth;
  const h = window.innerHeight;

  div.style.background = "red";
  div.style.position = "absolute";
  div.style.width = w / 2 + "px";
  div.style.height = h / 2 + "px";

  div.style.left = (x > w / 2 ? w / 2 : 0) + "px";
  div.style.top = (y > h / 2 ? h / 2 : 0) + "px";
}
window.addEventListener("click", handleClick);
