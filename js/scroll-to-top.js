$(function(){
    const topButton = $('#top-button');
    topButton.hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 400) {
            topButton.fadeIn();
        } else {
            topButton.fadeOut();
        }
    });
    topButton.click(function () {
        $('body, html').animate({ scrollTop: 0 }, 500);
        return false;
    });
});