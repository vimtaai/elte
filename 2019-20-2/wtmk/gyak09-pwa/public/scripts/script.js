const backdrop = document.querySelector("#backdrop");
const trigger = document.querySelector("#menu-toggle");
const menu = document.querySelector("#menu");

trigger.addEventListener("pointerdown", function () {
  menu.classList.toggle("open");
  backdrop.classList.toggle("visible", menu.classList.contains("open"));
});

backdrop.addEventListener("pointerdown", function () {
  menu.classList.remove("open");
  backdrop.classList.remove("visible");
});

if ("serviceWorker" in navigator) {
  const serviceWorker = "../service-worker.js";
  // feature detection
  window.addEventListener("load", async function () {
    const worker = await navigator.serviceWorker.register(serviceWorker);
    console.log("Service Worker Registered");
    console.log(worker);
  });
}
