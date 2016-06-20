// Segédfüggvények

function $(selector) {
    return document.querySelector(selector);
}

function $$(selector) {
    return document.querySelectorAll(selector);
}

// Adatok

var kepek = [
    {
        url: 'cinest5.jpg',
        alt: 'Star Wars'
    },
    {
        url: 'esb1.jpg',
        alt: 'The Empire Strikes Back'
    },
    {
        url: 'rotjbaug12.jpg',
        alt: 'Return of the Jedi'
    }
];

var imgIndex = 0;

// Eseménykezelők

function eventHandler(direction) { 
    imgIndex += direction;
    if (imgIndex < 0) {
        imgIndex = kepek.length - 1;
    } else {
        imgIndex %= kepek.length
    }
    $('img').setAttribute('src', 
                          kepek[imgIndex].url);
    $('img').setAttribute('alt', 
                          kepek[imgIndex].alt);
}

$('#prev').addEventListener('click', function () {
    eventHandler(-1);
});
$('#next').addEventListener('click', function () {
    eventHandler(1);
});

window.addEventListener('load', function () {
    setInterval(function () {
       eventHandler(1); 
    }, 1000);
});