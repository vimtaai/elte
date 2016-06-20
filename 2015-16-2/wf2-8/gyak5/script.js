// Segédfüggvények
function $(selector) {
    return document.querySelector(selector);
}

function $$(selector) {
    return document.querySelectorAll(selector);  
}

function hexToR(h) {return parseInt((cutHex(h)).substring(0,2),16)}
function hexToG(h) {return parseInt((cutHex(h)).substring(2,4),16)}
function hexToB(h) {return parseInt((cutHex(h)).substring(4,6),16)}
function cutHex(h) {return (h.charAt(0)=="#") ? h.substring(1,7):h}

function hexToRGB(h) {return "rgb(" + hexToR(h) + "," + hexToG(h) + "," + hexToB(h) + ")"}
function colorAlpha(c, a) {return "rgba" + c.substring(3, c.length - 1) + "," + a + ')'}

// Eseménykezelők

window.addEventListener('load', draw);
//$('#ratio').addEventListener('change', draw);
var controls = $$('aside input');
for (var i = 0; i < controls.length; i++) {
    controls[i].addEventListener('change', draw);
}

function draw() {
    var ratio = $('#ratio').value;
    
    var canvas = $('canvas');
    canvas.width = maxX * ratio;
    canvas.height = maxY * ratio;
    canvas.style.width = maxX * ratio;
    canvas.style.height = maxY * ratio;
    var context = canvas.getContext("2d");
    
    for (var i = 0; i < mapData.length; i++) {
        var x = mapData[i][0];
        var y = maxY - mapData[i][1];
        var z = mapData[i][2];

        //console.log(z);
        var color;
        var color2;
        if (z < $('#waterlevel').value) {
            color = $('#water').value;
            color2 = colorAlpha(hexToRGB("#000000"), 1- z / $('#waterlevel').value);
        } else {
            if (z < 150) {
                color = $('#plains').value;
                // 150 : kategórián belüli lehetséges értékek száma
                color2 = colorAlpha(hexToRGB($('#hills').value), ((z - $('#waterlevel').value)) / (150 - $('#waterlevel').value));
                //color2 = 150 - Math.round((z - 0) / 150 * 255);
            } else if (z < 300) {
                color = $('#hills').value;
                color2 = colorAlpha(hexToRGB($('#mountains').value), ((z - 150)) / 150);
                //color2 = 150 - Math.round((z - 150) / 150 * 255);
            } else if (z < 500) {
                color = $('#mountains').value;
                color2 = colorAlpha(hexToRGB($('#high').value), ((z - 300)) / 200);
                //color2 = 200 - Math.round((z - 300) / 200 * 255);
            } else {
                color = $('#high').value;
                color2 = colorAlpha(hexToRGB('#000000'), ((z - 500)) / (maxZ - 500));
                //color2 = (maxZ - 500) - Math.round((z - 500) / (maxZ - 500) * 255);
            }
        }
        context.fillStyle = color;
        context.fillRect(x * ratio, y * ratio, ratio, ratio);
        
        context.fillStyle = color2;
        //context.fillStyle = `rgba(${color2}, ${color2}, ${color2}, 0.5)`;
        context.fillRect(x * ratio, y * ratio, ratio, ratio);
    }
}
