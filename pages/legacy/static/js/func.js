function copyStringToClipboard() {
    var el = document.createElement('textarea');
    el.value = "temps1101#6781";
    el.setAttribute('readonly', '');
    el.style = { position: 'absolute', left: '-9999px' };
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy'); // what?? why depricated!!!?????
    document.body.removeChild(el);
    alert('IDクリップボードに書いたよ！alertで知らせちゃってごめんちゃいっ！')
}

$(window).on('load', function () {
    var $widget = $('iframe.twitter-timeline');
    var $widgetContents = $widget.contents();
    $widgetContents.find('head').append('<link rel="stylesheet" href="static/css/twitter.css">');
    $widgetContents.find('head').append('<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Kiwi+Maru:wght@500&display=swap" rel="stylesheet">');
});