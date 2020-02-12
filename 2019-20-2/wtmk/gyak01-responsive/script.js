const trigger = document.querySelector("#menu-toggle");

trigger.addEventListener("pointerdown", function() {
  const menu = document.querySelector("#menu");
  menu.classList.toggle("open");
});
