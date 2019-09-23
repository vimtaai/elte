const menu = document.querySelector("menu");

function handleRightClick(event) {
  // ! event: eseményobjektum
  console.log("right click...");
  // ! alapértelmezett esemény letiltása
  event.preventDefault();
  menu.style.display = "block";
  menu.style.position = "absolute";
  menu.style.top = event.pageY + "px";
  menu.style.left = event.pageX + "px";
}
window.addEventListener("contextmenu", handleRightClick);

function handleLeftClick(event) {
  // console.log(event);
  // console.log(event.target.closest("menu"));
  // ? event.target benne van-e a menu-ben
  if (event.target.closest("menu") !== menu) {
    event.preventDefault();
    menu.style.display = "none";
  }
}
window.addEventListener("click", handleLeftClick);

const aside = document.querySelector("aside");
function handleKeyDown(event) {
  // console.log(event);
  event.preventDefault();
  aside.style.display = "block";
  
  const {ctrlKey, altKey, shiftKey, metaKey} = event;
  let specialKeys = "";
  if (ctrlKey) {
    specialKeys += "Ctrl + ";
  }
  if (shiftKey) {
    specialKeys += "Shift + "
  }
  if (altKey) {
    specialKeys += "Alt + "
  }
  if (metaKey) {
    specialKeys += "Meta + "
  }

  const ignoreKeys = ["Control", "Alt", "Shift", "Meta"];
  aside.innerText = specialKeys + (ignoreKeys.includes(event.key) ? "" : event.key);
}
window.addEventListener("keydown", handleKeyDown);

function handleKeyUp() {
  aside.style.display = "none";
}
window.addEventListener("keyup", handleKeyUp);