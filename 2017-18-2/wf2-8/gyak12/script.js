// segédfüggvények
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
  let method   = opts.method   || 'GET',
      url      = opts.url      || '',
      getData  = opts.getData  || {},
      postData = opts.postData || {},
      success  = opts.success  || function() {},
      error    = opts.error    || function() {};

  let getDataString = Object.keys(getData).map((name) => name + '=' + getData[name]).join('&');
  let postDataString = Object.keys(postData).map((name) => name + '=' + postData[name]).join('&');

  method = method.toUpperCase();
  url = url + '?' + getDataString;

  const xhr = new XMLHttpRequest();
  xhr.open(method, url, true);

  if (method === 'POST') {
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  }

  xhr.addEventListener('readystatechange', function () {
    if (xhr.readyState == 4) {
      if (xhr.status == 200) {
        success.call(xhr, xhr.responseText);
      } else {
        error.call(xhr);
      }
    }
  }, false);

  xhr.send(method == 'POST' ? postDataString : null);
  return xhr;
}

function loadTable() {
  ajax({
    method: 'GET',
    url: 'api.php',
    success: function (response) {
      const table = JSON.parse(response);
      $('table').innerHTML = genTable(table);
    }
  });
}

// eseménykezelők
function clickCell(e) {
  console.log(this);
  const y = this.cellIndex;
  const x = this.parentNode.rowIndex;

  // ajax kérés és válasz
  // módosítom a cellát
  ajax({
    method: 'POST',
    url: 'api.php',
    postData: {
      x: x,
      y: y
    }
  });

  // ajax lekérdezés
  loadTable();
}
delegate('table', 'td', 'click', clickCell);

// function loadPage() {
//   loadTable();
// }
// window.addEventListener('load', loadPage);
setInterval(loadTable, 1000);

// html generátorok
function genTable(table) {
    let html = ``;
    for (let row of table) {
        html += `<tr>`;
        for (let cell of row) {
            html += `
                <td style="background: ${cell ? 'black' : 'white'};">
                </td>
            `;
        }
        html += `</tr>`;
    }
    return html;
}