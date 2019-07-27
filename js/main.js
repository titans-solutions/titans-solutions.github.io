(function($) {
    "use strict";
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('#main-header').addClass('header-scrolled');
        } else {
            $('#main-header').removeClass('header-scrolled');
        }
    });

    if ($(window).scrollTop() > 110) {
        $('#main-header').addClass('header-scrolled');
    }

    $('#main-header a').on('click', function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            if (target.length) {
                var height = 0;

                if ($('#main-header').length) {
                    height = $('#main-header').outerHeight();
                }
                if (!$('#main-header').hasClass('header-scrolled')) {
                    height = height - 20;
                }

                $('html, body').animate({
                    scrollTop: target.offset().top - height
                }, 800, 'easeInOutQuint');

                return false;
            }
        }
    });

    $('window').scrollspy({ target: '#main-header' })
})(jQuery);