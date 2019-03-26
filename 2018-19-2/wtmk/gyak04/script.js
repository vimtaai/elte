const video = document.querySelector("video");
const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

// Ellenőrizzük, hogy a "mediaDevices" (kamera) elérhető-e
if (!("mediaDevices" in navigator)) {
  alert("Camera API not supported");
}

// Ellenőrizzük, hogy a "geolocation" (helyzet) elérhető-e
if (!("geolocation" in navigator)) {
  alert("Location API not supported");
}

// A videónak és a vászonnak (állókép) fix méretet adunk
video.width = 320;
video.height = 240;
canvas.width = 320;
canvas.height = 240;

// Promise-ok: https://developers.google.com/web/fundamentals/primers/promises
navigator.mediaDevices
  .getUserMedia({ video: true }) // Elkérjük a kamera videóképét
  .then(function(stream) {       // Ha megvan
    video.srcObject = stream;    //
  })
  .catch(function(error) {
    console.error(error);
  });

// Ha a gombra kattintunk
document.querySelector("button").addEventListener("click", function() {
  // A videó képét a vászonra rajzoljuk
  context.drawImage(video, 0, 0, video.width, video.height);

  // Elkérem a jelenlegi helyzetet
  navigator.geolocation.getCurrentPosition(function (position) { // Ha megvan
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    // Netes szolgáltatás, ami visszaadja a szükséges adatokat róla
    // Google helyett OpenStreetMap, mert ingyenes és nem kell hozzá kulcs, így egyszerűbb
    const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`;
 
    // Hely elkérése a OpenStreetMap szervertől
    fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        const location = document.querySelector('#location');
        location.innerHTML = `${json.address.city}, ${json.address.country}`;
      })
  });
});
