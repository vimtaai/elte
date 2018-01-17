"use strict";

// Segédfüggvények

function $(selector) {
    return document.querySelector(selector);
}

function $$(selector) {
    return document.querySelectorAll(selector);
}

// Adatszerkezetek

var game, x, y, 
    mineCount, mineRem,
    revCount,
    isFirst;

// Eseménykezelők

$('#start').addEventListener('click', init);

function init() {
    x = $('#x').value;
    y = $('#y').value;
    mineCount = $('#akna').value;
    mineRem = mineCount;
    revCount = 0;
    isFirst = true;
    $('#game').innerHTML = '';
    $('output').innerHTML = mineRem;
    
    for (var i = 0; i < y; i++) {
        var row = document.createElement('TR');
        for (var j = 0; j < x; j++) {
            var cell = document.createElement('TD');
            var button = document.createElement('BUTTON');
            button.setAttribute('data-x', j.toString());
            button.setAttribute('data-y', i.toString());
            button.addEventListener('click', step);
            button.addEventListener('contextmenu', flag);
            button.innerHTML = '&nbsp;';
            cell.appendChild(button);
            row.appendChild(cell);
        }
        $('#game').appendChild(row);
    }
}

function generate(cX, cY) {
    // Feltöltöm a táblázatot üres elemekkel
    game = [];
    for (var i = 0; i < x; i++) {
        game[i] = [];
        for (var j = 0; j < y; j++) {
            game[i][j] = {
                val: 0,
                isFlagged: false
            };
        }
    }
    // Lerakom az aknákat
    for (var i = 0; i < mineCount; i++) {
        var mX, mY;
        do {
            mX = Math.floor(Math.random() * x);
            mY = Math.floor(Math.random() * y);
        } while((mX == cX && mY == cY) || (game[mX][mY].val == -1));
        //console.log(mX, mY);
        game[mX][mY].val = -1;
        for (var j = -1; j <= 1; j++) {
            for (var k = -1; k <= 1; k++) {
                if ((mX + j >= 0 && mY + k >= 0 && 
                    mX + j < x && mY + k < y)) {
                    if ((game[mX + j][mY + k].val != -1))  {     
                        game[mX + j][mY + k].val++;
                    }
                }
            }
        }
    }
}

function reveal() {
    for (var i = 0; i < x; i++) {
        for (var j = 0; j < y; j++) {
            set(i, j);
        }
    }
}

function set(x, y) {
    $('#game').rows[y].cells[x].className = 
        `n${game[x][y].val}`;
    $('#game').rows[y].cells[x].innerHTML = 
                (game[x][y].val == -1
                 ? '&#128163;'
                 : game[x][y].val.toString());
}

function step() {
    var cX = parseInt(this.getAttribute('data-x'));
    var cY = parseInt(this.getAttribute('data-y'));
    
    if (isFirst) {
        generate(cX, cY);
        isFirst = false;
    }
    
    if (game[cX][cY].isFlagged) return;
    
    //console.log(cX, cY, game[cX][cY].val);
    set(cX, cY);
        
    if (game[cX][cY].val == 0) {
        for (var i = -1; i <= 1; i++) {
            for (var j = -1; j <= 1; j++) {
                var btn = $(`button[data-x="${cX + i}"][data-y="${cY + j}"]`);
                console.log(cX + i, cY + j)
                if (btn != null) {
                    btn.click();
                }
            }
        }
    }
    
    if (game[cX][cY].val == -1) {
        reveal();        
        alert('Game over');
    } else {
        revCount++;
    }
    
    if (revCount == x * y - mineCount) {
        reveal();
        alert('You won');
    }
}

function flag(event) {
    event.preventDefault();
    if (isFirst) return;
    
    var cX = parseInt(this.getAttribute('data-x'));
    var cY = parseInt(this.getAttribute('data-y'));
    
    if (game[cX][cY].isFlagged) {
        this.innerHTML = '';
        mineRem++;
    } else {
        this.innerHTML = '&#9873;';
        mineRem--;
    }
    
    $('output').innerHTML = mineRem;
    game[cX][cY].isFlagged = !game[cX][cY].isFlagged;
}