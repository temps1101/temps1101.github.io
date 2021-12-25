fetch('https://raw.githubusercontent.com/temps1101/temps1101/main/README.md').then(function(response) {
    response.text().then(function(text) {
        board = text.match('<!--board-->.+<!--board-->')
        alert(board)
        $('#chessborad').text()
    });
});