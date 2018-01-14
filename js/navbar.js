var onScroll = function (e) {
    var scrollPos = $(document).scrollTop();
    $('li.nav-item').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.children('a').attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('li.nav-item').removeClass("active");
            currLink.addClass("active");
        } else {
            currLink.removeClass("active");
        }
    });
};

$(document).ready(function () {
    $(document).on("scroll", onScroll);

    //smoothscroll
    $('li.nav-item a').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");

        $('li.nav-item').removeClass("active");
        $(this).parent('li').addClass('active');

        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top + 2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});
