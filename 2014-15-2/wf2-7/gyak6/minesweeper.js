function $(selector) {
    return document.querySelector(selector);
}

var game;
var maxX;
var maxY;
var mineNum;
var markedCount;

function Field(xCoord, yCoord) {
    this.mine = false;
    this.marked = false;

    this.DOMObject = document.createElement('BUTTON');
    this.DOMObject.innerHTML = '&nbsp;';
    this.DOMObject.addEventListener('click', leftClick);
    this.DOMObject.addEventListener('contextmenu', rightClick);
    this.DOMObject.setAttribute('data-coords', xCoord + ':' + yCoord);
    this.DOMObject.style.fontFamily = 'Lucida Console';
}

function clickEvent(event) {
    maxX = $('#X').value;
    maxY = $('#Y').value;
    mineNum = $('#mines').value;
    markedCount = 0;
    $('#minesRemaining').innerHTML = mineNum - markedCount;
    game = [];

    var table = $('#game');
    table.innerHTML = '';

    for (var y = 1; y <= maxY; ++y) {
        var row = document.createElement('TR');
        table.appendChild(row);
        game[y] = [];
        for (var x = 1; x <= maxX; ++x) {
            var col = document.createElement('TD');
            row.appendChild(col);
            game[y][x] = new Field(x, y);
            col.appendChild(game[y][x].DOMObject);
        }
    }

    for (var i = 1; i <= mineNum; ++i) {
        var randomX;
        var randomY;
        do {
            randomX = Math.floor(Math.random() * maxX) + 1;
            randomY = Math.floor(Math.random() * maxY) + 1;
        } while(game[randomY][randomX].mine);
        game[randomY][randomX].mine = true;
    }
}

function leftClick(event) {
    event.preventDefault();
    var clickedCoords = this.getAttribute('data-coords').split(':');
    var clickedX = clickedCoords[0];
    var clickedY = clickedCoords[1];
    if (game[clickedY][clickedX].mine) {
        for (var y = 1; y <= maxY; ++y) {
            for (var x = 1; x <= maxX; ++x) {
                if (game[y][x].mine) {
                    game[y][x].DOMObject.innerHTML = '*';
                }
                game[y][x].DOMObject.disabled = true;
            }
        }
        alert('Game over');
    } else {
        var nearbyMines = 0;

        var startX = (clickedX == 1 ? 0 : -1);
        var startY = (clickedY == 1 ? 0 : -1);
        var endX = (clickedX == maxX ? 0 : 1);
        var endY = (clickedY == maxY ? 0 : 1);

        for (var x = startX; x <= endX; ++x) {
            for (var y = startY; y <= endY; ++y) {
                if (game[parseInt(clickedY) + y][parseInt(clickedX) + x].mine) {
                    ++nearbyMines;
                }
            }
        }
        game[clickedY][clickedX].DOMObject.innerHTML = nearbyMines;
        game[clickedY][clickedX].DOMObject.disabled = true;
        game[clickedY][clickedX].DOMObject.style.background = 'none';
        game[clickedY][clickedX].DOMObject.style.border = 'solid 2px transparent';
    }
}

function rightClick(event) {
    event.preventDefault();
    var clickedCoords = this.getAttribute('data-coords').split(':');
    var clickedX = clickedCoords[0];
    var clickedY = clickedCoords[1];
    if (game[clickedY][clickedX].marked) {
        game[clickedY][clickedX].DOMObject.innerHTML = '&nbsp;';
        --markedCount;
    } else {
        game[clickedY][clickedX].DOMObject.innerHTML = 'X';
        ++markedCount;
    }
    game[clickedY][clickedX].marked = !game[clickedY][clickedX].marked;
    $('#minesRemaining').innerHTML = mineNum - markedCount;

    if ((mineNum - markedCount) == 0) {
        var isOK = true;
        for (var y = 1; y <= maxY; ++y) {
            for (var x = 1; x <= maxX; ++x) {
                if (game[y][x].mine != game[y][x].marked) {
                    isOK = false;
                    break;
                }
            }
            if (!isOK) {
                break;
            }
        }
        if (isOK) {
            for (var y = 1; y <= maxY; ++y) {
                for (var x = 1; x <= maxX; ++x) {
                    if (!game[y][x].mine) {
                        game[y][x].DOMObject.click();
                    }
                    game[y][x].DOMObject.disabled = true;
                }
            }
            alert('You won!');
        }
    }
}

function init() {
	$('#start').addEventListener('click', clickEvent);
}

window.addEventListener('load', init);