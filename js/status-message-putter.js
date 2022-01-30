status_messages = [
    'やっとホームページリニューアルできた！',
    'にわかにホームページ制作こだわります',
    'node.jsとやらを使ってみたい',
    'HHKBしかかたん',
    '最近クラリネット老けてないなぁ',
    '本当はここに僕の最新ツイート表示したかったけどサーバーサイドいじれないから無理',
    '現実逃避しかしてないです',
    '高校受かりたい気持ちだけあります'
]

$('.status-message').append(status_messages[Math.floor(Math.random() * status_messages.length)])