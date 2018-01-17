//console.log('debug');

var table = '<table class="table table-striped table-hover">' +
        '<thead>' +
            '<tr>' +
                '<th>Beküldés ideje</th>' +
                '<th>Hiba helye</th>' +
                '<th>Hiba leirása</th>' +
                '<th>Műveletek</th>' +
            '</tr>'    +
        '</thead>' +
        '<tbody>' +
            
        '</tbody>' +
    '</table>';

$('table').each(function () {
    console.log('alma');
    var successTable = $(table);
    var warningTable = $(table);
    
    $(this).find('tr.text-success').each(function () {
        successTable.find('tbody').append($(this));
    });
    $(this).find('tr.text-warning').each(function () {
        warningTable.find('tbody').append($(this));
    });
    warningTable.appendTo('div.container');
    successTable.appendTo('div.container');
    $(this).hide();
});

$('#addbutton').on('click', function (event) {
    event.preventDefault();
    $('#messages').fadeOut(300, function () {
        $(this).html('');
        $.post('/add', {
        leiras: $('#leiras').val(),
        terem: $('#terem').val() 
    })
    .done(function (response) {
        for (var type in response) {
            console.log(response);
            response[type].forEach(function (error) {
                $('#messages')
                    .prepend($('<div class="alert alert-' + (type == 'error' ? 'danger' : type) + '">' + 
                    '<button type="button" class="close" data-dismiss="alert">×</button>' +
                    error + 
                    '</div>'));
            });
        }
        $('#messages').fadeIn(300);
    })
    .fail(function (errors) {
        var err = errors.responseJSON;
        for (var type in err) {
            console.log(err);
            err[type].forEach(function (error) {
                $('#messages')
                    .prepend($('<div class="alert alert-' + (type == 'error' ? 'danger' : type) + '">' + 
                    '<button type="button" class="close" data-dismiss="alert">×</button>' +
                    error + 
                    '</div>'));
            });
        }
        $('#messages').fadeIn(300);
    });
    }); 
    
});

$('.details').on('click', function (event) {
    event.preventDefault();
    console.log('debug');
    var href = $(this).attr('href');
    $.get('modal')
        .done(function (data) {
            var modal = $(data);
            modal.appendTo('#modals');
            console.log();
            $.get(href)
                .done(function (data) {
                    modal.find('.modal-body').html($(data));
                    modal.find('a[href="/list"]').click(function (event) {
                        event.preventDefault();
                        modal.modal('hide');
                        
                    });
                    modal.modal('show');
                });
        });
});