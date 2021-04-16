$(window).on('load', function () {
    let progress = 0;
    let timer = setInterval(loadProgress, 10);

    // Loading 進度動畫
    function loadProgress() {
        if (progress == 100) {

            // Loading 消失
            $('.js-loading').addClass('loading--fadeOut');

            // 停止 SetInterval
            clearInterval(timer);

            // 載入 AOS 
            AOS.init({
                duration: 300,
                once: true
            });

        } else {
            progress++;
            $('.js-loading-text').text(progress + '%');
        }
    };
});



$(document).ready(function () {
    // 螢幕寬度 >= 1200px 時執行
    if ($(window).width() >= 992) {

        $(window).scroll(function () {
            let scrollPos = $(window).scrollTop();
            let windowHeight = $(window).height();

            $('.js-stripped').each(function () {
                let thisPos = $(this).offset().top;
                if ((windowHeight + scrollPos) >= thisPos) {

                    $('.js-onegear-img').addClass('bg-position-left');
                    $('.js-onegear-item-title').addClass('translate-left');

                }
            });

            $('.js-stripped').each(function () {
                let thisPos = $(this).offset().top;
                if ((windowHeight + scrollPos) >= (thisPos + 500)) {

                    $('.js-stripped-img').addClass('bg-position-right');

                }
            });

            $('.js-stripped-item-title').css('transform', 'translateX( ' + -(scrollPos / 15) + 'px )');
            $('.js-stripped-item-title-second').css('transform', 'translateX( ' + (scrollPos / 15) + 'px )');
        });

    }
});