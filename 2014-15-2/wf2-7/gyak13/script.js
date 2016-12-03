function $(selector) {
    return document.getElementById(selector);
}

function clickEvent(event) {
}

function ajax(options) {
    var method = options.method || 'GET';
    var url = options.url || '';
    var getData = options.getData || '';
    var postData = options.postData || '';
    var success = options.success || function () {};
    var error = options.error || function () {};

    method = method.toUpperCase();
    url = url + '?' + getData;

    var xhr = new XMLHttpRequest();
    xhr.open(method, url, true);
    if (method == 'POST') {
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    }
    xhr.addEventListener('readystatechange', function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                success(xhr, xhr.responseText);
            } else {
                error();
            }
        }        
    }, false);
    xhr.send(method == 'POST' ? postData : null);
    return xhr;
}
function load(selector, options) {
    options.success = function (xhr, responseText) {
        $(selector).innerHTML = responseText;
    };
    ajax(options);
}

window.addEventListener('load', function () {
    $('send').addEventListener('click', function () {
        console.log('new item added' + $('newitem').value);
        ajax({
            method: 'POST',
            url: 'createitem.php',
            postData: 'newitem=' + $('newitem').value
        });
        load('items', {
            url: 'loaditems.php'
        });
    });
});






















