
$('#confirm').click(function(){
    var url = $('#input').val();
    $.ajax({
        type: 'GET',
        url: url,
        success: function(data) {
          $('#content').append(data.responseText);
        },
        error: function(xhr, status, err) {
          alert('HTML読み出しで問題がありました:' + url);
        }
      });
})