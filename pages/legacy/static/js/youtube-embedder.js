function youtube_parser(url){
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = url.match(regExp);
    return (match&&match[7].length==11)? match[7] : false;
}

$('#send-link').click(function(){
    var url = $('#url-input').val();
    if (url === '') {
        alert('何か書き込んでからにしてちょ');
    } else if (!(url.match(/(http:|https:)?\/\/(www\.)?(youtube.com|youtu.be)\/(watch)?(\?v=)?(\S+)?/))) {
        alert('youtubeのリンクを貼ってください');
    } else {
        var id = youtube_parser(url);
        $('#embed-here').empty();
        $('#embed-here').append('<div class="video-container"><iframe width="560" height="315" src="https://www.youtube.com/embed/' + id + '?controls=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>');
    }
})