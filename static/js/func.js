function copyStringToClipboard () {
    var el = document.createElement('textarea');
    el.value = "temps1101#6781";
    el.setAttribute('readonly', '');
    el.style = {position: 'absolute', left: '-9999px'};
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy'); // what?? why depricated!!!?????
    document.body.removeChild(el);
    alert('IDクリップボードに書いたよ！alertで知らせちゃってごめんちゃいっ！')
}

$(window).on('load', function() {
    var $widget = $('iframe.twitter-timeline');
    var $widgetContents = $widget.contents();
    $widgetContents.find('head').append('<link rel="stylesheet" href="static/css/twitter.css">');
  });