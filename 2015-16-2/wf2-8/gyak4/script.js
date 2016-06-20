// Segédfüggvények

function $(selector) {
    return document.querySelector(selector);
}

function $$(selector) {
    return document.querySelectorAll(selector);
}

// Adat

var isScrolled = false;

// Eseménykezelők

$('body').addEventListener('wheel', function () {
    isScrolled = true;
});

$('body').addEventListener('keypress', 
            function (event) {
    console.log(event);
    if (event.keyCode == 
            "s".charCodeAt(0)) {
        isScrolled = true;
    }
});

$('button').addEventListener('click', 
            function (event) {
    //window.scrollBy(0, 200);
    // Rossz megoldás
    /*for (var i = 1; i <= 200; i++) {
        setTimeout(function () {
            window.scrollBy(0, 10);
        }, 10);
    }*/
    isScrolled = false;
    
    function onTimeout(prevScroll) {
        console.log(window.scrollY);
        window.scrollBy(0, 1);
        if (prevScroll != window.scrollY 
                && !isScrolled) {
            setTimeout(onTimeout, 10, 
                   window.scrollY);          
        }
    }
    onTimeout(window.scrollY);
});