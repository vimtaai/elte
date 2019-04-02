const drawer = document.querySelector("#drawer");
M.Sidenav.init(drawer);

const captureButton = document.querySelector("#capture");
const loction = document.querySelector("#location");
const video = document.querySelector("video");
const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

const displayModes = {
  CAPTURING: {
    video: true,
    canvas: false,
    "#capture": true,
    "#location": false
  },
  EDITING: {
    video: false,
    canvas: true,
    "#capture": false,
    "#location": true
  }
};

function setDisplayMode(mode) {
  if (!displayModes.hasOwnProperty(mode)) {
    return;
  }

  const displayMode = displayModes[mode];

  for (const elemName of Object.keys(displayMode)) {
    const elem = document.querySelector(elemName);
    elem.style.display = displayMode[elemName] ? "block" : "none";
  }
}

// Ellenőrizzük, hogy a "mediaDevices" (kamera) elérhető-e
if (!("mediaDevices" in navigator)) {
  alert("Camera API not supported");
}

// Ellenőrizzük, hogy a "geolocation" (helyzet) elérhető-e
if (!("geolocation" in navigator)) {
  alert("Location API not supported");
}

// Promise-ok: https://developers.google.com/web/fundamentals/primers/promises
navigator.mediaDevices
  .getUserMedia({ video: true }) // Elkérjük a kamera videóképét
  .then(function(stream) {
    // Ha megvan
    video.srcObject = stream; //
  })
  .catch(function(error) {
    console.error(error);
  });

// Ha a gombra kattintunk
document.querySelector("#capture").addEventListener("click", function() {
  // A videó képét a vászonra rajzoljuk
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  context.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);

  setDisplayMode("EDITING");

  // Elkérem a jelenlegi helyzetet
  navigator.geolocation.getCurrentPosition(function(position) {
    // Ha megvan
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    // Netes szolgáltatás, ami visszaadja a szükséges adatokat róla
    // Google helyett OpenStreetMap, mert ingyenes és nem kell hozzá kulcs, így egyszerűbb
    const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`;

    // Hely elkérése a OpenStreetMap szervertől
    fetch(url)
      .then(function(response) {
        return response.json();
      })
      .then(function(json) {
        const location = document.querySelector("#location");
        location.innerHTML = `${json.address.city}, ${json.address.country}`;
      });
  });
});
