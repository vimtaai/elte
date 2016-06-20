function ujXHR() {
  var xhr = null;
  try { xhr = new XMLHttpRequest(); } catch(e) {
  try { xhr = new ActiveXObject("Msxml2.XMLHTTP"); } catch(e) {
  try { xhr = new ActiveXObject("Microsoft.XMLHTTP"); } catch(e) {
        xhr = null;
  }}}
  return xhr;
}

function ajax(opts) { 
  var mod      = opts.mod      || 'GET',
      url      = opts.url      || '',
      getadat  = opts.getadat  || '',
      postadat = opts.postadat || '',
      siker    = opts.siker    || function(){},
      hiba     = opts.hiba     || function(){};

  mod = mod.toUpperCase();
  url = url+'?'+getadat;
  var xhr = ujXHR();
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

function $(selector) {
    return document.querySelector(selector);
}

function $$(selector) {
    return document.querySelectorAll(selector);
}

function delButtons() {
    var delButtons = $$('.delete');
     //console.log(delButtons);
     for (var i = 0; i < delButtons.length; i++) {
         delButtons[i].addEventListener('click', function (event) {
             ajax({
                mod: 'POST',
                url: 'index.php',
                getadat: 'deltodo',
                postadat: 'id=' + event.target.getAttribute('data-id'),
                siker: function (response) {
                   $('#' + event.target.getAttribute('data-id')).remove();
                },
                hiba: function (response) {
                    alert('Hiba');
                }           
            });
         });
     }
}

window.addEventListener('load', function () {
     $('#send').addEventListener('click', function () {
        ajax({
            mod: 'POST',
            url: 'index.php',
            getadat: 'newtodo',
            postadat: 'todo=' + $('#todo').value 
                    + '&color=' + $('#color').value,
            siker: function (response) {
                //console.log(response.response);
                var todos = JSON.parse(response.response);
                var html = '';
                for (var i = 0; i < todos.length; i++) {
                    html += `
                            <div class="well well-sm" style="background: ${todos[i].color}"
                                 id="${todos[i].id}">
                                <div class="pull-right" style="margin: -4px 4px;">
                                    <button class="btn btn-sm btn-danger delete" data-id="${todos[i].id}">X</button>
                                </div>        
                                <div class="pull-right" style="margin: -4px 4px;">
                                    <button class="btn btn-sm btn-success complete" data-id="${todos[i].id}">✔</button>
                                </div>
                                ${todos[i].text}
                            </div>
                    `;
                }
                $('#todos').innerHTML = html;
                delButtons();
            },
            hiba: function (response) {
                alert('Hiba');
            }           
        }); 
     });
     
     setInterval(function () {
         ajax({
            mod: 'POST',
            url: 'index.php',
            getadat: 'gettodo',
            siker: function (response) {
                //console.log(response.response);
                var todos = JSON.parse(response.response);
                console.log(todos);
                var html = '';
                for (var i = 0; i < todos.length; i++) {
                    html += `
                            <div class="well well-sm" style="background: ${todos[i].color}"
                                 id="${todos[i].id}">
                                <div class="pull-right" style="margin: -4px 4px;">
                                    <button class="btn btn-sm btn-danger delete" data-id="${todos[i].id}">X</button>
                                </div>        
                                <div class="pull-right" style="margin: -4px 4px;">
                                    <button class="btn btn-sm btn-success complete" data-id="${todos[i].id}">✔</button>
                                </div>
                                ${todos[i].text}
                            </div>
                    `;
                }
                //console.log(html);
                $('#todos').innerHTML = html;
                delButtons();
            },
            hiba: function (response) {
                alert('Hiba');
            }           
        }); 
     }, 1000);
     
     delButtons();
});