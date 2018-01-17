//console.log('debug');

var tables = [];
for (var i = 1; i <= 12; ++i) {
    tables[i] = $('<table class="table table-striped"><caption>' +
                   i +
                  '</caption></table>');
}   

var months = {
    'Jan' : 1,
    'Feb' : 2,
    'Mar' : 3,
    'Apr' : 4,
    'May' : 5,
    'Jun' : 6,
    'Jul' : 7,
    'Aug' : 8,
    'Sep' : 9,
    'Oct' : 10,
    'Nov' : 11,
    'Dec' : 12,
}

$('table tbody tr').each(function () {
    for(var month in months) {
        //console.log($(this).html());
        if($(this).html().indexOf(month) > 0) {
            //console.log($(this).children('td')[1]);
            console.log(months[month]);
            tables[months[month]].append($(this));
        }
    }
});

tables.forEach(function(table) {
    $('body').append(table);
});

console.log(tables);