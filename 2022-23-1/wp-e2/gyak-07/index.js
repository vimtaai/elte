const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = 200;
canvas.height = 400;

function drawSunny(context, x, y, scale = 1) {
    context.save();
    context.fillStyle = "#FFCC00";
    context.beginPath();
    context.translate(x, y);
    context.scale(scale, scale);

    context.arc(0, 0, 20, 0, Math.PI * 2);
    context.fill();

    context.strokeStyle = "#FFCC00";
    context.lineWidth = 3;
    context.beginPath();
    for (let i = 0; i < 8; i++) {
        context.moveTo(-30, 0);
        context.lineTo(-45, 0);
        context.rotate(Math.PI / 4);
    }
    context.stroke();
    context.restore();
}

function drawCloudy(context, x, y, scale = 1) {
    context.save();
    context.fillStyle = "#DDDDDD";
    context.beginPath();
    context.translate(x, y);
    context.scale(scale, scale);

    context.ellipse(-20, 10, 30, 20, 0, 0, Math.PI * 2);
    context.fill();
    context.ellipse(10, 0, 40, 30, 0, 0, Math.PI * 2);
    context.fill();

    context.restore();
}

function drawTemperature(context, temperature) {
    context.save();
    context.font = "20px Arial";
    context.textAlign = "center";
    context.translate(100, 200);
    context.fillText(`${temperature} °C`, 0, 0)
    context.restore();
}

async function getWeatherData(longitude, latitude) {
    const response = await fetch(`https://api.open-meteo.com/v1/forecast?longitude=${longitude}&latitude=${latitude}&daily=weathercode,temperature_2m_max&timezone=Europe%2FBudapest`);
    const weatherData = await response.json();

    console.log(weatherData);

    drawTemperature(context, weatherData.daily.temperature_2m_max[4]);

    const weathercode = weatherData.daily.weathercode[4];
    // weathercodeToIconMap[weathercode](context, 100, 100, 0.8);
    drawCloudy(context, 100, 100, 1);
}

const weathercodeToIconMap = {
    0: drawSunny,
    1: drawCloudy
};

// drawSunny(context, 100, 100, 0.8);
// drawTemperature(context);
//getWeatherData();

navigator.geolocation.getCurrentPosition(position => 
    getWeatherData(position.coords.longitude, position.coords.latitude)
);