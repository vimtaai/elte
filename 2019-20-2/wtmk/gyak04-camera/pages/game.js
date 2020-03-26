export async function load() {
  const camera = document.querySelector("#camera");
  const image = document.querySelector("#image");
  const button = document.querySelector("#capture");

  image.width = 640;
  image.height = 480;

  button.addEventListener("click", function() {
    image.style.display = "block";
    camera.style.display = "none";
    const context = image.getContext("2d");
    context.filter = "contrast(150%)";
    context.drawImage(camera, 0, 0);
    context.font = "20px Consolas";
    context.fillStyle = "white";
    context.fillText("#mobilweb #elteik", 30, 30);
  });

  window.addEventListener("deviceorientation", function(event) {
    console.log(event);
    document.querySelector("#orientation").innerHTML = `
     alpha: ${event.alpha}<br>
     beta: ${event.beta}<br>
     gamma: ${event.gamma}<br>
     `;
  });

  const stream = await navigator.mediaDevices.getUserMedia({
    video: {
      torch: true,
      frameRate: 60
    }
  });

  camera.srcObject = stream;
  camera.play();
}
