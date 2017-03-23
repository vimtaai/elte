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

const canvas = $('#_map');
const ctx = canvas.getContext('2d');
const heights = {
  plains: 100,
  hills: 250,
  mountains: 500
};

function draw() {
  // for (let i = 0; i < mapData.length; i++)
  // mapData.forEach()
  const zoom = $('#ratio').value;
  canvas.width = maxX * zoom;
  canvas.height = maxY * zoom;
  ctx.fillStyle = '#fff';
  ctx.fillRect(0, 0, maxX * zoom, maxY * zoom);
  for (let point of mapData) {
    let z = point[2];
    let baseColor;
    let nextColor;
    let alpha;
    if (z <= $('#waterlevel').value) {
      baseColor = $('#water').value;
      nextColor = '#000000';
      alpha = 1 - (z / $('#waterlevel').value);
    } else {
      z = z - $('#waterlevel').value;    
      if (z <= heights.plains && z > 0) {
        baseColor = $('#plains').value;
        nextColor = $('#hills').value;
        alpha = (z - 0) / (heights.plains - 0);
      } else if (z <= heights.hills) {
        baseColor = $('#hills').value;
        nextColor = $('#mountains').value;
        alpha = (z - heights.plains) / (heights.hills - heights.plains);
      } else if (z <= heights.mountains) {
        baseColor = $('#mountains').value;
        nextColor = $('#high').value;
        alpha = (z - heights.hills) / (heights.mountains - heights.hills);
      } else if (z > heights.mountains) {
        baseColor = $('#high').value;
        nextColor = '#000000';
        alpha = (z - heights.mountains) / (maxZ - heights.mountains);
      }
    }
    //ctx.fillStyle = colorAlpha(hexToRGB('#000000'), 1 / maxZ * point[2]);
    ctx.fillStyle = colorAlpha(hexToRGB(baseColor), 1);
    ctx.fillRect(point[0] * zoom, (maxY - point[1]) * zoom, zoom, zoom);
    ctx.fillStyle = colorAlpha(hexToRGB(nextColor), alpha);
    ctx.fillRect(point[0] * zoom, (maxY - point[1]) * zoom, zoom, zoom);
  }
}

for (let input of $$('aside input')) {
  input.addEventListener('change', draw, false);
}
draw();