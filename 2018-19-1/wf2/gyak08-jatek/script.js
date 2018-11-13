'use strict';

const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

canvas.width = 800;
canvas.height = 400;
canvas.style.background = 'skyblue';

let debug = false;
let allapot;

const talaj = 300;
const sprite = new Image();
sprite.src = 'sprite.png';
const zene = new Audio();
zene.src = 'music.mp3';
zene.loop = true;

const mario = {
  x: 100,
  width: 45,
  height: 60
};
const gombak = {
  width: 42,
  height: 50,
  xSebesseg: 200
};

const grav = 1300;
const ugrasSebesseg = 500;
let utolsoRajzolas;

function kezdoAllapot() {
  allapot = 'indul';
  utolsoRajzolas = Date.now();
  mario.sprite = 1; // 1, 2: futás, 0: ugrás
  mario.utolsoLepes = Date.now(); // mikor lépett utoljára
  mario.y = 0;
  mario.ySebesseg = 0;
  mario.pontszam = 0;

  gombak.utolsoGomba = Date.now();
  gombak.lista = []; // hol vannak a gombák
}

function kovetkezoAllapot() {
  const dt = (Date.now() - utolsoRajzolas) / 1000;
  utolsoRajzolas = Date.now();

  if (allapot == 'megy') {
    // Mario lába mozog
    if (mario.utolsoLepes < Date.now() - 100) {
      mario.sprite = mario.sprite == 1 ? 2 : 1;
      mario.utolsoLepes = Date.now();
    }
    
    // Mario zuhan
    mario.y = Math.max(mario.y + mario.ySebesseg * dt, 0);
    mario.ySebesseg = mario.ySebesseg - grav * dt;

    // Fél másodpercenként generálok egy gombát
    if (gombak.utolsoGomba < Date.now() - 500) {
      if (Math.random() < 0.01) {
        gombak.lista.push(canvas.width + gombak.width);
        gombak.utolsoGomba = Date.now();
      }
    }

    // Gombák mozognak
    for (let i = 0; i < gombak.lista.length; i++) {
      gombak.lista[i] -= gombak.xSebesseg * dt;

      // Mario ráugrott-e a gombára
      if (Math.abs(mario.x + mario.width - gombak.lista[i]) > gombak.xSebesseg * dt && // nem oldalról
          Math.abs(mario.x - gombak.lista[i]) < gombak.width && // van-e átfedés
          mario.y < gombak.height) {  // ráésett mario
        gombak.lista.splice(i, 1);
        mario.pontszam += 1;
      }

      // Gomba kiment-e a képernyőről
      if (gombak.lista[i] < -gombak.width) {
        gombak.lista.splice(i, 1);
        mario.pontszam += 1;
      }
    }

    // Vége van-e?
    if (vege()) {
      allapot = 'vége';
    }
  }

  kirajzol();
  requestAnimationFrame(kovetkezoAllapot);
}

function kirajzol() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  // talaj
  context.strokeStyle = 'green';
  context.lineWidth = 10;
  context.beginPath();
  context.moveTo(0, talaj);
  context.lineTo(canvas.width, talaj);
  context.closePath();
  context.stroke();

  context.fillStyle = 'brown';
  context.fillRect(0, talaj, canvas.width, canvas.height - talaj);

  context.fillStyle = 'black';
  context.font = '20px Consolas';
  context.textAlign = 'center';
  
  // pontszám
  context.fillText(mario.pontszam, 10, 20);

  // mario 45×60
  // forráskép, forrásX, forrásY, forrásSzél, forrásMag
  // canvasX, canvasY, canvasSzél, canvasMag
  context.drawImage(sprite, mario.sprite * mario.width, 0,
                            mario.width, mario.height,
                            mario.x, talaj - mario.height - mario.y,
                            mario.width, mario.height);
  if (debug) {
    context.strokeRect(mario.x, talaj - mario.y - mario.height, mario.width, mario.height);
  }
  // gombak 45×50
  for (const gombaX of gombak.lista) {
    context.drawImage(sprite, 0, 60, 
                              gombak.width, gombak.height,
                              gombaX, talaj - gombak.height,
                              gombak.width, gombak.height);
    if (debug) {
      context.strokeRect(gombaX, talaj - gombak.height, gombak.width, gombak.height);
    }
  }

  if (allapot == 'vége') {
    context.fillText('Game over', canvas.width / 2, canvas.height / 2);
  } else if (allapot == 'indul') {
    context.fillText('Kezdéshez nyomj egy Space-t', canvas.width / 2, canvas.height / 2);
  }
}

// Eseménykezelés
function billentyuLenyomas(e) {
  zene.play();
  
  if (allapot == 'megy' && e.code == 'Space' && mario.y == 0) {
    mario.ySebesseg = ugrasSebesseg; // px/s
  } else if (allapot == 'indul' && e.code == 'Space') {
    allapot = 'megy';
  } else if (allapot == 'vége' && e.code == 'Enter') {
    allapot = 'indul';
    kezdoAllapot();
  } 
}
window.addEventListener('keydown', billentyuLenyomas);


// Játék vége
function vege() {
  for (const gombaX of gombak.lista) {
    if (mario.x + mario.width >= gombaX && mario.x < gombaX && mario.y < gombak.height
        ||
        mario.x < gombaX + gombak.width && mario.x > gombaX && mario.y < gombak.height) {
      return true;
    }
  }

  return false;
}

kezdoAllapot();
kovetkezoAllapot();

