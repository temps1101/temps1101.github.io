const contents = ['<h2>広告</h2><p>githubでオセロが遊べるのはここだけ！</p><p>今すぐtempsのgithubプロフィールを見てみよう！</p><a href=\"https://github.com/temps1101\" class=\"text-lightpale\">見にいく！</a>', '<h2>広告</h2><p>temps1101のtwitter</p><p>世界一中途半端なツイッターアカウント！ものすごくつまらないですが、まぁまぁ更新頻度高いよ！</p><a href=\"https://twitter.com/t_emp_s110_1\" class=\"text-lightpale\">見にいく！</a>']

$('.advertisement').each(function (i, o) {
    $(o).append(contents[Math.floor(Math.random() * contents.length)])
})