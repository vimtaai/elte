// Segédfüggvények
const $ = (s) => document.querySelector(s);

function delegate(parent, children, type, handler) {
  function delegatedFunction(event) {
    let target = event.target;
    if (target.matches(`${parent} ${children}, ${parent} ${children} *`)) {
      while (!target.matches(children)) {
        target = target.parentNode;
      }

      // event.delegatedTarget = target;
      // handler(event);
      return handler.call(target, event);
    }
  }
  $(parent).addEventListener(type, delegatedFunction);
}

function ajax(opts) { 
  let mod      = opts.mod      || 'GET',
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

function deleteTransaction(event) {
    const id = this.getAttribute('data-id');
    // Törlés?!
    // AJAX-szal
    // ajax({
    //     mod: 'POST',
    //     url: 'api/delete-transaction.php',
    //     postadat: 'id=' + id,
    //     siker: function (xhr, json) {
    //         alert('Siker: ' + json);
    //     },
    //     hiba: function (xhr, json) {
    //         alert('Hiba: ' + json);
    //     }
    // });
    // fetch-csel
    const data = new FormData();
    const that = this;
    data.append('id', id);
    fetch('api/delete-transaction.php', {
        method: 'post',
        body: data,
        credentials: 'include'
    })
    .then(function (response) {
        //alert('Siker: ' + json);
        const tr = that.parentNode.parentNode;
        tr.parentNode.removeChild(tr);
    })
    .catch(function (error) {
        alert('Hiba: ' + error);
    });
    // fetch-csel 2018-ban
    // const response = await fetch('api/delete-transaction.php', {
    //     method: 'post',
    //     body: data,
    //     credentials: 'include'
    // });
    // alert('Siker: ' + response.text());
}
delegate('table', 'button', 'click', deleteTransaction);