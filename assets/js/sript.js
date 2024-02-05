$(document).ready(function () {
    $(".faq-title").click(function (e) {
        e.preventDefault();
        $(this).find(".arrow").toggleClass("rotate");

    });
    $('.smooth-scrol').on('click', function (e) {
        e.preventDefault();
        var target = this.hash;
        var $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing', function () {
            // window.location.hash = target;
        });
    });
})