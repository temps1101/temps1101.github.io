function copyDiscordIDtoClipboard() {
    const clipboardText = "temps1101#6781";
    if(navigator.clipboard === undefined) {
        window.clipboardData.setData("Text", "temps1101#6781");
    } else {
        navigator.clipboard.writeText("temps1101#6781");
    }
    alert('IDクリップボードに書いたよ！alertで知らせちゃってごめんちゃいっ！');
}
