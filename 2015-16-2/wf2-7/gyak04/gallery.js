// Segédfüggvények

function $(selector) {
    return document.querySelector(selector);
}

function $$(selector) {
    return document.querySelectorAll(selector);
}

// Adatok
var images = [
    {
        src: "f21d9251342c99d4c7b50e93d8700f66.jpg",
        alt: "A New Hope"
    },
    {
        src: "starwars-94b1238c826bf3a12ffa5357c06f3a44_h.jpg",
        alt: "The Empire Strikes Back"
    },
    {
        src: "movie_poster_by_nei1b-d5t3b8d.jpg",
        alt: "Return of the Jedi"
    }
];

var currentImg = 0;

// Eseménykezelők

window.addEventListener('load',
    function () {
        setInterval(function () {
            clickHandler(1);
        }, 2000);
    });

$('#prev').addEventListener('click',
    function () {
        clickHandler(-1);
    });
$('#next').addEventListener('click',
    function () {
        clickHandler(1);
    });
function clickHandler(direction) {
    currentImg += direction;
    if (currentImg < 0) {
        currentImg = images.length - 1;
    } else {
        currentImg %= images.length;
    }
    $('img').setAttribute(
        'src',
        images[currentImg].src);
    $('img').setAttribute(
        'alt',
        images[currentImg].alt);
}