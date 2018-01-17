"use strict";

function $(selector) {
    return document.querySelector(selector);
}

function $$(selector) {
    return document.querySelectorAll(selector);
}

/////////////////////

// Globális változók (adatok)

var randomSzam = Math.ceil(Math.random() * 100);

/////////////////////

// Eseménykezelők

$('input[type="button"]')
    .addEventListener('click', onButtonClick);
    
function onButtonClick() {
    // Adatok kinyerése
    var szam = parseInt($('#bemenet').value);
    if (szam < randomSzam) {
        $('#kimenet').innerHTML = 'Ennél nagyobb...';
    } else if (szam > randomSzam) {
        $('#kimenet').innerHTML = 'Ennél kisebb...';
    } else if(szam == randomSzam) {
        $('#kimenet').innerHTML = 'Eltaláltad...';
    } else {
        $('#kimenet').innerHTML = 'Nem számot adtál meg...';
    }
}

function onCsokkentClick(event) {
    var szam = parseInt(event.target.belongsTo.value);
    szam--;
    event.target.belongsTo.value = szam;
}

function onNovelClick(event) {
    var szam = parseInt(event.target.belongsTo.value);
    szam++;
    event.target.belongsTo.value = szam;
}

function createButtons() {
    var counters = $$('input[type="text"].counter');
    for (var i = 0; i < counters.length; ++i) {
        var minuszGomb = document.createElement('BUTTON');
        minuszGomb.innerHTML = '-';
        minuszGomb.belongsTo = counters[i];
        minuszGomb.addEventListener('click', onCsokkentClick);
        var pluszGomb = document.createElement('BUTTON');
        pluszGomb.innerHTML = '+';
        pluszGomb.belongsTo = counters[i];
        pluszGomb.addEventListener('click', onNovelClick);
        counters[i].parentElement.insertBefore(minuszGomb, counters[i]);
        counters[i].parentElement.insertBefore(pluszGomb, counters[i]);
    }
}

createButtons();