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
        'img': 'images/steno.webp',
        'title': 'ステノタイプ',
        'summary': 'ステノキャプショナーってググってみ。そんで一番上の動画みてみ。これやりたくなると思うよ。',
        'link': 'pages/miscellaneous/steno-type/index.html'
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