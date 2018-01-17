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
var controls = $$('input');
for (var index = 0; index < controls.length; index++) {
    controls[index].addEventListener('change', draw);
}

function draw() {
    var ratio = $('#ratio').value;
    
    var canvas = $('canvas');
    canvas.width = maxX * ratio;
    canvas.height = maxY * ratio;
    canvas.style.width = maxX * ratio;
    canvas.style.height = maxY * ratio;
    
    var ctx = canvas.getContext("2d");
    //ctx.fillStyle = "red";
    //ctx.fillRect(10, 10, 50, 50);
    
    //ctx.fillStyle = "#000000";
    //ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    for (var i = 0; i < mapData.length; i++) {
        var c = {
            x: mapData[i][0],
            y: maxY - mapData[i][1],
            z: mapData[i][2]
        };
        
        var opacity;
        var color;
        
        if (c.z < $('#waterlevel').value) {
            opacity = 1 - ((c.z - 0) / $('#waterlevel').value);
            ctx.fillStyle = $('#water').value;
            color = '#000000';
        } else {
            if (c.z < 150) {
                opacity = ((c.z - 0) / 150);
                ctx.fillStyle = $('#plains').value;
                color = $('#hills').value;
            } else if (c.z < 300) {
                opacity = ((c.z - 150) / 150);
                ctx.fillStyle = $('#hills').value;
                color = $('#mountains').value;
            } else if (c.z < 500) {
                opacity = ((c.z - 300) / 200);
                ctx.fillStyle = $('#mountains').value;
                color = $('#high').value;
            } else {
                opacity = ((c.z - 500) / (maxZ - 500));
                ctx.fillStyle = $('#high').value;
                color = "#000000";
            }
        }
        ctx.fillRect(c.x * ratio, c.y * ratio, ratio, ratio);
        ctx.fillStyle = colorAlpha(hexToRGB(color), opacity);
        ctx.fillRect(c.x * ratio, c.y * ratio, ratio, ratio);
    }
}
