// Segédfüggvények
function $(s) {
  return document.querySelector(s);
}

function $$(s) {
  return document.querySelectorAll(s);
}

function delegate(pSel, type, cSel, fn) {
  const p = $(pSel);
  p.addEventListener(type, function (e) {
    let t;
    for (t = e.target;
      t !== p && !t.matches(cSel);
      t = t.parentNode);
    if (t === p) { return; }
    e.delegatedTarget = t;
    fn.call(t, e);
  }, false);
}

// Adatok, feldolgozók
let imageList = [
  'http://www.bharatint.com/img/categories/our-cat-shop-image.png',
  'http://dreamicus.com/data/cat/cat-06.jpg',
  'http://www.petmd.com/sites/default/files/what-does-it-mean-when-cat-wags-tail.jpg',
  'http://d39kbiy71leyho.cloudfront.net/wp-content/uploads/2016/05/09170020/cats-politics-TN.jpg',
  'https://images-na.ssl-images-amazon.com/images/G/01/img15/pet-products/small-tiles/30423_pets-products_january-site-flip_3-cathealth_short-tile_592x304._CB286975940_.jpg'
];
let currentImage = 0;

function relUrl(dir) {
  return (currentImage + dir + imageList.length) % imageList.length;
}

function drawImage() {
  const url     = imageList[relUrl(0)];
  const prevUrl = imageList[relUrl(-1)];
  const nextUrl = imageList[relUrl(+1)];
  $('#_img').src = url;
  $('#_previmg').src = prevUrl;
  $('#_nextimg').src = nextUrl;
}

$('#_imagelist').innerHTML = genList(imageList);
drawImage();

// Eseménykezelők
function addClick() {
  let url = $('#_url').value
  imageList.push(url);
  if (currentImage === undefined) {
    currentImage = 0;
    drawImage();
  }
  $('#_imagelist').innerHTML = genList(imageList);
}
$('#_add').addEventListener('click', addClick, false);

// function dirClick() {
//   currentImage = relUrl(parseInt(this.getAttribute('data-dir')));
//   drawImage();
// }
// $('#_prev').addEventListener('click', dirClick, false);
// $('#_next').addEventListener('click', dirClick, false);
function dirClickGenerator(dir) {
  return function() {
    currentImage = relUrl(dir);
    drawImage();
  }
}
$('#_prev').addEventListener('click', dirClickGenerator(-1), false);
$('#_next').addEventListener('click', dirClickGenerator(+1), false);

function clickUrl(e) {
  const index = parseInt(e.delegatedTarget.getAttribute('data-index'));
  console.log(index);
  currentImage = index;
  drawImage();
}
delegate('#_imagelist', 'click', 'li', clickUrl);

// HTML generátorok
function genList(list) {
  return list.map(genListItem).join('');
}

function genListItem(url, index) {
  return `<li data-index="${index}">${url}</li>`;
}