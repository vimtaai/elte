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


window.addEventListener('load', function () {
    $('#sky').addEventListener('click', function (event) {
       if (event.target.getAttribute('data-id')) {
           ajax({
               mod: 'POST',
               url: 'index.php',
               getadat: 'data',
               postadat: 'id=' + event.target.getAttribute('data-id'),
               siker: function (res) {
                   var data = JSON.parse(res.response);
                   $('#name').innerHTML = data.name;
                   $('#typedata').innerHTML = data.type;
                   $('#x').innerHTML = data.x;
                   $('#y').innerHTML = data.y;
               }
           });
           
       } 
    });
});