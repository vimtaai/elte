const $ = document.querySelector.bind(document);

function ajax(opts) {






  var mod    = opts.mod        || 'GET',
      url      = opts.url      || '',
      getadat  = opts.getadat  || '',
      postadat = opts.postadat || '',
      siker    = opts.siker    || function(){},
      hiba     = opts.hiba     || function(){};

  mod = mod.toUpperCase();
  url = url+'?'+getadat;
  var xhr = new XMLHttpRequest(); // ujXHR();
  xhr.open(mod, url, true);
  if (mod === 'POST') {
    xhr.setRequestHeader('Content-Type', 
      'application/x-www-form-urlencoded');
  }
  xhr.addEventListener('readystatechange', function () {
    if (xhr.readyState == 4) {
      if (xhr.status == 200) {
        siker(xhr, xhr.responseText);
      } else {
        hiba(xhr);
      }
    }
  }, false);
  xhr.send(mod == 'POST' ? postadat : null);
  return xhr;
}

function keyupInput(event) {
    if (event.key == 'Enter') {
        ajax({
            mod: 'POST',
            url: 'addtext.php',
            postadat: 'text=' + $('input').value,
            siker: function () {
                console.log('Sikeres üzenetküldés');
                $('input').value = '';
            },
            hiba: function () {
                console.error('Sikertelen üzenetküldés');
            }
        });
    }
}
$('input').addEventListener('keyup', keyupInput, false);

function getTexts() {
    ajax({
        mod: 'GET',
        url: 'gettext.php',
        siker: function (xhr, response) {
            console.log(response);
            const texts = JSON.parse(response);
            $('div').innerHTML = texts.map(Text).join('');
        },
        hiba: function () {
            console.error('Sikertelen lekérdezés!');
        }
    });
}
setInterval(getTexts, 1000);

function Text(text) {
    let date = new Date(text.date * 1000);
    return `<div>
        <strong>${text.sender}</strong> küldte:
        <p>${text.text}</p>
        <em>Ekkor: ${date.toLocaleDateString()} ${date.toLocaleTimeString()}</em>
    </div>`;
}