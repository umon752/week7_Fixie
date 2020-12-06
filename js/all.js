$(document).ready(function () {

    // 螢幕寬度>=1200px時執行
    if ($(window).width() >= 992) {

        $(window).scroll(function () {
            var scrollPos = $(window).scrollTop();
            var windowHeight = $(window).height();

            $('.stripped').each(function () {
                var thisPos = $(this).offset().top;
                if ((windowHeight + scrollPos) >= thisPos) {
                    $('.onegear__img').addClass('bg-position-left');
                    $('.onegear__item__title').addClass('translate-left');
                }
            });

            $('.stripped').each(function () {
                var thisPos = $(this).offset().top;
                if ((windowHeight + scrollPos) >= (thisPos + 500)) {
                    $('.stripped__img').addClass('bg-position-right');
                }
            });
            $('.stripped__item__title').css('transform', 'translateX( ' + -(scrollPos / 15) + 'px )');
            $('.stripped__item__title--second').css('transform', 'translateX( ' + (scrollPos / 15) + 'px )');
        });
    }
});