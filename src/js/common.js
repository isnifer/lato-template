(function ($) {

    if ($('.slider__list').length) {
        $.getScript('assets/js/plugins/slidesjs/jquery.slides.min.js', function () {

            $('.slider__list').slidesjs({
                width: 820,
                height: 500,
                pagination: {
                    active: false
                }
            });

        });
    }

}(jQuery));