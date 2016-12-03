function $(selector) {
    var result = document.querySelectorAll(selector);
    if (result.length == 1) {
        return result.item(0);
    } else {
        return result;
    }
}

function clickEvent(event) {
    if (event.target.className == 'day') {
        if (event.target.hasAttribute('title')) {
            alert('Selected event: ' + event.target.getAttribute('title'));
        } else {
            $('#event_date').value = event.target.getAttribute('data-date');    
        }
    }
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
    $('#calendar').addEventListener('click', clickEvent);
    $('#send').addEventListener('click', function () {
        if ($('#event_date').value != '') {
            ajax({
                method: 'POST',
                url: 'createevent.php',
                postData: 'event_name=' + $('#event_name').value +
                          '&' +
                          'event_date=' + $('#event_date').value,
                success: function (xhr, text)  { console.log('Event created successfully' + text) },
                error: function () { console.log('Error creating event') }     
            });
            load('#calendar', {
                url: 'drawcalendar.php'   
            });
        }
    });
});






















