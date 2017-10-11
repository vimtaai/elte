const $ = (s) => document.querySelector(s);

const canvas = $('canvas');
const ctx = canvas.getContext('2d');

canvas.width = 640;
canvas.height = 480;

function ecsetSzin() {
    return $('input[type=color]').value;
}

function ecsetVastagsag() {
    return $('input[type=range]').value;
}

let egerLent = false;

function pottyRajzol(event) {
    ctx.fillStyle = ecsetSzin();
    const radius = ecsetVastagsag() / 2;
    // Pötty
    ctx.beginPath();
    ctx.arc(event.offsetX, event.offsetY, radius,
            0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();
}

function egerMozog(event) {
    //console.log(event)
    if (egerLent) {
        pottyRajzol(event);
        // Vonal
        ctx.strokeStyle = ecsetSzin();
        ctx.lineWidth = ecsetVastagsag();
        ctx.beginPath();
        ctx.moveTo(event.offsetX, event.offsetY);
        ctx.lineTo(event.offsetX - event.movementX, 
                   event.offsetY - event.movementY);
        ctx.stroke();
        ctx.closePath();
    }
}

function egerLe() {
    egerLent = true;
}

function egerFel() {
    egerLent = false;
}

function gombLe(event) {
    //console.log(event)
    if (event.code == 'NumpadAdd') {
        $('input[type=range]').value = parseInt($('input[type=range]').value) + 1;
    }
    if (event.code == 'NumpadSubtract') {
        $('input[type=range]').value -= 1;
    }
}

canvas.addEventListener('mousemove', egerMozog);
canvas.addEventListener('mouseup', egerFel);
canvas.addEventListener('mousedown', egerLe);
canvas.addEventListener('click', pottyRajzol);
document.addEventListener('keydown', gombLe);