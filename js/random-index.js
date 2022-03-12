let contents = [
    {
        'img': 'images/nikki-icon.webp',
        'title': '日記一覧',
        'summary': '小学生だった時は毎日書いてた日記をたまに書きますよん',
        'link': 'pages/diary/index.html'
    },
    {
        'img': 'images/steno.webp',
        'title': 'ステノタイプ',
        'summary': 'ステノキャプショナーってググってみ。そんで一番上の動画みてみ。これやりたくなると思うよ。',
        'link': 'pages/miscellaneous/steno-type/index.html'
    },
    {
        'img': 'images/yokubou-box.webp',
        'title': '受験終了直後の所存記',
        'summary': '心配してもらうためじゃなく、数年後こういうこともあったなーって思うための記事。今は読まなくてもよろしいが、リニューアル直後でコンテンツが少なすぎて書いた。',
        'link': 'pages/miscellaneous/finish-exam/index.html'
    },
    {
        'img': 'images/magma-bukkit.webp',
        'title': 'その他一覧',
        'summary': '現在（2022/3/6で一番記事の量が多いよ）',
        'link': 'pages/miscellaneous/index.html'
    },
    {
        'img': 'images/gsa.webp',
        'title': 'gsa書き直したよ。',
        'summary': 'gsaのコードを書いたよ。っていうかMITライセンスのコードが汚かったから綺麗にしたつもり。',
        'link': 'pages/code/gsa/index.html'
    },
    {
        'img': 'images/et.JPG',
        'title': 'ET!!!',
        'summary': '思い立ったらからやってみた',
        'link': 'https://ja.wikipedia.org/wiki/E.T.'
    },
    {
        'img': 'http://www2.city.fuji.shizuoka.jp/cgi-bin/fujisan-still-1280.cgi',
        'title': '今の富士山',
        'summary': '読み込むのにちょい時間かかるから待っててね。パクってきただけです。すみません。DDoSじゃないですよね。多分。',
        'link': 'http://www2.city.fuji.shizuoka.jp/livecamera/fujiyama_still.htm'
    }
]

for (let i = 0; i < 20; i++) {
    if (contents.length !== 0) {
        let content_index = Math.floor(Math.random() * contents.length);
        let content = contents[content_index];
        delete contents[content_index];
        $('.showpannel').prepend(`<div class="col-lg-4 col-sm-12"> <a href="${content['link']}" class="no-link-deco"> <div class="border rounded border-darkpale my-2 py-3 px-3 text-light"> <img src="${content['img']}" class="rounded mx-auto d-block preview-image-lg"> <h2 class="text-center my-1">${content['title']}</h2> <span>${content['summary']}</span> </div></a> </div>`);
    }
}