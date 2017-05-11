let $ = (s) => document.querySelector(s);

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

const REFRESH_RATE = 1000;
let lastRefresh = 0;

function clickButton() {
    let message = $('input[type=text]').value;
    ajax({
        mod: 'post',
        url: 'addmessage.php',
        postadat: 'text=' + message,
        hiba: function () {
            alert('Sikertelen üzenetküldés!');
        },
        siker: function () {
            $('input[type=text]').value = '';
        }
    });
}
$('button').addEventListener('click', clickButton, false);
$('input[type=text]').addEventListener('keyup', function (e) {
    if (e.key == 'Enter') {
        $('button').click();
    }
}, false);

function getMessages() {
    ajax({
        mod: 'get',
        url: 'getmessages.php',
        getadat: 'time=' + lastRefresh,
        hiba: function () {
            console.error('A szerver nem elérhető!');
        },
        siker: function (xhr, json) {
            let messages = JSON.parse(json);
            lastRefresh = messages[0].date || 0;
            $('#messages').innerHTML = genMessages(messages) + $('#messages').innerHTML;
        }
    });
}
setInterval(getMessages, REFRESH_RATE);

function genMessages(messages) {
    return messages.map(genMessage).join('');
}

function genMessage(msg) {
    let formattedDate = new Date(msg.date * 1000);
    return `
      <div class="comment">
        <div class="content">
          <a class="author">${msg.ip}</a>
          <div class="metadata">
            <span class="date">
                ${formattedDate.toLocaleDateString()}
                ${formattedDate.toLocaleTimeString()}
            </span>
          </div>
          <div class="text">
            ${msg.text}
          </div>
        </div>
      </div>
    `;
}