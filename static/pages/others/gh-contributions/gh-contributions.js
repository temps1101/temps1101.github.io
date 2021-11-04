$('#send').on('click', function () {
    var url = $('#url').val();

    $.ajax({
        url: url,
        type: 'GET',
        success: function (data) {
            console.log(data);
        }
    });
});