// Ha támogatja a böngésző a serviceworkereket
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/service-worker.js")
    .then(function() {
      console.log("Service worker registered");
    })
    .catch(function() {
      console.error("Could not register service worker");
    });
} else {
  console.error("Service workers not supported");
}

let deferredPrompt;
window.addEventListener("beforeinstallprompt", function(e) {
  e.preventDefault();
  deferredPrompt = e;
});

document.querySelector("button").addEventListener("click", function() {
  deferredPrompt.prompt();
  deferredPrompt.userChoice.then(function(choiceResult) {
    if (choiceResult.outcome === "accepted") {
      console.log("User accepted the A2HS prompt");
    } else {
      console.log("User dismissed the A2HS prompt");
    }
    deferredPrompt = null;
  });
});
