# my homepage

go https://temps1101.github.io

## 筆者用メモ

- 色

    - てかこの色たち以外は使いたくない

      | 名前        | HEX                                    | 使用場所                               |
          | ----------- | -------------------------------------- | -------------------------------------- |
      | primary     | **<font color=#00adb5>#00adb5</font>** | 押していないリンク、押していないボタン |
      | primarypale | **<font color=#00686f>#00686f</font>** | 押したリンク、押した/押しているボタン  |
      | dark        | **<font color=#2228>#222831</font>**   | 背景                                   |
      | darkpale    | **<font color=#393e46>#393e46</font>** | 線                                     |
      | light       | **<font color=#eeeeee>#eeeeee</font>** | 普通文字                               |
      | lightpale   | **<font color=#bdbdbd>#bdbdbd</font>** | 薄くしたい文字                         |

- コピペ用コードブロック

    - パネル

      ```html
      <div class="border rounded border-darkpale my-2 py-3 px-3 text-light">
        <h2 class="text-center">title</h2>
        <span>text</span>
      </div>
      ```
    - ページ
      
      ```html
      <!DOCTYPE html>
      <html lang="ja">
      <head>
          <meta charset="utf-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title></title><!--TODO タイトル追加-->
          <link rel="icon" type="image/x-icon" href="images/icon.ico"><!--TODO 相対パス変更-->
      
          <link rel="preconnect" href="https://fonts.googleapis.com">
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
          <link href="https://fonts.googleapis.com/css2?family=Kiwi+Maru:wght@500&display=swap" rel="stylesheet">
      
          <link rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
                integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
                crossorigin="anonymous">
          <link rel="stylesheet" href="css/theme.css"> <!--TODO 相対パス変更-->
      
          <link rel="stylesheet" href="css/dracula-highlighter.css"> <!--TODO 相対パス変更-->
      
          <link rel="stylesheet" href="css/style.css"> <!--TODO 相対パス変更-->
      
      </head>
      <body class="bg-dark">
      <a href="index.html" class="no-link-deco"> <!--TODO 相対パス変更-->
      <header class="text-light border-bottom border-darkpale py-2 text-center">
          <h3>temps1101's GOD SITE</h3>
      </header>
      </a>
      <div class="container pt-5">
          <div class="row">
              <div class="col-lg-2 col-sm-12 bg-darkpale rounded text-center p-2 h-50 advertisement text-lightpale"></div>
              <div class="col-lg-8 sm-12 text-light my-2">
                  <!--TODO 記事をここに-->
              </div>
              <div class="col-lg-2 col-sm-12 bg-darkpale rounded text-center p-2 h-50 advertisement text-lightpale"></div>
          </div>
      </div>
      <footer class="border-top border-darkpale my-5">
          <div class="container">
              <div class="row">
                  <h5 class="col-sm-12 text-light text-center my-4">©︎ 2021-2022 temps1101</h5>
                  <div class="col-sm-3 col-6 text-center my-2"><a href="mailto:tsuru.temps1101@gmail.com" class="no-link-deco text-lightpale">mail</a></div>
                  <div class="col-sm-3 col-6 text-lightpale text-center my-2"><a href="https://twitter.com/t_emp_s110_1" class="no-link-deco text-lightpale">twitter</a></div>
                  <div class="col-sm-3 col-6 text-lightpale text-center my-2"><a href="https://github.com/temps1101" class="no-link-deco text-lightpale">github</a></div>
                  <div class="col-sm-3 col-6 text-lightpale text-center my-2"><a href="javascript:copyDiscordIDtoClipboard()" class="no-link-deco text-lightpale">discord</a></div>
              </div>
          </div>
      </footer>
      <img src="images/up.webp" id="top-button" class="rounded shadow"> <!--TODO 相対パス変更-->
      </body>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
              integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
              crossorigin="anonymous"></script>
      <script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/highlight.min.js"></script>
      <script>hljs.initHighlightingOnLoad();</script>
      <script src="https://code.jquery.com/jquery-3.6.0.min.js"
              integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
              crossorigin="anonymous"></script>
      <script src="js/function-snippets.js"></script> <!--TODO 相対パス変更-->
      <script src="js/advertisement.js"></script> <!--TODO 相対パス変更-->
      <script src="js/scroll-to-top.js"></script> <!--TODO 相対パス変更-->
      </html>
      ```