'use strict';

const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

canvas.width = 800;
canvas.height = 400;

const talaj = 300;
const sprite = new Image();
sprite.src = 'sprite.png';
const zene = new Audio();
zene.src = 'music.mp3';
zene.loop = true;

const mario = {
  width: 45,
  height: 60
};
const gombak = {
  width: 45,
  height: 50,
  xSebesseg: 200
};

const grav = 1300;
const ugrasSebesseg = 500;
let utolsoRajzolas;

function kezdoAllapot() {
  utolsoRajzolas = Date.now();
  mario.sprite = 1; // 1, 2: futás, 0: ugrás
  mario.utolsoLepes = Date.now(); // mikor lépett utoljára
  mario.y = 0;
  mario.ySebesseg = 0;

  gombak.utolsoGomba = Date.now();
  gombak.lista = []; // hol vannak a gombák
}

function kovetkezoAllapot() {
  const dt = (Date.now() - utolsoRajzolas) / 1000;
  utolsoRajzolas = Date.now();

  if (mario.utolsoLepes < Date.now() - 100) {
    mario.sprite = mario.sprite == 1 ? 2 : 1;
    mario.utolsoLepes = Date.now();
  }

  mario.y = Math.max(mario.y + mario.ySebesseg * dt, 0);
  mario.ySebesseg = mario.ySebesseg - grav * dt;

  // fél másodpercenként generálok egy gombát
  if (gombak.utolsoGomba < Date.now() - 500) {
    if (Math.random() < 0.01) {
      gombak.lista.push(canvas.width + gombak.width);
      gombak.utolsoGomba = Date.now();
    }
  }

  for (let i = 0; i < gombak.lista.length; i++) {
    gombak.lista[i] -= gombak.xSebesseg * dt;
  }

  kirajzol();
  requestAnimationFrame(kovetkezoAllapot);
}

function kirajzol() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  // mario 45×60
  // forráskép, forrásX, forrásY, forrásSzél, forrásMag
  // canvasX, canvasY, canvasSzél, canvasMag
  context.drawImage(sprite, mario.sprite * mario.width, 0,
                            mario.width, mario.height,
                            100, talaj - mario.height - mario.y,
                            mario.width, mario.height);
  // gombak 45×50
  for (const gombaX of gombak.lista) {
    context.drawImage(sprite, 0, 60, 
                              gombak.width, gombak.height,
                              gombaX, talaj - gombak.height,
                              gombak.width, gombak.height);
  }
}

// Eseménykezelés
function ugras(e) {
  zene.play();
  if (e.code == 'Space' && mario.y == 0) {
    mario.ySebesseg = ugrasSebesseg; // px/s
  }
}
window.addEventListener('keydown', ugras);

kezdoAllapot();
kovetkezoAllapot();

