function $(s) {
    return document.querySelector(s);
}

function ajax(opts) { 
  let mod    = opts.mod        || 'GET',
      url      = opts.url      || '',
      getadat  = opts.getadat  || '',
      postadat = opts.postadat || '',
      siker    = opts.siker    || function(){},
      hiba     = opts.hiba     || function(){};

  mod = mod.toUpperCase();
  url = url+'?'+getadat;
  const xhr = new XMLHttpRequest();
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

function kereses() {
    const kiadas = $('#kiadas').checked ? 'true' : 'false';
    const bevetel = $('#bevetel').checked ? 'true' : 'false';

    ajax({
        mod: 'POST',
        url: 'lekerdez.php',
        postadat: `kiadas=${kiadas}&bevetel=${bevetel}`,
        siker: function (xhr, valasz) {
            const json = JSON.parse(valasz);
            $('tbody').innerHTML = genTablazat(json);
        }
    });
}

$('#kiadas').addEventListener('change', kereses);
$('#bevetel').addEventListener('change', kereses);

function genTablazat(tablazat) {
    let html = '';
    for (let sor of tablazat) {
        html += `
        <tr>
            <td>${sor['id']}</td>
            <td>${sor['datum']}</td>
            <td style="color: ${sor['osszeg'] < 0 ? 'red' : 'green'}">
            ${(sor['osszeg'] > 0 ? '+' : '') + sor['osszeg']}
            </td>
        </tr>
        `;
    }
    return html;
}