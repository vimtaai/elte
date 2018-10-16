const eCanvas = document.querySelector('#eloter');
const eloter = eCanvas.getContext('2d');

eCanvas.width = 500;
eCanvas.height = 500;

const hCanvas = document.querySelector('#hatter');
const hatter = hCanvas.getContext('2d');

hCanvas.width = 500;
hCanvas.height = 500;

function bolygoXY(bolygo) {
  const x = nap.kp.x + Math.cos(bolygo.szog) * bolygo.napTavolsag;
  const y = nap.kp.y + Math.sin(bolygo.szog) * bolygo.napTavolsag;
  return {x, y};
}

const bolygok = [
  {
    sugar: 0.5,
    napTavolsag: 42,
    sebesseg: 36,
    szog: 0,
    szin: 'beige'
  },
  {
    sugar: 1.2,
    napTavolsag: 52,
    sebesseg: 28,
    szog: 0,
    szin: 'gold'
  },
  {
    sugar: 1.3,
    napTavolsag: 60,
    sebesseg: 24,
    szog: 0,
    szin: 'lightblue'
  },
  {
    sugar: 0.7,
    napTavolsag: 75.5,
    sebesseg: 19,
    szog: 0,
    szin: 'orange'
  },
  {
    sugar: 14.3,
    napTavolsag: 185,
    sebesseg: 10,
    szog: 0,
    szin: 'coral'
  }
]

const nap = {
  kp: {
    x: eCanvas.width / 2,
    y: eCanvas.height / 2
  },
  sugar: 30,
  szin: 'yellow'
};

let utolsoRajzolas;

function kezdoAllapot() {
  for (const bolygo of bolygok) {
    bolygo.szog = 0;
  }
  utolsoRajzolas = Date.now();
}

function kovetkezoAllapot() {
  eloter.clearRect(0, 0, eCanvas.width, eCanvas.height);

  const dt = (Date.now() - utolsoRajzolas) / 5000;
  for (const bolygo of bolygok) {
    bolygo.szog += bolygo.sebesseg * dt;
  }
  utolsoRajzolas = Date.now();

  kirajzol();
  requestAnimationFrame(kovetkezoAllapot);
}

function kirajzol() {
  // Nap
  eloter.beginPath();
  eloter.fillStyle = nap.szin;
  eloter.arc(nap.kp.x, nap.kp.y, nap.sugar, 0, Math.PI * 2);
  eloter.fill();
  eloter.closePath();
  // Bolygók
  for (const bolygo of bolygok) {
    eloter.beginPath();
    eloter.fillStyle = bolygo.szin;
    const {x, y} = bolygoXY(bolygo);
    eloter.arc(x, y, bolygo.sugar, 0, Math.PI * 2);
    eloter.fill();
    eloter.closePath();
  }
  // Vonal
  const {x: b1x, y: b1y} = bolygoXY(bolygok[2]);
  const {x: b2x, y: b2y} = bolygoXY(bolygok[4]);

  hatter.beginPath();
  hatter.strokeStyle = 'rgba(255, 255, 255, 0.5)';
  hatter.moveTo(b1x, b1y);
  hatter.lineTo(b2x, b2y);
  hatter.stroke();
  hatter.closePath();
}

kezdoAllapot();
kovetkezoAllapot();
