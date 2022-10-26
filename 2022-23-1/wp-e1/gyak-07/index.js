const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

function drawSunnyIcon(context, x, y) {
  context.save();
  context.translate(x, y);

  context.beginPath();
  context.fillStyle = "#FFCC00";
  context.arc(0, 0, 20, 0, Math.PI * 2);
  context.fill();

  for (let i = 0; i < 8; i++) {
    context.beginPath();
    context.lineWidth = 3;
    context.strokeStyle = "#FFCC00";
    context.moveTo(-30, 0);
    context.lineTo(-45, 0);
    context.stroke();
    context.rotate(Math.PI / 4);
  }

  context.restore();
}

function drawCloudyIcon(context, x, y) {
  context.save();
  context.translate(x, y);

  context.beginPath();
  context.fillStyle = "#DDDDDD";
  context.ellipse(-20, 10, 30, 20, 0, 0, Math.PI * 2);
  context.ellipse(10, -20, 40, 30, 0, 0, Math.PI * 2);
  context.fill();

  context.restore();
}

function drawTemperature(context, x, y, temperature) {
  context.save();
  context.translate(x, y);

  context.textAlign = "center";
  context.font = "28px Arial";
  context.fillText(`${temperature}°C`, 0, 0);

  context.restore();
}

const weatherIconMap = {
  0: drawSunnyIcon,
  3: drawCloudyIcon,
};

async function getWeatherData(latitude, longitude) {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=weathercode,temperature_2m_max&current_weather=true&timezone=Europe%2FBerlin`;

  const response = await fetch(url);
  const weatherData = await response.json();

  // console.log(weatherData);
  const weatherCode = weatherData.current_weather.weathercode;
  if (typeof weatherIconMap[weatherCode] === "function") {
    weatherIconMap[weatherCode](context, 50, 50);
  }

  const temperature = weatherData.current_weather.temperature;
  drawTemperature(context, 50, 150, temperature);
}

// drawSunnyIcon(context, 50, 50);
// drawCloudyIcon(context, 50, 50);
// drawTemperature(context, 50, 150, 22);
navigator.geolocation.getCurrentPosition((position) => {
  const longitude = position.coords.longitude;
  const latitude = position.coords.latitude;

  getWeatherData(latitude, longitude);
});
