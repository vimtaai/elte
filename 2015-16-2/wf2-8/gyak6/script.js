// Segédfüggvények
function $(selector) {
    return document.querySelector(selector);
}

function $$(selector) {
    return document.querySelectorAll(selector);  
}

// Adatszerkezetek

var availColors = [
    "red",
    "green",
    "blue",
    "cyan",
    "magenta",
    "yellow",
    "orange"
];

var colors = [];
var items = [];
var guesses = [];
var colorCount;
var itemCount;
var guessCount;
var stepCount;

// Eseménykezelők

$('#start').addEventListener('click', init);
function init() {
    colors = [];
    items = [];
    guesses = [];
    
    colorCount = $('#colors').value;
    itemCount = $('#items').value;
    guessCount = $('#guesses').value;
    stepCount = 1;
    
    for (var i = 0; i < colorCount; i++) {
        colors.push(availColors[i]);
    }
    
    for (var i = 0; i < itemCount; i++) {
        items.push(Math.floor(Math.random() * colorCount));
    }
    
    // Játéktér generálása
    var table = $('#game');
    table.innerHTML = '';
    for (var i = 0; i <= guessCount; i++) {
        var row = document.createElement('TR');
        for (var j = 0; j <= itemCount; j++) {
            var cell = document.createElement('TD');
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
    // Vezérlők generálása
    var controls = $('#controls');
    controls.innerHTML = '';
    for (var i = 0; i < itemCount; i++) {
        var control = document.createElement('SELECT');
        for (var j = 0; j < colorCount; j++) {
            var option = document.createElement('OPTION');
            option.innerHTML = colors[j];
            option.value = j;
            control.appendChild(option);
        }
        controls.appendChild(control);
    }
    var sendButton = document.createElement('BUTTON');
    sendButton.innerHTML = 'Tipp';
    sendButton.addEventListener('click', step);
    controls.appendChild(sendButton);
}

function step() {
    var guesses = $$('#controls select');
    var tick = 0;
    var cross = 0;
    
    var colorsInItems = {};
    
    var row = $('#game').rows[stepCount];
    
    for (var i = 0; i < itemCount; i++) {
        row.cells[i].innerHTML = colors[guesses[i].value];
        
        if (guesses[i].value == items[i]) {
            tick++;
        } else if (colorsInItems[items[i]] > 0) {
            colorsInItems[items[i]]++;
        } else {
            colorsInItems[items[i]] = 1;
        }
    }
    
    for (var i = 0; i < itemCount; i++) {
        if (colorsInItems[guesses[i].value] > 0) {
            cross++;
            colorsInItems[guesses[i].value]--;
        }
    }
    
    row.cells[itemCount].innerHTML = 
        '✔'.repeat(tick) + '✕'.repeat(cross);


    var c = $$('#controls select, #controls button');
    
    if (tick == itemCount) {
        alert('Nyertél!');
        for (var i = 0; i < c.length; i++) {
            c[i].disabled = true;
        }
        return;
    }
    
    stepCount++;
    
    if (stepCount > guessCount) {
        alert('Vesztettél!');
        for (var i = 0; i < c.length; i++) {
            c[i].disabled = true;
        }
        return;
    }
    
}