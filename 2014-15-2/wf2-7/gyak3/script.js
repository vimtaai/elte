var colors = {
    red     : '#F00',
    blue    : '#00F',
    green   : '#0F0'
};

function $(id) {
    return document.getElementById(id);
}

// Selector alapján kereső $ függvény
/*function $(selector) {
    switch (selector.charAt(0)) {
        case '#':
            return document.getElementById(selector.substr(1));
            break;
        case '.':
            return document.getElementsByClassName(selector.substr(1));
            break;
        default :
            return document.getElementsByTagName(selector);
            break;
    }
}*/

//console.log('Loaded..');

function clickEvent() {
    var textbox = $('textbox');
    //console.log(textbox.value);
    var text = textbox.value;
    var newText = '';
    var wordList = text.split(' ');

    //console.log(wordList);
    for (var index in wordList) {
        if (colors.hasOwnProperty(wordList[index])) {
            newText += '<span style="color: ' + colors[wordList[index]] + '">' +
            wordList[index] +
            '</span> ';
        } else {
            newText += wordList[index] + ' ';
        }
    }

    var output = $('result');
    output.innerHTML += '<p>' + newText + '</p>';
}

function init() {
    var button = $('button');
    //button.onclick = clickEvent;
    button.addEventListener('click', clickEvent);
}

window.addEventListener('load', init);
