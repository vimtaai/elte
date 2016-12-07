function $(selector) {
    return document.querySelector(selector);
}

var game;
var X;
var Y;
var mines;
var mineCount = 0;

/**
 * x: x coordinate
 * y: y coordinate
 * mine: true if the field has a mine
 * marker: true if you marked the field as mine
 */
function Field(xCoord, yCoord) {
    this.x = xCoord;
    this.y = yCoord;
    this.mine = false;
    this.marker = false;

    this.DOMObject = document.createElement('BUTTON');
    this.DOMObject.setAttribute('data-coords', xCoord + ':' + yCoord);
    this.DOMObject.innerHTML = '&nbsp;';
    this.DOMObject.addEventListener('click', buttonClick);
    this.DOMObject.addEventListener('contextmenu', buttonRightClick);
    this.DOMObject.style.fontFamily = 'Lucida Console';
}

function youLose() {
    for (var i = 1; i <= Y; ++i) {
        for (var j = 1; j <= X; ++j) {
            if (game[i][j].mine == true) {
                game[i][j].DOMObject.innerHTML = '*';
                game[i][j].DOMObject.style.background = 'none';
                game[i][j].DOMObject.style.border = 'none';
            }
            game[i][j].DOMObject.disabled = true;
        }
    }
    alert('You lost the game');
}

function youWin() {
    for (var i = 1; i <= Y; ++i) {
        for (var j = 1; j <= X; ++j) {
            if (!game[i][j].mine) {
                game[i][j].DOMObject.click();
            } else {
                game[i][j].DOMObject.disabled = true;
            }
        }
    }
}

function checkWin() {
    $('#minesRemaining').innerHTML = mines - mineCount;
    if (mineCount == mines) {
        var isWin = true;
        for (var i = 1; i <= Y; ++i) {
            for (var j = 1; j <= X; ++j) {
                if (game[i][j].mine && !(game[i][j].DOMObject.innerHTML == 'X')) {
                    isWin = false;
                    break;
                }
            }
        }
        if (isWin) {
            youWin();
        }
    }
}

function buttonClick(event) {
    event.preventDefault();
    var coords = this.getAttribute('data-coords').split(':');
    var field = game[coords[0]][coords[1]];
    if (field.mine) {
        youLose();
    } else {
        var count = 0;
        var fromX = -1;
        var toX = 1;
        var fromY = -1;
        var toY = 1;
        if (coords[0] == 1) fromY = 0;
        if (coords[0] == X) toY = 0;
        if (coords[1] == 1) fromX = 0;
        if (coords[1] == Y) toX = 0;
        for (var i = fromY; i <= toY; ++i) {
            for (var j = fromX; j <= toX; ++j) {
                if (game[parseInt(coords[0]) + i][parseInt(coords[1]) + j].mine) {
                    count++;
                }
            }
        }
        field.DOMObject.innerHTML = count;
        field.DOMObject.disabled = true;
        field.DOMObject.style.background = 'none';
        field.DOMObject.style.border = 'solid transparent 2px';
    }

    checkWin();
}

function buttonRightClick(event) {
    event.preventDefault();
    var coords = this.getAttribute('data-coords').split(':');
    var field = game[coords[0]][coords[1]];
    field.marker = !field.marker;
    if (field.marker) {
        field.DOMObject.innerHTML = 'X';
        mineCount++;
    } else {
        field.DOMObject.innerHTML = '&nbsp;';
        mineCount--;
    }

    checkWin();
}

function startClick() {
    X = $('#X').value;
    Y = $('#Y').value;
    mines = $('#mines').value;
    mineCount = 0;
    $('#minesRemaining').innerHTML = mines;
    var table = $('#game');
    game = [];
    table.innerHTML = '';
    for (var i = 1; i <= Y; ++i) {
        game[i] = [];
        var line = document.createElement('TR');
        for (var j = 1; j <= X; ++j) {
            game[i][j] = new Field(i, j);
            var cell = document.createElement('TD');
            cell.appendChild(game[i][j].DOMObject);
            line.appendChild(cell);
        }
        table.appendChild(line);
    }

    for (var i = 1; i <= mines; ++i) {
        do {
            var xCoord = Math.floor(Math.random() * X) + 1;
            var yCoord = Math.floor(Math.random() * Y) + 1;
        } while (game[xCoord][yCoord].mine);
        game[yCoord][xCoord].mine = true;
    }
}

function init() {
    $('#start').addEventListener('click', startClick);
}

window.addEventListener('load', init);