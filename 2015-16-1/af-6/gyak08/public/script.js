function displayMessages(data) {
    $('#messages').html('');
    for (var type in data) {
        console.log(type);
        data[type].forEach(function (message) {
            $('<div class="alert alert-' + 
            (type == 'error' ? 'danger' : type) + 
            '">' + message + '</div>').appendTo($('#messages'));
        });
    }
}

$('tr td:last-child a').on('click', function (event) {
    event.preventDefault();
    var $this = $(this);
    $.get($(this).attr('href'))
    .done(function (data) {
        $this.parents('tr').fadeOut(350, function () {
            $(this).remove();
        });
        displayMessages(data);
        //alert(data);
    })
    .fail(function (error) {
        displayMessages(error.responseJSON);
    });
    
});

$('a[href="/add"]').on('click', function (event) {
    event.preventDefault();
    var $modal = $('#newModal').modal({show: false});
    $modal.find('.modal-body').load('/add', function () {
        $modal.find('button[type="submit"]').on('click', function (event) {
            event.preventDefault();
            $.post('/add', $modal.find('form').serializeArray())
            .done(function (data) {
                $('body > div.container').load('/list', function () {
                    $modal.modal('hide');
                    displayMessages(data);
                });
            })
            .fail(function (error) {
                $modal.modal('hide');
                displayMessages(error.responseJSON);
            });
        });
        $modal.find('button[type="reset"]').on('click', function (event) {
            event.preventDefault();
            $modal.modal('hide');
        });
        $modal.modal('show');
    });
});