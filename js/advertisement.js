const contents = [
    '<h2>広告</h2><p>githubでオセロが遊べるのはここだけ！</p><p>今すぐtempsのgithubプロフィールを見てみよう！</p><a href=\"https://github.com/temps1101\" class=\"text-lightpale\">見にいく！</a>',
    '<h2>広告</h2><p>temps1101のtwitter</p><p>世界一中途半端なツイッターアカウント！ものすごくつまらないですが、まぁまぁ更新頻度高いよ！</p><a href=\"https://twitter.com/t_emp_s110_1\" class=\"text-lightpale\">見にいく！</a>',
    '<h2>広告</h2><p>記事一覧</p><p>GOD SITEの全てがここに集結しているぞおおいい！</p><a href=\"https://temps1101.github.io/pages/index.html\" class=\"text-lightpale\">見にいく！</a>',
    '<h2>広告</h2><p>日記一覧</p><p>tempsが毎日どんなことを考えているのか。それは全てここに集結している。早く見に来なさい。</p><a href=\"https://temps1101.github.io/pages/diary/index.html\" class=\"text-lightpale\">いくうう！</a>',
    '<h2>広告</h2><p>プログラミング一覧</p><p>AIとマイクラPL開発とPythonとJavaと。とにかくたくさんできるようになりたいです。プログラミングで有名になってwikipediaに載りたいね。</p><a href=\"https://temps1101.github.io/pages/diary/index.html\" class=\"text-lightpale\">プログラミング好きだからみる！</a>',
    '<h2>広告</h2><p>音楽一覧</p><p>tempsはにわかで音楽が好きなのである。持論を語らせてください！聞いてください！あと、クラリネットの演奏とかクラリネットのことも話すつもりだよ</p><a href=\"https://temps1101.github.io/pages/classic/index.html\" class=\"text-lightpale\">音楽っていう気分</a>',
    '<h2>広告</h2><p>サカナクション関連一覧</p><p>サカナクションを聴くことで僕は生きています。その愛をここで語ります。サカナクション好きは必見！！！</p><a href=\"https://temps1101.github.io/pages/sakanaction/index.html\" class=\"text-lightpale\">魚民だからみる。</a>',
    '<h2>広告</h2><p>マイクラ関連一覧</p><p>僕はマイクラを開発して楽しむ派。まだ開発レベルはクソだけどねんwwww</p><a href=\"https://temps1101.github.io/pages/minecraft/index.html\" class=\"text-lightpale\">Javaーん</a>',
    '<h2>広告</h2><p>その他諸々一覧</p><p>僕の多趣味さを見せびらされたい人カモンっ</p><a href=\"https://temps1101.github.io/pages/miscellaneous/index.html\" class=\"text-lightpale\">miscellaneous</a>',
    '<h2>広告</h2><p>discordID</p>話そ！話そ！話そ！<p>temps1101#6781だよ！</p>',
    '<h2>広告</h2><p>2021の記事たちを見る</p><p>レスポンシブ対応していないので、スマフォは除外されるよ。idをclassと同じ扱いをしているよ。ただごちゃごちゃ感が好み。</p><a href=\"https://temps1101.github.io/pages/legacy/index.html\" class=\"text-lightpale\">過去も気になる</a>',
    '<h2>広告</h2><p>ステノグラファー体験ができるサイトはここだけ！（だとおもふ）</p><a href=\"https://temps1101.github.io/pages/miscellaneous/steno-type/index.html\" class=\"text-lightpale\">ステノキャプショナーになる！</a>',
    '<h2>広告</h2><p>tempsの初プログラミング記だよ。gsaっていうAIのアルゴリズムを書き直したよ。めちゃ内容薄いよ。てへ</p><a href=\"https://temps1101.github.io/pages/code/gsa/index.html\" class=\"text-lightpale\">見に行く！</a>',
    '<h2>呟き</h2><p>ゴミクズみたいな内容の記事に本物の広告つけて儲けようとすな。きもいぞ。あと画面移行するときに表示される大きい広告。あれ、めちゃくちゃ閉じるボタン小さくて腹たつ。</p>',
]

$('.advertisement').each(function (i, o) {
    $(o).append(contents[Math.floor(Math.random() * contents.length)])
})