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