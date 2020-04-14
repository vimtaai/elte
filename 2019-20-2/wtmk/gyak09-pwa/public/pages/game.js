export async function load() {
  const camera = document.querySelector("#camera");
  const image = document.querySelector("#image");
  const button = document.querySelector("#capture");

  image.width = 640;
  image.height = 480;

  button.addEventListener("click", function () {
    const videoSettings = stream.getVideoTracks()[0].getSettings();
    const width = videoSettings.width;
    const height = videoSettings.height;
    console.log(width, height);

    image.width = width;
    image.height = height;
    image.style.display = "block";
    camera.style.display = "none";

    const context = image.getContext("2d");
    const fontSize = height / 20;
    const topOffset = height / 15;

    context.filter = "contrast(150%)";
    context.drawImage(camera, 0, 0);
    context.font = `${fontSize}px Consolas`;
    context.fillStyle = "white";
    context.fillText("#mobilweb #elteik", 30, topOffset);
  });

  const stream = await navigator.mediaDevices.getUserMedia({
    video: {
      torch: true,
      frameRate: 60,
      width: { ideal: 4096 },
      height: { ideal: 2160 },
    },
  });

  camera.srcObject = stream;
  camera.play();
}
